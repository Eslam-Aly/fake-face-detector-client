# Fake Face Detector Client

React + Vite frontend for uploading an image and calling the detection API.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

By default, the app calls `/api/predict`, and Vite proxies `/api/*` to `http://localhost:8000`.

## Environment variables

- `VITE_API_PROXY_TARGET`: backend URL for local development proxy (default `http://localhost:8000`)
- `VITE_API_BASE_URL`: optional absolute base URL for direct API calls (useful in production)
- `VITE_API_PREDICT_PATH`: path or absolute URL for prediction endpoint (default `/api/predict`)

## API contract expected by client

`POST /predict` with multipart form-data field: `image`

Response:

```json
{
  "label": "REAL",
  "confidence": 99.96,
  "probability_real": 99.96
}
```
