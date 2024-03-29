import { NextResponse } from "next/server";

export async function GET () {
    return NextResponse.json({
        message:"Hello world"
    })
}

export async function POST (req: Request) {

    // catch data from the body
    const data = await req.json()

    return NextResponse.json({
        message:"POST method",
        data
    })
}