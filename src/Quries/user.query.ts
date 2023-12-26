import UserModel, { IUser } from '../db/users';

class UserQueries {
  async findByMobile(mobile: string): Promise<IUser | null> {
    console.log(mobile)
    const res = await UserModel.findOne({ mobile });
    console.log(res)
    return UserModel.findOne({ mobile });
  }

  async createUser(userDetails: Partial<IUser>): Promise<IUser> {
    const user = new UserModel(userDetails);
    user.generateToken();
    return user.save();
  }
}

export default new UserQueries();
