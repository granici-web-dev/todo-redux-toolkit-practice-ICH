import { Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/slices/todoSlice';

function TodoItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #CDCDCD',
        padding: '16px 0',
      }}>
      <span
        style={{
          textDecoration: item.completed ? 'line-through' : 'none',
          color: item.completed ? '#8c8c8c' : '#000',
        }}>
        {item.title}
      </span>
      <Box sx={{ display: 'flex', gap: '12px' }}>
        <Button variant="contained" onClick={() => dispatch(toggleTodo(item.id))}>
          {item.completed ? 'Undo' : 'Complete'}
        </Button>{' '}
        <Button variant="contained" color="error" onClick={() => dispatch(deleteTodo(item.id))}>
          Delete
        </Button>
      </Box>
    </li>
  );
}

export default TodoItem;
