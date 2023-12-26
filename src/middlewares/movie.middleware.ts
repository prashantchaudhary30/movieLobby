import { Request as ExpressRequest, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedUser {
  user: {
    name: string;
    _id: string;
    mobile: string;
    userRole: string;
  };
}

interface RequestWithUser extends ExpressRequest {
    user?: DecodedUser['user'];
  }

const verifyToken = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Token is missing' });
  }

  console.log('token', token.replace('Bearer ', ''));

  jwt.verify(
    token.replace('Bearer ', ''),
    process.env.SecretKey || '2O2OAppBackendDevelopment',
    (err: jwt.VerifyErrors | null, decoded: DecodedUser | undefined) => {
      if (err) {
        console.log('error in ', err);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
      }

      if (decoded && decoded.user) {
        req.user = decoded.user;
        console.log(decoded);
        next();
      } else {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
      }
    }
  );
};

const checkAdminRole = (req: RequestWithUser, res: Response, next: NextFunction) => {
  if (req.user && req.user.userRole !== 'admin') {
    return res.status(403).json({ message: 'Forbidden: User does not have admin role' });
  }

  next();
};

export { verifyToken, checkAdminRole };
