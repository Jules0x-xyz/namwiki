---
title: Shield Assets
description: How to shield your assets for privacy using Namada's MASP
sidebar_position: 4
tags: [shield, privacy, masp, tutorial]
keywords: [shield assets, shielded pool, masp, privacy transfer]
---

# Shield Assets

Shielding moves your assets into Namada's Multi-Asset Shielded Pool (MASP), making your balance and transactions private.

:::tip Time & Difficulty
⏱️ **2 minutes** | 🎯 **Difficulty**: Beginner
:::

## What is Shielding?

Shielding is the process of moving assets from a transparent address (`tnam`) to a shielded address (`znam`):

```
Before: tnam... → 1000 NAM visible on explorer
After:  znam... → Balance hidden, transactions private
```

## Benefits of Shielding

- 🔒 **Private balance** - No one can see how much you have
- 👻 **Hidden transactions** - Transfers are unlinkable
- 💰 **Shielded rewards** - Earn rewards for shielding
- 🛡️ **Multi-asset** - Shield any supported asset

## Prerequisites

- NAM or other assets in your transparent wallet
- Small amount of NAM for transaction fees (~0.01 NAM)

## Shield Using Namada Extension

### Step 1: Open Your Wallet

1. Click the Namada Extension icon
2. Verify you have assets in your transparent balance

### Step 2: Initiate Shield

1. Click **Shield** button
2. Select the asset to shield (NAM, ATOM, etc.)
3. Enter amount (or click "Max")

### Step 3: Confirm Transaction

1. Review the details:
   - Asset: NAM
   - Amount: 100
   - From: tnam... (transparent)
   - To: znam... (shielded)
   - Fee: ~0.01 NAM

2. Click **Confirm**
3. Wait for confirmation (~6 seconds)

### Step 4: Verify

1. Check your shielded balance
2. The amount should now appear under "Shielded"

## Shield Using CLI

### Basic Shield Command

```bash
namadac transfer \
  --source my-wallet \
  --target my-wallet \
  --token NAM \
  --amount 100 \
  --shielded
```

### Shield to Specific Shielded Address

```bash
# First, generate a payment address
namadaw gen-payment-addr --alias my-payment-addr --key my-wallet

# Then shield to it
namadac transfer \
  --source my-wallet \
  --target my-payment-addr \
  --token NAM \
  --amount 100
```

### Check Shielded Balance

```bash
namadac balance --owner my-wallet --token NAM --shielded
```

## Shield Other Assets

You can shield any IBC token:

### Shield ATOM

```bash
namadac transfer \
  --source my-wallet \
  --target my-wallet \
  --token ATOM \
  --amount 50 \
  --shielded
```

### Shield OSMO

```bash
namadac transfer \
  --source my-wallet \
  --target my-wallet \
  --token OSMO \
  --amount 100 \
  --shielded
```

## Shielding Fees

| Action | Approximate Fee |
|--------|-----------------|
| Shield NAM | ~0.01 NAM |
| Shield IBC token | ~0.01 NAM |

Keep some NAM unshielded for future transaction fees.

## How Long Does Shielding Take?

| Stage | Time |
|-------|------|
| Transaction broadcast | Instant |
| Block confirmation | ~6 seconds |
| Balance update | ~6 seconds |
| **Total** | **~12 seconds** |

## Privacy Considerations

### Shielding Alone Isn't Full Privacy

The shielding transaction itself is visible:

```
Visible: tnam... sent 1000 NAM to shielded pool
Hidden: What happens next in the shielded pool
```

### Best Practices

1. **Wait after shielding** - Don't immediately unshield
2. **Use common amounts** - 100, 500, 1000 instead of 1234.56
3. **Shield regularly** - Mix your deposits over time
4. **Keep shielded long-term** - More time = more privacy

### The Anonymity Set

Your privacy depends on others:

```
More people in shielded pool = Better privacy for everyone
```

That's why Namada rewards shielding - it helps everyone!

## Shielded Rewards

When you shield, you start earning rewards:

- 📈 Proportional to amount shielded
- ⏱️ Proportional to time shielded
- 💎 Paid in NAM
- 🤖 Automatic - no action needed

Check rewards:

```bash
namadac balance --owner my-wallet --shielded
```

## After Shielding

Now you can:

- [Send Shielded Transactions](/docs/guides/transactions/send-shielded-transaction)
- [Stake from Shielded](/docs/guides/staking/how-to-stake) (coming soon)
- [Unshield When Needed](/docs/guides/transactions/unshield-assets)

## Troubleshooting

### "Insufficient balance for shield"

Ensure you have:
- Amount to shield
- Fee for transaction (~0.01 NAM)

### "Shield failed"

1. Check network status
2. Try again with lower amount
3. Ensure wallet is synced

### "Shielded balance not showing"

1. Wait a few seconds
2. Refresh wallet
3. Check you're viewing shielded section

### "Can't shield IBC token"

1. Verify token is supported
2. Check token denomination
3. Ensure sufficient NAM for fees

## Understanding the MASP

The Multi-Asset Shielded Pool works by:

1. **Hiding sender** - zk-proofs hide who sent
2. **Hiding receiver** - zk-proofs hide who receives
3. **Hiding amount** - Encrypted values
4. **Breaking links** - No transaction graph

Learn more: [MASP Explained](/docs/concepts/masp-explained)

## FAQ

### How much should I shield?

Shield as much as you're comfortable with. Keep some NAM unshielded for fees.

### Can I shield from exchange?

No, exchanges don't support shielded addresses. Withdraw to transparent, then shield yourself.

### Are shielded assets safe?

Yes! They're protected by the same cryptography as transparent assets, plus privacy.

### Can I unshield anytime?

Yes, you can unshield whenever you want. See [Unshield Assets](/docs/guides/transactions/unshield-assets).

## Next Steps

- [Send Shielded Transaction](/docs/guides/transactions/send-shielded-transaction)
- [Unshield Assets](/docs/guides/transactions/unshield-assets)
- [Privacy Best Practices](/docs/concepts/privacy-best-practices)
