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
    public class DashboardRepository
    {
        public static Dashboard GetTotals(SqlConnection connection)
        {
            Dashboard totals = new Dashboard();
            SqlDataReader rdr = null;
            try
            {
                using (SqlCommand cmd = new SqlCommand(DashboardDb.GetTotals, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        totals = new Dashboard()
                        {
                            TotalConsultory = Convert.ToInt32(rdr["TotalConsultory"] != null ? rdr["TotalConsultory"] : 0),
                            TotalPatients = Convert.ToInt32(rdr["TotalPatients"] != null  ? rdr["TotalPatients"] : 0),
                            TotalUsers = Convert.ToInt32(rdr["TotalUsers"] != null ? rdr["TotalUsers"] : 0),
                            TotalAppointments = Convert.ToInt32(rdr["TotalAppointments"] != null ? rdr["TotalAppointments"] : 0)
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

            return totals;
        }
    }
}