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
    public class AppoinmentRepository
    {

        public static List<Appointment> GetAppointments(SqlConnection connection)
        {

            List<Appointment> appointment = new List<Appointment>();
            SqlDataReader rdr = null;
            try
            {
                using (SqlCommand cmd = new SqlCommand(AppointmentDb.GetAppointment, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Appointment patient = new Appointment()
                        {
                            Status = rdr["Status"].ToString(),
                            Comments = rdr["Comments"].ToString(),
                            PatientName = rdr["PatientName"].ToString(),
                            PatientPhone = rdr["PatientPhone"].ToString(),
                            UserName = rdr["UserName"].ToString(),
                            IdAppointment = Convert.ToInt32(rdr["IdAppointment"].ToString() != "" ? rdr["IdAppointment"] : 0),
                            IdUser = Convert.ToInt32(rdr["IdUser"].ToString() != "" ? rdr["IdUser"] : 0),
                            IdPatient = Convert.ToInt32(rdr["IdPatient"].ToString() != "" ? rdr["IdPatient"] : 0),
                            Date = Convert.ToDateTime(rdr["Date"] != null ?  rdr["Date"]: DateTime.Today.Date)
                        };
                        appointment.Add(patient);
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

            return appointment;
        }

        public static List<Appointment> GetAppointmentsCurrent(SqlConnection connection)
        {

            List<Appointment> appointment = new List<Appointment>();
            SqlDataReader rdr = null;
            try
            {
                using (SqlCommand cmd = new SqlCommand(AppointmentDb.GetAppointmentCurrent, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Appointment patient = new Appointment()
                        {
                            Status = rdr["Status"].ToString(),
                            Comments = rdr["Comments"].ToString(),
                            PatientName = rdr["PatientName"].ToString(),
                            PatientPhone = rdr["PatientPhone"].ToString(),
                            UserName = rdr["UserName"].ToString(),
                            IdAppointment = Convert.ToInt32(rdr["IdAppointment"].ToString() != "" ? rdr["IdAppointment"] : 0),
                            IdUser = Convert.ToInt32(rdr["IdUser"].ToString() != "" ? rdr["IdUser"] : 0),
                            IdPatient = Convert.ToInt32(rdr["IdPatient"].ToString() != "" ? rdr["IdPatient"] : 0),
                            Date = Convert.ToDateTime(rdr["Date"] != null ? rdr["Date"] : DateTime.Today.Date)
                        };
                        appointment.Add(patient);
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

            return appointment;
        }

        public static ResponseTransport<Appointment> SaveAppointment(SqlConnection connection, Appointment appoint)
        {

            ResponseTransport<Appointment> response = new ResponseTransport<Appointment>();
            response.Entity = appoint;
            try
            {
                using (SqlCommand cmd = new SqlCommand(PatientDb.PostPatient, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                  
                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.UserId, appoint.IdUser));
                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.PatientId, appoint.IdPatient));
                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.Comments, appoint.Comments));
                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.Status, appoint.Status));
                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.Date, appoint.Date));
 
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

        public static ResponseTransport<Appointment> DeleteAppointment(SqlConnection connection, int id)
        {

            ResponseTransport<Appointment> response = new ResponseTransport<Appointment>();
        
            try
            {
                using (SqlCommand cmd = new SqlCommand(AppointmentDb.DeleteAppointmentById, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.AppointmentId, id));

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

        public static Appointment UpdateAppointment(SqlConnection connection, Appointment appoint)
        {
            ResponseTransport<Appointment> response = new ResponseTransport<Appointment>();
            response.Entity = appoint;
            try
            {
                using (SqlCommand cmd = new SqlCommand(AppointmentDb.PutAppointment, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.UserId, appoint.IdUser));
                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.PatientId, appoint.IdPatient));
                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.Comments, appoint.Comments));
                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.Status, appoint.Status));
                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.Date, appoint.Date));
                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.AppointmentId, appoint.IdAppointment));

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

        public static Appointment GetAppointmentById(SqlConnection connection, int id)
        {
            Appointment appoint = new Appointment();
            SqlDataReader rdr = null;
            try
            {
                using (SqlCommand cmd = new SqlCommand(AppointmentDb.GetAppointmentById, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter(AppointmentDb.AppointmentId, id));
                    connection.Open();
                    rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        appoint = new Appointment()
                        {
                            Status = rdr["Status"].ToString(),
                            Comments = rdr["Comments"].ToString(),
                            PatientName = rdr["PatientName"].ToString(),
                            PatientPhone = rdr["PatientPhone"].ToString(),
                            UserName = rdr["UserName"].ToString(),
                            IdAppointment = Convert.ToInt32(rdr["IdAppointment"].ToString() != "" ? rdr["IdAppointment"] : 0),
                            IdUser = Convert.ToInt32(rdr["IdUser"].ToString() != "" ? rdr["IdUser"] : 0),
                            IdPatient = Convert.ToInt32(rdr["IdPatient"].ToString() != "" ? rdr["IdPatient"] : 0),
                            Date = Convert.ToDateTime(rdr["Date"] != null ? rdr["Date"] : DateTime.Today.Date)
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

            return appoint;
        }

    }
}