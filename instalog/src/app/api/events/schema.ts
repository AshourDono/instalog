import { date, number, string, z } from 'zod';

z.object({
  object: string(),
  actorId: number(),
  actionId: number(),
  targetId: number(),
  location: string(),
  occured_at: date(),
  redirect: string(),
  description: string(),
  x_request_id: string(),
});
