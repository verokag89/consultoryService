using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class ResponseTransport<T> where T : class, new()
    {
        public int Response { get; set; }
        public bool Success { get; set; } = true;
        public string Message { get; set; } = "";
        public Int32 StatusCode { get; set; } = 0;

        public List<T> Records { get; set; }
        
        public T Entity { get; set; }
        public Int32 TotalRecordCount { get; set; }
        public string Text { get; set; }

        public ResponseTransport()
        {
            this.Records = new List<T>();
            this.Entity = new T();
            this.Success = true;
        }

        public void SetRecords(List<T> lstRecords)
        {
            this.Records = lstRecords;
            this.Success = true;
        }
    }

}