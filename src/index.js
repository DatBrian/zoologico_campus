import App from "./app.js";
import AnimalesRoutes from "./routes/AnimalesRoutes.js";

const app = new App([new AnimalesRoutes]);

app.listen();
