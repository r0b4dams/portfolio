import type { NextApiRequest, NextApiResponse } from "next";

type RestHandler = (req: NextApiRequest, res: NextApiResponse) => void;

export const GET: RestHandler = (req, res) => {
  res.status(200).json({ method: "GET" });
};

export const POST: RestHandler = (req, res) => {
  res.status(200).json({ method: "POST" });
};

export const PUT: RestHandler = (req, res) => {
  res.status(200).json({ method: "PUT" });
};

export const DELETE: RestHandler = (req, res) => {
  res.status(200).json({ method: "DELETE" });
};
