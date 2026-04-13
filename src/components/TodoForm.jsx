import { FormGroup, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';
import { useState } from 'react';

function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (!title.trim()) return;
    dispatch(addTodo({ id: Date.now(), title, completed: false }));
    setTitle(' ');
  };

  return (
    <FormGroup>
      <TextField
        label="Enter new todo"
        sx={{ marginBottom: '12px' }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="contained" color="success" size="large" onClick={handleSubmit}>
        Add Todo
      </Button>
    </FormGroup>
  );
}

export default TodoForm;
