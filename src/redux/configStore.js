import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { BaiTapGameXucXacReducer } from "./reducers/BaiTapGameXucXacReducer";
//state trong redux là reducer
const rootReducer = combineReducers({
  //các state sẽ dc lưu ở đây
  gioHangReducer: gioHangReducer,
  BaiTapGameXucXacReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);




