import { Stack, Typography } from '@mui/material'
import Logo from '@/app/ui/Logo'
import LinkButton from '@/app/ui/LinkButton'

function Header() {
  return (
    <Stack sx={{ maxWidth: '768px' }} spacing={ 1 }>
      <Logo/>
      <Typography >
        Наш сервер закрылся в марте 2023, но ты всё ещё можешь скачать карты прошлых сезонов.
      </Typography>
      <Stack direction='row' spacing={ 2 }>
        <LinkButton text='Discord' href='https://discord.gg/bortexel-536124246397681664'/>
        <LinkButton text='GitHub' href='https://github.com/bortexel'/>
      </Stack>
    </Stack>
  )
}

export default Header
