import { Router } from "express";
import { postUfValue, getActividades } from "../controllers/controller-convert.js";
import { postValidaUsuario } from "../controllers/controller-user.js";

const router = Router();

// Actividades
router.get("/actividades", getActividades);
router.post("/valor-uf", postUfValue);

// Usuarios
router.post("/login", postValidaUsuario);

export default router;