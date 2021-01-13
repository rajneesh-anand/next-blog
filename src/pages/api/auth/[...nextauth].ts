import { NextApiRequest } from "next";
import NextAuth from "next-auth";
import { NextApiResponse } from "next-auth/_utils";
import Providers from "next-auth/providers";

const options: any = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Email({
      server: {
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: {
    type: "mongodb",
    useNewUrlParser: true,
    url: process.env.DATABASE_URL,
    ssl: true,
    useUnifiedTopology: true,
  },
};
export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
