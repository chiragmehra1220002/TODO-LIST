// import React, { useState } from 'react'

// function TodoInput(props) {
//     const[inputText,setInputText] = useState('');
//     const handleEnterPress = (e) =>{
//         if(e.keyCode === 13){
//             props.addList(inputText);
//             setInputText("")
//         }
//     }
//   return (
//    <div className="input-container">
//     <input type="text" className="input-box-todo" 
//     placeholder='Search Here....'
//     value={inputText}
//     onChange={e=>{
//         setInputText(e.target.value)
//     }}
//     onKeyDown={handleEnterPress}
    
//     />
//     <button className='add-btn' onClick={()=>{
//         props.addList(inputText)
//         setInputText("")
//     }}>+</button>
   
//    </div>
//   )
// }

// export default TodoInput
import React, { useState } from 'react';

function TodoInput(props) {
    const [inputText, setInputText] = useState('');
    
    // Handle when the user presses Enter to submit the task
    const handleEnterPress = (e) => {
        if (e.keyCode === 13 && inputText.trim() !== '') {
            props.addList(inputText);  // Add the task
            setInputText('');  // Clear the input field
        }
    };

    // Handle the click of the Add button
    const handleAddClick = () => {
        if (inputText.trim() !== '') {
            props.addList(inputText);  // Add the task
            setInputText('');  // Clear the input field
        }
    };

    return (
        <div className="input-container">
         
            <input
                type="text"
                className="input-box-todo"
                placeholder="Enter items..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}  
                onKeyDown={handleEnterPress} 
            />

          
            <button className="add-btn" onClick={handleAddClick}>Add Items</button>
        </div>
    );
}

export default TodoInput;


