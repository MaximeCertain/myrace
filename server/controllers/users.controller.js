import bcrypt from "bcryptjs"
import db from '../models/index.js';
import JwtUtils from "../utils/jwt.utils";

class UserController {

    static async list(req, res) {
    }

    static async register(req, res) {
        let user = {
            email: req.body.email,
            lastname: req.body.email,
            firstname: req.body.email,
            description: req.body.description,
            age: req.body.age,
            password: req.body.password,
            TypeUserId: 1
        }

        let userFound = await db.User.findOne({
            where: {email: user.email}
        })

        if (userFound != null) {
            return res.status(409).json({'error': 'user already exist'})
        }
        const salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;

        let newUser = await db.User.create(user);
        return res.status(201).json({
            'userId': newUser.id
        })
    }


    static async login(req, res) {
        let status = 200;
        let body = [];
        try {
            let email = req.body.email;
            let password = req.body.password;
            console.log(email)
            console.log(password)

            let userFound = await db.User.findOne({
                where: {email: email},
                include: [{
                    model: db.TypeUser,
                    required: true
                }]
            });
            let matchPassword = (await bcrypt.compare(password, userFound.password));
            if (matchPassword) {
                body = {
                    'userId': userFound.id,
                    'token': await JwtUtils.generateTokenForUser(userFound),
                    'message': "login_succesfull"
                };
            } else {
                body = {'message': "wrong_password_or_email"};
            }
        } catch (e) {
            status = 500;
            body = {'message': e.message};
        }
        return res.status(status).json(body);
    }

    static async loggedUserDetails(req, res) {
        let status = 200;
        let body = [];

        let user = await db.User.findOne({
            where: {id: req.id}
        })
        if (user) {
            res.status(201).json(user);
        } else {
            res.status(404).json({'error': 'user not found'})
        }
    }

    static async details(req, res) {
        let status = 200;
        let body = [];
        try {
            let user = await db.User.findOne({
                where: {id: req.params.id},
                include:  ["RacesParticipations", "CreatedRaces"]
            })
            if (user) {
                status = 201
                body = {'user': user, 'message': 'getting user'};
            } else {
                status = 404
                body = {'user': null, 'message': 'not found user'};
            }
        } catch (e) {
            console.log(e.message)
        }
        return res.status(status).json(body);
    }

    static async delete(req, res) {
        let status = 200;
        let body = [];
        try {
            let user = await db.User.destroy({
                where: {id: req.params.id}
            })
            body = {'message': 'user_deleted'};
        } catch (e) {
            body = {'message': e.message};
        }
        return res.status(status).json(body);
    }

    static async update(req, res) {
        let status = 200;
        let body = [];
        try {
            let userToUpdate = {
                email: req.body.email,
                password: req.body.password,
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                age: req.body.age,
                description: req.body.description,
                picture: req.body.picture,
                TypeUserId: req.body.TypeUserId
            };

            const salt = await bcrypt.genSalt(10);
            userToUpdate.password = await bcrypt.hash(userToUpdate.password, salt);

            let user = await db.User.update(userToUpdate, {
                where: {id: req.params.id}
            })

            let race = await db.Race.findOne( {
                where: {id: 1}
            })

           await db.UserRaces.create({
               UserId: req.params.id, RaceId: race.id
           })
            console.log(user)

            body = {'message': 'user_updated'};
        } catch (e) {
            body = {'message': e.message};
        }
        return res.status(status).json(body);
    }
}

export default UserController;