using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Constant
{
    public static class ConstantDB
    {

    }


    public static class DashboardDb {
        public static string GetTotals = "usp_getDashboard";
    }

    public static class PatientDb {

        public static string GetPatients = "usp_getPatients";
        public static string PostPatient = "usp_savePatient";
        public static string PutPatient = "usp_updatePatient";
        public static string GetPatientById = "usp_getPatientById";

        public static string PatientId = "@pPatientId";
        public static string FistName = "@pFirstName";
        public static string LastName = "@pLastName";
        public static string BirthDate = "@pBirthDate";
        public static string Active = "@pActive";
        public static string Phone = "@pPhone";
        public static string Phone2 = "@pPhone2";
        public static string Email = "@pEmail";
    }

    public static class ConsultoryDb
    {
        public static string GetConsultory = "usp_getConsultorys";
        public static string GetConsultoryById = "usp_getConsultoryById";
        public static string SaveConsultory = "usp_saveConsultory";
        public static string UpdateConsultory = "usp_updateConsultory";

        public static string IdConsultory= "@pIdConsultory";
        public static string Location ="@pLocation";
        public static string Name = "@pName";
        public static string Phone = "@pPhone";
    }
    public static class UserDb
    {

        public static string GetUsers = "usp_getUsers";
        public static string PostUser = "usp_saveUser";
        public static string PutUser = "usp_updateUser";
        public static string GetUserById = "usp_getUserById";
        public static string GetPositions = "usp_getPositions";
        public static string UpdateUser= "usp_updateUser";

        public static string UserId = "@pUserId";
        public static string UserName = "@pUserName";
        public static string LastName = "@pLastName";
        public static string PositionId = "@pPositionId";
        public static string FormatDate = "@pFormatDate";

    
    }
}