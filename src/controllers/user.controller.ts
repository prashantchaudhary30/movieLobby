import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { sendResponse } from '../utils/response';
import { STATUS_CODE } from '../helper/Statuscode';
import { CONSTANT } from '../helper/constant';
import UserQueries from '../Quries/user.query';

/**
 * 
 * @param req : name, mobile, email, userRole(optional : default user) 
 * @param res : if user already exists then details of existing user otherwise CREATE a new user
 * @returns 
 */

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { name, mobile, email, userRole } = body;

    const alreadyUser = await UserQueries.findByMobile(mobile);
    console.log(alreadyUser)
    if (alreadyUser) {
      return sendResponse(
        res,
        STATUS_CODE.OK,
        CONSTANT.USER_ALREADY_EXISTS,
        alreadyUser
      );
    }

    const userData = {
      _id: uuidv4(),
      name,
      mobile,
      email,
      userRole,
    };

    const user = await UserQueries.createUser(userData);
    return sendResponse(
      res,
      STATUS_CODE.CREATED,
      CONSTANT.USER_CREATED_SUCCESSFULL,
      user
    );
  } catch (error) {
    console.log('error in registerUser', error);
    return sendResponse(
      res,
      STATUS_CODE.BAD_REQUEST,
      CONSTANT.SOMETHING_WENT_WRONG,
      error
    );
  }
};
