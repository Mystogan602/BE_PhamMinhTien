import express from "express";
import swaggerUi from "swagger-ui-express";
import { specs } from "./config/swagger";
import resourceRoutes from "./routes/resourceRoutes";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api/resources", resourceRoutes);

export default app;
