import express from "express";
import methodOverride from "method-override";
import { engine } from "express-handlebars";
import { resolve } from "path";
import { fileURLToPath } from "url";
import homeRoutes from "./routes/home.js";
// Em ESM não existem __filename e __dirname automáticos.
// As duas linhas abaixo reconstroem esses caminhos.
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");
class App {
constructor() {
this.app = express();
this.middlewares();
this.views();
this.routes();
}
middlewares() {
// Lê dados enviados por formulários HTML
this.app.use(express.urlencoded({ extended: true }));
// Lê dados enviados em formato JSON
this.app.use(express.json());
// Permite usar PUT e DELETE a partir de formulários
this.app.use(methodOverride("_method"));
}
views() {
this.app.engine(
"handlebars",
engine({
defaultLayout: "main",
layoutsDir: resolve(__dirname, "views", "layouts"),
})
);
this.app.set("view engine", "handlebars");
this.app.set("views", resolve(__dirname, "views"));
}

routes() {
    this.app.use("/", homeRoutes);
}

}

export default new App().app;
