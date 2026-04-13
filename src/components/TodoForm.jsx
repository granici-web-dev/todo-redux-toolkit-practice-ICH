import { FormGroup, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';


function TodoForm() {
const dispatch = useDispatch();

  return (
    <FormGroup>
      <TextField label="Enter new todo" sx={{ marginBottom: '12px' }} />
      <Button variant="contained" color="success" size="large" onClick={() => dispatch(addTodo())}>
        Add Todo
      </Button>
    </FormGroup>
  );
}

export default TodoForm;
