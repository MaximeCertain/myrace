import db from '../models/index.js';
import VerificationUtils from "../utils/verification.utils";

class UserRacesController {
    static async registerRace(req, res) {
        let status = 200;
        let body = [];
        try {
            let userRaceToCreate = {
                UserId: req.userInformation.userId,
                RaceId: req.params.raceId
            }

            let userRace = await db.UserRaces.create({
                UserId: req.userInformation.userId, RaceId: req.params.raceId
            })

            body = {'userRace': userRace, 'message': 'created participation'};
        } catch (e) {
            body = {'error': e.message};

        }
        return res.status(status).json(body);

    }

    static async delete(req, res) {
        let status = 200;
        let body = [];
        try {
            let userRaceToDelete = {
                UserId: req.params.userId,
                RaceId: req.params.raceId
            }

            await db.UserRaces.destroy({where: {UserId: userRaceToDelete.UserId, RaceId: userRaceToDelete.RaceId}}
            );
            body = {'message': 'deleted participation'};


        } catch (e) {
            body = {'error': e.message};


        }
        return res.status(status).json(body);
    }

    static async update(req, res) {
        let status = 200;
        let body = [];
        try {
            let userRaceToCreate = {
                UserId: req.params.userId,
                RaceId: req.params.raceId,
                bibNumber: req.body.bibNumber,
                time_achieved: req.body.time_achieved
            }
            console.log(userRaceToCreate)

            if ((!await VerificationUtils.isFloat(userRaceToCreate.bibNumber)) || !await VerificationUtils.isFloat(userRaceToCreate.time_achieved)) {
                return res.status(500).json({'errors': 'invalid fields'});
            }


            let userRace = await db.UserRaces.update(userRaceToCreate, {
                where: {UserId: userRaceToCreate.UserId, RaceId: userRaceToCreate.RaceId}
            });
            body = {'message': 'updated participation line'};

        } catch (e) {
            body = {'error': e.message};
        }
        return res.status(status).json(body);
    }
}

export default UserRacesController