using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Controllers
{
    public class AppointmentController : ApiController
    {
        string strcon = ConfigurationManager.ConnectionStrings["DBModel"].ConnectionString;

        // GET: api/Appointment
        public HttpResponseMessage Get()
        {
            using (var connection = new SqlConnection(strcon))
            {
                var result = AppoinmentRepository.GetAppointments(connection);
                return Request.CreateResponse(result);
            }

        }
        // GET: api/Appointment/5
        public HttpResponseMessage Get(int id)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {
                    var patient = new Patient();
                    patient = AppoinmentRepository.GetAppointmentById(connection, id);
                    return Request.CreateResponse(HttpStatusCode.OK, patient);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }

        // POST: api/Appointment
        public HttpResponseMessage Post([FromBody]Patient patient)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {

                    var result = AppoinmentRepository.SaveAppointment(connection, patient);
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }

        // PUT: api/Appointment/5
        public HttpResponseMessage Put(int id, [FromBody]Patient patient)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {

                    var result = AppoinmentRepository.UpdateAppointment(connection, patient);
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }
        // DELETE: api/Appointment/5
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {

                    var result = AppoinmentRepository.DeleteAppointment(connection, id);
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }
    }
}
