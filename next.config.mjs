import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

export default withNextIntl(nextConfig);
