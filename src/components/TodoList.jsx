import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { Box } from '@mui/material';

function TodoList() {
  const { data } = useSelector((state) => state.todo);

  return (
    <Box>
      {data.length > 0 && (
        <Box
          sx={{
            border: '1px solid #CECECE',
            padding: '16px',
            marginTop: '16px',
            borderRadius: '16px',
            backgroundColor: '#F9F9F9',
          }}>
          <h1>Todo List</h1>
          <ul style={{paddingLeft: '0'}}>
            {data.map((item) => (
              <TodoItem key={item.id} item={item} />
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
}

export default TodoList;
