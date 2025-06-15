import { NextResponse } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

export function middleware(req) {
  const host = req.headers.get('host') || ''
  const domain = 'nawasmara.com'

  // Remove port if exists (e.g., localhost:3000)
  const cleanHost = host.split(':')[0]

  // Extract subdomain (before domain)
  const isLocalhost = cleanHost.endsWith('localhost')
  const subdomain = isLocalhost
    ? cleanHost.split('.')[0]
    : cleanHost.replace(`.${domain}`, '')

  // Debug logging
  console.log('Middleware Debug:', {
    host,
    cleanHost,
    domain,
    subdomain,
    isLocalhost,
    pathname: req.nextUrl.pathname
  })

  // Ignore root domain or reserved
  if (
    cleanHost === domain ||
    cleanHost === `www.${domain}` ||
    subdomain === 'www' ||
    subdomain === cleanHost // Handle cases where subdomain extraction fails
  ) {
    console.log('Allowing request to pass through')
    return NextResponse.next()
  }

  // Rewrite to internal path
  const url = req.nextUrl.clone()
  url.pathname = `/_sites/${subdomain}${url.pathname}`
  
  console.log('Rewriting to:', url.pathname)
  return NextResponse.rewrite(url)
}
