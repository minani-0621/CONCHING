# Setup
from web3 import Web3

alchemy_url = "https://eth-mainnet.g.alchemy.com/v2/09caRffuBasxu3qD9oFXWybFZT9yFadr"
w3 = Web3(Web3.HTTPProvider(alchemy_url))

try:
    # Check if the connection is successful by getting the latest block number
    latest_block_number = w3.eth.block_number
    print("Connected to Ethereum node")
    print(f"Latest block number: {latest_block_number}")
except Exception as e:
    print("Failed to connect to Ethereum node")
    print(e)