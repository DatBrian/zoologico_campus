import App from "./app.js";
import AnimalesRoutes from "./routes/AnimalesRoutes.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import EmpleadosRoutes from "./routes/EmpleadosRoutes.js";
import EventosRoutes from "./routes/EventosRoutes.js";
import JornadasRoutes from "./routes/JornadasRoutes.js";
import PasesRoutes from "./routes/PasesRoutes.js";
import RestauranteCafeteriasRoutes from "./routes/RestauranteCafeteriasRoutes.js";
import ServiciosRoutes from "./routes/ServiciosRoutes.js";

const app = new App([
    new AnimalesRoutes(),
    new EmpleadosRoutes(),
    new EventosRoutes(),
    new JornadasRoutes(),
    new PasesRoutes(),
    new RestauranteCafeteriasRoutes(),
    new ServiciosRoutes(),
]);

app.listen();
