import { useEffect, useState } from "react";
import Web3 from "web3";

const useWeb3 = () => {
  const [web3, setWeb3] = useState();

  const getWeb3 = async () => {
    try {
      if (window.ethereum) {
        setWeb3(new Web3(window.ethereum));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!web3) getWeb3();
  }, [web3]);

  return { web3 };
};

export default useWeb3;
