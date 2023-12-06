import { NextResponse } from "next/server"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET() {
    const alldata = await prisma.teams.findMany()
    return NextResponse.json(alldata)
}

export async function POST(request: Request) {
    const req = await request.json()
    await prisma.teams.create({
        data : {
            name: req.name,
            position: req.position,
            avatar : req.avatar,
            about: req.about,
            facebook: req.facebook,
            instagram: req.instagram,
            twitter: req.twitter,
            linkedin: req.linkedin,
            email: req.email,
            
        }
        
    })
    return NextResponse.json({message : 'Successfully Added'})
}

export async function PUT(request: Request) {
    const req = await request.json()
    await prisma.teams.update({
        where: {
            id: req._id,
        },
        data: {
            name: req.name,
            position: req.position,
            avatar : req.avatar,
            about: req.about,
            facebook: req.facebook,
            instagram: req.instagram,
            twitter: req.twitter,
            linkedin: req.linkedin,
            email: req.email,
        },
    })

    return NextResponse.json({message : 'Successfully Update'})
}

export async function DELETE(request: Request) {
    const req = await request.json()
    await prisma.teams.delete({
        where: {
            id: req._id,
        }
    })

    return NextResponse.json({message : 'Successfully Delete'})
}
