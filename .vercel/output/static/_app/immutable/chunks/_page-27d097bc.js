import { _ as e } from './preload-helper-41c905a7.js';
import { P as s } from './store-697f4c32.js';
import { _ as l } from './index-82b2adb0.js';
const n = (r, i) => {
    const o = r[i];
    return o
      ? typeof o == 'function'
        ? o()
        : Promise.resolve(o)
      : new Promise((_, t) => {
          (typeof queueMicrotask == 'function' ? queueMicrotask : setTimeout)(
            t.bind(null, new Error('Unknown variable dynamic import: ' + i))
          );
        });
  },
  m = async ({ params: r }) => {
    const [i] = l(s).filter(t => {
      if (t.href.replace('/', '') === r.postid) return t;
    });
    return {
      content: (
        await n(
          Object.assign({
            '../../../lib/posts/1.svelte': () =>
              e(
                () => import('./store-697f4c32.js').then(t => t._),
                [
                  './store-697f4c32.js',
                  './index-82b2adb0.js',
                  './stores-f9938e62.js',
                  './singletons-d69dd340.js',
                  '../assets/store-c1c40a98.css'
                ],
                import.meta.url
              ),
            '../../../lib/posts/2.svelte': () =>
              e(
                () => import('./store-697f4c32.js').then(t => t.d),
                [
                  './store-697f4c32.js',
                  './index-82b2adb0.js',
                  './stores-f9938e62.js',
                  './singletons-d69dd340.js',
                  '../assets/store-c1c40a98.css'
                ],
                import.meta.url
              ),
            '../../../lib/posts/3.svelte': () =>
              e(
                () => import('./store-697f4c32.js').then(t => t.e),
                [
                  './store-697f4c32.js',
                  './index-82b2adb0.js',
                  './stores-f9938e62.js',
                  './singletons-d69dd340.js',
                  '../assets/store-c1c40a98.css'
                ],
                import.meta.url
              ),
            '../../../lib/posts/4.md': () =>
              e(
                () => import('./store-697f4c32.js').then(t => t.f),
                [
                  './store-697f4c32.js',
                  './index-82b2adb0.js',
                  './stores-f9938e62.js',
                  './singletons-d69dd340.js',
                  '../assets/store-c1c40a98.css'
                ],
                import.meta.url
              ),
            '../../../lib/posts/hello-world.svelte': () =>
              e(
                () => import('./store-697f4c32.js').then(t => t.g),
                [
                  './store-697f4c32.js',
                  './index-82b2adb0.js',
                  './stores-f9938e62.js',
                  './singletons-d69dd340.js',
                  '../assets/store-c1c40a98.css'
                ],
                import.meta.url
              ),
            '../../../lib/posts/how-to-build-a-blog-in-sveltekit.md': () =>
              e(
                () => import('./store-697f4c32.js').then(t => t.h),
                [
                  './store-697f4c32.js',
                  './index-82b2adb0.js',
                  './stores-f9938e62.js',
                  './singletons-d69dd340.js',
                  '../assets/store-c1c40a98.css'
                ],
                import.meta.url
              ),
            '../../../lib/posts/new_test.md': () =>
              e(
                () => import('./store-697f4c32.js').then(t => t.i),
                [
                  './store-697f4c32.js',
                  './index-82b2adb0.js',
                  './stores-f9938e62.js',
                  './singletons-d69dd340.js',
                  '../assets/store-c1c40a98.css'
                ],
                import.meta.url
              ),
            '../../../lib/posts/test-test.md': () =>
              e(
                () => import('./store-697f4c32.js').then(t => t.j),
                [
                  './store-697f4c32.js',
                  './index-82b2adb0.js',
                  './stores-f9938e62.js',
                  './singletons-d69dd340.js',
                  '../assets/store-c1c40a98.css'
                ],
                import.meta.url
              )
          }),
          `../../../lib/posts/${r.postid}.${i.extension}`
        )
      ).default
    };
  },
  d = Object.freeze(
    Object.defineProperty({ __proto__: null, load: m }, Symbol.toStringTag, {
      value: 'Module'
    })
  );
export { d as _, m as l };
