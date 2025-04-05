import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import { mockProduct } from "../mocks/mock-product";
import { IProduct } from "../types/product";

let products: IProduct[] = mockProduct;

export const getAll = (req: Request, res: Response) => {
  try {
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err });
  }
};

export const create = (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    if (!name || price == null) {
      return res.status(400).json({ message: "Name and price are required" });
    }

    const newProduct: IProduct = { id: uuidv4(), name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: "Failed to create product", error: err });
  }
};

export const update = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    if (!name && price == null) {
      return res
        .status(400)
        .json({ message: "At least one of name or price is required" });
    }

    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
      return res
        .status(404)
        .json({ message: `Product with id "${id}" not found` });
    }

    if (name !== undefined) products[index].name = name;
    if (price !== undefined) products[index].price = price;

    res.status(200).json(products[index]);
  } catch (err) {
    res.status(500).json({ message: "Failed to update product", error: err });
  }
};

export const remove = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
      return res
        .status(404)
        .json({ message: `Product with id "${id}" not found` });
    }

    const deleted = products.splice(index, 1);
    res
      .status(200)
      .json({ message: "Product deleted successfully", product: deleted[0] });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete product", error: err });
  }
};
