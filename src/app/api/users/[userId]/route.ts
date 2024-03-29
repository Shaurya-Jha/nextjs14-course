import { NextResponse } from "next/server";
import data from "@/data.json";

export async function GET (req: Request, context:any) {
    // destructure params from context
    // this will catch params.userId
    const {params} = context;
    const user = data.filter(x => params.userId === x.id.toString())

    return NextResponse.json({
        user
    })
}