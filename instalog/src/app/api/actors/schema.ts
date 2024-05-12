import { string, z } from 'zod';

z.object({
  name: string().min(3),
  group: string(),
});
