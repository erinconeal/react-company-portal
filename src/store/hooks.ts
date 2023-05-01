import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { ApplicationDispatch, ApplicationState } from "./index";

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;

export const useAppDispatch: () => ApplicationDispatch = useDispatch;
