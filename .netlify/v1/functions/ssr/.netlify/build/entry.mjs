import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CgadyesZ.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/_---params_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/performances.astro.mjs');
const _page5 = () => import('./pages/robots.txt.astro.mjs');
const _page6 = () => import('./pages/sacredchoir.astro.mjs');
const _page7 = () => import('./pages/studio.astro.mjs');
const _page8 = () => import('./pages/video.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/performances.astro", _page4],
    ["src/pages/robots.txt.ts", _page5],
    ["src/pages/sacredchoir.astro", _page6],
    ["src/pages/studio.astro", _page7],
    ["src/pages/video.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "661cd580-d27c-40f8-9d2f-35432a5001f5"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
