import { Repository } from "typeorm";
import { User } from "../entities/User";

class UsersService {
  private _usersRepository: Repository<User>;

  async create(email: string) {
    const user = await this._usersRepository.findOne({
      email
    });

    if (user) 
      return user;
    
    const newUser = this._usersRepository.create({
      email
    });

    await this._usersRepository.save(newUser);
    return newUser;
  }
}

export { UsersService }