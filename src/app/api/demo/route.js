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
        const prisma = new PrismaClient({log:['query','info','warn','error']});  // Log enable terminal

        
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
        // const res = await prisma.users.groupBy({
        //     by:['password'],
        //     _count: {id:true},
        //     having: {password:'123'}    // ja ase ta nibe
        // })


                       /// Pagination 
            // 
        // const res = await prisma.users.findMany({
        //     cursor:{id:5},       // which skip qty by id
             // skip:5,             // which skip qty 
        //     take:5
        // }) 

                        /// log & execution time 
            // log
            // const prisma = new PrismaClient({log:['query','info','warn','error']});  // Log enable terminal

            // execution time mange
        // const startTime = Date.now();
        // const res = await prisma.users.findMany() 
        // const excTime = (Date.now()-startTime) + " mile secound"  

        
        // return NextResponse.json({excTime:excTime,status:'success',data:res})
        
        
                    /// Row querry
        // const res = await prisma.$queryRaw `SELECT * FROM users`

                    
                    /// Transaction & rollback
            // kno relation data insert / etc khetre hole sob gulo inset/etc hobe ekta bad gele sob bad, kno partial oparation hobe na

            // if went to like create a user & delete a blog so use $transaction
            // const createUser = prisma.users.create({
            //     data: {email:'unique@d.com',password:'65'}
            // })
            // const deleteBlog = prisma.blogs.delete({
            //     where: {id:9}
            // })

            // const res = await prisma.$transaction([createUser,deleteBlog])


                    /// Commparison Oparators
            // equals ,not
            // in,notIn
            // lt,lte,gt,gte
            // contains, startsWith,endWith
        // const res = await prisma.users.findMany({
            // where: {id:{equals:5}}  // geting equals
            // where: {id:{lt:5}}  // geting less than
            // where: {id:{lte:5}}  // geting less than equals
            // where: {id:{gte:5}}  // geting greater than equals
            // where:{id:{in:[5,7]}}   // geting multiple value 
            // where:{id:{notIn:[5,7]}}   // geting value without which valu
            // where: {email:{contains:'pro'}} // ja ja match pabe sob niye nibe
            // where: {email:{startsWith:'p'}}    // ja ja startwith match pabe sob niye nibe
            // where: {email:{endsWith:'m'}}    // ja ja endsWith match pabe sob niye nibe
        // }) 


                    /// Logical Oparators
            //AND,OR,Not
        // const res = await prisma.users.findMany({
            // where: {AND:[                
            //     {id:{gte:5}},
            //     {email:'updated@gamil.com'},
            // ]}

            // where: {OR:[
            //     {id:{lte:7}},
            //     {email:'@gamil.com'}
            // ]}

            // where:{NOT:[
            //     {id:{lte:7}},
            //     {email:'@gamil.com'}
            // ]}
        // })

                    /// working with date 
            // lt,lte,gt,gte
        const res = await prisma.users.findMany({
            where: {email:{
                lt: new Date('2021-20-11'),
                gt: new Date('2021-20-11'),
            }}
        })


        return NextResponse.json({status:'success',data:res})
    }catch (e) {
        return NextResponse.json({status:"fail",data:e.message})
    }
}
