import { configureStore } from "@reduxjs/toolkit";
import userReucer from './userSlice'
const appStore = configureStore(
    {
        reducer:{
            user:userReucer,
        }
    }
)

export default appStore;