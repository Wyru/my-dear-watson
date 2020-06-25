import connection from '../../database/connection';
import { Request, Response } from 'express';

export default async (request:Request, response:Response) => {
  const { id } = request.params;
  try {
    await (connection('comments').where('id', id)
      .del());

    response.status(200).json({
      success: true
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.toString()
    });
  }
};
