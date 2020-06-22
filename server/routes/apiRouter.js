import pkg from 'express';

const {Router} = pkg;
// Imports
import userController from '../controllers/users.controller.js'
import JwtCheck from "../middleware/jwt.check";
import RacesController from "../controllers/races.controller";
import UserRacesController from "../controllers/user_races.controller";
import MessagesController from "../controllers/messages.controller";
// Router
const router = Router();

router.post('/users', userController.register);
router.post('/login', userController.login);
router.get('/logged-details', JwtCheck.check, userController.loggedUserDetails);
router.get('/users/:id', JwtCheck.check, userController.details);
router.put('/users/:id', JwtCheck.check, userController.update);
router.delete('/users/:id', JwtCheck.check, userController.delete);

router.post('/races', JwtCheck.check, RacesController.create);
router.put('/races/:id', JwtCheck.check, RacesController.update);
router.get('/races/:id', JwtCheck.check, RacesController.details);

router.post('/user_races', JwtCheck.check, UserRacesController.registerRace);
router.put('/user_races/:userId/:raceId', JwtCheck.check, UserRacesController.update);
router.delete('/user_races/:userId/:raceId', JwtCheck.check, UserRacesController.delete);

router.post('/messages', JwtCheck.check, MessagesController.create);
router.put('/messages/:id/', JwtCheck.check, MessagesController.update);
router.get('/messages/:id', JwtCheck.check, MessagesController.details);
router.delete('/messages/:id', JwtCheck.check, MessagesController.delete);

export default router;