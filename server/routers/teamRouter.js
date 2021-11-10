import { Router } from 'express';
import { getTeams, syncTeams } from '../controllers/teamController';
const router = Router();

router.get('/teams', getTeams)
router.get('/teams/sync', syncTeams);

export const teamRoutes = router;