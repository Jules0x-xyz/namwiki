---
title: Install Namada Extension
description: Step-by-step guide to install and set up the Namada browser extension wallet
sidebar_position: 1
tags: [wallet, extension, browser, setup]
keywords: [namada extension, browser wallet, chrome extension, wallet setup]
---

# Install Namada Extension

The Namada browser extension is the easiest way to interact with Namada. This guide walks you through installation and setup.

:::tip Time & Difficulty
⏱️ **5 minutes** | 🎯 **Difficulty**: Beginner
:::

## Prerequisites

- **Chrome**, **Brave**, or **Edge** browser (Chromium-based)
- Internet connection

## Step 1: Download the Extension

1. Open your browser
2. Go to the [Chrome Web Store](https://chrome.google.com/webstore)
3. Search for **"Namada"**
4. Click on **Namada Extension**
5. Click **Add to Chrome**
6. Confirm by clicking **Add Extension**

:::info Firefox Users
A Firefox version is in development. For now, use a Chromium-based browser or the [CLI wallet](/docs/guides/wallets/cli-wallet-intro).
:::

## Step 2: Pin the Extension

For easy access:

1. Click the **puzzle piece icon** 🧩 in your browser toolbar
2. Find **Namada Extension**
3. Click the **pin icon** 📌
4. The Namada icon now appears in your toolbar

## Step 3: Create a New Wallet

1. Click the **Namada icon** in your toolbar
2. Select **Create new wallet**
3. Read and accept the terms

### Set Your Password

Create a strong password:

- At least 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- Don't reuse passwords from other sites

:::warning Password Tips
This password encrypts your wallet locally. If you forget it, you can restore with your seed phrase. Make it strong but memorable.
:::

## Step 4: Backup Your Seed Phrase

This is the most important step!

1. You'll see 24 words displayed on screen
2. **Write them down on paper** (in order!)
3. Store in a secure location
4. Never share with anyone
5. Never store digitally

### Verify Your Backup

1. Click **Continue**
2. Enter the words in the correct order
3. This confirms you've backed up correctly

:::danger Critical Security
Your 24-word seed phrase is the ONLY way to recover your wallet. If you lose it and forget your password, your funds are gone forever. Treat it like the keys to a safe deposit box.
:::

## Step 5: Wallet Setup Complete!

Your wallet is now ready. You'll see:

### Dashboard Overview

- **Transparent Balance**: NAM in your `tnam` address
- **Shielded Balance**: NAM in your `znam` address
- **Recent Transactions**: Your transaction history

### Your Addresses

Click to copy your addresses:

**Transparent Address:**
```
tnam1qp6eyv5q2s3e4h8r7t9u0...
```

**Shielded Address:**
```
znam1abc123def456ghi789jkl...
```

## Extension Features

### Main Functions

| Button | Function |
|--------|----------|
| 📤 **Send** | Transfer NAM |
| 📥 **Receive** | Show your addresses |
| 🛡️ **Shield** | Move to shielded pool |
| 📊 **Stake** | Delegate to validators |

### Settings

Access settings via the gear icon ⚙️:

- **Networks**: Switch between mainnet/testnet
- **Security**: Lock settings, auto-lock timer
- **About**: Version info

### Lock Your Wallet

Always lock when not in use:

1. Click the **lock icon** 🔒
2. Or set auto-lock in settings

## Importing an Existing Wallet

Have a seed phrase from another wallet?

1. Click **Namada icon**
2. Select **Import wallet**
3. Enter your 24-word seed phrase
4. Set a new password
5. Done!

## Connecting to dApps

When you visit a Namada dApp:

1. The site will request to connect
2. Review the permissions
3. Click **Approve**
4. You're connected!

:::tip Safe Connections
Only connect to trusted websites. The extension will show which site is requesting access.
:::

## Troubleshooting

### Extension Not Loading

1. Refresh the page
2. Check if extension is enabled in browser settings
3. Try disabling and re-enabling
4. Reinstall if needed

### Wrong Network

1. Open extension
2. Click ⚙️ Settings
3. Select correct network (Mainnet/Testnet)

### Forgot Password

1. Click **Forgot password?**
2. Enter your 24-word seed phrase
3. Set a new password

### Balance Not Showing

1. Check you're on the correct network
2. Wait for wallet to sync
3. Try refreshing

## Security Best Practices

1. ✅ Lock wallet when not in use
2. ✅ Use auto-lock feature
3. ✅ Never share seed phrase
4. ✅ Verify addresses before sending
5. ✅ Keep browser and extension updated
6. ❌ Don't click suspicious links
7. ❌ Don't enter seed phrase on websites

## Next Steps

- [Send NAM to Your Wallet](/docs/guides/transactions/send-to-wallet)
- [Shield Your Assets](/docs/guides/transactions/shield-assets)
- [Start Staking](/docs/guides/staking/how-to-stake)

---

*Need help? Join [Discord](https://discord.gg/namada) for community support.*
