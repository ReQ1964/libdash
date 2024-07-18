import { z, ZodType } from 'zod';

export const ExampleSchema: ZodType<object> = z.object({
  name: z.string(),
});
