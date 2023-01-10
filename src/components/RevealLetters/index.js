import './index.scss';



const appear = function () {
    let reveals = document.querySelectorAll(".appear");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };
  
  window.addEventListener("scroll", appear); 

const RevealLetters = ( { strArray, startIdx } ) => {
    return(
        <span>
            {
                strArray.map( (char, i) => {
                    return (
                        <span key={i} className={ `text-appear appear active idx-${i + startIdx}` } >{char}</span>
                    );
                } ) 
            }
        </span>
    );

}


export default RevealLetters;