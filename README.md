# Bortexel Archive Website

Сайт для скачивания миров Minecraft сервера Bortexel.

## Установка

1. Установите зависимости:

```bash
yarn install
```

2. Настройте переменные окружения:

```bash
cp .env.example .env
```

Отредактируйте `.env` и укажите данные для подключения к PostgreSQL.

3. Инициализируйте базу данных:

```bash
./db/init.sh
```

Или вручную:

```bash
# Создайте базу данных
createdb bortexel_archive

# Примените схему
psql -d bortexel_archive -f db/schema.sql

# Загрузите тестовые данные
psql -d bortexel_archive -f db/seed.sql
```

4. Запустите dev-сервер:

```bash
yarn dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Структура проекта

- `app/` - Next.js App Router
    - `lib/` - утилиты и логика
        - `db.ts` - подключение к PostgreSQL
        - `seasons.ts` - работа с сезонами
        - `season.ts` - типы
    - `ui/` - компоненты интерфейса
- `db/` - SQL-скрипты для базы данных
    - `schema.sql` - схема БД
    - `seed.sql` - тестовые данные
    - `init.sh` - скрипт инициализации

## База данных

### Таблица `seasons`

| Поле         | Тип          | Описание                  |
|--------------|--------------|---------------------------|
| id           | SERIAL       | Первичный ключ            |
| title        | VARCHAR(255) | Название сезона           |
| number       | INTEGER      | Номер сезона (уникальный) |
| start_date   | DATE         | Дата начала               |
| end_date     | DATE         | Дата окончания            |
| download_url | TEXT         | Ссылка на скачивание      |
| created_at   | TIMESTAMP    | Дата создания записи      |
| updated_at   | TIMESTAMP    | Дата обновления записи    |

## Добавление нового сезона

```sql
INSERT INTO seasons (title, number, start_date, end_date, download_url)
VALUES ('Название сезона', 4, '2024-01-01', '2024-06-30', 'https://example.com/season4.zip');
```
