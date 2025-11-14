/*import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const industrialProperties = pgTable("industrial_properties", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  city: text("city").notNull(),
  submarket: text("submarket").notNull(),
  squareFootage: integer("square_footage").notNull(),
  pricePerSqFt: integer("price_per_sq_ft").notNull(),
  totalPrice: integer("total_price").notNull(),
  lotSize: integer("lot_size"),
  status: text("status").notNull().default("available"),
  thumbnailUrl: text("thumbnail_url"),
  highlights: text("highlights").array(),
  contactEmail: text("contact_email"),
  contactPhone: text("contact_phone"),
  description: text("description"),
  yearBuilt: integer("year_built"),
  zoning: text("zoning"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertIndustrialPropertySchema = createInsertSchema(industrialProperties).omit({
  id: true,
  createdAt: true,
});

export type InsertIndustrialProperty = z.infer<typeof insertIndustrialPropertySchema>;
export type IndustrialProperty = typeof industrialProperties.$inferSelect;*/
