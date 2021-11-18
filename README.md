# Instant-Decentralized-Exchange
 
 This is an application that allows you to exchange ethereum and DApp Token (Erc-20 Token, also Smart contract is in the repo) on testnet.
 
 ## Requirements
 
* [Npm](https://nodejs.org/en/download/)
* [Web3](https://web3js.readthedocs.io/en/v1.5.2/)
* [React](https://reactjs.org/)
* [Truffle](https://trufflesuite.com/)
* [Ganache](https://www.trufflesuite.com/ganache)
* [Metamask](https://metamask.io/)


## Installation

Use the package manager [npm](https://nodejs.org/en/download/) to installation.

```bash
npm install
```

Then to migrate contracts

```bash
truffle migrate --reset
```

To connect ganache and metamask, create a custom rpc on metamask and edit it as below:
![Ekran Alıntısı](https://user-images.githubusercontent.com/43681383/142464199-4312259d-5a5b-48de-ac15-e7b340f06f74.PNG)

Click on the key image next to the first account on ganache and copy the private key, then click on import account on the metamask account and paste the private key.

## Usage

Run the following code in the project home directory. Your app will start running on "localhost:3000". Do not forget that the ganache application must remain open as long as your application is running.

```
npm run start
```
