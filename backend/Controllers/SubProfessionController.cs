using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Web.Models;

namespace Web.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins:"*",headers:"*",methods:"*")]
    public class SubProfessionController : ApiController
    {
        [HttpGet]
        // GET: api/SubProfession
        public IHttpActionResult Get()
        {
            return Ok(DB.SubProfessionList);
        }

        // GET: api/SubProfession/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/SubProfession
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/SubProfession/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/SubProfession/5
        public void Delete(int id)
        {
        }
    }
}
