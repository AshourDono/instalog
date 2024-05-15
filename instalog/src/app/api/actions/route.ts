import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../prisma/client';
import schema from './schema';
import { generateCustomId } from '@/app/utils/generateCustomId';
import { formatResponseData } from '@/app/middlewares/mappers';

export async function GET(request: NextRequest) {
  let actions = await prisma.action.findMany();
  let formattedActionsResponse = formatResponseData(actions);

  return NextResponse.json(formattedActionsResponse, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatedBody = schema.safeParse(body);

  if (!validatedBody.success) return NextResponse.json(validatedBody.error.errors, { status: 400 });

  const action = await prisma.action.create({
    data: {
      generatedId: `evt_action_${generateCustomId(12)}`,
      object: body.object,
      name: body.name,
    },
  });
  return NextResponse.json(
    { message: `${action.generatedId} has been created successfully` },
    { status: 201 }
  );
}
