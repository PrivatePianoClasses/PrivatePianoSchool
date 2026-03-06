import '../chunks/page-ssr_BzKwvkQE.mjs';
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DPUJ33nA.mjs';
import 'kleur/colors';
import { c as getStudio, u as urlFor, $ as $$Layout } from '../chunks/Layout_BQYMmc8m.mjs';
import { $ as $$PortableText } from '../chunks/PortableText_ivNTnaH5.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Studio = createComponent(async ($$result, $$props, $$slots) => {
  const content = await getStudio();
  const headImg = urlFor(content.headerImage).url();
  const hotspot = content.headerImage.hotspot ? content.headerImage.hotspot : false;
  const center = hotspot ? hotspot.y * 100 + "%" : "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Studio Procedures & Pricing", "headerimg": headImg, "HIcenter": center, "data-astro-cid-x2wsp3hm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="intro" data-astro-cid-x2wsp3hm> ${content.introtext} </section> <section class="pricing" data-astro-cid-x2wsp3hm> <div class="pricediv price1" data-astro-cid-x2wsp3hm>${renderComponent($$result2, "PortableText", $$PortableText, { "value": content.pricing1, "data-astro-cid-x2wsp3hm": true })}</div> <div class="pricediv price2" data-astro-cid-x2wsp3hm>${renderComponent($$result2, "PortableText", $$PortableText, { "value": content.pricing2, "data-astro-cid-x2wsp3hm": true })}</div> <div class="pricediv price3" data-astro-cid-x2wsp3hm>${renderComponent($$result2, "PortableText", $$PortableText, { "value": content.pricing3, "data-astro-cid-x2wsp3hm": true })}</div> </section> <section class="procedures" data-astro-cid-x2wsp3hm> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": content.procedures, "data-astro-cid-x2wsp3hm": true })} </section> ` })}  <style>
  .procedures p {
    margin-bottom: 1.5em;
  }
</style>`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/studio.astro", void 0);

const $$file = "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/studio.astro";
const $$url = "/studio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Studio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
