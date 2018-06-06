using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : Controller
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(new string[] { "value1", "value2", "value2" });
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return Ok($"value = {id}");
        }

        [HttpPost]
        public ActionResult<string> Post([FromBody] string value)
        {
            if(!ModelState.IsValid)
                return BadRequest(value);

            return Ok($"{value} saved");
        }

        [HttpPut("{id}")]
        public ActionResult<string> Put(int id, [FromBody] string value)
        {
            if(!ModelState.IsValid)
                return BadRequest();

            return Ok($"{value} updated");
        }

        [HttpDelete("{value}")]
        public ActionResult<string> Delete(string value)
        {
            return Ok($"{value} deleted");
        }
    }
}
