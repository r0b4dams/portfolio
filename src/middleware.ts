import type { NextRequest } from "next/server";

export const config = {
  matcher: "/api/:path*",
};

export async function middleware(req: NextRequest) {
  logger(req);
}

const logger = (req: NextRequest) => {
  const {
    nextUrl: { pathname },
    method,
    body,
  } = req;

  console.log(method, pathname);
  if (body) console.log(body);
};
