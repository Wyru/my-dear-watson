import connection from '../../database/connection';
import { Request, Response } from 'express';

export default async (request:Request, response:Response) => {
  try {
    const comments = await (connection('comments').select('*'));

    response.status(201).json({
      success: true,
      data: comments
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.toString()
    });
  }
};
