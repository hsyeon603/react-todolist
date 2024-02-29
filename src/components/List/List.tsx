import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Item from './Item';

function List() {
  const list = useSelector((state: RootState) => state.list);

  return (
    <ul className="todo-list">
      {list.map((item) => (
        <Item key={item.id} id={item.id} todoValue={item.todoValue} />
      ))}
    </ul>
  );
}

export default List;
