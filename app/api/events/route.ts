import { NextResponse } from "next/server"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET() {
    const alldata = await prisma.events.findMany()
    return NextResponse.json(alldata)
}

export async function POST(request: Request) {
    const req = await request.json()
    await prisma.events.create({
        data : {
            name: req.name,
            description: req.description,
            date : req.date,
            venue: req.venue,
            startTime: req.startTime,
            endTime: req.endTime,
            poster: req.poster,
            speaker: req.speaker,
            partnership: req.partnership,
        }
        
    })
    return NextResponse.json({message : 'Successfully Added'})
}

export async function PUT(request: Request) {
    const req = await request.json()
    await prisma.events.update({
        where: {
            id: req._id,
        },
        data: {
            name: req.name,
            description: req.description,
            date : req.date,
            venue: req.venue,
            startTime: req.startTime,
            endTime: req.endTime,
            poster: req.poster,
            speaker: req.speaker,
            partnership: req.partnership,
        },
    })

    return NextResponse.json({message : 'Successfully Update'})
}

export async function DELETE(request: Request) {
    const req = await request.json()
    await prisma.events.delete({
        where: {
            id: req._id,
        }
    })

    return NextResponse.json({message : 'Successfully Delete'})
}
