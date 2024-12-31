


import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function TodoListApp() {
    const [listTodo, setListTodo] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 
    
    let addList = (inputText) => {
      if(inputText !== '') {
        setListTodo([...listTodo, inputText]);
      }
    };
    
    const deleteListItem = (key) => {
      let newListTodo = [...listTodo];
      newListTodo.splice(key, 1);
      setListTodo([...newListTodo]);
    };
    
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState('');
    
    const startEditing = (index, currentText) => {
      setEditingIndex(index);
      setEditText(currentText);
    };
    
    const saveEdit = () => {
      if (editText !== '') {
        const newListTodo = [...listTodo];
        newListTodo[editingIndex] = editText;
        setListTodo(newListTodo);
        setEditingIndex(null);
        setEditText('');
      }
    };

    // Filter todos based on search term
    const filteredTodos = listTodo.filter(todo =>
      todo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
         <h1 className="app-heading">TODO LIST APP</h1>
      <div className="main-container">
        <div className="center-container">
        
          <TodoInput addList={addList} />
          <div className="search-container">
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} className="input-box-todo"
            />
         
          </div>

      
        
        
          {filteredTodos.map((listItem, i) => (
            <div key={i} className="todo-item">
              {editingIndex === i ? (
                <div className="edit-container">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={() => setEditingIndex(null)}>Cancel</button>
                </div>
              ) : (
                <TodoList
                  key={i}
                  index={i}
                  item={listItem}
                  deleteItem={deleteListItem}
                  startEditing={startEditing}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      </>
    );
}

export default TodoListApp;
