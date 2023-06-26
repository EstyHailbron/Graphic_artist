using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using Web.Models;

namespace Web.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    public class feedBackController : ApiController
    {
        [HttpGet]
        // GET: api/feedBack
        public IHttpActionResult Get()
        {
            return Ok(DB.feedBackList);
        }

        // GET: api/feedBack/5
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        // POST: api/feedBack
        public IHttpActionResult Post([FromBody] feedBack c)
        {
            DB.feedBackList.Add(c);
            return Ok(DB.feedBackList);
        }
        [HttpPut]
        // PUT: api/feedBack/5
        public IHttpActionResult Put([FromBody] int phone)
        {
            feedBack fb = DB.feedBackList.Find(f => f.phone == phone);
            fb.numOfLikes++;
            fb.isClick = true;
            //DB.feedBackList.Find(f =>f.phone == phone).numOfLikes++;
            return Ok(DB.feedBackList);
        }

        // DELETE: api/feedBack/5
        public void Delete(int id)
        {
        }
    }
}
