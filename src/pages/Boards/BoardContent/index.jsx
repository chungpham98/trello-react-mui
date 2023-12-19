import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) =>
          `calc(100% - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        backgroundColor: 'primary.light',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      Content
    </Box>
  )
}

export default BoardContent
