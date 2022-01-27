import { createStore } from "redux";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["googleLogin"]
};

const persistedReducer = persistReducer(persistConfig, reducer);


const store = createStore(persistedReducer);
let persistor = persistStore(store);

export default store;
export { persistor };