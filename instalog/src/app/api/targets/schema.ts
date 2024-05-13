import { string, z } from 'zod';

const schema = z.object({
  name: string().email(),
  location: string(),
});

export default schema;
