import { number, string, z } from 'zod';

const schema = z.object({
  object: string(),
  actorId: number(),
  actionId: number(),
  targetId: number(),
  redirect: string()
});

export default schema;
