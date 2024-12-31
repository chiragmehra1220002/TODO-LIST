import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './TodoList.css';
import TodoListApp from './TodoListApp';
// import './index.css'
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TodoListApp/>
  </StrictMode>,
)
