using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;

namespace Web.Models
{
    public class DB
    {
        public static List<SubProfession> SubProfessionList = new List<SubProfession>()
        {
            new SubProfession { category = "Albums", description = " Digital photo album design using the most advanced design interface of its kind in Israel. High-quality and professional printing of digital photo albums at competitive prices." ,image="../../../assets/91c16351daab92c5bbf65f5d377912f0.jpg"},
            new SubProfession { category = "Photo", description = "In the world of branding and marketing, a good picture is worth much more than a thousand words.At BrandWiz, an advanced photography studio and rich experience of over 25 years.The studio specializes in photography for advertising, public relations, marketing and industry purposes.We offer product photography services for a variety of fields, pack-shot photography, promotional product photography, lifestyle photography for printed and online catalogs, photography for packaging." , image="../../../assets/AAKlU4R.jpg" },
            new SubProfession { category = "VideoEditing", description = "A presentation editing company can provide you with new insights you hadn't thought of. In order to conduct a presentation in a professional manner, several abilities are required. A presentation should convey messages clearly and accurately." ,image="../../../assets/Premiere_pro_screen_shot.png"},
            new SubProfession { category = "graphics", description = " Digital photo album design using the most advanced design interface of its kind in Israel. High-quality and professional printing of digital photo albums at competitive prices.",image="../../../assets/24425ImageFile2.jpg"},
            new SubProfession { category = "WebDesign", description = "Graphic design is basically the way we present a certain topic in a visual way.As mentioned, the tools are writing, illustration, drawing and photography.We process the material in graphic software such as Photoshop, Illustrator and InDesignand create a printed or online visual product that conveys a marketing, advertising, social, personal message." , image="../../../assets/responsive-devices-elegant-desktop-with-ux-design-website-3d-rendering.jpg"},
        };

        public static List<feedBack> feedBackList = new List<feedBack>()
        {
            new feedBack {name="Dadi",phone=089744033,mail="Esty7605@gmail.com",content="ואו אין מילים! נהננו מאד!! יצא תמונות מאלפות!",numOfLikes=999,isClick=false},
            new feedBack {name="Chani",phone=0586975842,mail="Ruti456@gmail.com",content="תודה רבה על השירות המדהים!!",numOfLikes=42,isClick=false},
            new feedBack {name="Ruti",phone=0548962315,mail="05894524@gmail.com",content="תודה רבה על השירות והסבלנות ! יצא נדיר! ",numOfLikes=96, isClick = false},
        };
    }
}