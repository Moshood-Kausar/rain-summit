
export default function manifest() {
  return {
    name: 'RAIN - Summit 1.0',
    short_name: 'RAIN Summit',
    description: 'Witness innovation & opportunity at RAIN Summit 1.0. 10 teams compete, industry leaders share insights, & the future of leadership unfolds.',
    start_url: '/?v=1.0.0',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: './icon.png',
        sizes: '*',
        type: 'image/png',
      },
    ],
  }
}
