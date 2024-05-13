import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../../prisma/client";
import schema from "@/app/api/targets/schema"
import { generateCustomId } from "@/app/utils/generateCustomId";
import { formatResponseData } from "@/app/middlewares/mappers";

export async function GET(request : NextRequest){
    let targets = await prisma.target.findMany()
    let formattedTargetsResponse = formatResponseData(targets)

    return NextResponse.json(formattedTargetsResponse, {status : 200})
}

export async function POST(request : NextRequest){
    const body = await request.json()
    const validatedBody = schema.safeParse(body)

    if(!validatedBody.success) return NextResponse.json(validatedBody.error.errors, {status : 400})

    const target = await prisma.target.create({
        data:{
            generatedId: `user_${generateCustomId(12)}`,
            name: body.name,
            location: body.location
        }
    })
    return NextResponse.json({message: `actor: ${target.generatedId} has been created successfully`}, {status : 201})

}