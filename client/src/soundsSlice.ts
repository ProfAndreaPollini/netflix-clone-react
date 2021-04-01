import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'



// Define 
interface Sound {
    uri: string;
    id: string;
}


interface SoundsState {
    sounds: Sound[],
    selected: string | undefined
}

// Define the initial state using that type
const initialState: SoundsState = {
    sounds: [],
    selected: undefined
}

export const soundsSlice = createSlice({
    name: 'sounds',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        selectSound: (state, action: PayloadAction<string>) => {
            state.selected = action.payload
        },
        addSound: (state, action: PayloadAction<string>) => {
            state.sounds.push({
                id: state.sounds.length.toString(),
                uri: action.payload
            })
        }
    }
})

export const { selectSound, addSound } = soundsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSounds = (state: RootState) => state.sounds

export default soundsSlice.reducer