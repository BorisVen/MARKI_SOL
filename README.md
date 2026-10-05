# MARKI SOL — MVP для користувачів (Solana)

Веб-застосунок Marki для покупців: NFT-паспорти товарів, маркетплейс, покупка в SOL через Phantom (devnet) або з оплатою при отриманні, перевірка за NFC/QR.

- `web/` — React (Create React App), Firebase Auth, Solana web3.js / Metaplex Umi.
- `api/` — спільний Rust-бекенд.

## Фронтенд (`web/`)

```bash
cd web
cp .env.example .env           # REACT_APP_API_URL, REACT_APP_SOLANA_RPC_URL, REACT_APP_FIREBASE_*
npm install --legacy-peer-deps
npm start                      # http://localhost:3000
```

Оплата в SOL працює через розширення Phantom у браузері.

## Бекенд (`api/`)

Rust + Axum, дані у Firebase (Firestore, Storage, Auth).

```bash
cp api/.env.example api/.env   # FIREBASE_SERVICE_ACCOUNT_JSON, FIREBASE_PROJECT_ID, ...
cd api && cargo run            # http://localhost:8090
```

Docker: `docker build -t marki-api .` (Dockerfile у корені). `render.yaml` — приклад деплою на Render.
