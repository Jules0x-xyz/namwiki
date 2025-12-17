---
title: Understanding Staking
description: Learn how staking works on Namada and how you can earn rewards
sidebar_position: 1
tags: [staking, rewards, delegation, pos]
keywords: [namada staking, proof of stake, delegation, validators, rewards]
---

# Understanding Staking

Staking is how Namada secures its network while allowing token holders to earn rewards. This guide explains how it works.

## What is Staking?

Staking is the process of:

1. **Locking up NAM tokens** with a validator
2. **Securing the network** through proof-of-stake
3. **Earning rewards** for your participation

```
Your NAM → Delegate to Validator → Help secure network → Earn rewards
```

## How Proof of Stake Works

### Validators

Validators are node operators who:
- Run Namada software 24/7
- Validate and propose new blocks
- Sign transactions
- Maintain network security

### Delegators (You!)

Delegators are token holders who:
- Choose validators to support
- Stake (delegate) their NAM
- Share in validator rewards
- Don't need to run any software

## Staking Rewards

### Where Do Rewards Come From?

| Source | Description |
|--------|-------------|
| Inflation | New NAM minted per epoch |
| Transaction fees | A portion goes to validators |
| Shielded rewards | Separate from staking |

### Reward Rate

The staking APY varies based on:
- Total NAM staked network-wide
- Your validator's performance
- Commission rate charged by validator

**Typical range: 5-15% APY** (varies over time)

### Reward Distribution

Rewards are distributed each **epoch** (~12 hours):

```
Total Epoch Rewards
        │
        ├── Validator Commission (e.g., 5%)
        │
        └── Delegator Rewards (e.g., 95%)
                │
                └── Split proportionally by stake
```

## Staking vs Shielded Rewards

Namada has TWO reward systems:

| Type | Requirement | Rewards |
|------|-------------|---------|
| **Staking** | Delegate to validator | ~5-15% APY |
| **Shielded** | Hold in shielded pool | Varies |

You can earn both! Shielded staking is coming soon.

## Key Concepts

### Delegation

The act of staking your tokens with a validator.

```bash
# Delegate 1000 NAM to a validator
namadac bond --source my-wallet --validator tnam1val... --amount 1000
```

### Unbonding Period

When you unstake, there's a **21-day waiting period**:

- Day 0: Request unbond
- Days 1-21: Tokens locked (no rewards)
- Day 21+: Tokens available

:::warning Plan Ahead
If you need liquidity, remember the 21-day unbonding period.
:::

### Slashing

Validators can be "slashed" (penalized) for misbehavior:

| Offense | Penalty |
|---------|---------|
| Downtime | Small penalty |
| Double signing | Large penalty (5-10%+) |

When a validator is slashed, **delegators lose funds too**. Choose validators carefully!

### Commission

Validators charge a commission on rewards:

```
Your staking rewards = (Validator rewards × Your share) × (1 - Commission)
```

Example:
- Validator earns 100 NAM
- Your share: 10%
- Commission: 5%
- Your reward: 100 × 10% × 95% = 9.5 NAM

## Choosing a Validator

Key factors to consider:

| Factor | Why It Matters |
|--------|----------------|
| **Uptime** | More uptime = more rewards |
| **Commission** | Lower = more rewards for you |
| **Self-stake** | Skin in the game |
| **Reputation** | Track record matters |
| **Decentralization** | Don't over-concentrate stake |

See [Choose a Validator](/docs/guides/staking/choose-validator) for detailed guidance.

## Staking Lifecycle

```
1. DELEGATE
   Your NAM → Validator
   Status: Bonded, earning rewards

2. EARN
   Each epoch, rewards accumulate
   Claim anytime

3. UNBOND (optional)
   Request unlock → 21 day wait
   No rewards during unbonding

4. WITHDRAW
   After 21 days, NAM available
   Can redelegate or use
```

## Compound or Withdraw?

### Compounding

Claim rewards and restake them:

```
Initial: 1000 NAM
After 1 year (10% APY, compounded): ~1,105 NAM
```

### Withdrawing

Claim rewards and use them:

```
Initial: 1000 NAM
After 1 year (10% APY, withdrawn): 1000 NAM + 100 NAM rewards
```

Compounding grows your stake over time. Withdrawing provides regular income.

## Risks of Staking

### 1. Slashing Risk

If your validator misbehaves, you lose a portion of stake.

**Mitigation**: Choose reputable validators, diversify.

### 2. Opportunity Cost

Staked NAM is locked. You can't use it for:
- Trading
- DeFi
- Quick liquidity needs

**Mitigation**: Only stake what you can lock for 21+ days.

### 3. Validator Failure

If validator goes offline:
- Rewards decrease
- Possible slashing

**Mitigation**: Monitor your validator, redelegate if needed.

## Staking Economics

### For the Network

Staking provides:
- Security (economic cost to attack)
- Decentralization (many validators)
- Governance participation

### For You

Staking provides:
- Passive income
- Governance rights
- Support for the network

## FAQ

### How much NAM should I stake?

Stake what you can afford to lock for 21+ days. Keep some liquid for:
- Transaction fees
- Emergency needs
- Shielded pool participation

### Can I stake shielded NAM?

Coming soon! Initially, staking requires transparent NAM.

### How often should I claim rewards?

Depends on:
- Gas costs for claiming
- Compounding preference
- Tax situation

Many claim weekly or monthly.

### Can I stake with multiple validators?

Yes! Diversifying reduces risk:

```bash
namadac bond --source my-wallet --validator val1 --amount 500
namadac bond --source my-wallet --validator val2 --amount 500
```

### What happens if I don't claim rewards?

Rewards accumulate and stay safe. No rush to claim - they won't expire.

## Next Steps

Ready to stake?

- [How to Stake](/docs/guides/staking/how-to-stake) - Step-by-step staking guide
- [Choose a Validator](/docs/guides/staking/choose-validator) - Selection criteria
- [Claim Rewards](/docs/guides/staking/claim-rewards) - Get your earnings
