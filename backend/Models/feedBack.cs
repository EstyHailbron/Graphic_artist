using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public class feedBack
    {
        public string name { get; set; }
        public int phone { get; set; }
        public string mail { get; set; }
        public string content { get; set; }
        public int numOfLikes { get; set; }
        public bool isClick { get; set; }
    }
}