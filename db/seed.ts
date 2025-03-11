import { db, Linkdump } from "astro:db";

// https://astro.build/db/seed
export default async function () {
  await db
    .insert(Linkdump)
    .values([
      { url: "https://astro.build" },
      { url: "https://ryanfurrer.com/" },
    ]);
}
