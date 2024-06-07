# Multiple Wallet Connection

This project demonstrates how to connect to multiple Web3 wallets, including MetaMask and Coinbase Wallet, using Web3Modal. It allows users to connect their browser wallets and manage their accounts on the Ethereum blockchain.

## Features

- Connect to MetaMask, Coinbase Wallet, and other injected browser wallets
- Detect and handle wallet connection and disconnection
- Display connected account information

## Dependencies

- [Web3.js](https://github.com/ChainSafe/web3.js) - A JavaScript library for interacting with the Ethereum blockchain.
- [Web3Modal](https://github.com/Web3Modal/web3modal) - A single Web3 / Ethereum provider solution for all Wallets.
- [WalletConnect](https://github.com/WalletConnect/walletconnect-monorepo) - Open protocol for connecting Wallets to Dapps.
- [Coinbase Wallet SDK](https://github.com/coinbase/coinbase-wallet-sdk) - Coinbase Wallet SDK for JavaScript.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/CagatayAkkas/Multiple-Wallet-Connection.git
```

2. Navigate to the project directory:

```bash
cd Multiple-Wallet-Connection
```

3. Open the index.html file in your preferred web browser:

```bash
open index.html
```

4. Replace YOUR_INFURA_ID with your actual Infura Project ID in the app.js file.

```bash
infuraId: "YOUR_INFURA_ID", // Replace with your Infura ID
```

## Useage
1.	Click on the “Connect Wallet” button.
2.	Select your preferred wallet from the Web3Modal popup.
3.	If using MetaMask, a MetaMask popup will appear asking for account access. Click “Connect” to allow access.
4.	If using Coinbase Wallet, a Coinbase Wallet popup will appear asking for account access. Click “Connect” to allow access.
5.	Once connected, your account information will be displayed in the console.
