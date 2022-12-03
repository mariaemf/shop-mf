import { NextApiRequest, NextApiResponse } from "next";
import { handleClientScriptLoad } from "next/script";

export default function hanfler(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ message: "Hello Word" });
}
