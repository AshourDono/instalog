import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../../prisma/client";
import schema from "@/app/api/actors/schema"
import { generateCustomId } from "@/app/utils/generateCustomId";
import { formatResponseData } from "@/app/middlewares/mappers";

export async function GET(request : NextRequest){
    let actors = await prisma.actor.findMany()
    let formattedActorsResponse = formatResponseData(actors)

    return NextResponse.json(formattedActorsResponse, {status : 200})
}

export async function POST(request : NextRequest){
    const body = await request.json()
    const validatedBody = schema.safeParse(body)

    if(!validatedBody.success) return NextResponse.json(validatedBody.error.errors, {status : 400})

    const actor = await prisma.actor.create({
        data:{
            generatedId: `user_${generateCustomId(12)}`,
            name: body.name,
            group: body.group
        }
    })
    return NextResponse.json({message: `${actor.generatedId} has been created successfully`}, {status : 201})

}