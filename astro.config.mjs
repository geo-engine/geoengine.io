// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.geoengine.io',

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [icon()],

    experimental: {
        svg: true,
    },
});
