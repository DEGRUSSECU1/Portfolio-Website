//selecting all the sections that have a class of section
const sections = document.querySelectorAll(".section");
/* selecting the container that contains the buttons */
const sectBtns = document.querySelectorAll(".controls");
//selecting the buttons 
const sectBtn = document.querySelectorAll(".control");
//select the body with the class of main-content
const allSelections = document.querySelector(".main-content");

//Function to switch each section color to green to be the current section 

function pageTransitions () {
    //create a for loop to go to each button 
    for(let i = 0; i < sectBtn.length;i++){
        //cannot use this keyword in arrow functions on the event listener click event needs to have the function word
        sectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn",'');
            this.className += " active-btn";
        })
    }
}
    // section with the active class
    allSelections.addEventListener("click", (e)=>{
        //will target the the section that the button correspond to 
        const id = e.target.dataset.id;
        if(id){
            //will remove selected button from the other buttons
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
          e.target.classList.add('active')

          //hide other sections 
          sections.forEach((section)=>{
            section.classList.remove('active')
          })

          const element = document.getElementById(id);
          element.classList.add('active');
        }
    })

pageTransitions()

