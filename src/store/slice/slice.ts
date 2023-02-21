import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DataType } from "../types/types";

const initialState: DataType[] = [
  {
    name: "Брендан Эйх",
    value: "JavaScript",
  },
  {
    name: "Андерс Хейлсберг",
    value: "TypeScript ",
  },
  {
    name: "Дуглас Крокфорд",
    value: "JSON",
  },
];

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData(state, action: PayloadAction<Array<DataType>>) {
      return [...state, ...action.payload];
    },
    changeNameTitle(
      state,
      action: PayloadAction<{ name: string; id: number }>
    ) {
      const index = state.findIndex((st, i) => i === action.payload.id);

      state[index].name = action.payload.name;
    },
    changeValueTitle(
      state,
      action: PayloadAction<{ value: string; id: number }>
    ) {
      const index = state.findIndex((st, i) => i === action.payload.id);

      state[index].value = action.payload.value;
    },
    removeData(state, action: PayloadAction<{ id: number }>) {
      const index = state.findIndex((st, i) => i === action.payload.id);

      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const dataReducer = slice.reducer;
export const { addData, changeNameTitle, changeValueTitle, removeData } =
  slice.actions;

// export const setDataTC = () => {
//   return (dispatch: TypedDispatch<AppRootStateType>) => {
//     DataApi.setData().then((res) => {
//       dispatch(setData({ data: res.data }));
//     });
//   };
// };
