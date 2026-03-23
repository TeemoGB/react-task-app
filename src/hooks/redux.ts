import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { type AppDispatch, type RootState } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();