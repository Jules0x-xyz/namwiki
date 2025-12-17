---
title: Wallet Comparison
description: Compare Namada wallet options to find the best fit for your needs
sidebar_position: 4
tags: [wallet, comparison, choosing]
keywords: [namada wallets, wallet comparison, best wallet, wallet features]
---

# Wallet Comparison

Choose the right wallet for your Namada experience. This guide compares all available options.

## Quick Comparison Table

| Feature | Namada Extension | Keplr | CLI Wallet |
|---------|-----------------|-------|------------|
| **Ease of Use** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| **Transparent Txs** | ✅ | ✅ | ✅ |
| **Shielded Txs** | ✅ | ❌ | ✅ |
| **IBC Support** | ✅ | ✅ | ✅ |
| **Staking** | ✅ | ✅ | ✅ |
| **Governance** | ✅ | ✅ | ✅ |
| **Hardware Wallet** | 🔜 Soon | ✅ Ledger | 🔜 Soon |
| **Mobile** | ❌ | ✅ | ❌ |
| **Automation** | ❌ | ❌ | ✅ |
| **Best For** | Most users | Cosmos users | Power users |

## Detailed Comparison

### Namada Browser Extension

**Best for:** New users, privacy-focused users, daily transactions

#### Pros
- ✅ Native Namada support
- ✅ Full shielded functionality
- ✅ Easy to use interface
- ✅ Regular updates
- ✅ Integrated with dApps

#### Cons
- ❌ Browser only (Chrome/Brave)
- ❌ No mobile version yet
- ❌ Limited hardware wallet support

#### Recommended For
- First-time Namada users
- Users who want privacy features
- dApp users
- Daily transactions

👉 [Install Namada Extension](/docs/guides/wallets/install-namada-extension)

---

### Keplr Wallet

**Best for:** Existing Cosmos users, IBC transfers

#### Pros
- ✅ Already have it if using Cosmos
- ✅ Excellent IBC support
- ✅ Mobile app available
- ✅ Ledger support
- ✅ Multi-chain dashboard

#### Cons
- ❌ No shielded transactions
- ❌ No shielded addresses
- ❌ Transparent only
- ❌ Missing privacy features

#### Recommended For
- IBC transfers from Cosmos chains
- Users already on Keplr
- Transparent-only operations
- Using alongside Namada Extension

👉 [Setup Keplr for Namada](/docs/guides/wallets/setup-keplr)

---

### CLI Wallet

**Best for:** Developers, validators, power users

#### Pros
- ✅ Full feature access
- ✅ Scriptable/automatable
- ✅ Works in terminal
- ✅ Validator operations
- ✅ Advanced options

#### Cons
- ❌ Steep learning curve
- ❌ No graphical interface
- ❌ Requires technical knowledge
- ❌ Manual configuration

#### Recommended For
- Validators
- Developers
- System administrators
- Automated operations
- Script-based workflows

👉 [CLI Wallet Introduction](/docs/guides/wallets/cli-wallet-intro)

---

## Use Case Recommendations

### "I'm new to Namada"

**Use: Namada Extension**

Start with the browser extension. It's designed for new users and gives you access to all features including privacy.

### "I want maximum privacy"

**Use: Namada Extension**

Only the Namada Extension and CLI support shielded transactions. The extension is easier for most users.

### "I'm already using Cosmos/Keplr"

**Use: Keplr + Namada Extension**

- Use Keplr for IBC transfers from Cosmos chains
- Use Namada Extension for shielding and private transactions

### "I'm a developer/validator"

**Use: CLI Wallet**

The CLI gives you full control and is essential for running validators or building automation.

### "I need mobile access"

**Use: Keplr (limited)**

Currently, only Keplr offers mobile access, but without privacy features. A Namada mobile wallet is in development.

## Feature Matrix

### Transaction Types

| Transaction | Extension | Keplr | CLI |
|------------|-----------|-------|-----|
| Send (transparent) | ✅ | ✅ | ✅ |
| Receive (transparent) | ✅ | ✅ | ✅ |
| Shield | ✅ | ❌ | ✅ |
| Unshield | ✅ | ❌ | ✅ |
| Shielded transfer | ✅ | ❌ | ✅ |
| IBC transfer | ✅ | ✅ | ✅ |

### Staking & Governance

| Feature | Extension | Keplr | CLI |
|---------|-----------|-------|-----|
| View validators | ✅ | ✅ | ✅ |
| Delegate | ✅ | ✅ | ✅ |
| Undelegate | ✅ | ✅ | ✅ |
| Claim rewards | ✅ | ✅ | ✅ |
| Vote on proposals | ✅ | ✅ | ✅ |
| Create proposals | ⚠️ Limited | ❌ | ✅ |

### Security Features

| Feature | Extension | Keplr | CLI |
|---------|-----------|-------|-----|
| Password protection | ✅ | ✅ | ✅ |
| Auto-lock | ✅ | ✅ | N/A |
| Hardware wallet | 🔜 | ✅ | 🔜 |
| Seed phrase backup | ✅ | ✅ | ✅ |
| Encrypted storage | ✅ | ✅ | ✅ |

## Multi-Wallet Strategy

Many users benefit from using multiple wallets:

```
┌─────────────────────────────────────────────────────┐
│                   YOUR SETUP                        │
├─────────────────────────────────────────────────────┤
│                                                     │
│   Keplr (tnam address)                              │
│   └── IBC from Cosmos chains                        │
│   └── Exchange withdrawals                          │
│         │                                           │
│         ▼ Transfer                                  │
│                                                     │
│   Namada Extension (tnam + znam)                    │
│   └── Shield assets                                 │
│   └── Private transactions                          │
│   └── Staking                                       │
│   └── dApp interactions                             │
│                                                     │
│   CLI Wallet (advanced)                             │
│   └── Validator operations                          │
│   └── Automation scripts                            │
│   └── Batch operations                              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Migration Between Wallets

All wallets use the same seed phrase standard (BIP-39). You can:

1. **Export seed from one wallet**
2. **Import to another wallet**
3. **Access the same addresses**

This means you're never locked into one wallet.

:::tip Same Seed, Multiple Wallets
Use the same 24-word seed phrase across wallets to access the same accounts. Each wallet just provides a different interface to the same underlying keys.
:::

## Future Wallets

Coming soon to the Namada ecosystem:

- 📱 **Mobile Wallet**: Native iOS/Android app
- 🔐 **Hardware Wallet**: Ledger integration
- 💻 **Desktop Wallet**: Standalone application

Join [Discord](https://discord.gg/namada) for updates on new wallet releases.

## Summary

| If you want... | Use this |
|----------------|----------|
| Simplicity | Namada Extension |
| Privacy | Namada Extension or CLI |
| IBC from Cosmos | Keplr → Namada Extension |
| Mobile access | Keplr (transparent only) |
| Automation | CLI |
| Ledger support now | Keplr (transparent only) |
| Everything | All three! |

## Next Steps

- [Install Namada Extension](/docs/guides/wallets/install-namada-extension)
- [Setup Keplr](/docs/guides/wallets/setup-keplr)
- [CLI Wallet Intro](/docs/guides/wallets/cli-wallet-intro)
