using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public class contactUs
    {
        public string name { get; set; }
        public int phone { get; set; }
        public string address { get; set; }
        public string mail { get; set; }
        public Category category { get; set; }
        public string content { get; set; }
    }
}