import productRouters from "./routes/productRouter";

const express = require("express");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/products", productRouters);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
