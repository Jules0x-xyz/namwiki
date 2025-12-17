---
title: How to Stake
description: Step-by-step guide to staking your NAM tokens
sidebar_position: 2
tags: [staking, delegate, tutorial, rewards]
keywords: [how to stake nam, delegate namada, staking tutorial, earn rewards]
---

# How to Stake

This guide walks you through staking (delegating) your NAM tokens to earn rewards.

:::tip Time & Difficulty
⏱️ **5 minutes** | 🎯 **Difficulty**: Beginner
:::

## Prerequisites

- NAM tokens in your wallet
- At least 1 NAM for gas fees
- Decision on which validator(s) to use

## Stake Using Namada Extension

### Step 1: Open Staking Interface

1. Click the Namada Extension icon
2. Navigate to **Staking** or **Stake**
3. View available validators

### Step 2: Choose a Validator

Browse the validator list. For each validator, you'll see:
- Name/Moniker
- Commission rate
- Total stake
- Uptime/status

See [Choose a Validator](/docs/guides/staking/choose-validator) for selection tips.

### Step 3: Enter Stake Amount

1. Click on your chosen validator
2. Click **Delegate** or **Stake**
3. Enter the amount of NAM to stake
4. Keep some NAM for transaction fees!

### Step 4: Confirm Transaction

1. Review the details:
   - Validator: [name]
   - Amount: [X] NAM
   - Fee: ~0.01 NAM
2. Click **Confirm**
3. Sign the transaction

### Step 5: Verify Stake

After confirmation:
1. Your staking balance updates
2. Check "My Delegations" section
3. Rewards start accumulating next epoch

## Stake Using CLI

### View Available Validators

```bash
namadac validator-state
```

### Delegate to a Validator

```bash
namadac bond \
  --source my-wallet \
  --validator tnam1validator... \
  --amount 1000
```

### Verify Your Bonds

```bash
namadac bonds --owner my-wallet
```

Example output:
```
Bonds:
  Validator: tnam1validator...
  Amount: 1000 NAM
  Status: Active
```

## Stake with Multiple Validators

Diversifying reduces risk:

### Using Extension

Repeat the staking process for each validator.

### Using CLI

```bash
# Validator 1
namadac bond --source my-wallet --validator tnam1val1... --amount 500

# Validator 2
namadac bond --source my-wallet --validator tnam1val2... --amount 300

# Validator 3
namadac bond --source my-wallet --validator tnam1val3... --amount 200
```

## Recommended Allocation

| Strategy | Allocation |
|----------|------------|
| Conservative | 3-5 validators |
| Balanced | 5-10 validators |
| Diversified | 10+ validators |

Consider validator size, performance, and commission when allocating.

## Transaction Fees

| Action | Approximate Fee |
|--------|-----------------|
| Initial stake | ~0.01 NAM |
| Add to stake | ~0.01 NAM |
| Redelegate | ~0.01 NAM |

## When Do Rewards Start?

- Stakes become active next **epoch** (~12 hours)
- Rewards accumulate each epoch after that
- You can check pending rewards anytime

## Checking Your Stake Status

### Using Extension

1. Go to Staking section
2. View "My Delegations"
3. See amounts and validators

### Using CLI

```bash
# View all your bonds
namadac bonds --owner my-wallet

# View rewards
namadac rewards --owner my-wallet
```

## Adding to Existing Stake

You can add more NAM to the same validator:

### Extension

1. Go to your delegation
2. Click **Add** or **Stake More**
3. Enter additional amount
4. Confirm

### CLI

```bash
# Additional stake to same validator
namadac bond \
  --source my-wallet \
  --validator tnam1validator... \
  --amount 500
```

The new stake is added to your existing bond.

## Redelegating

Move stake from one validator to another without unbonding:

### Extension

1. Find your delegation
2. Click **Redelegate**
3. Choose new validator
4. Enter amount
5. Confirm

### CLI

```bash
namadac redelegate \
  --source-validator tnam1old... \
  --destination-validator tnam1new... \
  --owner my-wallet \
  --amount 500
```

Benefits of redelegation:
- No unbonding period
- Continuous rewards
- Change validators instantly

## Troubleshooting

### "Insufficient balance"

Ensure you have:
- Amount to stake
- Gas fee (~0.01 NAM)

Leave at least 0.5-1 NAM for future fees.

### "Validator not found"

1. Check validator address is correct
2. Verify validator is active
3. Try refreshing validator list

### "Transaction failed"

1. Check network status
2. Ensure sufficient gas
3. Try again in a few minutes

### "Stake not showing"

1. Wait for current epoch to complete
2. Refresh your wallet
3. Check bonds via CLI

## Best Practices

### Do

- ✅ Research validators before staking
- ✅ Diversify across multiple validators
- ✅ Keep some NAM liquid for fees
- ✅ Monitor your validators occasionally
- ✅ Consider redelegating from poor performers

### Don't

- ❌ Stake everything (keep some for fees)
- ❌ Stake with only one validator
- ❌ Ignore validator performance
- ❌ Forget about the 21-day unbonding period

## What's Next?

After staking:

1. [Claim Rewards](/docs/guides/staking/claim-rewards) - Collect your earnings
2. [Monitor validators](/docs/guides/staking/choose-validator) - Keep track of performance
3. Consider [compounding](#) - Restake rewards for growth

## FAQ

### How much can I earn?

Typical APY: 5-15%, depending on:
- Network-wide staking rate
- Validator commission
- Your validator's performance

### Can I unstake anytime?

Yes, but there's a 21-day unbonding period. Plan accordingly.

### Is staking safe?

Generally yes, but risks include:
- Slashing (validator misbehavior)
- Opportunity cost (locked funds)
- Validator failure

Diversify to reduce risk.

### Should I restake rewards?

Compounding increases long-term returns. Consider your:
- Time horizon
- Liquidity needs
- Tax situation
