import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/store'
import { addHabit } from '../store/habit_slice'

const AddHabitForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [name, setName] = useState<string>("")
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(name.trim()){
            dispatch(addHabit({name,frequency}))
        }
        setName("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField 
                label="Habit Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Habit Name'
                />
                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select 
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
                    >
                       <MenuItem value="daily">Daily</MenuItem> 
                       <MenuItem value="weekly">Weekly</MenuItem> 
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" type="submit"
                >Add Habit</Button>
            </Box>
        </form>
    )
}

export default AddHabitForm