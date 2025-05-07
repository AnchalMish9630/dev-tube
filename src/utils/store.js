import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import configSlice from "./configSlice"


const appStore = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        config: configSlice,
    }
})
 export default appStore;