import { ArrowOutward } from '@mui/icons-material'
import { Button } from '@mui/material'

interface LinkButtonProps {
  text: string
  href: string
}

function LinkButton({ text, href }: LinkButtonProps) {
  return (
    <Button
      variant='text'
      color='primary'
      href={ href }
      target='_blank'
      rel='noopener noreferrer'
      startIcon={ <ArrowOutward/> }
    >
      { text }
    </Button>
  )
}

export default LinkButton
