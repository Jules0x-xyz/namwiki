---
title: Shielded vs Transparent
description: Understanding the difference between shielded and transparent transactions in Namada
sidebar_position: 5
tags: [privacy, shielded, transparent, basics]
keywords: [shielded transactions, transparent transactions, privacy, masp]
---

# Shielded vs Transparent

Namada offers two ways to transact: **transparent** (public) and **shielded** (private). Understanding the difference is key to using Namada effectively.

## Quick Comparison

| Aspect | Transparent | Shielded |
|--------|-------------|----------|
| **Address prefix** | `tnam...` | `znam...` |
| **Visibility** | Public on explorer | Hidden |
| **Privacy** | None | Full |
| **Transaction speed** | ~6 seconds | ~6 seconds |
| **Fees** | Lower | Slightly higher |
| **Rewards** | None | Shielded rewards |
| **Best for** | Public payments, exchanges | Personal, business |

## Transparent Transactions

Transparent transactions work like most blockchains:

```
Alice (tnam1abc...) → 100 NAM → Bob (tnam1xyz...)
```

### What's Visible

When you use transparent addresses, anyone can see:

- ✅ Sender address
- ✅ Receiver address
- ✅ Amount transferred
- ✅ Time of transaction
- ✅ Transaction history
- ✅ Current balance

### When to Use Transparent

- 💱 **Withdrawing from exchanges** - Exchanges require transparent addresses
- 🧾 **Public payments** - When you want a record
- 🔍 **Proving transactions** - For tax or legal purposes
- 💸 **Lower fees** - Slightly cheaper transactions

## Shielded Transactions

Shielded transactions use Namada's privacy technology:

```
Alice (znam1abc...) → ??? NAM → ??? (znam1???...)
```

### What's Hidden

With shielded transactions:

- ❌ Sender is hidden
- ❌ Receiver is hidden
- ❌ Amount is hidden
- ❌ Transaction links are broken
- ❌ Balance is private

Only the sender and receiver know the details.

### When to Use Shielded

- 🛡️ **Personal transactions** - Keep your finances private
- 💼 **Business payments** - Protect commercial information
- 🎁 **Donations** - Give privately
- 💰 **Savings** - Hide your holdings
- 🏆 **Earning rewards** - Get shielded rewards

## The Four Transaction Types

### 1. Transparent to Transparent
```
tnam → tnam
```
Standard public transfer. Everyone can see everything.

### 2. Transparent to Shielded (Shield)
```
tnam → znam
```
Moving assets into privacy. The "shielding" transaction is visible, but once in the shielded pool, the assets become private.

### 3. Shielded to Shielded
```
znam → znam
```
Fully private transfer. No public record of the transaction.

### 4. Shielded to Transparent (Unshield)
```
znam → tnam
```
Moving assets back to public. The unshielding is visible, but the source in the shielded pool remains hidden.

## Visual Flow

```
                    TRANSPARENT WORLD
    ┌──────────────────────────────────────────┐
    │  tnam1alice...  ───────► tnam1bob...     │
    │       │                       ▲          │
    │       │ Shield           Unshield        │
    │       ▼                       │          │
    └──────────────────────────────────────────┘
                    SHIELDED POOL
    ╔══════════════════════════════════════════╗
    ║  znam1alice... ────?────► znam1bob...    ║
    ║         All details hidden               ║
    ╚══════════════════════════════════════════╝
```

## Privacy Considerations

### Timing Analysis

Even with shielding, be aware of timing:

:::warning
If you shield 1000 NAM and immediately unshield 1000 NAM to a new address, the connection might be guessed. Wait between operations and use common amounts.
:::

### Amount Correlation

Using unique amounts can reduce privacy:

| Less Private | More Private |
|--------------|--------------|
| 1234.56789 NAM | 1000 NAM |
| 777 NAM | 500 NAM |
| Exact salary amount | Round numbers |

### Best Practices

1. **Keep assets shielded long-term** - Time in the pool increases privacy
2. **Use common amounts** - Round numbers are harder to trace
3. **Don't shield/unshield immediately** - Add time between operations
4. **Batch transactions** - Combine multiple operations

For more tips, see [Privacy Best Practices](/docs/concepts/privacy-best-practices).

## Fee Differences

Shielded transactions require more computation:

| Transaction Type | Approximate Fee |
|-----------------|-----------------|
| Transparent → Transparent | ~0.001 NAM |
| Transparent → Shielded | ~0.01 NAM |
| Shielded → Shielded | ~0.01 NAM |
| Shielded → Transparent | ~0.01 NAM |

*Fees vary based on network conditions*

## Shielded Rewards

One major benefit of shielded transactions: **rewards**!

Assets in the shielded pool earn rewards automatically:

- No staking required
- Proportional to amount and time
- Paid in NAM
- Incentivizes privacy for everyone

Learn more about rewards in [Understanding Staking](/docs/guides/staking/understanding-staking).

## FAQ

### Can I see my shielded balance?

Yes! Your wallet shows your shielded balance. Only you can see it.

### Can I prove a shielded transaction?

Yes, you can generate viewing keys to prove specific transactions if needed.

### Which should I use by default?

Shielded! Unless you have a specific reason for transparency, shielded provides better privacy and earns rewards.

## Next Steps

- [Shield Your Assets](/docs/guides/transactions/shield-assets)
- [Privacy Best Practices](/docs/concepts/privacy-best-practices)
- [MASP Explained](/docs/concepts/masp-explained)
