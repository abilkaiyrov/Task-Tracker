namespace Akvelon.Models
{
    public class Task
    {
        public int TaskId { get; set; }

        public string TaskName { get; set; }

        public string TaskDescription { get; set; }

        public string Project { get; set; }

        public string DateOfStart { get; set; }

        public string Deadline { get; set; }

        public string Status { get; set; }
    }
}
