import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { dbConnect } from "@/lib/dbConnect";
import { UserModel as User } from "@/models/User";

const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const db = await dbConnect();

      const isexistinguser = await User.findOne({ email: user.email });

      if (isexistinguser == null) {
        const newUser = new User({
          userName: user.email.split("@")[0],
          email: user.email,
          image: user.image,
        });

        await newUser.save();

        console.log(newUser);
      } else {
        console.log(`user is exist: ${isexistinguser}`);
      }

      return true;
    },
  },
});

export { authOptions as GET, authOptions as POST };
