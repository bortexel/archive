import { Stack } from '@mui/material'
import Header from '@/app/ui/Header'
import SeasonBlock from '@/app/ui/SeasonBlock'
import { getAllSeasons } from '@/app/lib/seasons'

export default async function Home() {
  const seasons = await getAllSeasons()

  return (
    <Stack spacing={ 8 }>
      <Header/>
      <Stack spacing={ 0 }>
        {seasons.map((season, index) => (
          <SeasonBlock
            key={ season.number }
            season={ season }
            isLast={ index === seasons.length - 1 }
          />
        ))}
      </Stack>
    </Stack>
  )
}
