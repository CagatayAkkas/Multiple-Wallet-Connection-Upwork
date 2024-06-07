// WalletConnect provider options
const providerOptions = {
  walletconnect: {
    package: window.WalletConnectProvider.default, // required
    options: {
      infuraId: "YOUR_INFURA_ID", // required
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

// Function to connect to injected wallets (MetaMask, Coinbase Wallet, etc.)
const connectToInjectedWallet = async (accounts) => {
  if (typeof window.ethereum !== "undefined") {
    try {
      // Accounts now exposed
      console.log("Connected account:", accounts[0]);
      alert("Connected account: " + accounts[0]);
    } catch (error) {
      console.error("User denied account access", error);
      alert("Failed to connect Web3 Wallet");
    }
  } else {
    console.log("Web3 Wallet is not installed");
    alert(
      "Web3 Wallet is not installed. Please install it to use this feature."
    );
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

      // Subscribe to accounts change
      currentProvider.on("accountsChanged", (accounts) => {
        console.log("Accounts changed:", accounts);
      });

      // Subscribe to chainId change
      currentProvider.on("chainChanged", (chainId) => {
        console.log("Chain ID changed:", chainId);
      });

      // Subscribe to networkId change
      currentProvider.on("networkChanged", (networkId) => {
        console.log("Network ID changed:", networkId);
      });

      // Check if the provider is an injected wallet
      if (currentProvider.isMetaMask || currentProvider.isCoinbaseWallet) {
        await connectToInjectedWallet(accounts);
      } else {
        console.log("Connected to another wallet");
        alert("Connected account: " + accounts[0]);
      }
    } catch (error) {
      console.error("Could not connect to wallet", error);
    }
  });
