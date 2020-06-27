import connection from '../../database/connection';
import { Request, Response } from 'express';
import config from '@config/index';
import axios from 'axios';

export default async (request:Request, response:Response) => {
  const { id } = request.params;
  const { voice } = request.query;
  try {
    const comments = await (connection('comments').select('*').where({ id }));

    if (comments.length === 0) {
      response.status(404).json({
        success: false,
        message: 'Comentário não encontrado!'
      });

      return;
    }

    const [comment] = comments;

    const audio = await axios.post(config.Watson.url ?? '.env, where are you?', {
      text: comment.text
    },
    {
      headers: {
        Accept: 'audio/wav'
      },
      params: {
        voice
      },
      auth: {
        username: 'apikey',
        password: config.Watson.key ?? '.env, where are you?'
      },
      responseType: 'arraybuffer'
    }
    );

    response.writeHead(200, {
      ...audio.headers
    });

    response.end(audio.data);
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.toString()
    });
  }
};
