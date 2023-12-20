import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

const MENU_STYLES = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  px: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main',
  },
  '&:hover': {
    backgroundColor: 'primary.50',
  },
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        px: 2,
        overflowX: 'auto',
        borderTop: '1px solid #00bfa5',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<DashboardIcon />}
          label='Thiensu99 Board'
        />
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<VpnLockIcon />}
          label='Public/Private Workspace'
        />
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<AddToDriveIcon />}
          label='Add To Google Drive'
        />
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<BoltIcon />}
          label='Automation'
        />
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<FilterListIcon />}
          label='Filter'
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant='outlined' startIcon={<PersonAddIcon />}>
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: '1rem',
            },
          }}
        >
          <Tooltip title='Thiensu99'>
            <Avatar alt='Thiensu99' src='/src/assets/avatar.JPG' />
          </Tooltip>
          <Tooltip title='Thiensu99'>
            <Avatar
              alt='Thiensu99'
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww'
            />
          </Tooltip>
          <Tooltip title='Thiensu99'>
            <Avatar
              alt='Thiensu99'
              src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
            />
          </Tooltip>
          <Tooltip title='Thiensu99'>
            <Avatar
              alt='Thiensu99'
              src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww'
            />
          </Tooltip>
          <Tooltip title='Thiensu99'>
            <Avatar
              alt='Thiensu99'
              src='https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww'
            />
          </Tooltip>
          <Tooltip title='Thiensu99'>
            <Avatar
              alt='Thiensu99'
              src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww'
            />
          </Tooltip>
          <Tooltip title='Thiensu99'>
            <Avatar
              alt='Thiensu99'
              src='https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww'
            />
          </Tooltip>
          <Tooltip title='Thiensu99'>
            <Avatar
              alt='Thiensu99'
              src='https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww'
            />
          </Tooltip>
          <Tooltip title='Thiensu99'>
            <Avatar
              alt='Thiensu99'
              src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww'
            />
          </Tooltip>
          <Tooltip title='Thiensu99'>
            <Avatar
              alt='Thiensu99'
              src='https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
