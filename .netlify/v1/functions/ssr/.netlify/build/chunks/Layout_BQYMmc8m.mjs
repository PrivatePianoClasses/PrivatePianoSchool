import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, u as unescapeHTML, s as spreadAttributes, e as renderComponent, m as maybeRenderHead, F as Fragment, g as defineStyleVars, d as renderHead, f as renderSlot } from './astro/server_DPUJ33nA.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
import imageUrlBuilder from '@sanity/image-url';
import { s as sanityClient } from './page-ssr_BzKwvkQE.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
import groq from 'groq';

const $$Astro$f = createAstro("https://privatepianoschool.netlify.app");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/astro/components/ViewTransitions.astro", void 0);

const scrollSmooth = "html,\nbody {\n  scroll-behavior: smooth;\n}\n";

const fontSmoothing = "body {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n";

const borderBox = "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n";

const removeAllMargins = "* {\n  margin: 0;\n}\n";

const fontSystem = "body {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n";

const scrollBarKeep = "body {\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n";

const breakWords = "p, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n";

const consistentFont = "input, button, textarea, select {\n  font: inherit;\n}\n";

const unstyleNavList = "nav ul {\n  padding: 0;\n  list-style-type: none;\n}\n";

const accessibleLineHeight = "body {\n  line-height: 1.5;\n}\n";

const $$Astro$e = createAstro("https://privatepianoschool.netlify.app");
const $$Resets = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Resets;
  const props = { ...Astro2.props };
  const rawStylesCSS = [
    props.removeAllMargins === false ? null : removeAllMargins,
    props.fontSmoothing === false ? null : fontSmoothing,
    props.fontSystem === false ? null : fontSystem,
    props.scrollSmooth === false ? null : scrollSmooth,
    props.borderBox === false ? null : borderBox,
    // props.svg === false ? null : svg,
    props.scrollBarKeep === false ? null : scrollBarKeep,
    props.breakWords === false ? null : breakWords,
    props.consistentFont === false ? null : consistentFont,
    props.unstyleNavList === false ? null : unstyleNavList,
    props.accessibleLineHeight === false ? null : accessibleLineHeight
  ].join("\n");
  return renderTemplate`<!-- Resets --><style>${unescapeHTML(rawStylesCSS)}</style>`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/@julian_cataldo/astro-resets/Resets.astro", void 0);

const $$Astro$d = createAstro("https://privatepianoschool.netlify.app");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$c = createAstro("https://privatepianoschool.netlify.app");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$b = createAstro("https://privatepianoschool.netlify.app");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$a = createAstro("https://privatepianoschool.netlify.app");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$9 = createAstro("https://privatepianoschool.netlify.app");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$8 = createAstro("https://privatepianoschool.netlify.app");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$7 = createAstro("https://privatepianoschool.netlify.app");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$6 = createAstro("https://privatepianoschool.netlify.app");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/astro-seo/src/SEO.astro", void 0);

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const icons = {"local":{"prefix":"local","lastModified":1772765047,"icons":{"PPSlogo":{"body":"<path fill=\"currentColor\" d=\"M517.16 377.99c0-22.42-7.21-43.54-21.64-63.36s-36.9-35.91-67.41-48.26-70.16-18.53-118.94-18.53q-45.765 0-90.6 9.18c-29.89 6.12-57.08 15.1-81.57 26.93s-44.11 26.46-58.85 43.9-22.11 37.36-22.11 59.78c0 16.61 4.77 31.45 14.32 44.52 9.54 13.08 21.48 24.13 35.81 33.16 14.32 9.03 28.64 15.83 42.97 20.39 2.9-6.02 5.03-14.01 6.38-23.97s2.02-18.47 2.02-25.53c-14.32-5.4-26.42-11.99-36.27-19.77-9.86-7.78-14.79-19.97-14.79-36.58 0-13.9 6.12-26.57 18.37-37.98s27.87-21.22 46.86-29.42 39.08-14.53 60.25-18.99 40.58-6.69 58.22-6.69c33.42 0 61.03 4.83 82.82 14.48s38.09 22.11 48.88 37.36c10.79 15.26 16.19 31.4 16.19 48.41 0 18.48-5.97 36.27-17.9 53.4-11.94 17.12-29.79 31.19-53.55 42.19-23.77 11-53.29 16.5-88.58 16.5h-7.78c2.9-11.62 6.02-25.37 9.34-41.25s6.59-32.12 9.81-48.73c3.22-16.6 6.02-31.81 8.41-45.61 2.38-13.8 4.1-24.44 5.14-31.91l-27.4.62c-2.91 0-7.68.52-14.32 1.56-6.65 1.04-12.92 2.8-18.84 5.29s-9.39 6.12-10.43 10.9l-34.25 179.34c-1.87 10.17-4.47 24.03-7.78 41.57-3.32 17.54-7.53 36.38-12.61 56.51-5.09 20.14-11.36 39.18-18.84 57.13-7.47 17.96-16.24 32.69-26.31 44.21q-15.105 17.28-35.34 17.28c-14.32 0-23.97-4.67-28.96-14.01q-7.47-14.01-7.47-32.07c0-4.77.1-10.17.31-16.19.2-6.02.31-12.04.31-18.06-9.96 0-19.62 1.04-28.96 3.11-9.34 2.08-17.02 5.87-23.04 11.36Q0 688.41 0 703.98c0 16.19 4.41 29.68 13.23 40.48 8.83 10.79 20.19 18.84 34.09 24.13s28.54 7.94 43.9 7.94 31.91-3.53 49.04-10.59c17.12-7.06 33.73-19.46 49.82-37.21 16.08-17.75 30.61-42.5 43.59-74.26 12.97-31.76 23.09-72.23 30.36-121.43 15.36 2.49 29.99 3.74 43.9 3.74 32.17 0 61.13-4.62 86.87-13.86 25.74-9.23 47.69-21.53 65.85-36.89s32.12-32.43 41.88-51.22c9.75-18.78 14.63-37.72 14.63-56.82m250.01 17.43c9.54 0 18.37-2.59 26.46-7.78 8.1-5.19 14.63-11.62 19.62-19.3q7.47-11.52 7.47-22.11c0-6.43-2.7-12.09-8.1-16.97-5.4-4.87-14.22-7.32-26.46-7.32-8.51 0-16.03 2.65-22.57 7.94s-11.63 11.73-15.26 19.3c-3.63 7.58-5.45 14.9-5.45 21.95 0 6.44 1.87 12.09 5.6 16.97 3.74 4.88 9.96 7.32 18.68 7.32Zm962.08 221.37a1152 1152 0 0 1-37.67 36.58c-12.87 11.94-25.33 21.85-37.36 29.73-12.04 7.89-22.94 11.83-32.69 11.83-13.5 0-24.08-3.42-31.76-10.27s-13.03-15.72-16.03-26.62c-3.01-10.9-4.51-22.57-4.51-35.03 0-17.85 4.46-36.12 13.39-54.8 7.89 12.04 17.07 20.66 27.55 25.84 10.48 5.19 20.08 7.78 28.8 7.78 15.77 0 30.72-3.99 44.83-11.99 14.11-7.99 25.69-18.68 34.72-32.07s13.54-28.07 13.54-44.06c0-20.75-7.16-35.08-21.48-42.97s-31.66-11.83-52-11.83c-22.63 0-43.28 5.14-61.96 15.41s-34.82 24.08-48.41 41.41c-13.6 17.33-24.08 36.79-31.45 58.38a207.4 207.4 0 0 0-7.98 30.93c-9.52 8.74-18.65 16.96-27.36 24.65-16.61 14.63-30.51 26.11-41.72 34.41s-18.79 12.45-22.73 12.45c-7.27 0-11.63-2.85-13.08-8.56s-2.18-12.4-2.18-20.08c0-4.98 1.25-13.59 3.74-25.84s5.6-25.89 9.34-40.94 7.47-29.63 11.21-43.75c3.74-14.11 6.85-25.79 9.34-35.03 2.49-9.23 3.84-13.86 4.05-13.86 10.17 0 22.11-.26 35.81-.78s26.1-1.81 37.21-3.89c11.1-2.07 17.8-5.29 20.08-9.65l6.85-11.21-94.96 4.36c3.11-11.21 7.11-24.18 11.99-38.92 4.87-14.74 9.75-29.06 14.63-42.97 4.87-13.9 8.98-25.53 12.3-34.87s4.98-14.42 4.98-15.26l-1.25-1.25c-21.17 0-38.09 6.02-50.75 18.06s-23.04 28.13-31.14 48.26c-8.1 20.14-15.88 42.45-23.35 66.94l-26.15 2.49c-5.81.62-9.18 1.61-10.12 2.96-.93 1.35-1.4 3.17-1.4 5.45 0 7.68 3.22 11.83 9.65 12.45s12.87.93 19.3.93c-4.78 20.55-8.62 36.64-11.52 48.26-2.91 11.63-5.29 21.02-7.16 28.18s-3.58 14.27-5.14 21.33c-.64 2.89-1.34 6.17-2.1 9.79-7 7.47-13.83 14.59-20.47 21.34-12.45 12.66-23.51 22.84-33.16 30.51-9.65 7.68-17.28 11.52-22.88 11.52-6.23 0-9.34-6.64-9.34-19.93q0-7.785 3.27-26.31c2.18-12.35 4.87-26.31 8.1-41.88 3.22-15.57 6.48-30.93 9.81-46.08 3.32-15.15 6.23-28.18 8.72-39.08s3.94-17.59 4.36-20.08c-8.93-2.9-17.54-5.34-25.84-7.32-8.3-1.97-17.12-2.96-26.46-2.96-27.61 0-53.82 5.56-78.62 16.66q-37.215 16.665-65.85 44.52c-19.1 18.58-34.09 39.18-44.99 61.8-5.33 11.06-9.34 22.18-12.07 33.34-6.36 6.33-12.15 12.09-17.35 17.26-13.29 13.18-23.25 20.39-29.89 21.64l-6.23-17.12c1.25-3.11 3.74-10.28 7.47-21.48 3.74-11.21 7.68-24.33 11.83-39.39 4.15-15.05 7.78-30.36 10.9-45.92 3.11-15.57 4.67-29.27 4.67-41.1 0-9.13-1.2-16.45-3.58-21.95q-3.585-8.25-12.3-8.25-14.01 0-23.82 15.72c-6.54 10.48-11.83 23.77-15.88 39.85q-6.075 24.135-9.03 50.28c-1.98 17.44-2.96 33.21-2.96 47.33 0 6.02.2 9.03.62 9.03-2.08 3.32-5.09 8.41-9.03 15.26-3.95 6.85-8.25 13.91-12.92 21.17-4.67 7.27-9.14 13.5-13.39 18.68-4.26 5.19-7.94 7.78-11.05 7.78-4.98 0-9.92-5.19-14.79-15.57-4.88-10.38-8.87-24.13-11.99-41.25-3.11-17.12-4.67-35.75-4.67-55.89 0-11.62.57-24.08 1.71-37.36s2.44-25.74 3.89-37.36 2.8-20.75 4.05-27.4h-24.91c.2 0-2.08.11-6.85.31-4.78.21-10.33.73-16.66 1.56s-12.04 2.33-17.12 4.51c-5.09 2.18-7.84 5.14-8.25 8.87-2.08 13.91-3.27 27.09-3.58 39.54s-.47 21.59-.47 27.4c0 18.01.8 35.42 2.35 52.27-1.26 1.32-2.56 2.67-3.91 4.08-9.96 10.38-20.55 21.02-31.76 31.91-11.21 10.9-21.23 20.19-30.05 27.87-8.83 7.68-14.48 11.52-16.97 11.52-4.57 0-7.53-2.7-8.87-8.09-1.35-5.4-2.02-9.54-2.02-12.45q0-9.345 4.05-28.02c2.69-12.45 6.12-26.41 10.27-41.88 4.15-15.46 8.51-31.03 13.08-46.7 4.56-15.67 8.82-29.94 12.77-42.81 3.94-12.87 6.95-22.83 9.03-29.89-11.42 0-21.48.42-30.2 1.25s-16.24 3.48-22.57 7.94c-6.33 4.47-11.68 12.3-16.03 23.51-1.87 4.57-4.51 12.82-7.94 24.75-3.42 11.94-7.16 25.74-11.21 41.41-2.29 8.89-4.52 17.81-6.68 26.76-3.46 3.44-7.4 7.34-11.85 11.7a1460 1460 0 0 1-33.63 31.91c-11.83 10.9-22.47 20.19-31.91 27.87-9.45 7.68-15.62 11.52-18.53 11.52-2.7 0-4.47-1.04-5.29-3.11-.83-2.07-1.25-4.25-1.25-6.54 0-7.89 2.85-19.46 8.56-34.72s12.66-31.7 20.86-49.35c8.2-17.64 16.08-34.3 23.66-49.97 7.57-15.67 13.23-27.97 16.97-36.9.41-.83.62-2.07.62-3.74 0-2.9-3.01-4.36-9.03-4.36-5.19 0-11.52.73-18.99 2.18s-13.6 2.18-18.37 2.18c-10.17 0-19.57-.93-28.18-2.8-8.62-1.87-15.62-5.19-21.02-9.96 5.4-2.9 9.91-8.2 13.54-15.88s5.45-14.53 5.45-20.55q0-16.5-14.01-16.5c-19.1 0-33.94 5.71-44.52 17.12-10.59 11.42-15.88 23.97-15.88 37.67 0 3.32 3.32 8.93 9.96 16.81 6.64 7.89 20.55 14.43 41.72 19.62l-63.2 71.3v36.12c9.96-11.21 18.26-20.29 24.91-27.24 6.64-6.95 12.77-13.18 18.37-18.68s11.68-11.57 18.21-18.21q9.81-9.96 23.82-25.53c-2.49 6.02-6.8 15.99-12.92 29.89-6.12 13.91-12.56 29.06-19.3 45.46-6.75 16.4-12.51 31.6-17.28 45.61-4.78 14.01-7.16 24.34-7.16 30.98 0 9.55 2.13 18.73 6.38 27.55s11.26 13.23 21.02 13.23c7.89 0 17.85-3.11 29.89-9.34s25.06-14.63 39.07-25.22 28.02-22.47 42.03-35.65c5.65-5.32 11.12-10.7 16.42-16.14-1.1 5.47-2.12 10.75-3.03 15.83-2.39 13.18-3.58 23.09-3.58 29.73 0 9.55 2.07 18.73 6.23 27.55 4.15 8.82 11.21 13.23 21.17 13.23 19.09-1.04 39.64-11.1 61.65-30.2 18.86-16.37 42.56-38.42 71.04-66.09.24 1.58.47 3.18.73 4.75 4.46 27.2 11.1 49.25 19.93 66.16 8.82 16.92 19.77 25.37 32.85 25.37 18.26 0 33-2.91 44.21-8.72s20.86-14.27 28.96-25.37 16.6-24.65 25.53-40.63c2.9 6.44 6.54 12.82 10.9 19.15s8.61 9.5 12.77 9.5c6.64 0 14.48-3.32 23.51-9.96 6.97-5.12 14.31-11.35 22.02-18.64.29 9.51 1.51 19.56 3.66 30.16 2.49 12.25 7.21 22.73 14.17 31.45 6.95 8.72 16.97 13.08 30.05 13.08 14.74 0 29.06-3.58 42.97-10.74 13.9-7.16 26.78-16.24 38.61-27.24q17.745-16.5 30.51-33c-.62 4.15-1.2 8.87-1.71 14.17-.52 5.29-.78 10.64-.78 16.04 0 10.38 1.61 19.77 4.83 28.18s9.5 12.61 18.84 12.61c6.23 0 14.48-2.96 24.75-8.87 10.27-5.92 21.38-13.54 33.31-22.88s23.82-19.3 35.65-29.89c9.51-8.51 18.24-16.64 26.21-24.42-.02.1-.04.19-.05.29-2.08 11.11-3.11 22.47-3.11 34.09q0 20.865 7.47 36.27c4.98 10.27 14.84 15.41 29.58 15.41 12.45 0 25.79-3.63 40.01-10.9 14.21-7.26 28.64-16.71 43.28-28.33 14.63-11.62 28.8-24.13 42.5-37.52 2.57-2.51 5.09-5 7.57-7.46.91 24.42 8.34 44.4 22.32 59.93 14.95 16.6 34.97 24.91 60.09 24.91 30.51 0 60.04-10.22 88.58-30.67 28.54-20.44 57.13-47.48 85.78-81.11v-34.25c-9.96 9.34-21.07 20.24-33.31 32.69Zm-125.32-95.11c5.92-9.03 13.54-17.07 22.88-24.13 9.34-7.05 20.13-10.59 32.38-10.59 9.13 0 16.29 2.08 21.48 6.23s7.78 12.14 7.78 23.97c0 14.53-4.36 27.82-13.08 39.85-8.72 12.04-19.2 18.06-31.45 18.06-9.14 0-18.32-2.7-27.55-8.1-9.24-5.4-17.49-12.87-24.75-22.42 2.28-6.23 6.38-13.86 12.3-22.88ZM1201.2 635.79c-5.6 6.02-12.45 12.45-20.55 19.3s-16.24 12.66-24.44 17.44-15.52 7.16-21.95 7.16c-11.42 0-19.36-4.77-23.82-14.32-4.47-9.54-6.69-20.34-6.69-32.38 0-16.39 3.63-33.36 10.9-50.91 7.26-17.54 17.12-33.83 29.58-48.88 12.45-15.05 26.67-27.24 42.66-36.58q23.97-14.01 50.13-14.01l-35.81 153.19Zm1109.97-200.98c9.75-18.78 14.63-37.72 14.63-56.82 0-22.42-7.21-43.54-21.64-63.36s-36.89-35.91-67.41-48.26c-30.51-12.35-70.16-18.53-118.94-18.53q-45.765 0-90.6 9.18c-29.89 6.12-57.08 15.1-81.57 26.93s-44.11 26.46-58.85 43.9-22.11 37.36-22.11 59.78c0 16.61 4.77 31.45 14.32 44.52 9.54 13.08 21.48 24.13 35.81 33.16s28.64 15.83 42.97 20.39c2.9-6.02 5.03-14.01 6.38-23.97s2.02-18.47 2.02-25.53c-14.32-5.4-26.42-11.99-36.27-19.77-9.86-7.78-14.79-19.97-14.79-36.58 0-13.9 6.12-26.57 18.37-37.98s27.87-21.22 46.86-29.42 39.07-14.53 60.25-18.99c21.17-4.46 40.58-6.69 58.22-6.69 33.42 0 61.03 4.83 82.82 14.48s38.09 22.11 48.88 37.36c10.79 15.26 16.19 31.4 16.19 48.41 0 18.48-5.97 36.27-17.9 53.4-11.94 17.12-29.79 31.19-53.55 42.19-23.77 11-53.29 16.5-88.58 16.5h-7.78c2.9-11.62 6.02-25.37 9.34-41.25s6.59-32.12 9.81-48.73c3.22-16.6 6.02-31.81 8.41-45.61 2.38-13.8 4.1-24.44 5.14-31.91l-27.4.62c-2.91 0-7.68.52-14.32 1.56-6.65 1.04-12.92 2.8-18.84 5.29s-9.39 6.12-10.43 10.9l-34.25 179.34c-1.87 10.17-4.47 24.03-7.78 41.57-3.32 17.54-7.53 36.38-12.61 56.51-5.09 20.14-11.36 39.18-18.84 57.13-7.47 17.96-16.24 32.69-26.31 44.21q-15.105 17.28-35.34 17.28c-14.32 0-23.97-4.67-28.96-14.01q-7.47-14.01-7.47-32.07c0-4.77.1-10.17.31-16.19.2-6.02.31-12.04.31-18.06-9.96 0-19.62 1.04-28.96 3.11-9.34 2.08-17.02 5.87-23.04 11.36q-9.03 8.25-9.03 23.82c0 16.19 4.41 29.68 13.23 40.48 8.82 10.79 20.19 18.84 34.09 24.13s28.54 7.94 43.9 7.94 31.91-3.53 49.04-10.59c17.12-7.06 33.73-19.46 49.82-37.21 16.08-17.75 30.61-42.5 43.59-74.26 12.97-31.76 23.09-72.23 30.36-121.43 15.36 2.49 29.99 3.74 43.9 3.74 32.17 0 61.13-4.62 86.87-13.86 25.74-9.23 47.69-21.53 65.85-36.89s32.12-32.43 41.88-51.22m65.69-39.39c9.54 0 18.37-2.59 26.46-7.78 8.1-5.19 14.63-11.62 19.62-19.3q7.47-11.52 7.47-22.11c0-6.43-2.7-12.09-8.09-16.97-5.4-4.87-14.22-7.32-26.47-7.32-8.51 0-16.03 2.65-22.57 7.94s-11.63 11.73-15.26 19.3c-3.63 7.58-5.45 14.9-5.45 21.95 0 6.44 1.87 12.09 5.6 16.97 3.74 4.88 9.96 7.32 18.68 7.32Zm848.75 220.6c-12.25 10.69-24.49 16.03-36.74 16.03h-2.18c9.75-9.13 17.38-19.93 22.88-32.38s8.25-24.7 8.25-36.74c0-14.94-4.05-27.81-12.14-38.61-8.09-10.79-21.48-16.19-40.16-16.19-21.17 0-36.48 5.4-45.92 16.19-9.45 10.79-14.17 23.87-14.17 39.23 0 13.91 3.94 28.08 11.83 42.5 7.89 14.43 19.41 26.31 34.56 35.65-10.17 13.29-20.55 22.94-31.13 28.96q-15.885 9.03-30.51 9.03c-15.15 0-28.6-6.12-40.32-18.37-11.73-12.25-17.59-30.61-17.59-55.11s4.67-46.49 14.01-67.25c9.34-20.75 23.71-37.52 43.12-50.28 19.41-12.77 44.16-19.15 74.26-19.15 3.53-2.28 5.55-4.31 6.07-6.07q.78-2.64.78-7.32c-.42-2.69-2.7-4.05-6.85-4.05-39.03 0-73.32 6.75-102.9 20.24-29.58 13.5-52.57 32.9-68.96 58.22-13.82 21.35-21.8 46.33-23.97 74.9-5.04 4.83-10.28 9.84-15.73 15.08-7.78 7.47-14.9 14.17-21.33 20.08-6.44 5.92-11 9.81-13.7 11.68-4.57 2.91-8.2 4.36-10.9 4.36-2.49 0-3.74-1.87-3.74-5.6s1.45-10.43 4.36-20.08c2.9-9.65 6.59-20.86 11.05-33.63s8.87-25.74 13.23-38.92 7.99-25.37 10.9-36.58c2.9-11.21 4.36-20.03 4.36-26.46 0-24.29-10.17-36.43-30.51-36.43-14.12 0-28.44 4.15-42.97 12.45s-28.44 18.89-41.72 31.76c-13.29 12.87-25.17 26.36-35.65 40.48s-18.84 26.99-25.06 38.61c2.7-8.72 5.96-19.35 9.81-31.91 3.84-12.56 7.58-25.06 11.21-37.52 3.63-12.45 7.83-26.98 12.61-43.59h-20.86c-10.79 0-20.24 1.4-28.33 4.2s-14.22 9.71-18.37 20.71c-3.53 8.93-7.58 20.91-12.14 35.96-4.57 15.05-9.14 31.5-13.7 49.35-2.75 10.75-5.4 21.53-7.96 32.32-2.88 2.99-5.73 5.92-8.54 8.78-12.45 12.66-23.51 22.84-33.16 30.51-9.65 7.68-17.28 11.52-22.88 11.52-6.23 0-9.34-6.64-9.34-19.93q0-7.785 3.27-26.31c2.18-12.35 4.87-26.31 8.1-41.88 3.22-15.57 6.48-30.93 9.81-46.08 3.32-15.15 6.23-28.18 8.72-39.08s3.94-17.59 4.36-20.08c-8.93-2.9-17.54-5.34-25.84-7.32-8.3-1.97-17.12-2.96-26.46-2.96-27.61 0-53.82 5.56-78.62 16.66q-37.215 16.665-65.85 44.52c-19.1 18.58-34.09 39.18-44.99 61.8-5.72 11.88-9.93 23.82-12.64 35.81-7.07 7.2-14.42 14.51-22.07 21.94-11.21 10.9-21.23 20.19-30.05 27.87-8.83 7.68-14.48 11.52-16.97 11.52-4.57 0-7.53-2.7-8.87-8.09-1.35-5.4-2.02-9.54-2.02-12.45q0-9.345 4.05-28.02c2.7-12.45 6.12-26.41 10.27-41.88 4.15-15.46 8.51-31.03 13.08-46.7 4.56-15.67 8.82-29.94 12.77-42.81 3.94-12.87 6.95-22.83 9.03-29.89-11.42 0-21.48.42-30.2 1.25s-16.24 3.48-22.57 7.94c-6.33 4.47-11.68 12.3-16.03 23.51-1.87 4.57-4.51 12.82-7.94 24.75-3.42 11.94-7.16 25.74-11.21 41.41s-7.89 31.45-11.52 47.33-6.65 30.41-9.03 43.59c-2.39 13.18-3.58 23.09-3.58 29.73 0 9.55 2.07 18.73 6.23 27.55 4.15 8.82 11.21 13.23 21.17 13.23 19.09-1.04 39.64-11.1 61.65-30.2 14.05-12.2 30.78-27.54 50.17-46 .2 9.96 1.42 20.51 3.7 31.68 2.49 12.25 7.21 22.73 14.17 31.45 6.95 8.72 16.97 13.08 30.05 13.08 14.74 0 29.06-3.58 42.97-10.74 13.9-7.16 26.78-16.24 38.61-27.24q17.745-16.5 30.51-33c-.62 4.15-1.2 8.87-1.71 14.17-.52 5.29-.78 10.64-.78 16.04 0 10.38 1.61 19.77 4.83 28.18s9.5 12.61 18.84 12.61c6.23 0 14.48-2.96 24.75-8.87 10.28-5.92 21.38-13.54 33.31-22.88s23.82-19.3 35.65-29.89c4.54-4.06 8.89-8.03 13.08-11.92-1.87 9.47-3.48 18.54-4.83 27.18-2.38 15.36-3.68 27.82-3.89 37.36h59.47c2.28-9.54 6.17-22.57 11.68-39.08 5.5-16.5 12.25-34.19 20.24-53.08s16.81-36.84 26.47-53.86c9.65-17.02 19.66-30.93 30.05-41.72 10.38-10.79 20.65-16.19 30.82-16.19 3.11 0 5.92 1.51 8.41 4.51 2.49 3.01 3.74 7.21 3.74 12.61 0 7.68-2.34 17.85-7.01 30.51S2858 591 2851.77 606.56c-6.23 15.57-11.68 31.87-16.35 48.88-4.67 17.02-7 33.83-7 50.44 0 4.57 1.45 9.65 4.36 15.26 2.9 5.6 9.75 8.41 20.55 8.41 4.98 0 12.09-2.96 21.33-8.87 9.23-5.92 19.41-13.44 30.51-22.57s22.26-18.84 33.47-29.11c10.99-10.07 20.97-19.44 29.96-28.11 1.44 10.4 4.06 20.76 7.87 31.07 6.12 16.61 16.04 30.36 29.73 41.25 13.7 10.9 31.86 16.35 54.49 16.35 43.59 0 81.37-25.22 113.33-75.66 6.85.83 11.93 1.25 15.26 1.25 10.17 0 22.57-3.22 37.21-9.65q21.945-9.645 40.32-34.56v-34.25q-22.725 23.355-41.1 39.39Zm-656.96 19.77c-5.6 6.02-12.46 12.45-20.55 19.3s-16.24 12.66-24.44 17.44-15.52 7.16-21.95 7.16c-11.42 0-19.36-4.77-23.82-14.32-4.47-9.54-6.69-20.34-6.69-32.38 0-16.39 3.63-33.36 10.9-50.91 7.26-17.54 17.12-33.83 29.58-48.88s26.67-27.24 42.66-36.58q23.97-14.01 50.13-14.01l-35.8 153.19Zm600.91-14.95c-9.14-6.02-16.77-14.11-22.88-24.29-6.12-10.17-9.19-19.62-9.19-28.33s1.97-15.67 5.92-21.48c3.94-5.81 10.38-8.72 19.3-8.72 9.75 0 16.45 2.8 20.08 8.41 3.63 5.6 5.45 12.35 5.45 20.24 0 8.93-2.08 19.05-6.23 30.36-4.15 11.32-8.3 19.25-12.45 23.82Zm1669.78-31.76c15.57-14.32 29.42-28.07 41.57-41.25q18.21-19.77 38.76-47.01c13.7-18.16 26.62-38.24 38.76-60.25 12.14-22 22.11-45.46 29.89-70.37s11.67-50.54 11.67-76.9c0-14.32-3.84-26.2-11.52-35.65-7.68-9.44-18.37-14.17-32.07-14.17-15.36 0-30.62 6.33-45.77 18.99s-29.73 29.89-43.74 51.68-26.99 46.65-38.92 74.57c-11.94 27.92-22.37 57.34-31.29 88.27-8.93 30.93-15.88 61.7-20.86 92.32-1.22 7.48-2.28 14.85-3.2 22.12-9.44 9.27-18.23 17.47-26.38 24.58-12.25 10.69-24.5 16.03-36.74 16.03h-2.18c9.75-9.13 17.38-19.93 22.88-32.38s8.25-24.7 8.25-36.74c0-14.94-4.05-27.81-12.14-38.61-8.09-10.79-21.48-16.19-40.16-16.19-21.17 0-36.48 5.4-45.92 16.19-9.45 10.79-14.17 23.87-14.17 39.23 0 13.91 3.94 28.08 11.83 42.5 7.89 14.43 19.41 26.31 34.56 35.65-10.17 13.29-20.55 22.94-31.13 28.96q-15.885 9.03-30.51 9.03c-15.15 0-28.6-6.12-40.32-18.37-11.73-12.25-17.59-30.61-17.59-55.11s4.67-46.49 14.01-67.25c9.34-20.75 23.71-37.52 43.12-50.28 19.41-12.77 44.16-19.15 74.26-19.15 3.53-2.28 5.55-4.31 6.07-6.07q.78-2.64.78-7.32c-.42-2.69-2.7-4.05-6.85-4.05-39.03 0-73.32 6.75-102.9 20.24-29.58 13.5-52.57 32.9-68.96 58.22-13.76 21.24-21.72 46.08-23.94 74.47-4.21 3.91-8.27 7.58-12.18 10.99-12.25 10.69-24.49 16.03-36.74 16.03h-2.18c9.75-9.13 17.38-19.93 22.88-32.38s8.25-24.7 8.25-36.74c0-14.94-4.05-27.81-12.14-38.61-8.1-10.79-21.48-16.19-40.16-16.19-21.17 0-36.48 5.4-45.92 16.19-9.45 10.79-14.17 23.87-14.17 39.23 0 13.91 3.94 28.08 11.83 42.5 7.88 14.43 19.41 26.31 34.56 35.65-10.17 13.29-20.55 22.94-31.14 28.96q-15.885 9.03-30.51 9.03c-15.15 0-28.6-6.12-40.32-18.37-11.73-12.25-17.59-30.61-17.59-55.11s4.67-46.49 14.01-67.25c9.34-20.75 23.71-37.52 43.12-50.28 19.41-12.77 44.16-19.15 74.26-19.15 3.53-2.28 5.55-4.31 6.07-6.07q.78-2.64.78-7.32c-.42-2.69-2.7-4.05-6.85-4.05-39.03 0-73.32 6.75-102.9 20.24-29.58 13.5-52.57 32.9-68.96 58.22-13.79 21.3-21.76 46.21-23.95 74.7-8.61 8.41-16.82 16.57-24.62 24.47-7.89 7.99-14.58 14.59-20.08 19.77-5.5 5.19-9.08 7.78-10.74 7.78-2.91 0-4.88-3.11-5.92-9.34 0-10.59 2.02-23.04 6.07-37.36s8.72-28.96 14.01-43.9 9.96-28.75 14.01-41.41 6.07-22.62 6.07-29.89c0-24.29-10.17-36.43-30.51-36.43-16.4 0-33 4.78-49.82 14.32-16.81 9.55-32.49 22.16-47.01 37.83-14.53 15.67-26.67 32.54-36.43 50.59l81.57-295.16c-1.46-.62-3.53-.98-6.23-1.09-2.7-.1-5.29-.16-7.78-.16-11 0-19.98.57-26.93 1.71-6.96 1.14-12.82 4.16-17.59 9.03-4.78 4.88-9.24 12.77-13.39 23.66-4.15 10.9-8.93 26.21-14.32 45.92-6.65 24.29-12.66 46.6-18.06 66.94s-11.42 42.92-18.06 67.72c-6.65 24.81-13.34 50.03-20.08 75.66q-3.825 14.55-7.44 28.5c-24.08 27.9-49.26 50.17-75.54 66.77-26.78 16.92-50.86 25.38-72.23 25.38-14.32 0-24.6-5.96-30.82-17.9-6.23-11.93-9.34-26.41-9.34-43.43 0-13.7 1.71-27.91 5.14-42.66 3.42-14.74 8.25-28.38 14.48-40.94s13.44-22.78 21.64-30.67 16.97-11.83 26.31-11.83c7.05 0 12.56 1.97 16.5 5.92s7.21 8.56 9.81 13.85c2.59 5.29 5.19 9.92 7.78 13.86 2.59 3.95 6.07 5.92 10.43 5.92 11.83 0 21.64-3.01 29.42-9.03s11.68-13.49 11.68-22.42c0-11.41-3.63-19.82-10.9-25.22q-10.905-8.085-25.53-10.59-14.64-2.49-25.53-2.49c-23.25 0-44.58 6.02-63.98 18.06-19.41 12.04-36.27 27.66-50.6 46.86-14.32 19.2-25.37 39.8-33.16 61.8-7.78 22-11.68 42.97-11.68 62.89 0 22.63 5.71 41.78 17.12 57.45s29.68 23.51 54.8 23.51c15.57 0 32.02-3.22 49.35-9.65s34.45-14.99 51.37-25.69c16.92-10.69 32.74-22.67 47.48-35.96 8.48-7.64 16.18-15.36 23.15-23.14-5 20.09-9.24 37.51-12.72 52.25-3.84 16.3-6.18 27.35-7.01 33.16h48.57c7.26-6.02 13.18-15.51 17.75-28.49 4.56-12.97 9.44-29.63 14.63-49.97 3.74-14.32 9.23-28.85 16.5-43.59 7.26-14.74 15.57-28.28 24.91-40.63s19.1-22.31 29.27-29.89q15.255-11.37 29.58-11.37c11.83 0 17.75 5.92 17.75 17.75 0 12.87-1.66 27.24-4.98 43.12s-7.21 31.6-11.68 47.17-8.51 29.48-12.14 41.72c-3.63 12.25-5.76 21.17-6.38 26.78-.21 1.87-.47 4-.78 6.38-.31 2.39-.47 4.51-.47 6.38q0 9.03 4.05 16.35c2.7 4.87 7.99 7.32 15.88 7.32q10.89 0 28.02-12.45c11.41-8.3 23.4-18.63 35.96-30.98a927 927 0 0 0 35.96-37.36c1.55-1.71 3.07-3.38 4.55-5.01 1.5 9.44 3.98 18.84 7.44 28.21q9.18 24.915 29.73 41.25c13.7 10.9 31.86 16.35 54.49 16.35 43.59 0 81.37-25.22 113.33-75.66 6.85.83 11.93 1.25 15.26 1.25 10.17 0 22.57-3.22 37.21-9.65 4.03-1.77 7.97-3.94 11.82-6.49 1.38 11.03 4.07 22.02 8.11 32.95 6.12 16.61 16.04 30.36 29.73 41.25 13.7 10.9 31.86 16.35 54.49 16.35 43.59 0 81.37-25.22 113.33-75.66 6.85.83 11.93 1.25 15.26 1.25 10.17 0 22.57-3.22 37.21-9.65 7.66-3.37 14.99-8.15 22-14.3-.45 8.45-.67 16.75-.67 24.89 0 10.17.36 20.97 1.09 32.38.72 11.42 3.06 21.12 7 29.11s10.59 11.99 19.93 11.99c22.21 0 46.34-10.07 72.39-30.2s58.07-52.72 96.05-97.76v-34.87c-8.93 9.96-19.57 21.54-31.91 34.72a2156 2156 0 0 1-37.21 38.76c-12.45 12.66-23.46 23.15-33 31.45q-14.325 12.45-18.99 12.45c-5.4 0-8.56-3.06-9.5-9.18-.93-6.12-1.4-10.43-1.4-12.92 0-8.1.57-17.9 1.71-29.42s2.75-26 4.83-43.43Zm43.9-194.28c11.21-37.15 22.36-65.7 33.47-85.62 11.1-19.93 22.67-29.89 34.71-29.89 6.02 0 9.75 3.17 11.21 9.5 1.45 6.33 2.18 12.09 2.18 17.28 0 9.14-2.6 22.52-7.78 40.16-5.19 17.65-12.77 37.31-22.73 59s-22.21 43.33-36.74 64.92-31.24 40.89-50.13 57.91c12.66-51.68 24.6-96.1 35.8-133.26Zm-462.98 226.04c-9.14-6.02-16.76-14.11-22.88-24.29-6.12-10.17-9.18-19.62-9.18-28.33s1.97-15.67 5.92-21.48c3.94-5.81 10.38-8.72 19.3-8.72 9.75 0 16.45 2.8 20.08 8.41 3.63 5.6 5.45 12.35 5.45 20.24 0 8.93-2.08 19.05-6.23 30.36-4.16 11.32-8.3 19.25-12.45 23.82Zm269.95 0c-9.14-6.02-16.76-14.11-22.88-24.29-6.12-10.17-9.18-19.62-9.18-28.33s1.97-15.67 5.92-21.48c3.94-5.81 10.38-8.72 19.3-8.72 9.75 0 16.45 2.8 20.08 8.41 3.63 5.6 5.45 12.35 5.45 20.24 0 8.93-2.08 19.05-6.23 30.36-4.15 11.32-8.3 19.25-12.45 23.82Z\"/><g fill=\"currentColor\"><path d=\"M3648.79 220.16c-18.77 19.97-39.24 35.77-61.02 47.13l-35.81 19.51c-55.5 34.18-96.1 62.54-120.72 84.28-44.83 39.52-73.2 82.7-84.38 128.32-12.57 51.46-6.43 103.49 18.25 154.68 26.12 54.52 65.25 88.48 116.32 100.95 11.7 2.87 24.69 5.03 35.6 6.22l2.38-37.05c-7.64-.63-15.63-1.93-23.88-3.96-33.55-8.2-61.39-27.56-82.81-57.52-22.41-31.15-29.41-62.36-21.34-95.37 15.29-62.54 67.38-117.94 154.87-164.77l39.14-21.28c34.74-20.48 64.91-48.6 89.73-83.67 24.58-34.82 42.31-74.07 52.73-116.65 6.14-25.02 8.16-57.07 6.13-95.22-2.88-51.83-15.08-79.67-37.41-85.14-7.94-1.91-17.44.58-29.84 8.15-30.24 18.95-54.23 44.14-71.34 74.73-13.16 23.37-24.86 55.66-34.74 95.97-4.12 16.78-7.4 48.53-8.71 87.33l37.01-23.86c.65-4.27 1.55-8.68 2.69-13.26 6.26-25.68 17.79-52.72 34.17-80.36 20.76-34.52 36.16-43.35 45.46-44.66 2.54-.36 4.94-.23 7.41.36 11.32 2.78 21.88 9.64 14.59 39.58-6.18 25.39-21.16 50.79-44.5 75.54Z\"/><path d=\"M3583.31 756.32c22.23-5.6 42.31-16.56 59.82-32.66 22.34-20.39 37.48-46.48 45.07-77.53 9.39-38.1 6.29-74.69-9.07-108.76-16.86-37.33-44.8-61-83.07-70.38-4.38-1.07-9.1-1.88-14.03-2.38l2.62-63.3-39.29 19.45-2.4 44.8c-22.34 4.94-42.86 15.33-61.15 30.96-21.1 18.25-34.9 39.99-40.94 64.66-6.25 25.63-4.65 50.4 4.78 73.47 4.86 12.28 12.52 23.79 21.86 33.74 15.33 16.24 35.85 18.84 40.33 12.28 4.52-6.56-5.6-19.88-12.44-36.49-3.91-9.41-4.78-20.03-2.68-31.98 4.47-25.37 23.63-44.48 47.13-50.28l-7.63 162.62-1.74 37.74c.02 18.08.02 36.07-.08 53.84-.52 23.97-2.82 44.42-6.86 60.78-5.55 22.66-16.01 40.14-31.12 51.97-9.61 7.52-20 11.51-31.16 12.77 16.76-11.74 29.05-29.85 32.89-51.6 7.66-43.43-21.35-84.88-64.79-92.54-12.06-2.13-23.86-1.2-34.92 1.85-1.39.33-2.76.95-4.16 1.4-3.07 1.03-6.15 2.07-9.09 3.45-1.01.51-2.01 1.14-3.02 1.71-20 10.63-35.2 29.46-40.42 53.06 0 .04-.05.07-.06.1v.06c-.25 1.11-.71 2.07-.9 3.17-.16.93-.07 1.81-.19 2.71-4.53 25.47 2.19 49.26 20.3 70.77 17.13 20.32 39.54 33.97 66.62 40.59 15.39 3.75 30.73 4.61 45.57 2.53 12.13-1.72 24.23-5.44 35.88-11.06 28.22-13.65 46.01-34.85 52.93-63.11 5.28-21.55 8.73-47.55 10.21-77.61l1.48-68.09 7.81-194.81c27.75 10.57 45.04 39.62 39.69 69.93-3.8 21.53-16.75 54.28-32.89 69.77l-.9 52.4Z\"/></g>","width":5000,"height":980}}}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$5 = createAstro("https://privatepianoschool.netlify.app");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$4 = createAstro("https://privatepianoschool.netlify.app");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navigation;
  const path = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-pux6a34n> <ul class="navlist" data-astro-cid-pux6a34n> <li${addAttribute(path == "/" ? "active navitem" : "navitem", "class")} data-astro-cid-pux6a34n><a href="/" class="navlink" data-astro-cid-pux6a34n>Home</a></li> <li${addAttribute(path == "/studio" ? "active navitem" : "navitem", "class")} data-astro-cid-pux6a34n><a href="/studio" class="navlink" data-astro-cid-pux6a34n>Studio Procedures & Pricing</a></li> <li${addAttribute(path == "/performances" ? "active navitem" : "navitem", "class")} data-astro-cid-pux6a34n><a href="/performances" class="navlink" data-astro-cid-pux6a34n>Upcoming Performances</a></li> <li${addAttribute(path == "/video" ? "active navitem" : "navitem", "class")} data-astro-cid-pux6a34n><a href="/video" class="navlink" data-astro-cid-pux6a34n>Video Gallery</a></li> <li${addAttribute(path == "/sacredchoir" ? "active navitem" : "navitem", "class")} data-astro-cid-pux6a34n><a href="/sacredchoir" class="navlink" data-astro-cid-pux6a34n>Sacred Choir</a></li> <li${addAttribute(path == "/contact" ? "active navitem" : "navitem", "class")} data-astro-cid-pux6a34n><a href="/contact" class="navlink" data-astro-cid-pux6a34n>Contact</a></li> </ul> </nav> `;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/components/Navigation.astro", void 0);

const $$Astro$3 = createAstro("https://privatepianoschool.netlify.app");
const $$MobileNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MobileNav;
  const path = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<label class="hamburger-menu" data-astro-cid-37bvxqo4> <input type="checkbox" data-astro-cid-37bvxqo4> </label> <aside class="sidebar" data-astro-cid-37bvxqo4> <nav data-astro-cid-37bvxqo4> <ul class="navlist" data-astro-cid-37bvxqo4> <li${addAttribute(path == "/" ? "active navitem" : "navitem", "class")} data-astro-cid-37bvxqo4><a href="/" class="navlink" data-astro-cid-37bvxqo4>Home</a></li> <li${addAttribute(path == "/studio" ? "active navitem" : "navitem", "class")} data-astro-cid-37bvxqo4><a href="/studio" class="navlink" data-astro-cid-37bvxqo4>Studio Procedures & Pricing</a></li> <li${addAttribute(path == "/performances" ? "active navitem" : "navitem", "class")} data-astro-cid-37bvxqo4><a href="/performances" class="navlink" data-astro-cid-37bvxqo4>Upcoming Performances</a></li> <li${addAttribute(path == "/video" ? "active navitem" : "navitem", "class")} data-astro-cid-37bvxqo4><a href="/video" class="navlink" data-astro-cid-37bvxqo4>Video Gallery</a></li> <li${addAttribute(path == "/sacredchoir" ? "active navitem" : "navitem", "class")} data-astro-cid-37bvxqo4><a href="/sacredchoir" class="navlink" data-astro-cid-37bvxqo4>Sacred Choir</a></li> <li${addAttribute(path == "/contact" ? "active navitem" : "navitem", "class")} data-astro-cid-37bvxqo4><a href="/contact" class="navlink" data-astro-cid-37bvxqo4>Contact</a></li> </ul> </nav> </aside>  <style>
    .titlelogo svg {
        max-height: 150px;
    }
</style>`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/components/MobileNav.astro", void 0);

const defaultImg = new Proxy({"src":"/_astro/bkgdphoto._3cHeU4o.jpg","width":6016,"height":3791,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/assets/bkgdphoto.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://privatepianoschool.netlify.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { title, headerimg, HIcenter } = Astro2.props;
  const path = Astro2.url.pathname;
  const bkgdImg = headerimg ? headerimg : defaultImg.src;
  const $$definedVars = defineStyleVars([{ image: `url("${bkgdImg}")`, center: HIcenter ? "center " + HIcenter : "center" }]);
  return renderTemplate`${maybeRenderHead()}<header class="overlay" data-astro-cid-3ef6ksr2${addAttribute($$definedVars, "style")}> <div id="mobilenav" data-astro-cid-3ef6ksr2${addAttribute($$definedVars, "style")}>${renderComponent($$result, "MobileNav", $$MobileNav, { "data-astro-cid-3ef6ksr2": true })}</div> <div class="header-container" data-astro-cid-3ef6ksr2${addAttribute($$definedVars, "style")}> <div class="titlelogo" data-astro-cid-3ef6ksr2${addAttribute($$definedVars, "style")}>${renderComponent($$result, "Icon", $$Icon, { "name": "PPSlogo", "data-astro-cid-3ef6ksr2": true })}</div> <div id="regularnav" data-astro-cid-3ef6ksr2${addAttribute($$definedVars, "style")}>${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-3ef6ksr2": true })}</div> ${path == "/" ? renderTemplate`<h1 class="hometitle pagetitle" data-astro-cid-3ef6ksr2${addAttribute($$definedVars, "style")}>Miss Deborah Cobb is a <b data-astro-cid-3ef6ksr2${addAttribute($$definedVars, "style")}><i data-astro-cid-3ef6ksr2${addAttribute($$definedVars, "style")}>Peabody trained pianist</i></b> offering private piano lessons for all ages and all levels of study</h1>` : renderTemplate`<h1 class="pagetitle" data-astro-cid-3ef6ksr2${addAttribute($$definedVars, "style")}>${title}</h1>`} </div> </header>  <style>
  .titlelogo svg {
    width: 100%;
    height: auto;
    fill: var(--white);
  }
</style>`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="contactbar" data-astro-cid-sz7xmlte> <div class="phone" data-astro-cid-sz7xmlte> <p class="contactbar-title" data-astro-cid-sz7xmlte>Contact by Phone</p> <p class="contactbar-info" data-astro-cid-sz7xmlte>410-812-1991</p> </div> <div class="email" data-astro-cid-sz7xmlte> <p class="contactbar-title" data-astro-cid-sz7xmlte>Contact by Email</p> <p class="contactbar-info" data-astro-cid-sz7xmlte>deolivera777@gmail.com</p> </div> </div> <div class="bottom" data-astro-cid-sz7xmlte> <span class="copyright footertext" data-astro-cid-sz7xmlte>&copy; ${year} Deborah Cobb, All Rights Reserved</span> <span class="separator footertext" data-astro-cid-sz7xmlte> | </span> <span class="author footertext" data-astro-cid-sz7xmlte>
Made with
<svg data-sanity-icon="heart-filled" width="1em" height="1em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte> <path d="M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z" fill="currentColor" stroke="currentColor" stroke-width="1.2" data-astro-cid-sz7xmlte></path> </svg> by <a href="https://theramoshe.com" data-astro-cid-sz7xmlte>theRamoShe</a> </span> </div> </footer> `;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://privatepianoschool.netlify.app");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, link, classname } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(classname ? classname + " btn" : "btn", "class")} data-astro-cid-vnzlvqnm>${text}</a> `;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/components/Button.astro", void 0);

async function getHome() {
  return await sanityClient.fetch(
    groq`*[_type == "home"][0]`
  );
}
async function getStudio() {
  return await sanityClient.fetch(
    groq`*[_type == "studio"][0]`
  );
}
async function getPerformances() {
  return await sanityClient.fetch(
    groq`*[_type == "performances"][0]`
  );
}
async function getVideos() {
  return await sanityClient.fetch(
    groq`*[_type == "videogallery"][0] {..., pianoperfs[]->, choirperfs[]->, archiveperfs[]->}`
  );
}
async function getSacred() {
  return await sanityClient.fetch(
    groq`*[_type == "sacredchoir"][0]`
  );
}
async function getContact() {
  return await sanityClient.fetch(
    groq`*[_type == "contact"][0]`
  );
}
async function getSEO() {
  return await sanityClient.fetch(
    groq`*[_type == "seo"][0]`
  );
}

const $$CTA = createComponent(async ($$result, $$props, $$slots) => {
  const content = await getHome();
  const bkgdImg = urlFor(content.ctaImage).url();
  const $$definedVars = defineStyleVars([{ image: `url("${bkgdImg}")` }]);
  return renderTemplate`${maybeRenderHead()}<section class="ctasection overlay" data-astro-cid-4xty6sx2${addAttribute($$definedVars, "style")}> <div class="ctacontainer" data-astro-cid-4xty6sx2${addAttribute($$definedVars, "style")}> <h2 class="ctatitle" data-astro-cid-4xty6sx2${addAttribute($$definedVars, "style")}>${content.ctatitle}</h2> <div class="ctabuttons" data-astro-cid-4xty6sx2${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Button", $$Button, { "text": "Video Gallery", "link": "/video", "data-astro-cid-4xty6sx2": true })} ${renderComponent($$result, "Button", $$Button, { "text": "Upcoming Performances", "link": "/performances", "data-astro-cid-4xty6sx2": true })} ${renderComponent($$result, "Button", $$Button, { "text": "Sacred Choir", "link": "/sacredchoir", "data-astro-cid-4xty6sx2": true })} </div> </div> </section> `;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/components/CTA.astro", void 0);

const $$Astro = createAstro("https://privatepianoschool.netlify.app");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, headerimg, HIcenter } = Astro2.props;
  const content = await getSEO();
  const ogimageurl = urlFor(content.ogimage).url();
  const path = Astro2.url.pathname;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="sitemap" href="/sitemap-index.xml"><!-- Favicon --><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><!-- Google fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">${renderComponent($$result, "SEO", $$SEO, { "title": `Private Piano School | ${title}`, "description": content.description, "openGraph": {
    basic: {
      title: `${content.title}`,
      type: "website",
      image: `${ogimageurl}`
    }
  }, "data-astro-cid-sckkx6r4": true })}${renderComponent($$result, "Resets", $$Resets, { "removeAllMargins": true, "fontSmoothing": true, "fontSystem": false, "scrollSmooth": true, "borderBox": true, "scrollBarKeep": true, "data-astro-cid-sckkx6r4": true })}<title>Private Piano School | ${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${headerimg ? renderTemplate`${renderComponent($$result, "Header", $$Header, { "title": title, "headerimg": headerimg, "HIcenter": HIcenter, "data-astro-cid-sckkx6r4": true })}` : renderTemplate`${renderComponent($$result, "Header", $$Header, { "title": title, "data-astro-cid-sckkx6r4": true })}`} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${path == "/" ? renderTemplate`${renderComponent($$result, "CTA", $$CTA, { "data-astro-cid-sckkx6r4": true })}` : null} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })}  </body></html>`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getPerformances as a, getSacred as b, getStudio as c, getVideos as d, $$Button as e, getHome as f, getContact as g, urlFor as u };
