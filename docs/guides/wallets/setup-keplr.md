---
title: Setup Keplr for Namada
description: Configure Keplr wallet to work with Namada blockchain
sidebar_position: 2
tags: [wallet, keplr, cosmos, setup]
keywords: [keplr namada, cosmos wallet, keplr setup, ibc wallet]
---

# Setup Keplr for Namada

If you're already using Keplr for Cosmos, you can add Namada to your existing wallet. This guide shows you how.

:::tip Time & Difficulty
⏱️ **5 minutes** | 🎯 **Difficulty**: Beginner
:::

## Prerequisites

- Keplr wallet installed ([keplr.app](https://keplr.app))
- Basic familiarity with Keplr

:::warning Limited Features
Keplr provides transparent transaction support. For full shielded functionality, use the [Namada Extension](/docs/guides/wallets/install-namada-extension).
:::

## Step 1: Add Namada Chain

### Option A: Automatic (Recommended)

1. Visit a Namada dApp (like a DEX or explorer)
2. Click **Connect Wallet**
3. Select **Keplr**
4. Keplr will prompt to add Namada
5. Click **Approve**

### Option B: Manual Configuration

1. Open Keplr extension
2. Click **Settings** (gear icon)
3. Select **General**
4. Click **Add Chain Manually**
5. Enter chain info (see below)

## Chain Configuration

If adding manually, use these parameters:

```json
{
  "chainId": "namada.5f5de2dd1b88cba30586420",
  "chainName": "Namada",
  "rpc": "https://rpc.namada.net",
  "rest": "https://api.namada.net",
  "bip44": {
    "coinType": 877
  },
  "bech32Config": {
    "bech32PrefixAccAddr": "tnam",
    "bech32PrefixAccPub": "tnampub",
    "bech32PrefixValAddr": "tnamvaloper",
    "bech32PrefixValPub": "tnamvaloperpub",
    "bech32PrefixConsAddr": "tnamvalcons",
    "bech32PrefixConsPub": "tnamvalconspub"
  },
  "currencies": [
    {
      "coinDenom": "NAM",
      "coinMinimalDenom": "unam",
      "coinDecimals": 6
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "NAM",
      "coinMinimalDenom": "unam",
      "coinDecimals": 6
    }
  ],
  "stakeCurrency": {
    "coinDenom": "NAM",
    "coinMinimalDenom": "unam",
    "coinDecimals": 6
  }
}
```

:::info Chain ID Note
The chain ID may change. Check [official documentation](https://docs.namada.net) for the latest.
:::

## Step 2: Access Your Address

Once Namada is added:

1. Open Keplr
2. Click the network dropdown (top)
3. Select **Namada**
4. Your transparent address (`tnam...`) is displayed

Click to copy your address.

## Step 3: Receive NAM

You can now receive NAM to your Keplr address:

1. Copy your `tnam` address
2. Use this address for:
   - Exchange withdrawals
   - IBC transfers
   - Receiving from friends

## Supported Features in Keplr

| Feature | Keplr Support |
|---------|---------------|
| Transparent transfers | ✅ Yes |
| Receive NAM | ✅ Yes |
| View balance | ✅ Yes |
| IBC transfers | ✅ Yes |
| Staking | ✅ Yes |
| Governance voting | ✅ Yes |
| Shielded transfers | ❌ No |
| Shielded balance | ❌ No |

## Using IBC Transfers

Keplr excels at IBC:

1. Open Keplr
2. Select source chain (e.g., Osmosis)
3. Click **IBC Transfer**
4. Select destination: **Namada**
5. Enter amount
6. Confirm

Or use [IBC Transfer Guide](/docs/guides/transactions/ibc-transfers) for detailed steps.

## Staking with Keplr

1. Go to a Namada staking interface
2. Connect Keplr
3. Select a validator
4. Enter stake amount
5. Sign with Keplr

See [How to Stake](/docs/guides/staking/how-to-stake) for full guide.

## Limitations

### No Shielded Support

Keplr cannot:

- Create shielded addresses (`znam`)
- Send shielded transactions
- View shielded balances
- Receive shielded transfers

For privacy features, use the [Namada Extension](/docs/guides/wallets/install-namada-extension).

### Recommended Workflow

For full functionality:

```
Exchange → Keplr (tnam) → IBC in
           ↓
         Namada Extension → Shield → znam (private)
```

1. Use Keplr for IBC and transparent operations
2. Transfer to Namada Extension for shielding
3. Use Namada Extension for private transactions

## Troubleshooting

### Namada Not Appearing

1. Ensure Keplr is updated
2. Try adding chain manually
3. Check network connectivity

### Transaction Failing

1. Ensure sufficient NAM for fees
2. Check network status
3. Try increasing gas

### Balance Not Updating

1. Wait a few seconds
2. Refresh Keplr
3. Switch networks and back

## Migration to Namada Extension

Want full features? Migrate easily:

1. Your Keplr seed phrase works with Namada Extension
2. Import the same seed into Namada Extension
3. Access both transparent and shielded features

:::tip Same Seed, More Features
Using the same seed phrase in Namada Extension gives you access to the same transparent address PLUS full shielded capabilities.
:::

## Security Notes

- Keplr and Namada Extension can share the same seed
- Each has independent password protection
- Keep your seed phrase secure
- Update both extensions regularly

## Next Steps

- [Install Namada Extension](/docs/guides/wallets/install-namada-extension) - For full features
- [IBC Transfers](/docs/guides/transactions/ibc-transfers) - Move assets between chains
- [Wallet Comparison](/docs/guides/wallets/wallet-comparison) - Compare all options
