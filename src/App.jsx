import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{maxWidth: '480px', margin: '40px auto', width: '100%', minWidth: '320px'}}>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
