import { useSelector } from 'react-redux';

function TodoList() {
  const { data } = useSelector((state) => state.todo);

  return <ul>
    {data.map((item) => {
      return <li>{item.title}</li>
    })}
  </ul>;
}

export default TodoList;
