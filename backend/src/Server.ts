import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import winston from 'winston';
import ecsFormat from '@elastic/ecs-winston-format'

//For env File 
dotenv.config();

const logger = winston.createLogger({
  level: 'info',
  format: ecsFormat(),
  transports: [new winston.transports.Console()],
});

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.get('/posts', (req: Request, res: Response) => {
  logger.info('get posts from user uid345')
  res.send('Get posts successfully');
});

app.get('/videos', (req: Request, res: Response) => {
  res.send('Get videos successfully');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});