class BaseController {
    static async checkRights(userInformation, id) {
        if (userInformation.isAdmin || userInformation.userId == id) {
                   return true
        }
        return false;
    }
}

export default BaseController