import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_DPUJ33nA.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/admin/[...params]","pattern":"^\\/admin(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"inline","content":".content[data-astro-cid-zetdm5md]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;min-height:50vh}.text[data-astro-cid-zetdm5md]{margin-top:2em;font-size:1.2em}\n"},{"type":"external","src":"/_astro/contact.CAf-BS-L.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"external","src":"/_astro/contact.CAf-BS-L.css"},{"type":"inline","content":".contact[data-astro-cid-uw5kdbxl]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;margin-bottom:15em;gap:3em 0}.image[data-astro-cid-uw5kdbxl]{width:30%;margin:0 auto}.image[data-astro-cid-uw5kdbxl] img[data-astro-cid-uw5kdbxl]{width:100%;height:auto}.content[data-astro-cid-uw5kdbxl]{width:60%}.contactlink[data-astro-cid-uw5kdbxl]{display:block;font-size:2em;margin-top:1em}@media (max-width: 800px){.image[data-astro-cid-uw5kdbxl]{order:2;max-width:400px}.image[data-astro-cid-uw5kdbxl],.content[data-astro-cid-uw5kdbxl]{width:100%}}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"external","src":"/_astro/contact.CAf-BS-L.css"},{"type":"inline","content":".performances[data-astro-cid-bxqsgjmz]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;margin-bottom:15em;gap:3em 0}.image[data-astro-cid-bxqsgjmz]{width:40%}.image[data-astro-cid-bxqsgjmz] img[data-astro-cid-bxqsgjmz]{width:100%;height:auto}.content[data-astro-cid-bxqsgjmz]{width:50%}.eventtitle[data-astro-cid-bxqsgjmz]{font-size:1.2em}.eventdetails[data-astro-cid-bxqsgjmz]{margin-bottom:1.5em}@media (max-width: 800px){.image[data-astro-cid-bxqsgjmz]{order:2}.image[data-astro-cid-bxqsgjmz],.content[data-astro-cid-bxqsgjmz]{width:100%}}\n"}],"routeData":{"route":"/performances","isIndex":false,"type":"page","pattern":"^\\/performances\\/?$","segments":[[{"content":"performances","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/performances.astro","pathname":"/performances","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"external","src":"/_astro/contact.CAf-BS-L.css"},{"type":"inline","content":".sacred[data-astro-cid-cqm3peew]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;margin-bottom:15em;gap:3em 0}.images[data-astro-cid-cqm3peew]{width:30%}.image[data-astro-cid-cqm3peew]{margin-bottom:4em}.image[data-astro-cid-cqm3peew] img[data-astro-cid-cqm3peew]{width:100%;height:auto}.imagecaption[data-astro-cid-cqm3peew]{font-size:.8em}.content[data-astro-cid-cqm3peew]{width:60%}.intro[data-astro-cid-cqm3peew]{font-size:1.2em;margin-bottom:1.5em}.details[data-astro-cid-cqm3peew]{margin-top:7em}.detailstitle[data-astro-cid-cqm3peew]{text-align:center;margin-bottom:1em}.detailitem[data-astro-cid-cqm3peew]{margin-bottom:1.5em;display:flex;justify-content:flex-start;align-items:flex-start}.detaillabel[data-astro-cid-cqm3peew]{display:inline-block;font-weight:700;min-width:12em}@media (max-width: 800px){.images[data-astro-cid-cqm3peew]{order:2}.images[data-astro-cid-cqm3peew],.content[data-astro-cid-cqm3peew]{width:100%}.detailstitle[data-astro-cid-cqm3peew]{text-align:left}.detailitem[data-astro-cid-cqm3peew]{flex-wrap:wrap}.detaillabel[data-astro-cid-cqm3peew]{width:100%;display:block}}\n"}],"routeData":{"route":"/sacredchoir","isIndex":false,"type":"page","pattern":"^\\/sacredchoir\\/?$","segments":[[{"content":"sacredchoir","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sacredchoir.astro","pathname":"/sacredchoir","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"external","src":"/_astro/contact.CAf-BS-L.css"},{"type":"inline","content":".intro[data-astro-cid-x2wsp3hm]{text-align:center;margin-bottom:2em}.pricing[data-astro-cid-x2wsp3hm]{text-align:center;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:3em 15%}.pricingdiv[data-astro-cid-x2wsp3hm]{width:50%}.procedures[data-astro-cid-x2wsp3hm]{margin:5em auto 15em;max-width:900px}\n"}],"routeData":{"route":"/studio","isIndex":false,"type":"page","pattern":"^\\/studio\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/studio.astro","pathname":"/studio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.YoiunqTC.js"}],"styles":[{"type":"external","src":"/_astro/contact.CAf-BS-L.css"},{"type":"external","src":"/_astro/video.CNsWywWm.css"}],"routeData":{"route":"/video","isIndex":false,"type":"page","pattern":"^\\/video\\/?$","segments":[[{"content":"video","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/video.astro","pathname":"/video","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"external","src":"/_astro/contact.CAf-BS-L.css"},{"type":"inline","content":".firstsection[data-astro-cid-j7pv25f6]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:3em 0}.firstimg[data-astro-cid-j7pv25f6]{width:100%}.firstimage[data-astro-cid-j7pv25f6]{width:40%}.firstcontent[data-astro-cid-j7pv25f6]{width:50%}.firsttitle[data-astro-cid-j7pv25f6]{line-height:1.2em}.firsttext[data-astro-cid-j7pv25f6]{margin:1em 0 2em}.aboutsection[data-astro-cid-j7pv25f6]{margin:10em 0 15em}.abouttitle[data-astro-cid-j7pv25f6]{text-align:center;margin-bottom:1em}.aboutcontent[data-astro-cid-j7pv25f6]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start}.col1[data-astro-cid-j7pv25f6]{width:40%}.col2[data-astro-cid-j7pv25f6]{width:50%}.studiobutton[data-astro-cid-j7pv25f6]{display:flex;justify-content:center;align-items:center;margin-top:4em}@media (max-width: 800px){.firstimage[data-astro-cid-j7pv25f6],.firstcontent[data-astro-cid-j7pv25f6],.col1[data-astro-cid-j7pv25f6],.col2[data-astro-cid-j7pv25f6]{width:100%}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://privatepianoschool.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/performances.astro",{"propagation":"none","containsHead":true}],["C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/sacredchoir.astro",{"propagation":"none","containsHead":true}],["C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/studio.astro",{"propagation":"none","containsHead":true}],["C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/video.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/admin/_---params_.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/performances@_@astro":"pages/performances.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/sacredchoir@_@astro":"pages/sacredchoir.astro.mjs","\u0000@astro-page:src/pages/studio@_@astro":"pages/studio.astro.mjs","\u0000@astro-page:src/pages/video@_@astro":"pages/video.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CgadyesZ.mjs","C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.C6TA8kgd.js","C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.BD0dr-kS.js","C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.BimYWbK1.js","C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.Cc0UWGKE.js","C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.CpMrQtas.js","C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.ClWtLzIf.js","@astrojs/react/client.js":"_astro/client.DAVXiJi4.js","C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.m_lTcADX.js","/astro/hoisted.js?q=0":"_astro/hoisted.YoiunqTC.js","/astro/hoisted.js?q=1":"_astro/hoisted.fDDyMQpn.js","C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.Cc8M67et.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/bkgdphoto._3cHeU4o.jpg","/_astro/contact.CAf-BS-L.css","/_astro/video.CNsWywWm.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/site.webmanifest","/_astro/browser.7KqZ-Os9.js","/_astro/client.CF8elnFF.js","/_astro/client.DAVXiJi4.js","/_astro/hoisted.fDDyMQpn.js","/_astro/hoisted.YoiunqTC.js","/_astro/index.CpMrQtas.js","/_astro/index2.ClWtLzIf.js","/_astro/index3.m_lTcADX.js","/_astro/resources.C6TA8kgd.js","/_astro/resources2.BD0dr-kS.js","/_astro/resources3.Cc0UWGKE.js","/_astro/stegaEncodeSourceMap.BimYWbK1.js","/_astro/studio-component.BM4EhQIv.js","/_astro/studio-component.Cc8M67et.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"oUjqUSqjVGJ2sPZIofsDsfHxC7deDTjI9d2ayk2anDw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
