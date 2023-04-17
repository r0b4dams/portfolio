import type { NextRequest } from "next/server";

export const logger = (req: NextRequest) => {
  const { method, nextUrl } = req;
  console.log(method, nextUrl.pathname);
};
