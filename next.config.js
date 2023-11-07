/** @type {import('next').NextConfig} */
module.exportsg = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/PDZCY7h/globe-975be501addf74160239.png',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/8cdj540/Screenshot-2023-04-14-115857.png',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/NZWzfn7/zara-logo-2020-1.png',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/jbYx36d/Screenshot-2023-04-14-115727.png',
      },
    ],
  },

  // experimental: {
    modularizeImports: {
      lodash: {
        transform: 'lodash/{{member}}'
      },
      '@mui/material': {
        transform: '@mui/material/{{member}}'
      },
      '@mui/lab': {
        transform: '@mui/lab/{{member}}'
      },
      '@mui/icons-material/?(((\\w*)?/?)*)': {
        transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
      }
    }
  // }
}
