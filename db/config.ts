import { defineDb, defineTable, column } from "astro:db";

const Linkdump = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true, unique: true }),
    url: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Linkdump },
});
