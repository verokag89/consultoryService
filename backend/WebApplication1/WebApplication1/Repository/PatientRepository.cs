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
    public class PatientRepository
    {

        public static List<Patient> GetPatients(SqlConnection connection)
        {

            List<Patient> patients = new List<Patient>();
            SqlDataReader rdr = null;
            try
            {
                using (SqlCommand cmd = new SqlCommand(PatientDb.GetPatients, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Patient patient = new Patient()
                        {
                            LastName = rdr["LastName"].ToString(),
                            FirstName = rdr["FirstName"].ToString(),
                            Email = rdr["Email"].ToString(),
                            IdPatient = Convert.ToInt32(rdr["IdPatient"].ToString() != "" ? rdr["IdPatient"] : 0),
                            Phone = rdr["Phone"].ToString(),
                            Phone2 =(rdr["Phone2"]).ToString(),
                            BirthDate = Convert.ToDateTime(rdr["BirthDate"] != null ? rdr["BirthDate"] : DateTime.Today.Date ),
                            Date = Convert.ToDateTime(rdr["Date"] != null ?  rdr["Date"]: DateTime.Today.Date),
                            Active = Convert.ToBoolean(rdr["Active"].ToString() != "" ? rdr["Active"] : false)
                        };
                        patients.Add(patient);
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

            return patients;
        }

        public static ResponseTransport<Patient> SavePatient(SqlConnection connection, Patient patient)
        {

            ResponseTransport<Patient> response = new ResponseTransport<Patient>();
            response.Entity = patient;
            try
            {
                using (SqlCommand cmd = new SqlCommand(PatientDb.PostPatient, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                  
                    cmd.Parameters.Add(new SqlParameter(PatientDb.FistName, patient.FirstName));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.LastName, patient.LastName));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.BirthDate, patient.BirthDate));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.Active, patient.Active));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.Phone, patient.Phone));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.Phone2, patient.Phone2));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.Email, patient.Email));


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

        public static Patient UpdatePatient(SqlConnection connection, Patient patient)
        {
            ResponseTransport<Patient> response = new ResponseTransport<Patient>();
            response.Entity = patient;
            try
            {
                using (SqlCommand cmd = new SqlCommand(PatientDb.PutPatient, connection))
                {

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter(PatientDb.FistName, patient.FirstName));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.LastName, patient.LastName));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.BirthDate, patient.BirthDate));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.Active, patient.Active));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.Phone, patient.Phone));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.Phone2, patient.Phone2));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.PatientId, patient.IdPatient));
                    cmd.Parameters.Add(new SqlParameter(PatientDb.Email, patient.Email));

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

        public static Patient GetPatientById(SqlConnection connection, int id)
        {
            Patient patient = new Patient();
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
                        patient = new Patient()
                        {
                            LastName = rdr["LastName"].ToString(),
                            FirstName = rdr["FirstName"].ToString(),
                            Email = rdr["Email"].ToString(),
                            IdPatient = Convert.ToInt32(rdr["IdPatient"].ToString() != "" ? rdr["IdPatient"] : 0),
                            Phone = rdr["Phone"].ToString(),
                            Phone2 = (rdr["Phone2"]).ToString(),
                            BirthDate = Convert.ToDateTime(rdr["BirthDate"] != null ? DateTime.Today.Date : rdr["BirthDate"]),
                            Date = Convert.ToDateTime(rdr["Date"] != null ? DateTime.Today.Date : rdr["Date"]),
                            Active = Convert.ToBoolean(rdr["Active"].ToString() != "" ? rdr["Active"] : false)
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

            return patient;
        }

    }
}