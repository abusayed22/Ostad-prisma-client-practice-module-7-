import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

// post data
export async function POST(req,res) {

    try {
        const reqData = await req.json()

        // prisma client
        const prisma = new PrismaClient

        // insert one user 
        const res = await prisma.users.create({
            data: {
                email: reqData["email"],
                password:reqData["password"]
            }
        })

        // insert many
        const res= await prisma.users.createMany({
            data:[
                {email:'test@gamil.com',password:"1234"},
                {email:'test1@gamil.com',password:"1234"}
            ]
        })

        // insert with relationship 
        const res = await prisma.users.create({
            data: {
                email:'pro10@gamil.com',
                password:"123",
                profiles: {
                    create: {
                        firstName:"testing",
                        lastName: "lastName",
                        city: "city"
                    }
                },
                blogs: {
                    create: {
                        post:"post"
                    }
                }
            },

        })

        return NextResponse.json({status:"success"})
    } catch (error) {
        return NextResponse.json({status:"fail",data:error})
    }

}
