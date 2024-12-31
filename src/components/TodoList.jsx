


import React, { useState } from 'react';

function TodoList({ item, index, deleteItem, startEditing }) {

  const [isCompleted, setIsCompleted] = useState(false);


  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <li className='list-item' >
     
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
        className="todo-checkbox"
      />
      
   
     

      {/* Conditional delete button (only shown when item is checked) */}
      {!isCompleted && (
        <>
         <span className="todo-content">
        
         {item}
         </span>
   
         <span className="icons1">
           <i
             className="fa-solid fa-pen-to-square"
             onClick={() => startEditing(index, item)}
           ></i>
         </span>
         <span className="icons2">
             <i
               className="fa-solid fa-trash-can"
               onClick={() => deleteItem(index)}
             ></i>
           </span>
        
           </>
       
      )}
      {isCompleted &&(
        <div style={{display:'flex',justifyContent:'space-evenly',gap:'180px'}}>
          <span className="todo-content"style={{ textDecoration:'line-through'}}>
        
            {item}
          </span>
          <h5 style={{backgroundColor:'darkGrey',color:'white', textDecoration:'none'}}>Completed</h5>
        
          

        </div>
      )}
    </li>
  );
}

export default TodoList;





