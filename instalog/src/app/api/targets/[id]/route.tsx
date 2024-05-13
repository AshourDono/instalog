import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../../prisma/client';
import { formatResponseData } from '@/app/middlewares/mappers';

export async function GET(request: NextRequest, { params }: { params: { id: number } }) {
  try {
    let target = await prisma.target.findFirstOrThrow({
      where: { id: +params.id },
    });

    let formattedTargetResponse = formatResponseData(target);

    return NextResponse.json(formattedTargetResponse, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
