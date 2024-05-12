import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../../prisma/client";
import schema from './schema'
import { generateCustomId } from "@/app/utils/generateCustomId";

export async function GET(request : NextRequest){
    let actions = await prisma.action.findMany()

    return NextResponse.json(actions, {status : 200})

}

export async function POST(request : NextRequest){
    const body = await request.json()
    const validatedBody = schema.safeParse(body)

    if(!validatedBody.success) return NextResponse.json(validatedBody.error.errors, {status : 400})

    const action = await prisma.action.create({
        data:{
            actionGeneratedId: `evt_action_${generateCustomId(12)}`,
            object: body.object,
            name: body.name
        }
    })
    return NextResponse.json(action.id, {status:201})

}