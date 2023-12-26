import { Request, Response, NextFunction } from 'express';

export const customLogger = (req: Request, res: Response, next: NextFunction): void => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const body = JSON.stringify(req.body, null, 2);

  // Log each piece of information on separate lines
  console.log(`[${timestamp}] ${method}`);
  console.log(`URL: ${url}`);
  console.log('Body:');
  console.log(body);

  next();
};

export const apiResponseTime = (req: Request, res: Response, next: NextFunction): void => {
  const startTime = new Date();
  res.on('finish', () => {
    const endTime = new Date();
    const executionTime = endTime.getTime() - startTime.getTime(); // Time in milliseconds
    console.log('API-Response-Time', executionTime);
  });
  next();
};

export const log = (message: any): void => {
  console.log(message);
};
