import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";
import { Settings } from "./entities/Settings";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

export { routes };