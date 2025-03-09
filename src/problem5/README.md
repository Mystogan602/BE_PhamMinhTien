# Resource Management API

The Resource Management API is built using Express.js, TypeScript, and SQLite.

## System requirements

- Node.js (version 14 or higher)
- npm or yarn

## Install

1. Install dependencies:

```bash
npm install
```

2. Run server:

```bash
npm start
```
The server will run at:
- API: http://localhost:3000
- Swagger Documentation: http://localhost:3000/api-docs


## API Endpoints

### Resources API

| Method | Endpoint | Description |
|--------|----------|-------|
| POST | /api/resources | Create a new resource |
| GET | /api/resources | Get list of resources |
| GET | /api/resources/:id | Get details of resource |
| PUT | /api/resources/:id | Update resource |
| DELETE | /api/resources/:id | Delete resource |

### Filters

You can filter resources by query parameters:
- `name`: Filter by name

### Example

```bash
curl -X GET "http://localhost:3000/api/resources?name=resource1"
```

## Database Structure

The SQLite database will be automatically created with the name `database.sqlite` when the server starts.

### Resources Table
- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `name`: TEXT NOT NULL
- `description`: TEXT
- `created_at`: DATETIME DEFAULT CURRENT_TIMESTAMP

## Project Structure

src/
├── config/
│ ├── database.ts # SQLite configuration
│ └── swagger.ts # Swagger configuration
├── controllers/
│ └── resourceController.ts
├── models/
│ └── resource.ts
├── routes/
│ └── resourceRoutes.ts
├── app.ts
└── server.ts