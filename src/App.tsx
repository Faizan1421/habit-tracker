import { Container, Typography } from '@mui/material'
import './App.css'
import AddHabitForm from './components/add_habit_form'
import HabitList from './components/habit_list'

function App() {


  return (
   
    <Container maxWidth="md">
     <Typography component="h1" variant="h2" align='center'>Habit Tracker</Typography>
     <AddHabitForm/>
     <HabitList/>
    </Container>
    
  )
}

export default App
