import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../../prisma/client';
import { formatResponseData } from '@/app/middlewares/mappers';

export async function GET(request: NextRequest, { params }: { params: { id: number } }) {
  try {
    let user = await prisma.user.findFirstOrThrow({
      where: { id: +params.id },
      select: { generatedId: true, name: true, group: true, email: true, location: true },
    });

    let formattedUserResponse = formatResponseData(user);

    return NextResponse.json(formattedUserResponse, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
