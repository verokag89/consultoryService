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
    public class ConsultoryController : ApiController
    {
        string strcon = ConfigurationManager.ConnectionStrings["DBModel"].ConnectionString;


        // GET: api/Consultory
        public HttpResponseMessage Get()
        {
            using (var connection = new SqlConnection(strcon))
            {
                var result = ConsultoryRepository.GetConsultory(connection);
                return Request.CreateResponse(result);
            }

        }

        // GET: api/Consultory/5
        public HttpResponseMessage Get(int id)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {
                    var consultory = new Consultory();
                    consultory = ConsultoryRepository.GetConsultoryById(connection, id);
                    return Request.CreateResponse(HttpStatusCode.OK, consultory);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }

        // POST: api/Consultory
        public HttpResponseMessage Post([FromBody]Consultory consultory)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {

                    var result = ConsultoryRepository.SaveConsultory(connection, consultory);
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }

        // PUT: api/Consultory/5
        public HttpResponseMessage Put(int id, [FromBody]Consultory consultory)
        {

            try
            {
                using (var connection = new SqlConnection(strcon))
                {

                    var result = ConsultoryRepository.UpdateConsultory(connection, consultory);
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }

        }

        // DELETE: api/Consultory/5
        public void Delete(int id)
        {
        }
    }
}
