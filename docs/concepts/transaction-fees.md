---
title: Transaction Fees
description: Understanding transaction fees on Namada
sidebar_position: 6
tags: [fees, transactions, gas, costs]
keywords: [transaction fees, gas fees, namada fees, transaction costs]
---

# Transaction Fees

Every blockchain transaction requires fees. This guide explains Namada's fee system.

## Why Fees Exist

Transaction fees serve important purposes:

- 🛡️ **Spam prevention** - Makes attacks expensive
- ⚡ **Prioritization** - Higher fees can mean faster processing
- 💰 **Validator rewards** - Compensates network operators
- 📊 **Resource allocation** - Prices limited block space

## Fee Structure

### Components

Namada fees have two parts:

```
Total Fee = Gas Used × Gas Price
```

| Component | Description |
|-----------|-------------|
| **Gas** | Computational cost of transaction |
| **Gas Price** | Price per unit of gas (in NAM) |

### Gas Costs by Transaction Type

| Transaction | Approximate Gas | Approximate Fee |
|-------------|----------------|-----------------|
| Transparent transfer | 100,000 | ~0.001 NAM |
| Shield assets | 500,000 | ~0.01 NAM |
| Shielded transfer | 500,000 | ~0.01 NAM |
| Unshield assets | 500,000 | ~0.01 NAM |
| Stake/Delegate | 150,000 | ~0.002 NAM |
| Claim rewards | 100,000 | ~0.001 NAM |
| Vote on proposal | 100,000 | ~0.001 NAM |
| IBC transfer | 200,000 | ~0.003 NAM |

*Fees are approximate and vary based on network conditions*

## Why Shielded Costs More

Shielded transactions require:
- Zero-knowledge proof generation
- Larger transaction data
- More computation to verify

This makes them more expensive than transparent, but privacy has value!

## Fee Payment

### From Transparent Balance

Most fees are paid from transparent NAM:
```
Transaction: Shield 100 NAM
Fee: 0.01 NAM (from transparent)
Result: Shielded balance +100, Transparent balance -100.01
```

### Fee Token Options

Namada may support paying fees in other tokens:
- NAM (default)
- Other allowlisted tokens (governance decides)

## Gas Price Market

### Minimum Gas Price

Protocol sets a floor:
```
Minimum gas price = 0.00001 NAM (example)
You can't pay less than this
```

### Competitive Pricing

During congestion:
- Higher fees = faster inclusion
- Lower fees = may wait longer
- No congestion = minimum fee works

### Checking Current Gas Price

```bash
# Via CLI
namadac gas-price
```

## Estimating Fees

### Before Sending

Most wallets show estimated fees:
1. Enter transaction details
2. Review fee estimate
3. Adjust if needed
4. Confirm

### CLI Estimation

```bash
# Dry run to estimate
namadac transfer \
  --source my-wallet \
  --target tnam1... \
  --token NAM \
  --amount 100 \
  --dry-run
```

## Fee Strategies

### Conservative

Always have plenty of NAM for fees:
```
Keep 1-2 NAM unshielded for fees
Never shield your entire balance
```

### Cost-Efficient

Batch operations when possible:
```
Instead of: 5 small shields (5× fees)
Do: 1 larger shield (1× fee)
```

### Timing

Fees may vary:
- Network busy = higher effective costs
- Network quiet = minimum fees work
- Check before large operations

## Fee Recipients

Where do fees go?

```
Transaction Fees
      │
      ├──→ Validators (majority)
      │    Block producers
      │    
      └──→ PGF Treasury (portion)
           Public goods funding
```

## Fee Refunds

### Failed Transactions

If a transaction fails:
- Fee is usually still charged
- Prevents spam via failures
- Some failures may refund

### Overpayment

If you overpay gas:
- Unused gas may be refunded
- Depends on transaction type
- Wallets usually estimate well

## Common Questions

### How much NAM do I need for fees?

Keep 0.5-1 NAM unshielded. This covers many transactions.

### Why did my transaction fail?

Common reasons:
- Insufficient balance (amount + fee)
- Gas limit too low
- Network issues
- Invalid parameters

### Can I pay fees from shielded?

Currently, most fees require transparent NAM. This may evolve.

### Are fees refundable?

Failed transactions usually consume fees. Estimate correctly!

## Fee Comparison

### vs Ethereum

| Aspect | Namada | Ethereum |
|--------|--------|----------|
| Fee range | 0.001-0.1 NAM | $1-100+ |
| Fee token | NAM | ETH |
| Privacy cost | ~10x transparent | No native privacy |
| Predictability | More stable | Highly variable |

### vs Other Cosmos Chains

| Aspect | Namada | Typical Cosmos |
|--------|--------|---------------|
| Fee level | Low | Low |
| Privacy premium | Yes | N/A |
| IBC fees | Standard | Standard |

## Minimizing Fees

### Tips

1. **Batch transactions**: Combine when possible
2. **Time wisely**: Avoid peak congestion
3. **Use correct gas**: Don't overpay
4. **Choose operations carefully**: Shielded costs more

### What Not to Do

- Don't set gas too low (transaction fails)
- Don't ignore fees for large operations
- Don't keep zero NAM for fees

## Future Evolution

Fee mechanisms may improve:
- More fee token options
- Fee abstraction
- Sponsor transactions
- Dynamic fee markets

Stay updated through official channels.

## Summary

| Key Point | Details |
|-----------|---------|
| Fee formula | Gas Used × Gas Price |
| Typical costs | 0.001-0.1 NAM |
| Shielded premium | ~10x transparent |
| Keep available | 0.5-1 NAM for fees |
| Payment | From transparent balance |

## Related

- [Send to Wallet](/docs/guides/transactions/send-to-wallet)
- [Shield Assets](/docs/guides/transactions/shield-assets)
- [Understanding Staking](/docs/guides/staking/understanding-staking)
