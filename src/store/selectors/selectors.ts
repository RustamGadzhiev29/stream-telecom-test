import { AppRootStateType } from "../store";
import { DataType } from "../types/types";

export const selectData = (state: AppRootStateType): DataType[] => state.data;
