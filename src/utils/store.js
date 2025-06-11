import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import configSlice from "./configSlice";
import chatSlice from "./chatSlice";


const appStore = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        config: configSlice,
        chat: chatSlice
    }
})
 export default appStore;