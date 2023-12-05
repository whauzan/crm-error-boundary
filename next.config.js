/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/crm",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
