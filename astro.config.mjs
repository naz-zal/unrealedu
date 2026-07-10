import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://naz-zal.github.io',
  base: '/unrealedu',
  integrations: [
    starlight({
      title: 'Epic Games Education',
      description: 'A practical Unreal Engine documentation handbook.',
      customCss: [
        '@fontsource/geist-sans/400.css',
        '@fontsource/geist-sans/500.css',
        '@fontsource/geist-sans/600.css',
        '@fontsource/geist-sans/700.css',
        './src/styles/docs.css',
      ],
      components: {
        Header: './src/components/Header.astro',
        Sidebar: './src/components/Sidebar.astro',
      },
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Introduction', slug: 'uefn/introduction' },
            { label: 'How to Use This Book', slug: 'uefn/how-to-use-this-book' },
            { label: 'UEFN Master Guide', slug: 'uefn/uefn-curriculum' },
          ],
        },
        {
          label: 'Unreal Engine Fundamentals',
          items: [{ autogenerate: { directory: 'uefn/fundamentals' } }],
        },
        {
          label: 'Blueprints',
          items: [{ autogenerate: { directory: 'uefn/blueprints' } }],
        },
        {
          label: 'C++',
          items: [{ autogenerate: { directory: 'uefn/cpp' } }],
        },
      ],
    }),
  ],
});