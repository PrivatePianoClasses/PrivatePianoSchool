import '../chunks/page-ssr_BzKwvkQE.mjs';
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DPUJ33nA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BQYMmc8m.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="content" data-astro-cid-zetdm5md> <h2 class="title" data-astro-cid-zetdm5md>You've entered a URL that wasn't found on this site.</h2> <p class="text" data-astro-cid-zetdm5md>Please <a href="/" class="homelink" data-astro-cid-zetdm5md>return to the home page</a> to continue exploring the site.</p> </section> ` })} `;
}, "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/404.astro", void 0);

const $$file = "C:/Users/Dell/Downloads/PrivatePianoSchool/PrivatePianoSchool-main/PrivatePianoSchool-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
