import { configureStore } from "@reduxjs/toolkit";
import theme from '../Slice/toggleTheme';

const store = configureStore({
    reducer:{
        ToggleTheme:theme,
    }
})

export default store