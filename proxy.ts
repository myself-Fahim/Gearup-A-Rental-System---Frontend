import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt, { JwtPayload } from "jsonwebtoken"
import { verifyToken } from './app/utils/jwt'
import { cookies } from 'next/headers'
import { getNewAccessToken } from './service/refreshToken'

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const Public_Route = ['/', '/gear']
    const Auth_Route = ['/login', '/register']
    const Admin_Route = ['/admin-dashboard']
    const Provider_Route = ['/provider-dashboard']
    const Customer_Route = ['/dashboard']
    const pathname = request.nextUrl.pathname;
    const cookieStore = await cookies()

    const isAuthRoute = Auth_Route.some((route) => route === pathname || pathname.startsWith(route + '/'));
    const isPublicRoute = Public_Route.some((route) => route === pathname || pathname.startsWith(route + '/'));
    const isAdminRoute = Admin_Route.some((route) => route === pathname || pathname.startsWith(route + '/'));
    const isProviderRoute = Provider_Route.some((route) => route === pathname || pathname.startsWith(route + '/'));
    const isCustomerRoute = Customer_Route.some((route) => route === pathname || pathname.startsWith(route + '/'));

    let accessToken = request.cookies.get('accessToken')?.value;
    const refreshToken = request.cookies.get('refreshToken')?.value

    let decoded = accessToken ? verifyToken(accessToken, process.env.JWT_ACCESS_SECRET!) : null
    const decodedRefreshToken = refreshToken ? verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET!) : null

    if (decoded && decodedRefreshToken && !decoded.success && decodedRefreshToken.success) {
        const result = await getNewAccessToken();
        if (result.success) {
            const newAccessToken = result.data.accessToken
            cookieStore.set("accessToken", result.data.accessToken, {
                httpOnly: true,
                sameSite: "lax",
                maxAge: 60 * 60 * 2,
            })
            accessToken = newAccessToken
            decoded = accessToken ? verifyToken(accessToken, process.env.JWT_ACCESS_SECRET!) : null
            
        }
    }


    let userRole = null

    if (decoded && !decoded.success) {
        cookieStore.delete('accessToken')
    }


    if (decoded && decoded.success) {
        userRole = (decoded.data as JwtPayload).role;
    }



    if (accessToken) {

        if (isAuthRoute) {
            if (userRole === "CUSTOMER") {
                return NextResponse.redirect(new URL('/dashboard', request.url))
            }
            else if (userRole === "PROVIDER") {
                return NextResponse.redirect(new URL('/provider-dashboard', request.url))
            }
            else {
                return NextResponse.redirect(new URL('/admin-dashboard', request.url))
            }
        }

        if (userRole == 'CUSTOMER' && (isAdminRoute || isProviderRoute)) {
            return NextResponse.redirect(new URL('/not-found', request.url))
        }
        if (userRole == 'PROVIDER' && (isAdminRoute || isCustomerRoute)) {
            return NextResponse.redirect(new URL('/not-found', request.url))
        }
        if (userRole == 'ADMIN' && (isCustomerRoute || isProviderRoute)) {
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