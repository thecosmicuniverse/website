import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import DiscordProvider from "next-auth/providers/discord";

const DISCORD_SCOPES = [ "identify", "email", "guilds.members.read" ];

export const config = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID!,
      clientSecret: process.env.DISCORD_SECRET!,
      authorization: `https://discord.com/api/oauth2/authorize?scope=${DISCORD_SCOPES.join("+")}`,
    }),
  ],
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}