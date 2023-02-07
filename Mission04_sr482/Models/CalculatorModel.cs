using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_sr482.Models
{
    //Create Model
    public class CalculatorModel
    {
        //Set a range to return an error for input
        [Range(0,100, ErrorMessage = "Assignments must be between 0 and 100")]
        public float Assign { get; set; }

        [Range(0, 100, ErrorMessage = "Groupwork must be between 0 and 100")]
        public float Group { get; set; }

        [Range(0, 100, ErrorMessage = "Quizzes must be between 0 and 100")]
        public float Quiz { get; set; }

        [Range(0, 100, ErrorMessage = "Midterm must be between 0 and 100")]
        public float Midterm { get; set; }

        [Range(0, 100, ErrorMessage = "Final must be between 0 and 100")]
        public float Final { get; set; }

        [Range(0, 100, ErrorMessage = "Intex must be between 0 and 100")]
        public float Intex { get; set; }
    }
}
