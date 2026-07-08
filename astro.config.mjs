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
        '@fontsource/roboto/400.css',
        '@fontsource/roboto/500.css',
        '@fontsource/roboto/700.css',
        './src/styles/docs.css',
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Introduction', slug: 'introduction' },
            { label: 'How to Use This Book', slug: 'how-to-use-this-book' },
            { label: 'UEFN Master Guide', slug: 'uefn-curriculum' },
          ],
        },
        {
          label: 'Unreal Engine Fundamentals',
          items: [{ autogenerate: { directory: 'fundamentals' } }],
        },
        {
          label: 'Blueprints',
          items: [{ autogenerate: { directory: 'blueprints' } }],
        },
        {
          label: 'C++',
          items: [{ autogenerate: { directory: 'cpp' } }],
        },
      ],
    }),
  ],
});
