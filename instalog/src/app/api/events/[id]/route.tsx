import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../../prisma/client';
import { formatEventResponseData } from '@/app/middlewares/mappers';

export async function GET(request: NextRequest, { params }: { params: { id: number } }) {
  try {
    let event = await prisma.event.findFirstOrThrow({
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
            name: true,
            location: true,
          },
        },
        occured_at: true,
        redirect: true,
        description: true,
        x_request_id: true,
      },
      where: { id: +params.id },
    });

    let formattedEventResponse = formatEventResponseData(event);

    return NextResponse.json(formattedEventResponse, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
