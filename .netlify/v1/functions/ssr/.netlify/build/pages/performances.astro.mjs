import '../chunks/page-ssr_BzKwvkQE.mjs';
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DPUJ33nA.mjs';
import 'kleur/colors';
import { a as getPerformances, u as urlFor, $ as $$Layout } from '../chunks/Layout_BQYMmc8m.mjs';
import { $ as $$PortableText } from '../chunks/PortableText_ivNTnaH5.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$Performances = createComponent(async ($$result, $$props, $$slots) => {
  const content = await getPerformances();
  const headImg = urlFor(content.headerImage).url();
  const hotspot = content.headerImage.hotspot ? content.headerImage.hotspot : false;
  const center = hotspot ? hotspot.y * 100 + "%" : "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Upcoming Performances", "headerimg": headImg, "HIcenter": center, "data-astro-cid-bxqsgjmz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="performances" data-astro-cid-bxqsgjmz> <div class="image" data-astro-cid-bxqsgjmz> <img class="roundedcorners firstimg"${addAttribute(urlFor(content.mainImage).url(), "src")} alt="Miss Deborah's Piano Studio" data-astro-cid-bxqsgjmz> </div> <div class="content" data-astro-cid-bxqsgjmz> ${content.listings.map(
    (event) => renderTemplate`<h2 class="eventtitle" data-astro-cid-bxqsgjmz>${event.title}</h2>
      <div class="eventdetails" data-astro-cid-bxqsgjmz>${renderComponent($$result2, "PortableText", $$PortableText, { "value": event.details, "data-astro-cid-bxqsgjmz": true })}</div>`
  )} </div> </section> ` })} `;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/performances.astro", void 0);

const $$file = "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/performances.astro";
const $$url = "/performances";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Performances,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
