---
title: Choose a Validator
description: How to select the best validator for your staking needs
sidebar_position: 3
tags: [staking, validators, selection, criteria]
keywords: [choose validator, best validators, validator selection, staking criteria]
---

# Choose a Validator

Choosing the right validator(s) is crucial for maximizing rewards and minimizing risk. This guide helps you make informed decisions.

## Why Validator Choice Matters

Your validator affects:
- 📈 **Rewards** - Uptime and efficiency
- 💸 **Costs** - Commission rates
- 🛡️ **Risk** - Slashing potential
- 🗳️ **Governance** - They vote on your behalf if you don't

## Key Selection Criteria

### 1. Uptime/Performance

Higher uptime = more rewards. Look for:
- 99%+ uptime
- Consistent block signing
- No recent downtime events

**Where to check**: Block explorers, validator dashboards

### 2. Commission Rate

Commission is the validator's cut of rewards:

| Commission | Impact on 100 NAM reward |
|------------|-------------------------|
| 0% | You get 100 NAM |
| 5% | You get 95 NAM |
| 10% | You get 90 NAM |
| 20% | You get 80 NAM |

**Note**: Lower isn't always better. 0% commission may be unsustainable.

### 3. Self-Stake

Amount the validator has staked themselves:
- Higher self-stake = more "skin in the game"
- Aligned incentives with delegators
- More to lose from slashing

### 4. Total Stake

Consider validator size:

| Size | Pros | Cons |
|------|------|------|
| Large | More stable, proven track record | Reduces decentralization |
| Medium | Balance of stability and decentralization | May have less track record |
| Small | Helps decentralization | Potentially less stable |

### 5. Reputation & Community

Research the validator:
- How long have they been validating?
- Active in community?
- Responsive to issues?
- Contributions to ecosystem?

### 6. Infrastructure

Technical setup matters:
- Where are servers located?
- Redundancy/backup systems?
- Security measures?
- Professional operation?

## Where to Find Validator Info

### Block Explorers

- Check validator pages on Namada explorers
- View uptime statistics
- See historical performance

### Validator Websites

Many validators have dedicated websites with:
- Team information
- Infrastructure details
- Contact methods
- Contributions to ecosystem

### Community Resources

- Discord validator channels
- Forum discussions
- Social media

## Red Flags to Avoid

🚩 **Warning signs**:

| Red Flag | Why It's Concerning |
|----------|-------------------|
| 0% commission | Unsustainable, may raise later |
| Very high commission (over 20%) | Excessive fees |
| Poor uptime (under 95%) | Missing rewards |
| No self-stake | No skin in the game |
| No online presence | Hard to contact |
| Recent slashing events | Risk of future issues |
| Extremely large stake | Centralization risk |

## Diversification Strategy

Don't put all eggs in one basket:

### Recommended Approach

```
Total to stake: 1000 NAM

Allocation:
├── Validator A (top tier): 300 NAM (30%)
├── Validator B (medium, community): 250 NAM (25%)
├── Validator C (medium, technical): 200 NAM (20%)
├── Validator D (smaller, support decentralization): 150 NAM (15%)
└── Validator E (emerging): 100 NAM (10%)
```

### Benefits of Diversification

1. **Reduced slashing risk** - If one is slashed, others aren't
2. **Uptime averaging** - Some downtime balanced by others
3. **Governance diversity** - Multiple voting perspectives
4. **Network health** - Supports decentralization

## Validator Comparison Template

Use this checklist when comparing:

| Criteria | Validator A | Validator B | Validator C |
|----------|-------------|-------------|-------------|
| Uptime | 99.9% | 98.5% | 99.7% |
| Commission | 5% | 3% | 7% |
| Self-stake | 50,000 NAM | 10,000 NAM | 100,000 NAM |
| Total stake | 2M NAM | 500K NAM | 5M NAM |
| Time active | 2 years | 6 months | 3 years |
| Community presence | High | Medium | High |
| Score | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |

## Supporting Decentralization

The network is healthier when stake is spread out:

### The Nakamoto Coefficient

- Measures how many validators could collude to attack
- Higher = more decentralized
- Your delegation affects this!

### How You Can Help

1. **Avoid top validators** - They likely have enough stake
2. **Support mid-tier validators** - Help them grow
3. **Research smaller validators** - Some are excellent
4. **Rotate occasionally** - Spread stake over time

## Staking for Governance

Validators vote on governance proposals. Consider:

- Do they align with your views?
- Are they active in governance?
- Do they communicate votes?

You can override their vote by voting yourself!

## When to Change Validators

Consider redelegating if:

- ⚠️ Uptime drops significantly
- ⚠️ Commission increases unexpectedly
- ⚠️ Validator is slashed
- ⚠️ Validator becomes inactive
- ⚠️ Better options emerge

Use **redelegation** to move stake without the 21-day wait.

## Validator List Resources

Find validators:

- [Namada Staking Dashboard](#) - Official
- Block Explorers - See staking section
- Community Curated Lists - Discord/Forum

## Sample Validator Profiles

### Type A: Infrastructure Provider

- 🏢 Professional data center operation
- 📊 99.99% uptime
- 💰 5-10% commission
- ✅ Good for: Reliability-focused delegators

### Type B: Community Contributor

- 👥 Active in governance and community
- 📊 99%+ uptime
- 💰 5% commission
- ✅ Good for: Community-minded delegators

### Type C: Emerging Validator

- 🌱 Newer, building track record
- 📊 Solid uptime but less history
- 💰 Lower commission to attract stake
- ✅ Good for: Supporting decentralization

## FAQ

### Does validator location matter?

For performance, distributed validators are good for the network. For you, it doesn't directly affect rewards.

### Can I change validators easily?

Yes! Use redelegation to move stake instantly without unbonding.

### Should I stake with exchanges?

Generally not recommended:
- Centralization concerns
- May not vote in your interest
- Less community contribution

### How many validators should I use?

3-10 is a good range. More provides better risk distribution but requires more management.

## Next Steps

Ready to stake?

- [How to Stake](/docs/guides/staking/how-to-stake) - Start staking now
- [Claim Rewards](/docs/guides/staking/claim-rewards) - Get your earnings
- [Governance Basics](/docs/concepts/governance-basics) - Participate in decisions
