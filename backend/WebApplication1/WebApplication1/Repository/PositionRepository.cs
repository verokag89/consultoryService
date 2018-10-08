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
    public static class PositionRepository
    {
        public static List<Position> GetPositions(SqlConnection connection)
        {

            List<Position> positions = new List<Position>();
            SqlDataReader rdr = null;
            try
            {
                using (SqlCommand cmd = new SqlCommand(UserDb.GetPositions, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Position position = new Position()
                        {
                            IdPosition = Convert.ToInt32(rdr["IdPosition"] != null ? rdr["IdPosition"] : 0),
                            PositionRol = rdr["Position"].ToString(),
                            Description = rdr["Description"].ToString()

                        };
                        positions.Add(position);
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

            return positions;
        }
    }
}