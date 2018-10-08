using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Controllers
{
    public class UserController : ApiController
    {
        string strcon = ConfigurationManager.ConnectionStrings["DBModel"].ConnectionString;

        // GET: api/User
        public HttpResponseMessage Get()
        {
             using (var connection = new SqlConnection(strcon))
             {
                var result = UserRepository.GetUser(connection);
                return Request.CreateResponse(result);
            }
        
        }

        // GET: api/User/5
        public HttpResponseMessage Get(int id)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {
                    var user = new User();
                    user = UserRepository.GetUserById(connection, id);
                    return Request.CreateResponse(HttpStatusCode.OK, user);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
                     
            }
        }

        // POST: api/User
        public HttpResponseMessage Post([FromBody]User user)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {
                    
                    var result = UserRepository.SaveUser(connection, user);
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }

        // PUT: api/User/5
        public HttpResponseMessage Put(int id, [FromBody]User user)
        {
            try
            {
                using (var connection = new SqlConnection(strcon))
                {

                    var result = UserRepository.UpdateUser(connection, user);
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            }
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
        }
    }
}
