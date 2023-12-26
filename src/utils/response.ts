import { Response } from 'express';

export const sendResponse = (response: Response, status: number, message: string, data: any = null): Response => {
  return response.status(status).json({ message, status, data });
};
