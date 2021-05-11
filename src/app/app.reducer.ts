import { List } from "./list.model";
import * as AppActions from "./app.actions";

export interface State {
  list: List[]
}
export const initialState = {
  list: [new List('','',[],0, 0,[])]
};
export function myReducer(state:State = initialState, action: AppActions.AppActions) {
  console.log(state, action);
  switch(action.type){
    case AppActions.ADD_LIST: 
    return {
      ...state,
      list: [...state.list, action.payload]
    };
    case AppActions.UPDATE_LIST:
      const listObj = state.list[action.index];
      const updatedListObj = {
        ...listObj,
        ...action.payload
      };
      const updatedList = [...state.list];
      updatedList[action.index] = updatedListObj;

      return {
        ...state,
        list: updatedList
      };

    default:
      return state;
  }
}