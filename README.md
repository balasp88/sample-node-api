# Sample Node API

A simple Express.js product catalog API used as a demo service for the **Meridian EA governance platform** and **Backstage** integration.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/products` | List products (optional `?category=` filter) |
| GET | `/api/products/:id` | Get product by ID |
| POST | `/api/products` | Create a product |

## Running locally

```bash
npm install
npm run dev
```

API available at `http://localhost:3001`.

## Backstage integration

This service is registered in the Backstage catalog via `catalog-info.yaml`. The `meridian.io/openapi-spec` annotation points to `openapi.yaml` in this repo, satisfying the EA policy **POL-API-001** (all backend services must publish an OpenAPI spec).

The Meridian EA plugin in Backstage will show a ✅ **Compliant** badge on this service's catalog page.
