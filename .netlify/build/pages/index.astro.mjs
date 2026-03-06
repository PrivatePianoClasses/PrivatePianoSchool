import '../chunks/page-ssr_BzKwvkQE.mjs';
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DPUJ33nA.mjs';
import 'kleur/colors';
import { f as getHome, u as urlFor, e as $$Button, $ as $$Layout } from '../chunks/Layout_BQYMmc8m.mjs';
import { $ as $$PortableText } from '../chunks/PortableText_ivNTnaH5.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const content = await getHome();
  const headImg = urlFor(content.headerImage).url();
  const hotspot = content.headerImage.hotspot ? content.headerImage.hotspot : false;
  const center = hotspot ? hotspot.y * 100 + "%" : "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "headerimg": headImg, "HIcenter": center, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="firstsection" data-astro-cid-j7pv25f6> <div class="firstimage" data-astro-cid-j7pv25f6> <img class="roundedcorners firstimg"${addAttribute(urlFor(content.firstImage).url(), "src")} alt="Miss Deborah's Piano Studio" data-astro-cid-j7pv25f6> </div> <div class="firstcontent" data-astro-cid-j7pv25f6> <h2 class="firsttitle" data-astro-cid-j7pv25f6>${content.firsttitle}</h2> <p class="firsttext" data-astro-cid-j7pv25f6>${content.firsttext}</p> ${renderComponent($$result2, "Button", $$Button, { "text": "Contact", "link": "/contact", "data-astro-cid-j7pv25f6": true })} </div> </section> <section class="aboutsection" data-astro-cid-j7pv25f6> <h2 class="abouttitle" data-astro-cid-j7pv25f6>${content.abouttitle}</h2> <div class="aboutcontent" data-astro-cid-j7pv25f6> <div class="aboutcolumn col1" data-astro-cid-j7pv25f6>${renderComponent($$result2, "PortableText", $$PortableText, { "value": content.column1, "data-astro-cid-j7pv25f6": true })}</div> <div class="aboutcolumn col2" data-astro-cid-j7pv25f6>${renderComponent($$result2, "PortableText", $$PortableText, { "value": content.column2, "data-astro-cid-j7pv25f6": true })}</div> </div> <div class="studiobutton" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Button", $$Button, { "text": "Studio Procedures & Pricing", "link": "/studio", "data-astro-cid-j7pv25f6": true })} </div> </section> ` })}  <style>
  .aboutcolumn p {
    margin-bottom: 1.5em;
  }
  .aboutcolumn ul {
    margin-top: -1.5em;
  }
</style>`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/index.astro", void 0);

const $$file = "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
