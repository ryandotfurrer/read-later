import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { db, Linkdump, eq } from "astro:db";

export const server = {
  addUrl: defineAction({
    accept: "form",
    input: z.object({
      url: z.string().url(),
    }),
    handler: async ({ url }) => {
      await db.insert(Linkdump).values({ url });
      return { success: true };
    },
  }),

  deleteUrl: defineAction({
    accept: "form",
    input: z.object({
      id: z.number(),
    }),
    handler: async ({ id }) => {
      await db.delete(Linkdump).where(eq(Linkdump.id, id));
      return { success: true };
    },
  }),
};
