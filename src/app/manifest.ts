import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Page Name',
    description:
      'Description Page',
    short_name: 'Page Short Name',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        type: 'image/x-icon',
      },
      // {
      //   src: '/android-chrome-192x192.png',
      //   sizes: '192x192',
      //   type: 'image/png',
      // },
      // {
      //   src: '/android-chrome-512x512.png',
      //   sizes: '512x512',
      //   type: 'image/png',
      // },
      // {
      //   src: '/apple-touch.png',
      //   sizes: '180x180',
      //   type: 'image/png',
      // },
    ],
  };
}
