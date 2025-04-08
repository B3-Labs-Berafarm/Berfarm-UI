import { ethers } from 'ethers';
import { Web3 } from 'web3';
export const getContractInstance = async (contractAddress = '', contractABI = []) => {
    try {
        console.log('👉🏻 Line 5 : ', contractABI, contractAddress);

        if (!contractAddress) throw new Error('NO_CONTRACT_ADDRESS_FOUND');
        if (!contractABI?.length) throw new Error('NO_ABI_FOUND');
        const { ethereum } = window;
        const web3 = new Web3(ethereum)
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        console.log('👉🏻 Line 12 : ', contract);

        const accounts = await web3.eth.getAccounts();
        console.log('👉🏻 Line 15 : ', accounts);

        // const provider = new ethers.BrowserProvider(ethereum);
        // console.log('👉🏻 Line 11 : ', provider);

        // const accounts = await ethereum.request({
        //     method: "eth_requestAccounts",
        // });
        // console.log('👉🏻 Line 14 : ', accounts);

        // const walletAddress = accounts[0];
        // console.log('👉🏻 Line 17 : ', walletAddress);

        // const signer = provider.getSigner(walletAddress);

        return { contract, accounts };
    } catch (error) {
        throw error;
    }
}

export default { getContractInstance };