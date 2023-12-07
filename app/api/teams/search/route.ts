import { NextResponse, NextRequest} from "next/server"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('id')
    const alldata = await prisma.teams.findMany({
        where : {
            id : query || "",
        }
    })

    return NextResponse.json(alldata)
}