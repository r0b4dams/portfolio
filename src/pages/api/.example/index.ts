import type { NextApiRequest, NextApiResponse } from "next";

import * as api from "./handlers";
import { METHOD } from "../utils";

interface IData {
  [key: string]: string;
}

export default async function controller(req: NextApiRequest, res: NextApiResponse<IData>) {
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
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
}
