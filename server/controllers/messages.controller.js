import db from '../models/index.js';
import {Op} from "sequelize"

class MessagesController {

    static async create(req, res) {
        let status = 200;
        let body = [];
        try {
            let messageToCreate = {
                RaceId: req.body.race_id,
                UserId: req.userInformation.userId,
                TypeMessageId: req.body.type_message_id,
                description: req.body.description
            };
            console.log(messageToCreate);

            let message = await db.Message.create(messageToCreate);

            body = {"message_created": message, 'message': "message_created"};
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
            let messageToUpdate = {
                RaceId: req.body.race_id,
                UserId: req.userInformation.userId,
                TypeMessageId: req.body.type_message_id,
                description: req.body.description
            };

            let message = await db.Message.update(messageToUpdate,
                {
                    where: {
                        id: req.params.id
                    }
                }
            );
            body = {'message': 'updated_message'};
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
            let message = await db.Message.findOne({
                where: {id: req.params.id},
                include: [db.TypeMessage]
            })
            if (message) {
                status = 201
                body = {'message_getted': message, 'message': 'getting message'};
            } else {
                status = 404
                body = {'message_getted': null, 'message': 'not found message'};
            }
        } catch (e) {
            status = 500;
            body = {'message': e.message};
        }
        return res.status(status).json(body);
    }

    static async delete(req, res) {
        let status = 200;
        let body = [];
        try {
            let message = await db.Message.destroy({
                where: {id: req.params.id}
            })
            body = {'message': 'deleted message'};
        } catch (e) {
            status = 500;
            body = {'message': e.message};
        }
        return res.status(status).json(body);
    }
}

export default MessagesController