export class PathConstants {


    //url that contain our apis
    //static basePath = 'http://localhost:54289'
    static DATE_FMT = "yyyy-MM-dd"
    static basePath= 'http://localhost:63314'

    /* Begin -> Home*/
    static GET_TOTALS = "/api/Dashboard"; //"/api/Users";
    /* End -> Home*/

    /* Begin -> Users*/
    static POST_USER = "/api/User";
    static GET_USER = "/api/User"; //"/api/Users";
    static GET_USER_BY_ID = "/api/Users/";
    static PUT_USER = "/api/Users";
    static GET_POSITIONS = "/api/Position";
    /* End -> Users*/

    /* Begin -> Consultory*/
    static POST_CONSULTORY = "/api/Consultory"
    static PUT_CONSULTORY = "/api/Consultory"
    static GET_CONSULTORY = "/api/Consultory"
    /* End -> Consultory*/

    /* Begin -> Patients*/
    static POST_PATIENT ="/api/Patient"
    static PUT_PATIENT ="/api/Patient/"
    static GET_PATIENTS ="/api/Patient"
    static GET_PATIENT_BY_ID ="/api/Patient/"
    static DELETE_PATIENT = "/api/Patient/"
    /* End -> Patients*/


    static getWorkingPath(key: string): string {
        return this.basePath + key;
    }
}