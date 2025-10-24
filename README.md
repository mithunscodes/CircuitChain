```markdown
# Grant Explorer Demo (Sepolia)

This repo deploys a tiny Grant contract to Sepolia and executes 3 demo transactions so your Blockscout Autoscout instance has content to show.

Setup
1. Clone this repo.
2. Create a .env file from .env.example and set:
   - RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY
   - PRIVATE_KEY=0xYOUR_TEST_ACCOUNT_PRIVATE_KEY (use a Sepolia test account; keep private)
3. Install deps:
   npm install
4. Compile:
   npm run compile
5. Deploy:
   npm run deploy
   - Copy the contract address printed to console and add it to .env as GRANT_CONTRACT=0x...
6. Send demo txs:
   node scripts/makeTxs.js
7. In your Blockscout explorer, open:
   - Contract page for the deployed address
   - One or more tx pages using the printed tx hashes
   - Token/holders not applicable for this simple demo

Notes
- Use Sepolia faucet to top up your test wallet.
- Keep PRIVATE_KEY secret. Do not commit .env to GitHub.
```