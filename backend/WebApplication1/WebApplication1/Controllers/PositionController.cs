using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Repository;

namespace WebApplication1.Controllers
{
    public class PositionController : ApiController
    {
        string strcon = ConfigurationManager.ConnectionStrings["DBModel"].ConnectionString;
        // GET: api/Position
        public HttpResponseMessage Get()
        {
            using (var connection = new SqlConnection(strcon))
            {
                var result = PositionRepository.GetPositions(connection);
                return Request.CreateResponse(result);
            }
        }

        // GET: api/Position/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Position
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Position/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Position/5
        public void Delete(int id)
        {
        }
    }
}
