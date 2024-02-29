import Button from './Button';
import { useDispatch } from 'react-redux';
import { add } from '../../store/list';
import { MouseEventHandler, useRef } from 'react';

function Input() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const addItem: MouseEventHandler<HTMLButtonElement> = () => {
    if (inputRef.current?.value) {
      dispatch(add(inputRef.current.value));
      clearInput();
    }
  };

  return (
    <div className="todo-input">
      <input type="text" ref={inputRef} />
      <Button title="add" onClick={addItem} className="button-add" />
    </div>
  );
}

export default Input;
