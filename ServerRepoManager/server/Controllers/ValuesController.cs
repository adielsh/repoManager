using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Services;
using System.Web.SessionState;

namespace server.Controllers
{

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ValuesController : ApiController , IRequiresSessionState
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [WebMethod(EnableSession = true)]
        public void Post([FromUri]RepoItem value)
        {
            var x = Request.Content;
            HttpContext.Current.Session[value.Name] = true;
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
