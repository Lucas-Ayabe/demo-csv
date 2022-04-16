import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  receiveFiles,
  RequestWithFiles,
} from "@shared/middlewares/receive-files";
import { Statistic } from "@statistics/domain";
import { statisticService } from "@statistics/services";

type Data = {
  statistics: Statistic[];
};

const handler = nextConnect<NextApiRequest, NextApiResponse<Data>>();
handler.use(receiveFiles);

handler.post<RequestWithFiles<"csv">>(async (req, res) => {
  const [csv] = req.files.csv;
  res.status(200).json({
    statistics: await statisticService.importFromCsv(csv.path),
  });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
