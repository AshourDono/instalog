import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../../prisma/client';
import { formatEventResponseData } from '@/app/middlewares/mappers';

export async function GET(request: NextRequest) {
  const url: any = new URL(request.url);
  const queryParam = url!.searchParams.get('query');

  if (!queryParam || typeof queryParam !== 'string') {
    return NextResponse.json(
      { message: 'Query parameter is required and must be a string' },
      { status: 400 }
    );
  }
  try {
    let events = await prisma.event.findMany({
      where: {
        OR: [
          {
            target: {
              email: {
                contains: queryParam,
              },
            },
          },
          {
            action: {
              name: {
                contains: queryParam,
              },
            },
          },
          {
            actor: {
              name: {
                contains: queryParam,
              },
            },
          },
        ],
      },
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

    let formattedEventResponse = formatEventResponseData(events);

    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
