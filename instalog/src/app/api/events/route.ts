import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../prisma/client';
import schema from '@/app/api/events/schema';
import { generateCustomId } from '@/app/utils/generateCustomId';
import { formatEventResponseData } from '@/app/middlewares/mappers';
import { formatDescription } from '@/app/utils/formatDescription';

type action = {
  name?: string;
};

export async function GET(request: NextRequest) {
  let events = await prisma.event.findMany({
    select: {
      generatedId: true,
      object: true,
      actor: {
        select: {
          generatedId: true,
          name: true,
          group: true,
        },
      },
      action: {
        select: {
          generatedId: true,
          object: true,
          name: true,
        },
      },
      target: {
        select: {
          generatedId: true,
          email: true,
          location: true,
        },
      },
      occured_at: true,
      redirect: true,
      description: true,
      x_request_id: true,
    },
  });

  let formattedEvents = formatEventResponseData(events);

  return NextResponse.json(formattedEvents, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatedBody = schema.safeParse(body);

  if (!validatedBody.success) return NextResponse.json(validatedBody.error.errors, { status: 400 });

  const actionName: action | null = await prisma.action.findFirst({
    select: { name: true },
    where: {
      id: +body.actionId,
    },
  });

  const description: string = formatDescription(actionName!['name']!);

  if (body.actorId === body.targetId)
    return NextResponse.json({ message: 'actor and target can not be the same' }, { status: 400 });

  const event = await prisma.event.create({
    data: {
      generatedId: `evt_${generateCustomId(12)}`,
      object: body.object,
      actorId: body.actorId,
      actionId: body.actionId,
      targetId: body.targetId,
      redirect: body.redirect,
      description,
      x_request_id: `req_${generateCustomId(12)}`,
    },
  });

  return NextResponse.json(
    { message: `event: ${event.generatedId} has been created successfully` },
    { status: 201 }
  );
}
