using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Akvelon.Models;

namespace Akvelon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public TaskController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @" select TaskId, TaskName, TaskDescription, Project,
                                convert(varchar(10),DateOfStart,120) as DateOfStart,
                                convert(varchar(10),Deadline,120) as Deadline, Status from dbo.Task";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApi");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Task tsk)
        {
            string query = @" 
                    insert into dbo.Task 
                    (TaskName,TaskDescription,Project,DateOfStart,Deadline,Status)
                    values
                    (
                    '" + tsk.TaskName + @"'
                    ,'" + tsk.TaskDescription + @"'
                    ,'" + tsk.Project + @"'
                    ,'" + tsk.DateOfStart + @"'
                    ,'" + tsk.Deadline + @"'
                    ,'" + tsk.Status + @"'
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApi");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Task tsk)
        {
            string query = @"
                    update dbo.Task set 
                    TaskName = '" + tsk.TaskName + @"'
                    ,TaskDescription = '" + tsk.TaskDescription + @"'
                    ,Project = '" + tsk.Project + @"'
                    ,DateOfStart = '" + tsk.DateOfStart + @"'
                    ,Deadline = '" + tsk.Deadline + @"'
                    ,Status = '" + tsk.Status + @"'
                    where TaskId = " + tsk.TaskId + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApi");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.Task
                    where TaskId = " + id + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApi");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

        [Route("GetAllProjectNames")]
        public JsonResult GetAllDepartmentNames()
        {
            string query = @"
                    select ProjectName from dbo.Project
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApi");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [Route("GetStatus")]
        public JsonResult GetStatus()
        {
            string query = @"
                    select Status from dbo.Status
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApi");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
    }
}
