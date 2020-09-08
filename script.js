
//get all buttons 
const btn = document.querySelectorAll(".btn");
let count = 0;

//add  events to all button  
btn.forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.classList.contains("addBtn")) {
            count++
        } else if (button.classList.contains("lowerBtn"))  {
            count--
        }

        //set counter text
        let countText = document.querySelector(".cunterNum");
        countText.textContent = count;

        if (count < 0) {
            countText.style.color = "red"
        } else  if (count > 0) {
            countText.style.color = "green"
        } else {
            countText.style.color = "black"
        }
    });
});