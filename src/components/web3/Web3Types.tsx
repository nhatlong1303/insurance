import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";
import { BigNumber, ethers } from "ethers";

interface BasicChainInformation {
    urls: string[];
    name: string;
}

interface ExtendedChainInformation extends BasicChainInformation {
    nativeCurrency: AddEthereumChainParameter["nativeCurrency"];
    blockExplorerUrls: AddEthereumChainParameter["blockExplorerUrls"];
}


export const getConnectorInfo = (connector: Connector): ConnectorInfo => {
    if (connector instanceof MetaMask) {
        return {
            id: "metaMask",
            name: "MetaMask",
            connector,
        };
    } else if (connector instanceof WalletConnect) {
        return {
            id: "walletConnect",
            name: "WalletConnect",
            connector,
        };
    }
};


export const CHAINS: {
    [chainId: number]: BasicChainInformation | ExtendedChainInformation;
} = {
    1: {
        urls: ["https://mainnet.infura.io/v3/f87b967bc65a41c0a1a25635493fa482"],
        name: "Mainnet",
    },

    4: {
        urls: ["https://rinkeby.infura.io/v3/f87b967bc65a41c0a1a25635493fa482"],
        name: "Rinkeby",
    },

    42: {
        urls: ["https://kovan.infura.io/ws/v3/f87b967bc65a41c0a1a25635493fa482"],
        name: "Kovan",
    },
};

function isExtendedChainInformation(
    chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
    return !!(chainInformation as ExtendedChainInformation).nativeCurrency;
}

export function getAddChainParameters(
    chainId: number
): AddEthereumChainParameter | number {
    const chainInformation = CHAINS[chainId];
    if (isExtendedChainInformation(chainInformation)) {
        return {
            chainId,
            chainName: chainInformation.name,
            nativeCurrency: chainInformation.nativeCurrency,
            rpcUrls: chainInformation.urls,
            blockExplorerUrls: chainInformation.blockExplorerUrls,
        };
    } else {
        return chainId;
    }
}

export const etherToWei = (amount: number | string) =>
    ethers.utils.parseEther(amount.toString());

