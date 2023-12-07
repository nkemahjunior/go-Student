import { getCoursesFromYourDepartment } from "@/BACKEND/CourseRegistrationDetails/getCoursesFromYourDepartment"
import { NextRequest, NextResponse } from "next/server"


export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams

    const semester = searchParams.get('semester')
    const level = searchParams.get('level')
    const table = searchParams.get('department')
  

    const data = await getCoursesFromYourDepartment(table,level,semester)
     

    if(data?.error) return NextResponse.json({},{status:400,statusText:data.error})

    // console.log("--------------------------------------------------------")
    // console.log(semester)
    // console.log(level)
    // console.log(table)

    return NextResponse.json(data?.data)

  }