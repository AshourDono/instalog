import { string, z } from 'zod';

const schema = z.object({
  object: string(),
  name: string(),
});

export default schema
