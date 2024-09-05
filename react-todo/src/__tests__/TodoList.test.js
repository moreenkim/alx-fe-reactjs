import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';
test('renders the TodoList component with initial todos', () => {
  const demoTodos = [
    { id: 1, text: 'Learn React', isCompleted: false },
    { id: 2, text: 'Build a Todo App', isCompleted: true },
    { id: 3, text: 'Test the Todo App', isCompleted: false },
  ];

  // Render the component with demo todos
  render(<TodoList initialTodos={demoTodos} />);

  // Check that each demo todo is rendered
  demoTodos.forEach(todo => {
    const todoElement = screen.getByText(todo.text);
    expect(todoElement).toBeInTheDocument();
    
    // Check if the todo item is marked as completed or not
    if (todo.isCompleted) {
      expect(todoElement).toHaveStyle('text-decoration: line-through');
    } else {
      expect(todoElement).not.toHaveStyle('text-decoration: line-through');
    }
  });
});


test('allows users to add a new todo', () => {
    // Render the TodoList component
    render(<TodoList />);
  
    // Find the input field and the add button
    const inputElement = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');
  
    // Simulate user typing a new todo
    fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
  
    // Simulate form submission by clicking the add button
    fireEvent.click(addButton);
  
    // Check if the new todo is added to the list
    const newTodoElement = screen.getByText('New Todo Item');
    expect(newTodoElement).toBeInTheDocument();
  
    // Optionally, check if the input field is cleared after adding the todo
    expect(inputElement.value).toBe('');
  });


  test('allows users to toggle a todo item between completed and not completed', () => {
    // Render the TodoList component with an initial todo
    const demoTodos = [{ id: 1, text: 'Test Todo', isCompleted: false }];
    render(<TodoList initialTodos={demoTodos} />);
  
    // Find the todo item by text
    const todoElement = screen.getByText('Test Todo');
  
    // Initially, the todo should not be completed
    expect(todoElement).not.toHaveStyle('text-decoration: line-through');
  
    // Simulate clicking the todo to toggle completion
    fireEvent.click(todoElement);
  
    // The todo should now be completed (with line-through)
    expect(todoElement).toHaveStyle('text-decoration: line-through');
  
    // Simulate clicking the todo again to toggle back to not completed
    fireEvent.click(todoElement);
  
    // The todo should no longer be completed
    expect(todoElement).not.toHaveStyle('text-decoration: line-through');
  });
  


  test('allows users to delete a todo item', () => {
    // Render the TodoList component with an initial todo
    const demoTodos = [{ id: 1, text: 'Test Todo', isCompleted: false }];
    render(<TodoList initialTodos={demoTodos} />);
  
    // Find the todo item and its corresponding delete button
    const todoElement = screen.getByText('Test Todo');
    const deleteButton = screen.getByText('Delete');
  
    // Ensure the todo item is initially in the document
    expect(todoElement).toBeInTheDocument();
  
    // Simulate clicking the delete button
    fireEvent.click(deleteButton);
  
    // The todo item should no longer be in the document
    expect(todoElement).not.toBeInTheDocument();
  });