-- Insert sample season data
INSERT INTO seasons (title, number, description, start_date, end_date, download_url) VALUES
  ('Первый сезон', 1, 'Описание первого сезона', '2020-01-15', '2020-06-30', 'https://example.com/downloads/season1.zip'),
  ('Второй сезон', 2, 'Описание второго сезона', '2020-07-01', '2021-01-15', 'https://example.com/downloads/season2.zip'),
  ('Третий сезон', 3, 'Описание третьего сезона', '2021-02-01', '2021-08-30', 'https://example.com/downloads/season3.zip')
ON CONFLICT (number) DO NOTHING;
