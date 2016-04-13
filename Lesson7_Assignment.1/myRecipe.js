/*
Program Name: Recipe Display Application
Author: Natalie Quinchia    
Date: 04/13/2016
Filename: myRecipe.js
*/
//changes background to orange when hovering over salmon image
$("center").hover(function() {
    $(this).css("background-color", "orange");
    }
);

//displays all all elements after Honey Garlic Salmon h2 title
function display(event) {
    
    $(event.currentTarget).nextAll().fadeIn("slow");
    
    
}//end of display

//Display both instructions and ingredients when hovering over "Honey Garlic Salmon"
$("h2").hover(display);


