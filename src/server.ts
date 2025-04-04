import { json } from "stream/consumers";

import productsRouters from "./routes/productRouter";
import { getAllProducts } from "./services/product-service";

const express = require("express");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/products", (req: any, res: any) => {
  res.json(getAllProducts());
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
