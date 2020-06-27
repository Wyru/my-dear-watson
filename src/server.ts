import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(3333).on('listening', () => {
  console.log('\n\x1b[30m\x1b[47m%s\x1b[0m', 'Test Watson');
  console.log('\nrunning on \x1b[32m%s\x1b[0m', 'http://localhost:3333');
});
