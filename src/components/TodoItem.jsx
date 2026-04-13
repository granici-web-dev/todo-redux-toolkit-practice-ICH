import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/slices/todoSlice';

function TodoItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li>
      {item.title}{' '}
      <Button variant="contained" onClick={() => dispatch(toggleTodo(item.id))}>
        {item.completed ? 'Undo' : 'Complete'}
      </Button>{' '}
      <Button variant="contained" color='error' onClick={() => dispatch(deleteTodo(item.id))}>
        Delete
      </Button>
    </li>
  );
}

export default TodoItem;
