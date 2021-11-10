import express from 'express';
import cors from 'cors'
import { port } from './config';
import { teamRoutes } from './routers/teamRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', teamRoutes);

app.listen(port, () => console.log('Server listening on port ' + port));