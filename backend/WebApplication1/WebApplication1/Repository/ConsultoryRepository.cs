using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using WebApplication1.Constant;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public class ConsultoryRepository
    {

        public static List<Consultory> GetConsultory(SqlConnection connection)
        {

            List<Consultory> consultoryLst = new List<Consultory>();
            SqlDataReader rdr = null;
            try
            {
                using (SqlCommand cmd = new SqlCommand(ConsultoryDb.GetConsultory, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Consultory consultory = new Consultory()
                        {
                            Name = rdr["Name"].ToString(),
                            Phone = rdr["Phone"].ToString(),
                            IdConsultory = Convert.ToInt32(rdr["IdConsultory"].ToString() != "" ? rdr["IdConsultory"] : 0),
                            Location = rdr["Location"].ToString()
                         };
                        consultoryLst.Add(consultory);
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

            return consultoryLst;
        }

        public static ResponseTransport<Consultory> SaveConsultory(SqlConnection connection, Consultory consultory)
        {

            ResponseTransport<Consultory> response = new ResponseTransport<Consultory>();
            response.Entity = consultory;
            try
            {
                using (SqlCommand cmd = new SqlCommand(ConsultoryDb.SaveConsultory, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter(ConsultoryDb.Name, consultory.Name));
                    cmd.Parameters.Add(new SqlParameter(ConsultoryDb.Location, consultory.Location));
                    cmd.Parameters.Add(new SqlParameter(ConsultoryDb.Phone, consultory.Phone));
              

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

        public static ResponseTransport<Consultory> UpdateConsultory(SqlConnection connection, Consultory consultory)
        {

            ResponseTransport<Consultory> response = new ResponseTransport<Consultory>();
            response.Entity = consultory;
            try
            {
                using (SqlCommand cmd = new SqlCommand(ConsultoryDb.UpdateConsultory, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter(ConsultoryDb.Name, consultory.Name));
                    cmd.Parameters.Add(new SqlParameter(ConsultoryDb.Location, consultory.Location));
                    cmd.Parameters.Add(new SqlParameter(ConsultoryDb.Phone, consultory.Phone));
                    cmd.Parameters.Add(new SqlParameter(ConsultoryDb.IdConsultory, consultory.IdConsultory));

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

        public static Consultory GetConsultoryById(SqlConnection connection, int id)
        {
            Consultory consultory = new Consultory();
            SqlDataReader rdr = null;
            try
            {
                using (SqlCommand cmd = new SqlCommand(ConsultoryDb.GetConsultoryById, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter(ConsultoryDb.IdConsultory, id));
                    connection.Open();
                    rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        consultory = new Consultory()
                        {
                            Name = rdr["Name"].ToString(),
                            Phone = rdr["Phone"].ToString(),
                            IdConsultory = Convert.ToInt32(rdr["IdConsultory"] != null ? 0 : rdr["IdConsultory"]),
                            Location = rdr["Location"].ToString()
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

            return consultory;
        }
    }
}