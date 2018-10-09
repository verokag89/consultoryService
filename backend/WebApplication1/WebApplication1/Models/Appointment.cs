using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Appointment
    {
        public int IdAppointment { get; set; }
        public int IdPatient { get; set; }
        public int IdUser { get; set; }   
        public DateTime? Date { get; set; }
        public string Status { get; set; }
        public string Comments { get; set; }
 
    }
}