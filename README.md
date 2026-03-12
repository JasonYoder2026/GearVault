## App flow

```mermaid
flowchart TD
    A["React (Client)"] <--> B["PHP REST API (Server)"]
    B <--> C["PostgreSQL (Database)"]
```


## Development

### Environment
Create .env files following the .env.example files

### Dev Environment

- Run ```docker compose -f docker-compose.dev.yml up -d```
- Run ```php -S localhost:8000``` from server/
- Run ```npm start``` from client/

### Production Environment
- Run ```docker compose up --build```