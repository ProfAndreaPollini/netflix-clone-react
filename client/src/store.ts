import { configureStore } from '@reduxjs/toolkit'
import soundsSlice from "./soundsSlice"
// ...
export const store = configureStore({
    reducer: {
        sounds: soundsSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch