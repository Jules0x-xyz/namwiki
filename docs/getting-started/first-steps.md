---
title: First Steps
description: Your first steps into the Namada ecosystem
sidebar_position: 3
tags: [getting-started, beginner, wallet, setup]
keywords: [namada setup, first steps, getting started, beginner guide]
---

# First Steps

Welcome to Namada! This guide will help you take your first steps into the privacy-first blockchain ecosystem.

## Prerequisites

Before you begin, you'll need:

- A computer or smartphone with internet access
- About 15-30 minutes to complete the setup
- Some cryptocurrency to transfer (optional for exploration)

## Step 1: Choose a Wallet

The first thing you need is a **wallet** to interact with Namada. You have several options:

### For Beginners: Browser Extension

The **Namada Browser Extension** is the easiest way to get started:

- ✅ User-friendly interface
- ✅ Works in your browser
- ✅ Supports shielded transfers
- ✅ Free to install

👉 [Install Namada Extension Guide](/docs/guides/wallets/install-namada-extension)

### For Advanced Users: CLI Wallet

The **Command Line Interface (CLI)** wallet offers more control:

- ✅ Full feature access
- ✅ Scriptable and automatable
- ⚠️ Requires technical knowledge

👉 [CLI Wallet Introduction](/docs/guides/wallets/cli-wallet-intro)

### For Cosmos Users: Keplr

If you're already using **Keplr** for Cosmos:

- ✅ Familiar interface
- ✅ Works with existing setup
- ⚠️ Limited shielded features

👉 [Setup Keplr for Namada](/docs/guides/wallets/setup-keplr)

## Step 2: Secure Your Seed Phrase

When you create a wallet, you'll receive a **seed phrase** (also called recovery phrase or mnemonic):

```
word1 word2 word3 word4 word5 word6 word7 word8 
word9 word10 word11 word12 word13 word14 word15 word16 
word17 word18 word19 word20 word21 word22 word23 word24
```

:::danger Critical Security
Your seed phrase is the ONLY way to recover your wallet. If you lose it, you lose access to your funds forever. If someone else gets it, they can steal everything.
:::

### Best Practices for Seed Phrases

| ✅ Do | ❌ Don't |
|-------|---------|
| Write it on paper | Store it digitally |
| Keep multiple copies | Take screenshots |
| Store in secure locations | Share with anyone |
| Consider a metal backup | Store in cloud storage |
| Memorize if possible | Type it in websites |

## Step 3: Get Some NAM

To interact with Namada, you'll need NAM tokens for:

- **Gas fees** (transaction costs)
- **Staking** (earning rewards)
- **Governance** (voting on proposals)

### Ways to Get NAM

1. **Buy from an exchange** - See [Where to Buy NAM](/docs/resources/where-to-buy)
2. **Transfer via IBC** - From other Cosmos chains
3. **Receive from others** - Get sent NAM from friends
4. **Earn through staking** - Stake and earn rewards

## Step 4: Understand Addresses

Namada has two types of addresses:

### Transparent Addresses

```
tnam1qp6eyv...xyz
```

- Start with `tnam`
- Visible on block explorers
- Like a regular blockchain address

### Shielded Addresses

```
znam1abc123...789
```

- Start with `znam`
- Private and unlinkable
- Protected by zero-knowledge proofs

You'll have both types in your wallet. Use transparent for public transactions and shielded for private ones.

## Step 5: Your First Transaction (Optional)

Once you have NAM, try making a simple transfer:

1. **Transparent transfer**: Send NAM to another `tnam` address
2. **Shield your NAM**: Transfer from `tnam` to your `znam` address
3. **Shielded transfer**: Send from `znam` to another `znam`
4. **Unshield**: Transfer from `znam` back to `tnam`

See our [Transaction Guides](/docs/guides/transactions/send-to-wallet) for detailed instructions.

## What's Next?

Now that you're set up, explore these topics:

### Essential Guides

- [Shield Your Assets](/docs/guides/transactions/shield-assets) - Make your first shielded transfer
- [Understanding Staking](/docs/guides/staking/understanding-staking) - Earn rewards
- [MASP Explained](/docs/concepts/masp-explained) - Learn how privacy works

### Explore the Ecosystem

- [Ecosystem Tools](/docs/resources/ecosystem-tools) - Useful apps and services
- [Block Explorers](/docs/resources/block-explorers) - View network activity
- [Community Links](/docs/resources/community-links) - Join the community

:::tip Need Help?
Join the [Namada Discord](https://discord.gg/namada) for community support, or check our [FAQ](/docs/resources/faq) for common questions.
:::
