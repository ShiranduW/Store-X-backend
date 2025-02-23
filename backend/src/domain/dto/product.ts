import { z } from "zod";

export const CreateProductDTO = z.object({
  name: z.string(),
  price: z.number(),
  description: z.string(),
  categoryId: z.string(),
  image: z.string(),
});

export const GetProductsQueryDTO = z.object({
  categoryId: z.string().optional(),
  sortBy: z.enum(['asc', 'desc', '']).optional(),
  page: z.string().optional(),
  limit: z.string().optional(),
}).passthrough();

export type GetProductsQuery = z.infer<typeof GetProductsQueryDTO>;
