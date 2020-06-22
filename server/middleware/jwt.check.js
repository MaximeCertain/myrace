import jwtUtils from "../utils/jwt.utils";

class JwtCheck {

    /**
     * Middleware de vérification du jeton jwt de l'utilsateur
     * @param req
     * @param res
     * @param next
     * @returns {Promise<*>}
     */
    static async check(req, res, next) {
        let headerAuth = req.headers['authorization'];
        console.log(headerAuth);
        let userId = await jwtUtils.getUserId(headerAuth);

        if (userId < 0){
            return res.status(401).json({'error': 'Invalid API Authentication'})
        }
        //   res.status(200).json({'userId': 'user found'})
        req.id = userId;
        next()
    };
}

export default JwtCheck
