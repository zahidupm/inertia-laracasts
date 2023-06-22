import { createInertiaApp } from '@inertiajs/vue3';
import { createApp, h } from 'vue';
import Layout from './Shared/Layout.vue';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    const page = pages[`./Pages/${name}.vue`]
    page.default.layout ??= Layout;
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
    //   .component('Link', Link)
      .mount(el)
  },
  progress: {
    color: '#29d',
  }
});
