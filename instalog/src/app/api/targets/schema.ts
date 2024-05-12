import { string, z } from 'zod';

z.object({
  name: string().email(),
  location: string(),
});
