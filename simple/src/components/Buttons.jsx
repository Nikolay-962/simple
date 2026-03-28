import React from 'react'



const Buttons =()=> {
   const hendelLeft =()=> {
    document.getElementById('one').textContent="Мы даже и не сомневались что вам нравится";
   }

   const hendelRight =(EO)=> {
    
    const maxLeft =400;
    const maxTop =-200;
    const maxBottom =200;
    EO.target.style.left = Math.random() * maxLeft - maxLeft/2 + 'px';
    EO.target.style.top = Math.random() * maxTop + 'px';
    EO.target.style.bottom = Math.random() * maxBottom + 'px';

   }
   
    return (
        <div className='buttons'>
          <div className='buttons__wrap'>
            
              <button onMouseDown={hendelLeft} className='button'>Да</button>
            
          
              <button  onMouseDown={hendelRight}  className='button '>Нет</button>
                  
          </div>
        </div> 
    )
}

export default Buttons;