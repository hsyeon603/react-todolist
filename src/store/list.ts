import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRandomId } from '../util/util';

export interface ItemType {
  id: number;
  todoValue: string;
}

const initialState: ItemType[] = [];

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push({ id: getRandomId(), todoValue: action.payload });
    },
    remove: (state, action: PayloadAction<string>) => state.filter((item) => item.id !== Number(action.payload)),
  },
});

export const { add, remove } = listSlice.actions;
export default listSlice.reducer;
