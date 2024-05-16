import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../../prisma/client';

export async function GET(request: NextRequest, { params }: { params: { id: number } }) {
  try {
    let event = await prisma.event.findFirstOrThrow({
      select: {
        actor: {
          select: {
            name: true,
            email: true,
            generatedId: true,
          },
        },
        action: {
          select: {
            name: true,
            object: true,
            generatedId: true,
          },
        },
        target: {
          select: {
            email: true,
          },
        },
        occured_at: true,
        redirect: true
      },
      where: { id: +params.id },
    });

    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
