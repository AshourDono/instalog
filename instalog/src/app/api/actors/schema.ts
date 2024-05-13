import { string, z } from 'zod';

const schema = z.object({
  name: string().min(3),
  group: string(),
});

export default schema
