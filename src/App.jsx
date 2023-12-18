import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'

function App() {
  return (
    <>
      <div>chungpham</div>
      <Button variant='outlined'>Primary</Button>
      <Button variant='outlined' disabled>
        Disabled
      </Button>
      <Button variant='outlined' href='#outlined-buttons'>
        Link
      </Button>
      <Button variant='contained'>Contained</Button>
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )
}

export default App
