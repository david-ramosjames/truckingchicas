import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX_HOST = "truckingchicas.com";

export function proxy(request: NextRequest) {
  const hostname = (request.headers.get("host") ?? "").split(":")[0];
  if (hostname === `www.${APEX_HOST}`) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.hostname = APEX_HOST;
    url.port = "";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}
