import App from "./app.js";
import AnimalesRoutes from "./routes/AnimalesRoutes.js";
import EmpleadosRoutes from "./routes/EmpleadosRoutes.js";

const app = new App([new AnimalesRoutes, new EmpleadosRoutes]);

app.listen();
