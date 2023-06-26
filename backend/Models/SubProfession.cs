using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public enum Category
    {
        graphics,
        Photo,
        WebDesign,
        Albums,
        VideoEditing
    }
    public class SubProfession
    {
        public string category { get; set; }
        public string description { get; set; }
        public string image { get; set; }
    }
}