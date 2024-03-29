import { NextResponse, NextRequest } from "next/server";

const isLoggedIn : boolean = true;

export function middleware(req: NextRequest ) {

    // catching the cookie
    let cookie = req.cookies.get('my-cookie')

    if (isLoggedIn) {
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/', req.url))
}

export const config = {
    matcher: ['/profile']
}