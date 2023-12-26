import mongoose, { Document, Schema } from 'mongoose';
import jwt from 'jsonwebtoken';

export interface IUser extends Document {
  _id: string;
  name: string;
  mobile: string;
  email: string;
  authToken: string;
  userRole?: 'user' | 'admin';
  _created_at: Date;
  _updated_at: Date;

  generateToken: () => string;
}

const UserSchema = new Schema<IUser>(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10,
    },
    email: {
      type: String,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    authToken: {
      type: String,
      required: true,
    },
    userRole: {
      type: String,
      enum: ['user', 'admin'],
      default : 'user'
    },
  },
  {
    timestamps: {
      createdAt: '_created_at',
      updatedAt: '_updated_at',
    },
    versionKey: false,
  }
);

UserSchema.methods.generateToken = function () {
  const payload = {
    user: {
      name: this.name,
      _id: this._id,
      mobile: this.mobile,
      userRole: this.userRole,
    },
  };

  const token = jwt.sign(payload, process.env.SceretKey as string);
  this.authToken = token;
  return token;
};

const User = mongoose.model<IUser>('User', UserSchema, 'User');
export default User;
