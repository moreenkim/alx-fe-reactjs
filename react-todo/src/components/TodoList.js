// import React, { useState } from 'react';

// // Initial Todo items for demonstration
// const initialTodos = [
//   { id: 1, text: 'Learn React', completed: false },
//   { id: 2, text: 'Build a Todo App', completed: false },
//   { id: 3, text: 'Master JavaScript', completed: false },
// ];

// const TodoList = () => {
//   const [todos, setTodos] = useState(initialTodos); // Initialize state with default todos
//   const [newTodo, setNewTodo] = useState(''); // State to manage input for adding new todos

//   // Method to add a new todo
//   const addTodo = () => {
//     if (newTodo.trim()) {
//       setTodos([
//         ...todos,
//         { id: Date.now(), text: newTodo, completed: false }, // Add a new todo with a unique ID
//       ]);
//       setNewTodo(''); // Clear input after adding
//     }
//   };

//   // Method to toggle completion of a todo
//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Method to delete a todo
//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       {/* Input field for adding new todos */}
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//         placeholder="Add a new todo"
//       />
//       <button onClick={addTodo}>Add Todo</button>

//       {/* Render the list of todos */}
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//             <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;



import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const TodoList = ({ initialTodos = [] }) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

const TodoItem = ({ todo, deleteTodo, toggleCompletion }) => {
  return (
    <li
      onClick={() => toggleCompletion(todo.id)}
      style={{
        textDecoration: todo.isCompleted ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      {todo.text}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering toggleCompletion
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoList;
