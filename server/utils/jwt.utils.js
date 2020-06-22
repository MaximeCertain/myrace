import jwt from "jsonwebtoken";
const JWT_SIGN_SECRET = 'O4sjdjfcxdhyrrd584ers4yt'
class JwtUtils {
    /**
     * Génère token lors d'une connexion
     * @param userData
     * @returns {Promise<undefined|*>}
     */
    static async generateTokenForUser(userData) {
        let isAdmin = 0;
        if(userData.TypeUser.code === "ROLE_ADMIN"){
            isAdmin = 1;
        }
        return jwt.sign({
            userId : userData.id,
            isAdmin: isAdmin
        }, JWT_SIGN_SECRET, {
            expiresIn: '2h'
        })
    }

    /**
     * Recupère le token soumis par l'utilisateur lors d'un appel API
     * @param authorization
     * @returns {Promise<*>}
     */
    static async parseAuthorization(authorization){
        return ((authorization != null) ? authorization.replace('Bearer ', '') : null);
    }

    /**
     * Vérifie la validité de l'api et renvoi l'id de l'utilisateur connecté
     * @param authorization
     * @returns {Promise<number>}
     */
    static async getUserId(authorization){
        let userId = -1;
        let token = await this.parseAuthorization(authorization);
        if(token != null){
            try {
                let jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if(jwtToken != null){
                    userId = jwtToken.userId;
                }
            }
            catch (e) {
                console.log(e.message);
            }
        }
        return userId;
    }
}

export default JwtUtils
