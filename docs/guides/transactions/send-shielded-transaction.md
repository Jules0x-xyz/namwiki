---
title: Send Shielded Transaction
description: How to send private transactions using Namada's shielded pool
sidebar_position: 6
tags: [shielded, private, transaction, tutorial]
keywords: [shielded transaction, private transfer, znam, masp transfer]
---

# Send Shielded Transaction

Shielded transactions are fully private - the sender, receiver, and amount are all hidden. This guide shows you how to send them.

:::tip Time & Difficulty
⏱️ **2 minutes** | 🎯 **Difficulty**: Beginner
:::

## What is a Shielded Transaction?

A shielded transaction transfers assets within the MASP:

```
znam (sender) → ??? → znam (receiver)
         All details hidden
```

**What's hidden:**
- ❌ Sender address
- ❌ Receiver address  
- ❌ Amount transferred
- ❌ Transaction link

**What's visible:**
- ✅ A transaction occurred (but no details)

## Prerequisites

- Assets in your shielded balance
- Recipient's shielded address (`znam...`)
- Small amount of NAM for fees

## Get Recipient's Shielded Address

Ask the recipient for their shielded payment address:

```
znam1abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567
```

:::tip Payment Addresses
Recipients can generate unlimited payment addresses from their wallet. Each provides the same privacy.
:::

## Send Using Namada Extension

### Step 1: Start Transaction

1. Open Namada Extension
2. Ensure you're viewing shielded balance
3. Click **Send**

### Step 2: Enter Details

1. **Recipient**: Paste their `znam...` address
2. **Amount**: Enter how much to send
3. **Asset**: Select token (NAM, ATOM, etc.)

### Step 3: Review & Confirm

1. Verify recipient address (compare first/last 6 chars)
2. Confirm amount
3. Check fee (~0.01 NAM)
4. Click **Send**

### Step 4: Done!

- Transaction confirms in ~10 seconds
- Both sender and receiver balances update
- No public record of the transfer

## Send Using CLI

### Basic Shielded Transfer

```bash
namadac transfer \
  --source my-wallet \
  --target znam1recipient... \
  --token NAM \
  --amount 100
```

### With Explicit Shielded Flag

```bash
namadac transfer \
  --source my-wallet \
  --target znam1recipient... \
  --token NAM \
  --amount 100 \
  --shielded
```

### Transfer Different Assets

```bash
# Send shielded ATOM
namadac transfer \
  --source my-wallet \
  --target znam1recipient... \
  --token ATOM \
  --amount 50
```

## Transaction Fees

| Transfer Type | Fee |
|--------------|-----|
| Shielded → Shielded | ~0.01 NAM |

Fees are deducted from your shielded balance.

## Transaction Time

| Stage | Duration |
|-------|----------|
| Proof generation | ~1-2 seconds |
| Broadcast | Instant |
| Confirmation | ~6 seconds |
| **Total** | **~10 seconds** |

## Receiving Shielded Transactions

To receive:

1. Generate a payment address (or use existing shielded address)
2. Share it with the sender
3. Wait for transaction
4. Check your shielded balance

### Generate Payment Address

```bash
namadaw gen-payment-addr --alias friend-payment --key my-wallet
```

Share this address with senders. You can generate unlimited addresses.

## Privacy Comparison

| Transaction Type | Privacy Level |
|-----------------|---------------|
| Transparent → Transparent | ❌ None |
| Transparent → Shielded | ⚠️ Partial (shielding visible) |
| Shielded → Shielded | ✅ Full |
| Shielded → Transparent | ⚠️ Partial (unshielding visible) |

**Shielded → Shielded** provides the best privacy.

## Best Practices

### For Maximum Privacy

1. **Keep assets shielded** - Avoid frequent shield/unshield
2. **Use payment addresses** - Generate new ones for different senders
3. **Avoid patterns** - Don't send same amounts at same times
4. **Be patient** - Let assets sit in the shielded pool

### When Sharing Addresses

- Generate fresh payment addresses for each sender
- Don't reuse addresses publicly
- Share addresses through secure channels

## Multiple Recipients

Send to multiple people:

```bash
# First transfer
namadac transfer \
  --source my-wallet \
  --target znam1alice... \
  --token NAM \
  --amount 50

# Second transfer
namadac transfer \
  --source my-wallet \
  --target znam1bob... \
  --token NAM \
  --amount 30
```

Each transaction is independent and unlinkable.

## Troubleshooting

### "Insufficient shielded balance"

Check your balance:
```bash
namadac balance --owner my-wallet --token NAM --shielded
```

Remember: amount + fee must be available.

### "Invalid shielded address"

Verify the address:
- Starts with `znam`
- Correct length
- No typos or extra characters

### "Transaction pending"

Wait up to 60 seconds. If still pending:
- Check network status
- Try with higher gas

### "Recipient didn't receive"

1. Verify transaction confirmed on your end
2. Have recipient refresh their wallet
3. Confirm you used correct address
4. Check their wallet is synced

## FAQ

### Can I send to transparent from shielded?

Yes, but that's unshielding, not a shielded transfer. See [Unshield Assets](/docs/guides/transactions/unshield-assets).

### Can I send to myself?

Yes! Use your own payment address. Useful for:
- Consolidating funds
- Generating new payment addresses
- Testing

### Are shielded transactions reversible?

No. Like all blockchain transactions, they're final. Double-check before sending.

### Can I prove a shielded transaction?

Yes, you can generate a viewing key to prove specific transactions when needed.

### What if I send to wrong address?

If the address is valid: funds are sent to that address
If the address is invalid: transaction fails, funds stay with you

## Under the Hood

Shielded transactions use:

1. **zk-SNARKs**: Zero-knowledge proofs hide all details
2. **Encrypted values**: Amounts are encrypted
3. **Nullifiers**: Prevent double-spending without revealing source

Learn more: [MASP Explained](/docs/concepts/masp-explained)

## Flow Diagram

```
Alice's Wallet                    Bob's Wallet
     │                                 │
     │  znam1alice...                  │  znam1bob...
     │       │                         │       ▲
     │       │                         │       │
     └───────┴─────────────────────────┴───────┘
                        │
                        │  100 NAM (hidden)
                        │
             ┌──────────▼──────────┐
             │    SHIELDED POOL    │
             │                     │
             │   ??? → ??? → ???   │
             │   All details hidden │
             └─────────────────────┘
                        
Block Explorer sees:
"A shielded transaction occurred"
(No sender, receiver, or amount visible)
```

## Next Steps

- [Privacy Best Practices](/docs/concepts/privacy-best-practices)
- [MASP Explained](/docs/concepts/masp-explained)
- [Unshield Assets](/docs/guides/transactions/unshield-assets)
