using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UsersController
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }



        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> AsyncGetUsers()
        {

            return await _context.User.ToListAsync();
        }


        [Authorize]
        [HttpGet, Route("{id}")]

        public async Task<ActionResult<AppUser>> GetUserById([FromRoute] int id)
        {


            return await _context.User.FindAsync(id);
        }

    }

}