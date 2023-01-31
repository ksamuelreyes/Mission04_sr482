// Function that executes when the button is clicked
$("#calculateBtn").click(function () {

    /* With JQuery, retrieve the input values from the calculator 
      and calculate the weighted grade for each category*/
    let assignWeighted = $('#assignments').val() * .5
    let groupWeighted = $('#group').val() * .1
    let quizWeighted = $('#quizzes').val() * .1
    let midWeighted = $('#midterm').val() * .1
    let finalWeighted = $('#final').val() * .1
    let intexWeighted = $('#intex').val() * .1

    /*add these grades together to get the final grade */
    finalGrade =((assignWeighted + groupWeighted + quizWeighted + midWeighted + finalWeighted + intexWeighted)*100/100).toFixed(2)

    /*if statement determines the letter grade based on final grade*/
    if (finalGrade >= 94 && finalGrade <= 100) {
        letterGrade = "A"
    }
    else if (finalGrade < 94 && finalGrade >= 90) {
        letterGrade = "A-"
    }
    else if (finalGrade < 90 && finalGrade >= 87) {
        letterGrade = "B+"
    }
    else if (finalGrade < 87 && finalGrade >= 84) {
        letterGrade = "B"
    }
    else if (finalGrade < 84 && finalGrade >= 80) {
        letterGrade = "B-"
    }
    else if (finalGrade < 80 && finalGrade >= 77) {
        letterGrade = "C+"
    }
    else if (finalGrade < 77 && finalGrade >= 74) {
        letterGrade = "C"
    }
    else if (finalGrade < 74 && finalGrade >= 70) {
        letterGrade = "C-"
    }
    else if (finalGrade < 70 && finalGrade >= 67) {
        letterGrade = "D+"
    }
    else if (finalGrade < 67 && finalGrade >= 64) {
        letterGrade = "D"
    }
    else if (finalGrade < 64 && finalGrade >= 60) {
        letterGrade = "D-"
    }
    else if (finalGrade < 60 && finalGrade >= 0) {
        letterGrade = "E"
    }
    else {
        letterGrade = "Out of grade range"
    }

    /*JQuery outputs the final numeric grade and letter grade*/
    $("#output").text(finalGrade + "%  " + letterGrade)

})