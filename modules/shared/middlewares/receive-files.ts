import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import multiparty from "multiparty";

export interface RequestFile {
  fieldName: string;
  originalFilename: string;
  path: string;
  headers: Record<string, string>;
  size: number;
}

export interface RequestWithFiles<K extends string = string> {
  files: Record<K, RequestFile[]>;
}

const middleware = nextConnect<NextApiRequest, NextApiResponse>();

middleware.use<RequestWithFiles>(async (req, _, next) => {
  const form = new multiparty.Form();
  form.parse(req, function (_, fields, files) {
    req.body = fields;
    req.files = files;
    next();
  });
});

export const receiveFiles = middleware;
