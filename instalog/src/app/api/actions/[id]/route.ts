import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../../prisma/client';
import { formatResponseData } from '@/app/middlewares/mappers';

export async function GET(request: NextRequest, { params }: { params: { id: number } }) {
  try {
    let action = await prisma.action.findFirstOrThrow({
      where: { id: +params.id },
      select: { generatedId: true, name: true, object: true },
    });

    let formattedActionResponse = formatResponseData(action);

    return NextResponse.json(formattedActionResponse, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
