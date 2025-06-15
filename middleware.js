import { NextResponse } from 'next/server'

export function middleware(req) {
  const hostname = req.headers.get('host') || ''
  const currentHost = hostname.replace('.nawasmara.com', '')

  // Allow www and root paths to continue
  if (hostname === 'nawasmara.com' || hostname.startsWith('www')) {
    return NextResponse.next()
  }

  const url = req.nextUrl.clone()
  url.pathname = `/_sites/${currentHost}${url.pathname}`

  return NextResponse.rewrite(url)
}