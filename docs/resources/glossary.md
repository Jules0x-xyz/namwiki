---
title: Glossary
description: Key terms and definitions for Namada
sidebar_position: 1
---

# Glossary

Reference guide for Namada terminology and concepts.

---

## A

### Asset

Any token or cryptocurrency that can be held or transferred on the Namada network. Includes NAM and IBC-transferred tokens.

---

## B

### Block

A collection of transactions bundled together and added to the blockchain. Each block references the previous block, forming a chain.

### Block Explorer

A web application that allows users to view blockchain data including transactions, blocks, and addresses.

### Byzantine Fault Tolerance (BFT)

A property of distributed systems that can continue operating correctly even if some nodes fail or act maliciously.

---

## C

### CometBFT

The consensus engine used by Namada (previously known as Tendermint). Provides fast finality and Byzantine fault tolerance.

### Consensus

The process by which network participants agree on the state of the blockchain.

### Cubic Slashing

Namada's slashing mechanism where penalties increase with the cube of misbehaving stake, discouraging validator collusion.

---

## D

### Delegation

The act of assigning your staking power to a validator without transferring ownership of your tokens.

### DPoS (Delegated Proof of Stake)

A consensus mechanism where token holders vote for validators who secure the network.

---

## E

### Epoch

A defined period in Namada's consensus. Used for staking rewards distribution and governance timing.

---

## G

### Gas

A measure of computational effort required to execute operations. Users pay gas fees to compensate validators.

### Governance

The system for making decisions about protocol changes through on-chain proposals and voting.

---

## I

### IBC (Inter-Blockchain Communication)

A protocol enabling communication and asset transfers between different blockchains. Namada uses IBC to connect with the Cosmos ecosystem.

### IBFT (Istanbul Byzantine Fault Tolerance)

A variant of BFT consensus used in some blockchain implementations.

---

## K

### Keplr

A popular browser wallet that supports Cosmos-based chains. Can be used with Namada for some operations.

---

## M

### MASP (Multi-Asset Shielded Pool)

Namada's core privacy technology. A unified pool where different asset types share anonymity, providing stronger privacy than single-asset systems.

### Mainnet

The primary, production blockchain network where real transactions with real value occur.

---

## N

### NAM

The native token of Namada. Used for staking, governance, and paying transaction fees.

### Namada

A proof-of-stake blockchain focused on multichain, asset-agnostic privacy. Enables shielded transfers for any connected asset.

### Node

A computer running Namada software that participates in the network by validating transactions and maintaining the blockchain.

---

## P

### PGF (Public Goods Funding)

Namada's mechanism for funding public goods and community projects through protocol-level allocation and governance.

### Privacy Set

The group of participants whose transactions are mixed together, providing anonymity. Larger privacy sets mean stronger privacy.

### Proof of Stake (PoS)

A consensus mechanism where validators stake tokens as collateral to participate in block production and earn rewards.

### Proposal

A governance request submitted on-chain for community voting. Can propose protocol changes, parameter updates, or funding allocations.

---

## S

### Shielded

Transactions or assets protected by Namada's privacy features. Shielded data hides amounts, senders, and recipients.

### Shielding

The process of moving assets from a transparent (public) state to a shielded (private) state within the MASP.

### Slashing

Penalty mechanism that reduces a validator's stake for misbehavior like double-signing or extended downtime.

### Staking

Locking tokens to support network security. Stakers earn rewards and can participate in governance.

---

## T

### Testnet

A test network for development and experimentation without risking real assets.

### Transaction

An operation recorded on the blockchain, such as a transfer, stake delegation, or governance vote.

### Transparent

Standard, public transactions where amounts and addresses are visible on the blockchain.

---

## U

### Unbonding

The process of withdrawing staked tokens. Subject to an unbonding period before tokens become available.

### Unshielding

The process of moving assets from the shielded pool back to a transparent state.

---

## V

### Validator

A node operator who participates in consensus by proposing and validating blocks. Validators stake NAM and earn rewards.

---

## W

### Wallet

Software or hardware that stores cryptographic keys and allows users to manage their blockchain assets.

---

## Z

### Zero-Knowledge Proof

A cryptographic method allowing one party to prove knowledge of information without revealing the information itself.

### zk-SNARK

Zero-Knowledge Succinct Non-Interactive Argument of Knowledge. The specific proof system used in Namada for privacy.

---

## Related Resources

- [MASP Explained](/docs/concepts/masp-explained)
- [zk-SNARKs ELI5](/docs/concepts/zk-snarks-eli5)
- [Governance Basics](/docs/concepts/governance-basics)
