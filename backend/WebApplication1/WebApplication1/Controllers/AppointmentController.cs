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

        // GET: api/Appointment
        [Route("api/Appointment/{idCurrent}/{isCurrent}")]
        public HttpResponseMessage Get(string idCurrent,string isCurrent="")
        {
            using (var connection = new SqlConnection(strcon))
            {
                var result = AppoinmentRepository.GetAppointmentsCurrent(connection);
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
                    var cita = new Appointment();
                    cita = AppoinmentRepository.GetAppointmentById(connection, id);
                    return Request.CreateResponse(HttpStatusCode.OK, cita);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }

        // POST: api/Appointment
        public HttpResponseMessage Post([FromBody]Appointment appoint)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {

                    var result = AppoinmentRepository.SaveAppointment(connection, appoint);
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }

        // PUT: api/Appointment/5
        public HttpResponseMessage Put(int id, [FromBody]Appointment appoint)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {

                    var result = AppoinmentRepository.UpdateAppointment(connection, appoint);
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
