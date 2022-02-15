module.exports = {
  purge: {
    enabled: false,
    content: [
      './src/**/*.vue',
      './public/**/*.html',
    ],
    options: {
      safelist: [
        /data-themes$/,
      ]
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    // rtl: false,
  },
  theme: {
    variants: {},
    screens: {
      'sm': '500px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundOpacity: {
        '85': '0.85'
      },
    }
  }
}