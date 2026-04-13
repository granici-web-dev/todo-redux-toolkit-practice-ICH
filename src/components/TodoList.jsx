import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const { data } = useSelector((state) => state.todo);

  return (
    <div sx={{ border: '1px solid grey', padding: '16px' }}>
      {data && (
        <div>
          <h1>Todo List</h1>
          <ul>
            {data.map((item) => (
              <TodoItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TodoList;
