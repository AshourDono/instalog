import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../../prisma/client';

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
            actor: {
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
    });

    return NextResponse.json({ events: events }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
