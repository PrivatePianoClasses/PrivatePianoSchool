import '../chunks/page-ssr_BzKwvkQE.mjs';
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DPUJ33nA.mjs';
import 'kleur/colors';
import { b as getSacred, u as urlFor, $ as $$Layout } from '../chunks/Layout_BQYMmc8m.mjs';
import { $ as $$PortableText } from '../chunks/PortableText_ivNTnaH5.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Sacredchoir = createComponent(async ($$result, $$props, $$slots) => {
  const content = await getSacred();
  const headImg = urlFor(content.headerImage).url();
  const hotspot = content.headerImage.hotspot ? content.headerImage.hotspot : false;
  const center = hotspot ? hotspot.y * 100 + "%" : "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sacred Choir", "headerimg": headImg, "HIcenter": center, "data-astro-cid-cqm3peew": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="sacred" data-astro-cid-cqm3peew> <div class="images" data-astro-cid-cqm3peew> ${content.images.map(
    (image) => renderTemplate`<div class="image" data-astro-cid-cqm3peew> <img class="roundedcorners"${addAttribute(urlFor(image).url(), "src")} alt="Miss Deborah's Piano Studio" data-astro-cid-cqm3peew> <p class="imagecaption" data-astro-cid-cqm3peew>${image.caption}</p> </div>`
  )} </div> <div class="content" data-astro-cid-cqm3peew> <p class="intro" data-astro-cid-cqm3peew>${content.introtext}</p> <div class="info" data-astro-cid-cqm3peew> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": content.information, "data-astro-cid-cqm3peew": true })} </div> <div class="details" data-astro-cid-cqm3peew> <h2 class="detailstitle" data-astro-cid-cqm3peew>${content.season}</h2> <p class="detailitem" data-astro-cid-cqm3peew> <span class="detaillabel" data-astro-cid-cqm3peew>Audition Timeframe: </span> <span class="detailtext" data-astro-cid-cqm3peew>${content.audition}</span> </p> <p class="detailitem" data-astro-cid-cqm3peew> <span class="detaillabel" data-astro-cid-cqm3peew>Times: </span> <span class="detailtext" data-astro-cid-cqm3peew>${content.times}</span> </p> <p class="detailitem" data-astro-cid-cqm3peew>${content.statement}</p> <p class="detailitem" data-astro-cid-cqm3peew> <span class="detaillabel" data-astro-cid-cqm3peew>Rehearsal Dates: </span> <span class="detailtext" data-astro-cid-cqm3peew>${content.rehearsal}</span> </p> <p class="detailitem" data-astro-cid-cqm3peew> <span class="detaillabel" data-astro-cid-cqm3peew>Concert Dates: </span> <span class="detailtext" data-astro-cid-cqm3peew>${content.concert}</span> </p> </div> </div> </section> ` })}  <style>
  .info p {
    margin-bottom: 1.5em;
  }
</style>`;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/sacredchoir.astro", void 0);

const $$file = "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/sacredchoir.astro";
const $$url = "/sacredchoir";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sacredchoir,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
