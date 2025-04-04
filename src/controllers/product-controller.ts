import { Request, Response } from "express";

import { getAllProducts } from "../services/product-service";

export const getProducts = (req: Request, res: Response) => {
  res.json(getAllProducts());
};
