import { query } from './db'

export interface Season {
  title: string
  number: number
  description: string
  startDate: Date
  endDate: Date
  downloadUrl: string
}

interface SeasonRow {
  id: number
  title: string
  number: number
  description: string
  start_date: Date
  end_date: Date
  download_url: string
  created_at: Date
  updated_at: Date
}

export async function getAllSeasons(): Promise<Season[]> {
  const rows = await query<SeasonRow>(
    'SELECT * FROM seasons ORDER BY number DESC'
  )

  return rows.map(row => ({
    title: row.title,
    number: row.number,
    description: row.description,
    startDate: row.start_date,
    endDate: row.end_date,
    downloadUrl: row.download_url,
  }))
}
