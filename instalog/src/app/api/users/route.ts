import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../prisma/client';
import schema from '@/app/api/users/schema';
import { generateCustomId } from '@/app/utils/generateCustomId';
import { formatResponseData } from '@/app/middlewares/mappers';

export async function GET(request: NextRequest) {
  let users = await prisma.user.findMany();
  let formattedUsersResponse = formatResponseData(users);

  return NextResponse.json(formattedUsersResponse, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatedBody = schema.safeParse(body);

  if (!validatedBody.success) return NextResponse.json(validatedBody.error.errors, { status: 400 });

  const user = await prisma.user.create({
    data: {
      generatedId: `user_${generateCustomId(12)}`,
      name: body.name,
      email: body.email,
      group: body.group,
      location: body.location,
    },
  });
  return NextResponse.json(
    { message: `${user.generatedId} has been created successfully` },
    { status: 201 }
  );
}
