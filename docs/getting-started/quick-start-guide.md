---
title: Quick Start Guide
description: Get up and running with Namada in 10 minutes
sidebar_position: 4
tags: [quick-start, tutorial, beginner]
keywords: [namada quickstart, tutorial, beginner guide, fast setup]
---

# Quick Start Guide

Get from zero to shielded in 10 minutes! This guide covers everything you need to start using Namada.

:::tip Time Required
⏱️ **10 minutes** | 🎯 **Difficulty**: Beginner
:::

## TL;DR - The Quick Version

1. Install Namada browser extension
2. Create wallet & save seed phrase
3. Get NAM from an exchange
4. Send NAM to your wallet
5. Shield your assets
6. Done! 🎉

---

## Detailed Steps

### Step 1: Install the Wallet (2 min)

1. Open **Chrome** or **Brave** browser
2. Go to the Chrome Web Store
3. Search for "Namada Extension"
4. Click **Add to Chrome**
5. Pin the extension to your toolbar

![Install Extension](/img/guides/install-extension.png)

### Step 2: Create Your Wallet (2 min)

1. Click the Namada extension icon
2. Select **Create new wallet**
3. Set a strong password
4. **IMPORTANT**: Write down your 24-word seed phrase on paper
5. Verify the seed phrase
6. Your wallet is ready!

:::danger Seed Phrase Security
Never share your seed phrase. Never store it digitally. Write it on paper and keep it safe.
:::

### Step 3: Get Your Addresses (1 min)

After setup, you'll have two addresses:

**Transparent Address** (`tnam...`):
```
tnam1qp6eyv5q2s3e4h8r7t9u0i1o2p3a4s5d6f7g8h9j
```

**Shielded Address** (`znam...`):
```
znam1abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

Copy your transparent address - you'll need it to receive NAM.

### Step 4: Get NAM (3 min)

#### Option A: Buy from Exchange

1. Create account on a [supported exchange](/docs/resources/where-to-buy)
2. Buy NAM with fiat or crypto
3. Withdraw to your `tnam` address

#### Option B: IBC Transfer

If you have ATOM, OSMO, or other Cosmos tokens:

1. Go to a DEX with IBC support
2. Swap your tokens for NAM
3. IBC transfer to your Namada address

### Step 5: Shield Your Assets (2 min)

Now for the magic - making your NAM private!

1. Open your Namada wallet
2. Click **Shield**
3. Select amount (or "Max")
4. Confirm the transaction
5. Wait for confirmation (~6 seconds)

```
Your NAM: tnam... (visible on explorer)
           ↓ Shield
Your NAM: znam... (private!)
```

### Step 6: You're Done! 🎉

Your assets are now shielded. You can:

- **Send privately**: Transfer to other `znam` addresses
- **Earn rewards**: Shielded assets earn rewards automatically
- **Stay private**: Your balance and transactions are hidden

---

## Verification Checklist

Confirm everything is set up correctly:

- [ ] Wallet installed and accessible
- [ ] Seed phrase written down and stored safely
- [ ] Both addresses available (tnam and znam)
- [ ] NAM received in wallet
- [ ] Assets successfully shielded

## Common Issues

### "Transaction pending for too long"

Wait up to 60 seconds. If still pending, check [block explorer](/docs/resources/block-explorers) for network status.

### "Insufficient funds for gas"

Keep some NAM unshielded for transaction fees. Recommend: 0.5-1 NAM.

### "Can't find my shielded balance"

Make sure you're looking at the shielded section of your wallet. The balance won't appear in the transparent section.

## What's Next?

### Immediate Next Steps

1. [Send a Shielded Transaction](/docs/guides/transactions/send-shielded-transaction)
2. [Start Staking](/docs/guides/staking/how-to-stake)
3. [Understand MASP](/docs/concepts/masp-explained)

### Learn More

- [Privacy Best Practices](/docs/concepts/privacy-best-practices)
- [Transaction Fees](/docs/concepts/transaction-fees)
- [FAQ](/docs/resources/faq)

### Join the Community

- 💬 [Discord](https://discord.gg/namada)
- 🐦 [Twitter](https://twitter.com/namada)
- 📝 [Forum](https://forum.namada.net)

---

:::info Was this helpful?
Help us improve this guide! Click "Edit this page" at the bottom to suggest changes.
:::
