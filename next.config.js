module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iseai.org',
        pathname: '/wp-content/uploads/2020/02/ISEAI-LOGO-Alt-240px.png',
      },
      {
        protocol: 'https',
        hostname: 'lh6.googleusercontent.com',
        pathname: '/**', // Allows all images from Googleusercontent
      },
      {
        protocol: 'https',
        hostname: 'www.umb.sk',
        pathname: '/cms/images/logo.png',
      },
      {
        protocol: 'https',
        hostname: 'www.cfroberts.co.uk',
        pathname: '/wp-content/uploads/2014/09/1280px-Morrisons_Logo.svg_-1024x609.png',
      },
      {
        protocol: 'https',
        hostname: 'b3044747.smushcdn.com',
        pathname: '/3044747/wp-content/uploads/2022/06/The-Manchester-College-1024x576.jpg',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
