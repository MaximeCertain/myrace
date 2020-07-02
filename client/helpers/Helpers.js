import moment from "moment";
//https://momentjs.com/
class Helpers{
    static getEndOfWeek(){
        let today = moment();
        return today.endOf("week").format("YYYY-MM-DDTh:mm:ss");
    }
    static getActualDate(){
        return moment().format('YYYY-MM-DDTh:mm:ss')
    }
    static extractDayFromDate(date){
        return moment(date).format('DD');
    }
    static extractMonthFromDate(date){
        return moment(date).format('MMM');
    }
    static getDate(date) {
        return (moment(date).format('YYYY-MM-DD'));
    }

    /**
     * Animations -> qq chose
     */
}

export default Helpers