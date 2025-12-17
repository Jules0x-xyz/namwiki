---
title: Send to Wallet
description: How to send NAM and other assets to your Namada wallet
sidebar_position: 2
tags: [transfer, send, wallet, receive]
keywords: [send nam, transfer to wallet, receive nam, deposit]
---

# Send to Wallet

Learn how to transfer assets to your Namada wallet from exchanges and other sources.

:::tip Time & Difficulty
⏱️ **5 minutes** | 🎯 **Difficulty**: Beginner
:::

## Prerequisites

- A funded exchange account or another wallet with NAM/assets
- Your Namada wallet address ready

## Getting Your Wallet Address

### From Namada Extension

1. Click the Namada Extension icon
2. Click **Receive** or the copy icon
3. Copy your `tnam` address

### From Keplr

1. Open Keplr
2. Select Namada network
3. Click to copy address

### From CLI

```bash
namadaw list --transparent
```

Your address looks like:
```
tnam1qp6eyv5q2s3e4h8r7t9u0i1o2p3a4s5d6f7g8h9j
```

## Sending from an Exchange

### Step 1: Navigate to Withdraw

1. Log into your exchange
2. Go to **Wallet** or **Assets**
3. Find **NAM**
4. Click **Withdraw**

### Step 2: Enter Details

| Field | Value |
|-------|-------|
| Address | Your `tnam...` address |
| Network | **Namada** (important!) |
| Amount | How much to send |

### Step 3: Verify & Confirm

1. Double-check the address
2. Verify the network is **Namada**
3. Review fees
4. Complete 2FA if required
5. Confirm withdrawal

### Step 4: Wait for Confirmation

- Exchange processing: Varies (instant to hours)
- Network confirmation: ~6 seconds per block

:::danger Triple Check
Always verify:
1. Correct address (compare first and last 6 characters)
2. Correct network (Namada, not ERC-20 or BEP-20)
3. Correct amount
:::

## Sending from Another Wallet

### From Namada Extension

1. Open your source wallet
2. Click **Send**
3. Enter recipient's `tnam` address
4. Enter amount
5. Click **Send**
6. Confirm transaction

### From CLI

```bash
namadac transfer \
  --source source-wallet \
  --target tnam1recipient... \
  --token NAM \
  --amount 100
```

## Sending via IBC

If sending from another Cosmos chain:

### Quick Steps

1. Open source chain wallet (Keplr)
2. Select IBC Transfer
3. Choose Namada as destination
4. Enter your `tnam` address
5. Confirm

See [IBC Transfers Guide](/docs/guides/transactions/ibc-transfers) for detailed instructions.

## Verify Receipt

### Using Block Explorer

1. Go to a [Namada block explorer](/docs/resources/block-explorers)
2. Enter your address
3. Look for incoming transaction

### In Your Wallet

1. Open your wallet
2. Check balance
3. View transaction history

## Receiving to Shielded Address

For privacy, you can receive directly to your shielded address:

```
znam1abc123def456ghi789...
```

:::warning Not All Support Shielded
Most exchanges don't support shielded addresses. Receive to `tnam`, then shield yourself.
:::

**Workflow:**
```
Exchange → tnam (your transparent) → znam (your shielded)
```

## Transaction Times

| Source | Typical Time |
|--------|-------------|
| Exchange | 1 min - 24 hrs |
| Another Namada wallet | ~6 seconds |
| IBC transfer | 30 sec - 2 min |

## Fees

| Type | Approximate Fee |
|------|-----------------|
| Exchange withdrawal | Varies (0.1 - 1 NAM) |
| Wallet to wallet | ~0.001 NAM |
| IBC transfer | ~0.01 NAM |

## Troubleshooting

### "Transaction pending for hours"

Exchange side:
- Check exchange withdrawal status
- Contact exchange support
- Some exchanges have manual review

Network side:
- Check block explorer
- Verify transaction hash

### "Wrong amount received"

- Exchange may deduct fees
- Check transaction details
- Compare with exchange fee schedule

### "Address not valid"

- Ensure full address copied
- No extra spaces
- Starts with `tnam`

### "Sent to wrong address"

Unfortunately, blockchain transactions are irreversible. If you sent to:
- Wrong but valid address: Funds are lost
- Invalid address: Transaction will fail (funds safe)

Always verify addresses before sending.

## Best Practices

1. **Test with small amount first**
   - Send 1 NAM before large transfers
   - Verify receipt
   - Then send remaining

2. **Save frequently used addresses**
   - Use wallet address book
   - Label addresses clearly

3. **Verify on block explorer**
   - Don't trust balance alone
   - Check actual transaction

4. **Keep some NAM for fees**
   - Don't send max amount
   - Keep 0.5-1 NAM for gas

## After Receiving

Now that you have NAM in your wallet:

- [Shield Your Assets](/docs/guides/transactions/shield-assets) - Make it private
- [Start Staking](/docs/guides/staking/how-to-stake) - Earn rewards
- [IBC to Other Chains](/docs/guides/transactions/ibc-transfers) - Use in DeFi

## Next Steps

- [Shield Assets](/docs/guides/transactions/shield-assets)
- [IBC Transfers](/docs/guides/transactions/ibc-transfers)
- [Understanding Transaction Fees](/docs/concepts/transaction-fees)
