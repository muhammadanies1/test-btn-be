import products from "../mocks/mock-product";
import { Product } from "../models/product-model";

export const getAllProducts = (): Product[] => products;
