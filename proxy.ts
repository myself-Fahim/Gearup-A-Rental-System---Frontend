import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt, { JwtPayload } from "jsonwebtoken"

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    const Public_Route = ['/', '/gear']
    const Auth_Route = ['/login', '/register']
    const Admin_Route = ['/admin-dashboard']
    const Provider_Route = ['/provider-dashboard']
    const Customer_Route = ['/dashboard']
    const pathname = request.nextUrl.pathname;
    const accessToken = request.cookies.get('accessToken')?.value;

    const isAuthRoute = Auth_Route.some((route) => route === pathname || pathname.startsWith(route + '/'));
    const isPublicRoute = Public_Route.some((route) => route === pathname || pathname.startsWith(route + '/'));
    const isAdminRoute = Admin_Route.some((route) => route === pathname || pathname.startsWith(route + '/'));
    const isProviderRoute = Provider_Route.some((route) => route === pathname || pathname.startsWith(route + '/'));
    const isCustomerRoute = Customer_Route.some((route) => route === pathname || pathname.startsWith(route + '/'));

    const decoded = accessToken ? jwt.decode(accessToken) as JwtPayload : null

    if (accessToken && decoded) {

        if (isAuthRoute) {
            if (decoded.role === "CUSTOMER") {
                return NextResponse.redirect(new URL('/dashboard', request.url))
            }
            else if (decoded.role === "PROVIDER") {
                return NextResponse.redirect(new URL('/provider-dashboard', request.url))
            }
            else {
                return NextResponse.redirect(new URL('/admin-dashboard', request.url))
            }
        }

        if(decoded.role == 'CUSTOMER' && (isAdminRoute || isProviderRoute)){
              return NextResponse.redirect(new URL('/not-found', request.url))
        }
        if(decoded.role == 'PROVIDER' && (isAdminRoute || isCustomerRoute)){
              return NextResponse.redirect(new URL('/not-found', request.url))
        }
        if(decoded.role == 'ADMIN' && (isCustomerRoute || isProviderRoute)){
              return NextResponse.redirect(new URL('/not-found', request.url))
        }
    }


    else {

        if (!isPublicRoute && !isAuthRoute) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }










    //   return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
}











// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
    matcher: [
        '/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)',
    ]
}