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
        let userInformation = await jwtUtils.getUserInformation(headerAuth);
        if (userInformation.userId < 0){
            return res.status(401).json({'error': 'Invalid API Authentication'})
        }
        req.userInformation = userInformation;

        next()
    };
}

export default JwtCheck
