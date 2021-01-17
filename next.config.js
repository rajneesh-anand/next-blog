const withPlugins = require("next-compose-plugins");
require("dotenv").config();

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const withImages = require("next-images");

const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  CLOUDINARY_URL: process.env.CLOUDINARY_URL,
  DB_NAME: process.env.DB_NAME,
  WEB_URI: process.env.WEB_URI,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  SESSION_SECRET: process.env.SESSION_SECRET,
};

module.exports = withPlugins([
  [
    withMDX,
    {
      pageExtensions: ["mdx", "tsx", "ts", "js", "jsx"],
    },
  ],
  [withImages],
  [env],
]);
