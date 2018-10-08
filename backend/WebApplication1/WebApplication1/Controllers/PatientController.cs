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
    public class PatientController : ApiController
    {
        string strcon = ConfigurationManager.ConnectionStrings["DBModel"].ConnectionString;

        // GET: api/Patient
        public HttpResponseMessage Get()
        {
            using (var connection = new SqlConnection(strcon))
            {
                var result = PatientRepository.GetPatients(connection);
                return Request.CreateResponse(result);
            }

        }
        // GET: api/Patient/5
        public HttpResponseMessage Get(int id)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {
                    var patient = new Patient();
                    patient = PatientRepository.GetPatientById(connection, id);
                    return Request.CreateResponse(HttpStatusCode.OK, patient);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }

        // POST: api/Patient
        public HttpResponseMessage Post([FromBody]Patient patient)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {

                    var result = PatientRepository.SavePatient(connection, patient);
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }

        // PUT: api/Patient/5
        public HttpResponseMessage Put(int id, [FromBody]Patient patient)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {

                    var result = PatientRepository.UpdatePatient(connection, patient);
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }
        // DELETE: api/Patient/5
        public void Delete(int id)
        {
        }
    }
}
