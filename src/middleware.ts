import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host.includes("vercel.app")) {
    const url = request.nextUrl.pathname + request.nextUrl.search;
    return NextResponse.redirect(`https://heimdall.technology${url}`, 301);
  }
  return NextResponse.next();
}
