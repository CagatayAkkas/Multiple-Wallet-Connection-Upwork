// WalletConnect provider options
const providerOptions = {
  walletconnect: {
    package: window.WalletConnectProvider.default, // required
    options: {
      infuraId: "ab005486159e48c783797941142c9ef9", // required
    },
  },
  coinbasewallet: {
    package: window.CoinbaseWalletSDK, // required
    options: {
      appName: "Web3 Modal Demo", // optional
      infuraId: "ab005486159e48c783797941142c9ef9", // required
    },
  },
  injected: {
    display: {
      name: "Browser Wallet",
      description: "Injected Web3 Wallet (e.g. MetaMask, Brave Wallet)",
    },
    package: null,
  },
};

// Create Web3Modal instance
const web3Modal = new window.Web3Modal.default({
  cacheProvider: false, // optional
  providerOptions, // required
});

let currentProvider = null;

// Function to connect to MetaMask directly
const connectToMetaMask = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      // Request account access if needed
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // Accounts now exposed
      console.log("Connected account:", accounts[0]);
      alert("Connected account: " + accounts[0]);
    } catch (error) {
      console.error("User denied account access", error);
      alert("Failed to connect MetaMask");
    }
  } else {
    console.log("MetaMask is not installed");
    alert("MetaMask is not installed. Please install it to use this feature.");
  }
};

// Connect button handler
document
  .getElementById("connect-button")
  .addEventListener("click", async () => {
    try {
      currentProvider = await web3Modal.connect();
      const web3 = new Web3(currentProvider);

      // Get user accounts
      const accounts = await web3.eth.getAccounts();
      console.log("Connected account:", accounts[0]);

      // Subscribe to accounts change
      currentProvider.on("accountsChanged", (accounts) => {
        console.log(accounts);
      });

      // Subscribe to chainId change
      currentProvider.on("chainChanged", (chainId) => {
        console.log(chainId);
      });

      // Subscribe to networkId change
      currentProvider.on("networkChanged", (networkId) => {
        console.log(networkId);
      });

      // Check if the provider is MetaMask
      if (currentProvider.isMetaMask) {
        await connectToMetaMask();
      } else if (currentProvider.isCoinbaseWallet) {
        console.log("Connected to Coinbase Wallet");
        alert("Connected to Coinbase Wallet: " + accounts[0]);
      }
    } catch (error) {
      console.error("Could not connect to wallet", error);
    }
  });
