import { NextResponse } from 'next/server'

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}

export function middleware(req) {
  try {
    const host = req.headers.get('host') || ''
    const domain = 'nawasmara.com'
    const vercelDomain = 'vercel.app'
    const reservedSubdomains = ['www', 'app', 'admin', 'dashboard']

    // 1. Clean and parse host
    const cleanHost = host.replace('www.', '').split(':')[0]
    const isVercelPreview = cleanHost.endsWith(vercelDomain)
    const isLocalhost = cleanHost === 'localhost'
    
    // 2. Extract subdomain
    let subdomain = null
    
    if (isVercelPreview) {
      subdomain = cleanHost.split('.')[0]
    } 
    else if (cleanHost.endsWith(`.${domain}`)) {
      subdomain = cleanHost.replace(`.${domain}`, '')
    }
    else if (isLocalhost) {
      // Optional: Handle local development subdomains
      // subdomain = 'dev' // Uncomment if you want localhost to map to a specific subdomain
      return NextResponse.next()
    }

    // 3. Validate subdomain
    const isValidSubdomain = (sub) => {
      return sub && 
             /^[a-z0-9-]+$/.test(sub) && // Only allow letters, numbers, hyphens
             !reservedSubdomains.includes(sub) &&
             !sub.includes('.') &&
             !sub.includes('/')
    }

    // Debug logging
    console.log('Middleware Debug:', {
      host,
      cleanHost,
      subdomain,
      isValid: isValidSubdomain(subdomain),
      pathname: req.nextUrl.pathname
    })

    // 4. Skip if no valid subdomain
    if (!isValidSubdomain(subdomain)) {
      console.log('Invalid subdomain - skipping rewrite')
      return NextResponse.next()
    }

    // 5. Rewrite to internal path
    const url = req.nextUrl.clone()
    url.pathname = `/${subdomain}${url.pathname}`
    
    console.log('Rewriting to:', url.toString())
    
    // 6. Create response with cache control
    const response = NextResponse.rewrite(url)
    response.headers.set('Cache-Control', 'no-cache, no-store, max-age=0')
    
    return response

  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.next()
  }
}
