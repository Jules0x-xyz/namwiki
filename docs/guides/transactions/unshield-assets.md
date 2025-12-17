---
title: Unshield Assets
description: How to unshield assets from the MASP back to transparent addresses
sidebar_position: 5
tags: [unshield, transparent, withdraw, tutorial]
keywords: [unshield assets, withdraw shielded, transparent transfer, exit masp]
---

# Unshield Assets

Unshielding moves assets from your shielded address (`znam`) back to a transparent address (`tnam`), making them publicly visible again.

:::tip Time & Difficulty
⏱️ **2 minutes** | 🎯 **Difficulty**: Beginner
:::

## When to Unshield

You might need to unshield for:

- 💱 **Exchange deposits** - CEXs require transparent addresses
- 🌉 **IBC transfers** - Moving to other Cosmos chains
- 🧾 **Proving holdings** - Tax reporting, verification
- 🏦 **DeFi protocols** - If requiring transparent balances

## Privacy Considerations

:::warning Unshielding Reduces Privacy
When you unshield:
- The amount becomes visible
- The destination address is public
- The timing is recorded

Plan your unshielding to minimize information leakage.
:::

### Best Practices

1. **Unshield only what you need** - Keep the rest shielded
2. **Use round amounts** - 100, 500, not 347.89
3. **Don't unshield immediately after shielding** - Wait some time
4. **Unshield to new addresses** - Don't reuse transparent addresses

## Unshield Using Namada Extension

### Step 1: Access Shielded Assets

1. Open Namada Extension
2. View your shielded balance
3. Click **Unshield** or **Send**

### Step 2: Configure Unshield

1. Select asset to unshield
2. Enter amount
3. Enter destination `tnam` address
   - Your own transparent address, OR
   - Another transparent address

### Step 3: Confirm

1. Review transaction details:
   - From: znam... (shielded)
   - To: tnam... (transparent)
   - Amount: X NAM
   - Fee: ~0.01 NAM

2. Click **Confirm**
3. Wait for confirmation

## Unshield Using CLI

### Basic Unshield (to yourself)

```bash
namadac transfer \
  --source my-wallet \
  --target my-wallet \
  --token NAM \
  --amount 100 \
  --unshielded
```

### Unshield to Specific Address

```bash
namadac transfer \
  --source my-wallet \
  --target tnam1recipient... \
  --token NAM \
  --amount 100 \
  --unshielded
```

### Unshield Different Assets

```bash
# Unshield ATOM
namadac transfer \
  --source my-wallet \
  --target my-wallet \
  --token ATOM \
  --amount 50 \
  --unshielded
```

## Fees

| Action | Approximate Fee |
|--------|-----------------|
| Unshield to self | ~0.01 NAM |
| Unshield to other | ~0.01 NAM |

Fees are paid from your shielded balance.

## Transaction Time

| Stage | Duration |
|-------|----------|
| Proof generation | ~1-2 seconds |
| Broadcast | Instant |
| Confirmation | ~6 seconds |
| **Total** | **~10 seconds** |

## After Unshielding

Your assets are now transparent. You can:

- Send to exchanges
- IBC transfer to other chains
- Use in transparent DeFi
- Prove holdings for verification

## Partial vs Full Unshield

### Partial Unshield

Keep some assets shielded:

```
Shielded: 1000 NAM
Unshield: 200 NAM
Remaining shielded: 800 NAM
```

### Full Unshield

Move everything:

```bash
namadac transfer \
  --source my-wallet \
  --target my-wallet \
  --token NAM \
  --amount 1000 \
  --unshielded
```

:::tip Keep Shielded Balance
Even if you need transparent funds, consider keeping some assets shielded for privacy and continued rewards.
:::

## Unshield for Exchange Deposit

Common workflow for exchange deposits:

```
1. Unshield to your transparent address
2. Verify receipt in transparent balance
3. Send from transparent to exchange
4. Confirm on exchange
```

**Why two steps?**
- Exchanges need transparent addresses
- Direct unshield to exchange works but adds complexity
- Intermediate step allows verification

## Troubleshooting

### "Insufficient shielded balance"

Check your shielded balance:

```bash
namadac balance --owner my-wallet --token NAM --shielded
```

Remember to account for fees.

### "Unshield transaction failed"

1. Verify you have enough for amount + fee
2. Check network status
3. Try smaller amount first
4. Wait and retry

### "Balance not appearing after unshield"

1. Wait for confirmation
2. Check transparent balance (not shielded)
3. Verify on block explorer

### "Wrong destination address"

Transactions are irreversible. Always:
- Double-check addresses
- Test with small amounts
- Verify recipient before large unshields

## Privacy Impact Analysis

Consider what unshielding reveals:

| Information | Visibility |
|-------------|------------|
| Amount unshielded | Public |
| Destination address | Public |
| Timestamp | Public |
| Source in shielded pool | Hidden |
| Previous shielded transactions | Hidden |

### Minimizing Information Leakage

**Less Private:**
```
Shield 1000 NAM → Immediately unshield 1000 NAM
```

**More Private:**
```
Shield 1000 NAM → Wait days/weeks → Unshield 500 NAM
```

## FAQ

### Does unshielding stop rewards?

Yes, only shielded assets earn shielded rewards. Unshielded assets don't earn these rewards.

### Can I unshield to any address?

Yes, you can unshield to:
- Your own transparent address
- Someone else's transparent address
- Exchange deposit address

### Is unshielding reversible?

The unshield itself isn't reversible, but you can shield the assets again after unshielding.

### How much should I unshield?

Only unshield what you need. Keep the rest shielded for privacy and rewards.

## Flow Diagram

```
┌─────────────────────────────────────────────────────┐
│                  SHIELDED POOL                      │
│  ╔═══════════════════════════════════════════════╗  │
│  ║  znam1...  ───────────────────────────────────║  │
│  ║     │                                         ║  │
│  ║     │ Unshield                                ║  │
│  ║     ▼                                         ║  │
│  ╚═══════════════════════════════════════════════╝  │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│                  TRANSPARENT                        │
│                                                     │
│    tnam1...  ← 100 NAM (now visible on explorer)   │
│        │                                            │
│        └──→ Exchange, IBC, DeFi, etc.              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Related Guides

- [Shield Assets](/docs/guides/transactions/shield-assets)
- [Send Shielded Transaction](/docs/guides/transactions/send-shielded-transaction)
- [Privacy Best Practices](/docs/concepts/privacy-best-practices)
