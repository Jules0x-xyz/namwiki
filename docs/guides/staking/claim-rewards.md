---
title: Claim Rewards
description: How to claim your staking rewards on Namada
sidebar_position: 4
tags: [staking, rewards, claim, withdraw]
keywords: [claim staking rewards, withdraw rewards, namada rewards, staking earnings]
---

# Claim Rewards

Learn how to claim and manage your staking rewards on Namada.

:::tip Time & Difficulty
⏱️ **2 minutes** | 🎯 **Difficulty**: Beginner
:::

## How Rewards Work

### Accumulation

- Rewards accrue each **epoch** (~12 hours)
- Automatically calculated based on stake
- No action needed to earn

### Claiming

- Rewards must be claimed to use
- Claiming moves them to your wallet
- Gas fee applies to each claim

## Check Your Rewards

### Using Extension

1. Open Namada Extension
2. Go to **Staking** section
3. View "Pending Rewards" or similar

### Using CLI

```bash
namadac rewards --owner my-wallet
```

Output example:
```
Pending rewards:
  Validator: tnam1validator1...
  Rewards: 12.5 NAM
  
  Validator: tnam1validator2...
  Rewards: 8.3 NAM

Total pending: 20.8 NAM
```

## Claim Using Extension

### Step 1: Navigate to Rewards

1. Open Extension
2. Go to Staking
3. Find "Claim Rewards" or rewards section

### Step 2: Select What to Claim

Options:
- **Claim All** - All rewards from all validators
- **Claim from Validator** - Specific validator only

### Step 3: Confirm

1. Review the amount
2. Check gas fee (~0.01 NAM)
3. Click **Claim**
4. Sign transaction

### Step 4: Verify

- Check your wallet balance
- Rewards should appear as available NAM

## Claim Using CLI

### Claim from Specific Validator

```bash
namadac claim-rewards \
  --source my-wallet \
  --validator tnam1validator...
```

### Claim from All Validators

```bash
# Claim from each validator
namadac claim-rewards --source my-wallet --validator tnam1val1...
namadac claim-rewards --source my-wallet --validator tnam1val2...
namadac claim-rewards --source my-wallet --validator tnam1val3...
```

### Script for All Validators

```bash
#!/bin/bash
# claim-all-rewards.sh

VALIDATORS=$(namadac bonds --owner my-wallet | grep "Validator:" | awk '{print $2}')

for val in $VALIDATORS; do
  echo "Claiming from $val..."
  namadac claim-rewards --source my-wallet --validator $val
done

echo "All rewards claimed!"
```

## Claim Frequency Strategy

### Considerations

| Factor | Favor Frequent | Favor Infrequent |
|--------|---------------|------------------|
| Gas costs | ❌ More fees | ✅ Fewer fees |
| Compounding | ✅ Faster growth | ❌ Slower growth |
| Tax events | ❌ More taxable events | ✅ Fewer events |
| Convenience | ❌ More work | ✅ Less work |

### Recommended Schedules

| Stake Size | Suggested Frequency |
|-----------|---------------------|
| < 1,000 NAM | Monthly |
| 1,000 - 10,000 NAM | Weekly to Monthly |
| > 10,000 NAM | Weekly |

Calculate: When rewards > 10-20x gas cost, it's efficient to claim.

## Compounding Rewards

To compound (restake your rewards):

### Step 1: Claim Rewards

Claim as described above.

### Step 2: Restake

```bash
namadac bond \
  --source my-wallet \
  --validator tnam1validator... \
  --amount 20  # Your claimed rewards
```

### Compounding Math

| Year | Simple (10% APY) | Compound Monthly |
|------|------------------|------------------|
| 1 | 1,100 NAM | 1,105 NAM |
| 2 | 1,200 NAM | 1,221 NAM |
| 5 | 1,500 NAM | 1,649 NAM |
| 10 | 2,000 NAM | 2,707 NAM |

*Starting with 1,000 NAM*

## Auto-Compound (Future)

Currently manual. Auto-compound features may come through:
- Third-party services
- Protocol upgrades
- Community tools

Check community resources for available tools.

## Reward Calculations

### Understanding Your Rewards

Your rewards depend on:

```
Your Rewards = Network Rewards × (Your Stake / Total Staked) × (1 - Commission)
```

### Example

- Network epoch rewards: 10,000 NAM
- Total staked: 100,000,000 NAM
- Your stake: 10,000 NAM
- Validator commission: 5%

```
Your Rewards = 10,000 × (10,000 / 100,000,000) × 0.95
            = 10,000 × 0.0001 × 0.95
            = 0.95 NAM per epoch
```

## Troubleshooting

### "No rewards to claim"

Possible reasons:
1. Rewards already claimed
2. Stake too recent (wait for next epoch)
3. Validator issues

Check:
```bash
namadac rewards --owner my-wallet
```

### "Claim transaction failed"

1. Ensure sufficient NAM for gas
2. Check network status
3. Try again later

### "Rewards less than expected"

Could be due to:
- Validator downtime
- High commission
- Network conditions
- Slashing events

## Tax Considerations

:::info Consult a Professional
Tax laws vary by jurisdiction. This is not tax advice.
:::

General considerations:
- Rewards may be taxable as income when received
- Claiming creates a taxable event
- Keep records of all claims
- Note the value at time of claim

### Record Keeping

Track:
- Date of claim
- Amount claimed
- Value in fiat at time
- Transaction hash

## Rewards vs Shielded Rewards

| Type | Source | Requirement |
|------|--------|-------------|
| Staking Rewards | Delegation | Stake with validators |
| Shielded Rewards | MASP participation | Hold in shielded pool |

You can earn both by:
1. Staking for staking rewards
2. Shielding other assets for shielded rewards

## What to Do with Rewards

### Option 1: Compound

Restake to grow your position:
```
Claim → Stake → Earn more rewards
```

### Option 2: Diversify

Stake with different validators:
```
Claim → Stake with new validator
```

### Option 3: Use

Spend or trade:
```
Claim → Transfer → Exchange/Use
```

### Option 4: Shield

Move to shielded pool:
```
Claim → Shield → Earn shielded rewards
```

## FAQ

### Do unclaimed rewards expire?

No! Rewards accumulate until you claim them.

### Is there a minimum to claim?

No minimum, but consider gas costs. Claim when rewards > gas cost.

### Can I lose my rewards?

Unclaimed rewards are safe. They can only be affected by slashing if the validator misbehaves.

### How do I maximize rewards?

1. Choose high-uptime, low-commission validators
2. Compound regularly
3. Diversify across validators
4. Stay staked long-term

## Next Steps

- [Understanding Staking](/docs/guides/staking/understanding-staking) - Deep dive
- [Choose a Validator](/docs/guides/staking/choose-validator) - Optimize selection
- [Shield Assets](/docs/guides/transactions/shield-assets) - Earn shielded rewards too
