CREATE TABLE IF NOT EXISTS seasons (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  number INTEGER NOT NULL UNIQUE,
  description TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  download_url TEXT,
  version VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_seasons_number ON seasons(number);
