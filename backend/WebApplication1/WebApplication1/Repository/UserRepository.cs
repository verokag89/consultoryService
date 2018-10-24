using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Web;
using WebApplication1.Constant;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public class UserRepository
    {
        public static List<User> GetUser(SqlConnection connection)
        {

            List<User> users = new List<User>();
            SqlDataReader rdr = null;
            try
            {
                using (SqlCommand cmd = new SqlCommand(UserDb.GetUsers, connection))
                 {
                 
                    cmd.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        User user = new User() {
                            LastName = rdr["LastName"].ToString(),
                            FirstName = rdr["FirstName"].ToString(),
                            IdPosition = Convert.ToInt32(rdr["IdPosition"].ToString() != "" ? rdr["IdPosition"]: 0),
                            PositionRol = rdr["Position"].ToString(),
                            IdUser = Convert.ToInt32(rdr["IdUser"]),
                            Date = Convert.ToDateTime(rdr["Date"] != null ? DateTime.Today.Date : rdr["Date"]),
                        };
                        users.Add(user);
                    }

                }
               
            }
            catch (SqlException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                connection.Close();
            }

            return users;
        }

        public static ResponseTransport<User> SaveUser(SqlConnection connection, User user)
        {

            ResponseTransport<User> response = new ResponseTransport<User>();
            response.Entity = user;
            try
            {
                using (SqlCommand cmd = new SqlCommand(UserDb.PostUser, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter(UserDb.UserId, user.IdUser));
                    cmd.Parameters.Add(new SqlParameter(UserDb.UserName, user.FirstName));
                    cmd.Parameters.Add(new SqlParameter(UserDb.LastName, user.LastName));
                    cmd.Parameters.Add(new SqlParameter(UserDb.PositionId, user.IdPosition));
               
                    connection.Open();
                    int k = cmd.ExecuteNonQuery();
                    if (k != 0)
                    {
                        response.Success = true;
                    }
                    
                }

            }
            catch (SqlException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                connection.Close();
            }
            return response;
           
        }

        public static User UpdateUser(SqlConnection connection, User user)
        {
            ResponseTransport<User> response = new ResponseTransport<User>();
            response.Entity = user;
            try
            {
                using (SqlCommand cmd = new SqlCommand(UserDb.UpdateUser, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter(UserDb.UserId, user.IdUser));
                    cmd.Parameters.Add(new SqlParameter(UserDb.UserName, user.FirstName));
                    cmd.Parameters.Add(new SqlParameter(UserDb.LastName, user.LastName));
                    cmd.Parameters.Add(new SqlParameter(UserDb.PositionId, user.IdPosition));

                    connection.Open();
                    int k = cmd.ExecuteNonQuery();
                    if (k != 0)
                    {
                        response.Success = true;
                    }

                }

            }
            catch (SqlException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                connection.Close();
            }
            return response.Entity;
        }

        public static User GetUserById(SqlConnection connection, int id)
        {
            User user = new User();
            SqlDataReader rdr = null;
            try
            {
                using (SqlCommand cmd = new SqlCommand(UserDb.GetUserById, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter(UserDb.UserId, id));
                    connection.Open();
                    rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        user = new User()
                        {
                            LastName = rdr["LastName"].ToString(),
                            FirstName = rdr["FirstName"].ToString(),
                            IdPosition = Convert.ToInt32(rdr["IdPosition"] != null ? rdr["IdPosition"] : 0),
                            PositionRol = rdr["Position"].ToString(),
                            IdUser = Convert.ToInt32(rdr["IdUser"]),
                            Date = Convert.ToDateTime(rdr["Date"] != null ? DateTime.Today.Date : rdr["Date"]),
                        };
                    }

                }

            }
            catch (SqlException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                connection.Close();
            }

            return user;
        }

        public static ResponseTransport<User> DeleteUser(SqlConnection connection, int id)
        {

            ResponseTransport<User> response = new ResponseTransport<User>();

            try
            {
                using (SqlCommand cmd = new SqlCommand(UserDb.DeleteUserById, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter(UserDb.UserId, id));



                    connection.Open();
                    int k = cmd.ExecuteNonQuery();
                    if (k != 0)
                    {
                        response.Success = true;
                    }

                }

            }
            catch (SqlException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                connection.Close();
            }
            return response;
        }

    }
}