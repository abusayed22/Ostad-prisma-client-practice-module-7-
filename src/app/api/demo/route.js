import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

// post data
export async function POST(req,res) {

// insert data 
    try {
        // const reqData = await req.json()

            //  prisma client
        const prisma = new PrismaClient

        //              insert one user 
        //  const res = await prisma.users.create({
        //      data: {
        //          email: reqData["email"],
        //          password:reqData["password"]
        //      }
        //  })

                    //  insert many
        //  const res= await prisma.users.createMany({
        //      data:[
        //          {email:'test00@gamil.com',password:"1234"},
        //          {email:'test100@gamil.com',password:"1234"}
        //      ]
        //  })

                    // insert with relationship 
        // const res = await prisma.users.create({
        //     data: {
        //         email:'profile0@gamil.com',
        //         password:"123",
        //         profiles: {
        //             create: {
        //                 firstName:"testing",
        //                 lastName: "lastName",
        //                 city: "city"
        //             }
        //         },
        //         blogs: {
        //             create: {
        //                 post:"post Prima"
        //             }
        //         }
        //     },

        // })


        return NextResponse.json({status:"success",data:res})
    } catch (error) {
        return NextResponse.json({status:"fail",data:error})
    }



// update & delete data 
    // try {
    //     const prisma = new PrismaClient();

    //     const {searchParams} = new URL(req.url);
    //     const Id = parseInt(searchParams.get("id"))

        // // update data
        // const res = await prisma.users.update({
        //     where:{id:Id},
        //     data: {email:'updated@gamil.com',password:'456'}
        // })

        // // deleted
        // const res = await prisma.blogs.delete({
        //     where:{id:Id}
        // })

        // return NextResponse.json({status:"success"})
        
    // } catch (error) {
    //     return NextResponse.json({status:"fail",data:error.message})
    // }

}



        // all query here // Find
export async function GET (req,res) {
    try {
        const prisma = new PrismaClient();

        
            // find many
        // const res = await prisma.users.findMany();

            // find where & select
        // const res = await prisma.users.findMany({
        //     where: {id:19},
        //     select: {email:true,password:false}
        // })

            // find search
        // const res = await prisma.users.findMany({
        //     where: {email: {contains: "pro"}}   // it's not cas sensitive
        // })
           
            // find by order,skip,take
        // const res = await prisma.users.findMany({
        //     orderBy: {id:"desc" },  // by defualt get asc
        //     skip: 2  ,           // skip first two data
        //     take: 3,            // limit 3
        // })

            // find first and last
        // const res = await prisma.users.findFirst({
        //     orderBy: {id:"desc"}   // finding last data
        // })

            // find unique 
        // const res = await prisma.users.findUnique({
        //     where:{email: 'updated@gamil.com'}      // if exectly keyword match so return one data
        // })

            // find with relation 
        // const res = await prisma.users.findMany({
        //     where: {id:14},

        //     include: {
        //         profiles: true,
        //         blogs: true
        //     }

        // })

            // find with nested relation 
        // const res = await prisma.users.findMany({

        //     include: {
        //         profiles: {
        //             where: {firstName: "testing"}
        //         },
        //         blogs: true
        //     }

        // })

            // find unique by id 
        // const res = await prisma.users.findUnique({

        // })

                    /// Aggrigation 
            // calculation
        // const res = await prisma.users.aggregate({
        //     _count: {id:true},   // total count of data
        //     _avg: {id:true},     // average of properties
        //     _max: {id:true},     // max of properties
        //     _min: {id:true},      // man of properties
        //     _sum: {id:true},      // total of properties
        // })

            // groupe by
        const res = await prisma.users.groupBy({
            by:['password'],
            _count: {id:true},
            having: {password:'123'}    // ja ase ta nibe
        })

        return NextResponse.json({status:'success',data:res})

    }catch (e) {
        return NextResponse.json({status:"fail",data:e.message})
    }
}
