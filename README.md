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

<img width="344" alt="SCR-20240607-hvpm" src="https://github.com/CagatayAkkas/Multiple-Wallet-Connection/assets/108520279/d86a5762-7ab7-4cfb-942b-f65e8a380d7a">,

2.	Select your preferred wallet from the Web3Modal popup.

<img width="530" alt="SCR-20240607-hvua" src="https://github.com/CagatayAkkas/Multiple-Wallet-Connection/assets/108520279/5ad6bb0f-3ec3-4a26-8617-6a52f2b4cc99">

4.	If using MetaMask, a MetaMask popup will appear asking for account access. Click “Connect” to allow access.

<img width="612" alt="SCR-20240607-hxru" src="https://github.com/CagatayAkkas/Multiple-Wallet-Connection/assets/108520279/c9444e5f-bb94-4e82-943e-9ac15c8778ee">

5.	If using Coinbase Wallet, a Coinbase Wallet popup will appear asking for account access. Click “Connect” to allow access.

<img width="790" alt="SCR-20240607-hxes" src="https://github.com/CagatayAkkas/Multiple-Wallet-Connection/assets/108520279/dcbb0334-b248-4902-b33d-ecd60701baaf">

6.	Once connected, your account information will be displayed in the console.


