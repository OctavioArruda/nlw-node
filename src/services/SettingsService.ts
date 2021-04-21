import { Repository } from "typeorm";
import { Settings } from "../entities/Settings";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private _settingsRepository: Repository<Settings>;

  async create({chat, username} : ISettingsCreate) {
    const userAlreadyExists = await this._settingsRepository.findOne({
      username
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const settings = this._settingsRepository.create({
      chat,
      username
    });
  
    await this._settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService }