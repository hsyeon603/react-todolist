import { MouseEvent } from 'react';
import { ItemType } from '../../store/list';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { remove } from '../../store/list';

function Item({ todoValue, id }: ItemType) {
  const dispatch = useDispatch();
  const deleteItem = (event: MouseEvent<HTMLButtonElement>) => {
    const parentElement: HTMLElement = (event.target as HTMLElement).parentElement!;
    const targetId: string = parentElement.getAttribute('id')!;

    dispatch(remove(targetId));
  };

  return (
    <li className="todo-item" id={id.toString()}>
      <span>{todoValue}</span>
      <Button title="X" onClick={deleteItem} className="button-remove" />
    </li>
  );
}

export default Item;
