class VerificationUtils {

    static async isInt(n){
        return Number(n) === n && n % 1 === 0;
    }

    static async isFloat(n){

        console.log(parseFloat(n))
        return (parseFloat(n) > 0)
    }

}

export default VerificationUtils