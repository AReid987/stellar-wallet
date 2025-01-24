---
type: Page
title: stellarCommunityTokens
description: null
icon: null
createdAt: '2025-01-24T17:43:58.684Z'
creationDate: 2025-01-24 11:43
modificationDate: 2025-01-24 11:46
tags: []
coverImage: null
---

# stellarCommunityTokens

On the **Stellar blockchain**, tokens can be broadly categorized into **two types** based on their issuance and management:

---

## Lumens vs Assets

### **1. Native Tokens (XLM - Lumens)**

- **What it is**: The **native token** of the Stellar network is **XLM (Lumens)**. It is built into the Stellar protocol and serves as the backbone of the network.

- **Purpose**:

    - **Transaction Fees**: XLM is used to pay for transaction fees on the Stellar network.

    - **Anti-Spam Mechanism**: A small amount of XLM is required to create accounts or trustlines, preventing spam and misuse.

    - **Bridge Currency**: XLM acts as a bridge currency for cross-border payments and asset exchanges.

- **Key Features**:

    - **No Issuer**: XLM is issued by the Stellar network itself, not by any individual or organization.

    - **Fixed Supply**: The total supply of XLM is capped, ensuring scarcity and value.

    - **Universal Acceptance**: All Stellar wallets and accounts can hold and transact XLM without needing a trustline.

---

### **2. Custom Tokens (Issued Assets)**

- **What it is**: **Custom tokens** are assets created by individuals, organizations, or communities on the Stellar network. These tokens can represent anything of value, such as currencies, loyalty points, or even real-world assets like art or real estate.

- **Purpose**:

    - **Tokenization**: Custom tokens enable the creation of digital representations of assets, making them easily transferable and tradable on the Stellar network.

    - **Community Engagement**: Tokens can be used to incentivize participation, reward users, or fund projects.

    - **Decentralized Finance (DeFi)**: Custom tokens can be used in DeFi applications like lending, borrowing, and trading.

- **Key Features**:

    - **Issuer Required**: Every custom token has an **issuer** (the entity that creates and manages the token).

    - **Trustlines**: To hold or transact a custom token, users must establish a **trustline** with the issuer. This ensures that users trust the issuer to honor the token's value.

    - **Flexibility**: Custom tokens can have unique properties, such as fixed supply, inflation, or even programmable behavior using **Stellar Smart Contracts**.

    - **Examples**:

        - **Stablecoins**: Tokens pegged to fiat currencies (e.g., USD, EUR).

        - **Community Tokens**: Tokens for specific communities or use cases (e.g., Eco Credits, Art Tokens).

        - **Utility Tokens**: Tokens used for accessing services or products (e.g., Event Passports, Wellness Passes).

---

### **Key Differences Between Native and Custom Tokens**

| Feature                | Native Token (XLM)                  | Custom Tokens (Issued Assets)                 |
| :--------------------- | :---------------------------------- | :-------------------------------------------- |
| **Issuer**             | Stellar Network                     | Individuals, Organizations, Communities       |
| **Trustline Required** | No                                  | Yes                                           |
| **Purpose**            | Transaction fees, anti-spam, bridge | Tokenization, incentives, DeFi                |
| **Supply**             | Fixed                               | Can be fixed or flexible                      |
| **Examples**           | XLM (Lumens)                        | Stablecoins, community tokens, utility tokens |

---

### **How to Create and Use Custom Tokens on Stellar**

1. **Create the Token**:

    - Use the Stellar SDK to issue a new asset.

    - Example in JavaScript:

        ```javascript
        const StellarSdk = require('stellar-sdk');
        const issuerKeypair = StellarSdk.Keypair.random();
        const asset = new StellarSdk.Asset('MyToken', issuerKeypair.publicKey());
        console.log(`Asset Issued: ${asset.code} by ${asset.issuer}`);
        ```

2. **Establish Trustlines**:

    - Users must create a trustline to hold the custom token.

    - Example:

        ```javascript
        const transaction = new StellarSdk.TransactionBuilder(account, { fee: StellarSdk.BASE_FEE, networkPassphrase: StellarSdk.Networks.TESTNET })
          .addOperation(StellarSdk.Operation.changeTrust({
            asset: asset
          }))
          .setTimeout(30)
          .build();
        transaction.sign(userKeypair);
        server.submitTransaction(transaction);
        ```

3. **Distribute Tokens**:

    - Send tokens to users via payment operations.

    - Example:

        ```javascript
        const transaction = new StellarSdk.TransactionBuilder(account, { fee: StellarSdk.BASE_FEE, networkPassphrase: StellarSdk.Networks.TESTNET })
          .addOperation(StellarSdk.Operation.payment({
            destination: userPublicKey,
            asset: asset,
            amount: '100'
          }))
          .setTimeout(30)
          .build();
        transaction.sign(issuerKeypair);
        server.submitTransaction(transaction);
        ```

4. **Trade on the DEX**:

    - List the token on Stellar's decentralized exchange (DEX) for trading.

    - Example:

        ```javascript
        const transaction = new StellarSdk.TransactionBuilder(account, { fee: StellarSdk.BASE_FEE, networkPassphrase: StellarSdk.Networks.TESTNET })
          .addOperation(StellarSdk.Operation.manageSellOffer({
            selling: asset,
            buying: StellarSdk.Asset.native(),
            amount: '50',
            price: '0.5'
          }))
          .setTimeout(30)
          .build();
        transaction.sign(userKeypair);
        server.submitTransaction(transaction);
        ```

---

### **Conclusion**

- **Native Tokens (XLM)**: Essential for network operations, such as paying fees and preventing spam.

- **Custom Tokens**: Enable the creation of diverse digital assets for specific use cases, communities, or financial applications.

By leveraging both types of tokens, you can build a robust ecosystem on the Stellar blockchain, combining the utility of XLM with the flexibility of custom tokens.

---

## SAC vs WASM

On the **Stellar blockchain**, tokens can exist in **two distinct forms**, each with its own technical implementation and use cases. Let’s break this down in detail:

---

### **1. Assets Issued by Stellar Accounts (G... Addresses)**

- **What it is**: These are **custom tokens** issued by Stellar accounts (identified by `G...` addresses). They are created using Stellar's native **Asset Issuance** functionality and rely on the **Stellar Asset Contract (SAC)** for basic operations like transfers, trustlines, and payments.

- **How it Works**:

    - An issuer creates a new asset by specifying an **asset code** (e.g., `ECO`) and linking it to their Stellar account (`G...` address).

    - Users must establish a **trustline** with the issuer to hold or transact the asset.

    - The asset is managed using Stellar's built-in functionality, such as **payment operations** and **trustline management**.

- **Key Features**:

    - **No Custom Logic**: The SAC provides basic functionality (e.g., transfers, trustlines) but does not support complex logic or programmable behavior.

    - **Trustlines Required**: Users must explicitly trust the issuer to hold the asset.

    - **Examples**: Stablecoins (e.g., USDC), community tokens (e.g., Eco Credits), or utility tokens (e.g., Event Passports).

- **Use Cases**:

    - Simple tokenization of assets (e.g., currencies, loyalty points).

    - Community-driven tokens with straightforward utility.

- **Technical Implementation**:

    - Example of issuing an asset:

        ```javascript
        const StellarSdk = require('stellar-sdk');
        const issuerKeypair = StellarSdk.Keypair.random();
        const asset = new StellarSdk.Asset('ECO', issuerKeypair.publicKey());
        console.log(`Asset Issued: ${asset.code} by ${asset.issuer}`);
        ```

---

### **2. Custom Tokens Issued by Deployed WASM Contracts (C... Addresses)**

- **What it is**: These are **smart contract-based tokens** deployed on Stellar using **WebAssembly (WASM)**. They are identified by `C...` addresses and allow for **programmable behavior** and **custom logic**.

- **How it Works**:

    - A smart contract is written in a language like **Rust** or **AssemblyScript**, compiled to WASM, and deployed to the Stellar network.

    - The contract defines the token's behavior, such as minting, burning, transfers, and custom rules (e.g., vesting schedules, royalties).

    - Users interact with the token by invoking the contract's functions.

- **Key Features**:

    - **Custom Logic**: The token's behavior is fully programmable, enabling complex use cases.

    - **No Trustlines**: Users do not need to establish trustlines with the issuer, as the contract enforces the rules.

    - **Examples**: NFTs, tokens with vesting schedules, or tokens with royalty mechanisms.

- **Use Cases**:

    - **NFTs**: Unique tokens representing digital art, collectibles, or real-world assets.

    - **Programmable Tokens**: Tokens with custom rules (e.g., time-locked transfers, revenue sharing).

    - **DeFi Applications**: Tokens for lending, borrowing, or staking.

- **Technical Implementation**:

    - Example of a simple WASM contract for a token (in Rust):

        ```rust
        use soroban_sdk::{contract, contractimpl, symbol, Env, Symbol, Vec};
        #[contract]
        struct TokenContract;
        #[contractimpl]
        impl TokenContract {
            pub fn mint(env: Env, to: Address, amount: i128) {
                // Mint tokens and assign them to the specified address
                let balance = env.storage().get(&to).unwrap_or(0);
                env.storage().set(&to, balance + amount);
            }
            pub fn transfer(env: Env, from: Address, to: Address, amount: i128) {
                // Transfer tokens between addresses
                let from_balance = env.storage().get(&from).unwrap_or(0);
                let to_balance = env.storage().get(&to).unwrap_or(0);
                env.storage().set(&from, from_balance - amount);
                env.storage().set(&to, to_balance + amount);
            }
        }
        ```

---

### **Key Differences Between G... and C... Tokens**

| Feature          | G... Tokens (Stellar Assets)      | C... Tokens (WASM Contracts)        |
| :--------------- | :-------------------------------- | :---------------------------------- |
| **Issuer**       | Stellar Account (G... address)    | Smart Contract (C... address)       |
| **Trustlines**   | Required                          | Not required                        |
| **Custom Logic** | Limited (basic SAC functionality) | Fully programmable (WASM)           |
| **Complexity**   | Simple to implement               | Requires smart contract development |
| **Use Cases**    | Simple tokenization, stablecoins  | NFTs, DeFi, programmable tokens     |
| **Examples**     | USDC, Eco Credits                 | NFTs, tokens with vesting schedules |

---

### **When to Use Each Type of Token**

1. **Use G... Tokens (Stellar Assets) if**:

    - You need a simple token with basic functionality (e.g., transfers, payments).

    - You want to issue a stablecoin or community token.

    - You prefer a low-cost, easy-to-implement solution.

2. **Use C... Tokens (WASM Contracts) if**:

    - You need a token with custom logic or programmable behavior.

    - You are building NFTs, DeFi applications, or tokens with complex rules.

    - You want to eliminate the need for trustlines.

---

### **Conclusion**

- **G... Tokens**: Ideal for simple tokenization and community-driven assets.

- **C... Tokens**: Perfect for advanced use cases requiring custom logic and programmability.

By understanding the differences between these two types of tokens, you can choose the right approach for your project on the Stellar blockchain. Whether you need a simple token or a fully programmable asset, Stellar provides the tools to build a robust and scalable ecosystem.


