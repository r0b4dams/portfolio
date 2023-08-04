import type { NextApiRequest, NextApiResponse } from "next";

import * as api from "./handlers";
import { METHOD } from "../utils";

/**
 *
 * /api/example
 *
 */
export default async function controller(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case METHOD.GET:
        return api.GET(req, res);

      case METHOD.POST:
        return api.POST(req, res);

      case METHOD.PUT:
        return api.PUT(req, res);

      case METHOD.DELETE:
        return api.DELETE(req, res);

      default:
        return res.status(404).json({ error: "not found" });
    }
  } catch (err) {
    if (err instanceof Error) {
      const data = { error: err.message };
      console.log(data);
      return res.status(500).json(data);
    }
  }
}
