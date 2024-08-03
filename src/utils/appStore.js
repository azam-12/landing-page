import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./headerSlice";
import appoloSlice from "./appoloSlice";

const appStore = configureStore({
    reducer: {
        head: headerSlice,
        appolo: appoloSlice,
    }
});

export default appStore;