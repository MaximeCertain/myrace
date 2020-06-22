import db from '../models/index.js';
import JwtUtils from "../utils/jwt.utils";
import {Op} from "sequelize"

class RacesController {
    static async create(req, res) {
        let status = 200;
        let body = [];
        try {
            let raceToCreate = {
                name: req.body.name,
                start: req.body.start,
                finish: req.body.finish,
                kilometers: req.body.kilometers,
                elevation: req.body.elevation,
                max_participants: req.body.max_participants,
                description: req.body.description,
                UserId: req.id
            };

            let raceFound = await db.Race.findOne({
                where: {name: raceToCreate.name}
            })

            if (raceFound != null) {
                return res.status(409).json({'error': 'race already exist'})
            }


            let race = await db.Race.create(raceToCreate);
            body = {"race": race, 'message': "race_created"};
        } catch (e) {
            status = 500;
            body = {'message': e.message};
        }
        return res.status(status).json(body);


    }

    static async update(req, res) {
        let status = 200;
        let body = [];
        try {
            let raceToUpdate = {
                name: req.body.name,
                start: req.body.start,
                finish: req.body.finish,
                kilometers: req.body.kilometers,
                elevation: req.body.elevation,
                max_participants: req.body.max_participants,
                description: req.body.description,
                UserId: req.id
            };

            let raceFound = await db.Race.findOne({
                where: {
                    name: raceToUpdate.name,
                    id: {
                        [Op.not]: req.params.id
                    }
                }
            })

            if (raceFound != null) {
                return res.status(409).json({'error': 'race already exist with this name'})
            }


            let race = await db.Race.update(raceToUpdate,
                {
                    where: {
                        id: req.params.id
                    }
                }
            );
            body = {'message': 'updated_race'};
        } catch (e) {
            status = 500;
            body = {'message': e.message};
        }
        return res.status(status).json(body);
    }

    static async details(req, res) {
        let status = 200;
        let body = [];
        try {
            let race = await db.Race.findOne({
                where: {id: req.params.id},
                include:  [db.User, "Runners", {
                    model: db.Message,
                    as : "Messages",
                    include:[{
                        model: db.User
                    }]
                }]
            })
            if (race) {
                status = 201
                body = {'race': race, 'message': 'getting race'};
            } else {
                status = 404
                body = {'race': null, 'message': 'not found race'};
            }
        } catch (e) {
            console.log(e.message)
        }
        return res.status(status).json(body);
    }


}

export default RacesController