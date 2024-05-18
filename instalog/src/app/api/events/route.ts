import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../prisma/client';
import schema from '@/app/api/events/schema';
import { generateCustomId } from '@/app/utils/generateCustomId';
import { formatDescription } from '@/app/utils/formatDescription';

type action = {
  name?: string;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const pageNumber: number | null = Number(searchParams!.get('page'));
  const pageLimit: number = 10;

  let loadMoreTries = Math.ceil((await prisma.event.count()) / pageLimit);

  let events = await prisma.event.findMany({
    select: {
      id: true,
      actor: {
        select: {
          email: true,
        },
      },
      action: {
        select: {
          name: true,
        },
      },
      occured_at: true,
    },
    take: pageNumber * pageLimit,
  });

  return NextResponse.json({ events, loadMoreTries }, { status: 200 });
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
