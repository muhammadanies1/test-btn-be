import { v4 as uuidv4 } from "uuid";

import { IProduct } from "../types/product";

export let mockProduct: IProduct[] = [
  {
    id: uuidv4(),
    name: "Laptop",
    price: 10000000,
  },
  {
    id: uuidv4(),
    name: "Handphone",
    price: 5000000,
  },
  {
    id: uuidv4(),
    name: "Meja",
    price: 2000000,
  },
];
