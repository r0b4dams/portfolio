import { NextRequest, NextResponse } from "next/server";

import { logger } from "./middleware/logger";

export const config = {
  matcher: "/api/:path*",
};

export const middleware = async (req: NextRequest) => {
  try {
    logger(req);
  } catch (err) {
    if (err instanceof Error) {
      const data = { error: err.message };
      console.log(data);
      return new NextResponse(JSON.stringify(data), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }
  }
};
