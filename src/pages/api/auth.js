import nc from "next-connect";
import { all } from "../../middlewares/index";
import passport from "../../middlewares/passport";
import { extractUser } from "../../lib/api-helpers";
import cookie from "cookie";

const handler = nc();

handler.use(all);

handler.post(passport.authenticate("local"), (req, res) => {
  // res.setHeader(
  //   "Set-Cookie",
  //   cookie.serialize("session.uid", "", {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV !== "development",
  //     maxAge: 60 * 60,
  //     sameSite: "strict",
  //     path: "/",
  //   })
  // );
  res.statusCode = 200;
  res.json({ user: extractUser(req.user) });
});

handler.delete((req, res) => {
  req.logOut();
  res.status(204).end();
});

export default handler;
