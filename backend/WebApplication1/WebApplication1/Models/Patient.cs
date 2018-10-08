using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Patient
    {
        public int IdPatient { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime? Date { get; set; }
        public DateTime BirthDate { get; set; }
        public string Phone { get; set; }
        public string Phone2 { get; set; }
        public bool Active { get; set; }
        public string Email { get; set; }
    }
}