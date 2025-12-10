import { Season } from '@/app/lib/seasons'
import { Avatar, Box, Button, Chip, Stack, Typography } from '@mui/material'
import { DateTime } from 'luxon'
import { Download } from '@mui/icons-material'
import { remark } from 'remark'
import html from 'remark-html'
import { useMemo } from 'react'

interface SeasonBlockProps {
  season: Season
  isLast?: boolean
}

function SeasonBlock({ season, isLast = false }: SeasonBlockProps) {
  const formatDate = (date: Date) => {
    return DateTime.fromJSDate(date).setLocale('ru').toFormat('dd MMMM yyyy')
  }

  const descriptionHtml = useMemo(() => {
    const result = remark()
      .use(html)
      .processSync(season.description)
    return result.toString()
  }, [season.description])

  return (
    <Box sx={{ display: 'flex', gap: '32px' }}>
      <Box sx={{
        position: 'relative',
        display: { xs: 'none', sm: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Avatar sx={{ background: '#ffb114', zIndex: 1, flexShrink: 0 }}>
          { season.number }
        </Avatar>
        { !isLast && (
          <Box
            sx={{
              width: '2px',
              flexGrow: 1,
              bgcolor: '#dddddd',
              mt: 1,
              mb: 1,
            }}
          />
        ) }
      </Box>
      <Stack spacing={ 2 } sx={{ flex: 1, pb: isLast ? 0 : 4 }}>
        <Stack>
          <Typography variant='h3'>
            { season.title }
          </Typography>
          <Stack direction='row' spacing={ 2 } alignItems='center'>
            <Chip label={ season.version } size='small'/>
            <Typography variant='caption' color='text.secondary'>
              { formatDate(season.startDate) } — { formatDate(season.endDate) }
            </Typography>
          </Stack>
        </Stack>
        <Typography variant='body2' component='div' dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        { !!season.downloadUrl && (
          <Box>
            <Button
              variant='contained'
              color='primary'
              href={ season.downloadUrl }
              target='_blank'
              rel='noopener noreferrer'
              startIcon={ <Download/> }
            >
              Скачать карту
            </Button>
          </Box>
        ) }
      </Stack>
    </Box>
  )
}

// return (
//     <Card sx={{ width: '100%', mx: 'auto' }}>
//       <CardContent>
//         <Stack spacing={ 2 }>
//           <Stack direction='row' spacing={ 2 }>
//             <Avatar>{ season.number }</Avatar>
//             <Stack>
//               <Typography variant='h3' component='h3'>
//                 { season.title }
//               </Typography>
//               <Typography variant='caption' color='text.secondary'>
//                 { formatDate(season.startDate) } — { formatDate(season.endDate) }
//               </Typography>
//             </Stack>
//           </Stack>
//           <Box>
//             <Typography variant='body2'>
//               { season.description }
//             </Typography>
//           </Box>
//         </Stack>
//       </CardContent>
//       <CardActions>
//         <Button
//           variant='contained'
//           color='primary'
//           href={ season.downloadUrl }
//           target='_blank'
//           rel='noopener noreferrer'
//           startIcon={ <Download /> }
//         >
//           Скачать карту
//         </Button>
//       </CardActions>
//     </Card>
//   )

export default SeasonBlock
