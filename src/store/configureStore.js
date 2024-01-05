import rootReducer from "./rootReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { legacy_createStore } from "redux";


export function configureStore() {
    return legacy_createStore(rootReducer, devToolsEnhancer()) // site yayınlanmadan önce bunu (devToolsEnhancer) çıkarabilirsiniz
}