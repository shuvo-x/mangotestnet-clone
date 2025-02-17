import { ethers } from "ethers";
import { useEffect } from "react";

const WalletConnect = ({account, setAccount}) => {

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); // Prompt user to connect wallet
        const signer = provider.getSigner();
        const address = await signer.getAddress(); // Correct method name
        setAccount(address); // Set the wallet address to state
        //console.log("Connected wallet address:", address);

        localStorage.setItem("connectedAccount", address);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("Metamask is not installed. Please install it to use this app.");
    }
  }


  useEffect(() => {
    const storedAccount = localStorage.getItem("connectedAccount");
    if(storedAccount){
      setAccount(storedAccount);
      console.log("Loaded wallet from localStorage:", storedAccount);
    }
  }, [setAccount])
  

  return (
    <div>
      <button onClick={connectWallet} style={{padding: '14px 12px 14px 12px', borderRadius: '22px'}}>
        {account ? `${account.slice(0,7)+"..."+account.slice(39)}` : "Connect Wallet"}
      </button>

    </div>
  );
};

export default  WalletConnect;
