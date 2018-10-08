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
    public class DashboardController : ApiController
    {
        string strcon = ConfigurationManager.ConnectionStrings["DBModel"].ConnectionString;
        // GET: api/Dashboard
        public HttpResponseMessage Get()
        {
            using (var connection = new SqlConnection(strcon))
            {
                var result = DashboardRepository.GetTotals(connection);
                return Request.CreateResponse(result);
            }

        }
        // GET: api/Dashboard/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Dashboard
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Dashboard/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Dashboard/5
        public void Delete(int id)
        {
        }
    }
}
