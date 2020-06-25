import connection from '../../database/connection';
import { Request, Response } from 'express';

export default async (request:Request, response:Response) => {
  try {
    const { text } = request.body;

    const comment = await (connection('comments').insert({
      text
    }));

    response.status(201).json({
      success: true,
      data: {
        id: comment[0]
      }
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.toString()
    });
  }
};
