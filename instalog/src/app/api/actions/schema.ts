import { string, z } from 'zod';

z.object({
  object: string(),
  name: string(),
});
