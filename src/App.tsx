import { store } from './store';
import { Provider } from 'react-redux';
import Input from './components/List/Input';
import List from './components/List/List';
import Title from './components/List/Title';
import './styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="todo-container">
        <Title />
        <Input />
        <List />
      </div>
    </Provider>
  );
}

export default App;
