import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../../prisma/client';
import { formatResponseData } from '@/app/middlewares/mappers';

export async function GET(request: NextRequest, { params }: { params: { id: number } }) {
  try {
    let actor = await prisma.actor.findFirstOrThrow({
      where: { id: +params.id },
      select: { generatedId: true, name: true, group: true },
    });

     let formattedActorResponse = formatResponseData(actor);

    return NextResponse.json(formattedActorResponse, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
