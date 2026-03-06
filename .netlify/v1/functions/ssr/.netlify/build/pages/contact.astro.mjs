import '../chunks/page-ssr_BzKwvkQE.mjs';
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DPUJ33nA.mjs';
import 'kleur/colors';
import { g as getContact, u as urlFor, $ as $$Layout } from '../chunks/Layout_BQYMmc8m.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const content = await getContact();
  const headImg = urlFor(content.headerImage).url();
  const hotspot = content.headerImage.hotspot ? content.headerImage.hotspot : false;
  const center = hotspot ? hotspot.y * 100 + "%" : "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact", "headerimg": headImg, "HIcenter": center, "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="contact" data-astro-cid-uw5kdbxl> <div class="image" data-astro-cid-uw5kdbxl> <img class="roundedcorners"${addAttribute(urlFor(content.portrait).url(), "src")} alt="Portrait of Miss Deborah" data-astro-cid-uw5kdbxl> </div> <div class="content" data-astro-cid-uw5kdbxl> <p class="text" data-astro-cid-uw5kdbxl>${content.text}</p> <a class="contactlink" href="tel:4108121991" data-astro-cid-uw5kdbxl>410-812-1991</a> <a class="contactlink" href="mailto:deolivera777@gmail.com" data-astro-cid-uw5kdbxl>deolivera777@gmail.com</a> </div> </section> ` })} `;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
