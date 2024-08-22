import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware((auth,req)=>{
    if (isProtectedROute(req)) auth().protect()
    // if (!isPublicRoute(req)) {
    //         auth().protect()
    //       }
});
const isProtectedROute = createRouteMatcher([
    '/dashboard(.*)',
])
// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};