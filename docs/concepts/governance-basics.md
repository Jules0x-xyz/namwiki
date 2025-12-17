---
title: Governance Basics
description: Understanding Namada's on-chain governance system
sidebar_position: 4
tags: [governance, voting, proposals, decentralization]
keywords: [namada governance, on-chain voting, dao, proposals]
---

# Governance Basics

Namada uses on-chain governance to make collective decisions about the protocol's future. This guide explains how it works.

## What is Governance?

Governance is how Namada's community:
- 📜 Proposes changes
- 🗳️ Votes on decisions
- 🔧 Implements upgrades
- 💰 Allocates funds

All on-chain, transparent, and binding.

## Who Can Participate?

| Role | Power |
|------|-------|
| NAM stakers | Voting power = staked amount |
| Validators | Vote on behalf of delegators |
| Proposal authors | Anyone can propose |

**More stake = more voting power** (stake-weighted voting)

## Key Concepts

### Proposals

Formal requests for changes:
- Parameter updates
- Protocol upgrades
- Funding requests
- Steward elections

### Voting Power

Your voting power equals your staked NAM:
```
Staked: 1,000 NAM
Voting power: 1,000 votes
```

### Delegation

If you don't vote, your validator's vote counts:
```
You delegate to ValidatorA
ValidatorA votes Yay
Your stake counts as Yay (unless you vote differently)
```

### Epochs

Governance operates on epochs (~12 hours):
- Proposals span multiple epochs
- Voting periods measured in epochs
- Results tallied at epoch boundaries

## Proposal Lifecycle

```
1. CREATION
   Author submits proposal + deposit
   
2. VOTING PERIOD
   Community votes for ~5 epochs
   
3. TALLY
   Votes counted
   
4. GRACE PERIOD
   Time before execution
   
5. EXECUTION
   If passed, changes applied
```

## Proposal Types

### Default Proposal

General governance decisions:
- Parameter changes
- Protocol upgrades
- Non-funding decisions

### PGF Proposal

Public goods funding:
- Fund projects
- Continuous or one-time
- Community treasury spending

### PGF Steward Proposal

Steward management:
- Add new stewards
- Remove existing stewards
- Change steward parameters

## Voting Options

| Vote | Meaning | Effect |
|------|---------|--------|
| **Yay** | Support | Counts toward passing |
| **Nay** | Oppose | Counts against passing |
| **Abstain** | Neutral | Counts toward quorum only |

## Quorum & Threshold

For a proposal to pass, it needs:

### Quorum

Minimum participation required:
```
Required: 40% of staked NAM must vote
If < 40% vote: Proposal fails (insufficient participation)
```

### Threshold

Approval percentage needed:
```
Required: 66.67% (2/3) of votes must be Yay
Abstain votes count toward quorum but not threshold
```

### Example Calculation

```
Total Staked: 100,000 NAM
Quorum needed: 40,000 NAM

Votes cast:
- Yay: 30,000 NAM
- Nay: 10,000 NAM
- Abstain: 5,000 NAM
- Total: 45,000 NAM

Quorum check:
45,000 > 40,000 ✅ Quorum met

Threshold check:
Yay / (Yay + Nay) = 30,000 / 40,000 = 75%
75% > 66.67% ✅ Threshold met

Result: PASSED ✅
```

## Validator Voting

### How It Works

Validators vote, and their delegators' stake is included:
```
ValidatorA has 1,000,000 NAM delegated
ValidatorA votes Yay
All 1,000,000 counts as Yay
```

### Override

Delegators can override:
```
ValidatorA votes Yay
You vote Nay
Your portion counts as Nay (not Yay)
```

### Why This Matters

- Validators represent delegators by default
- Active voters have direct influence
- Validator selection includes governance preferences

## Creating Proposals

### Requirements

1. **Deposit**: ~500 NAM (returned if proposal passes/meets quorum)
2. **Proper format**: JSON with required fields
3. **Epoch timing**: Correct voting period epochs

### Best Practices

1. Discuss in forum first
2. Build consensus
3. Write clear specification
4. Allow adequate voting time

See [Create Proposal](/docs/guides/governance/create-proposal) for details.

## Governance Parameters

| Parameter | Typical Value | Description |
|-----------|--------------|-------------|
| Voting period | 5 epochs | How long voting is open |
| Grace period | 3 epochs | Time before execution |
| Quorum | 40% | Minimum participation |
| Threshold | 66.67% | Approval needed |
| Deposit | 500 NAM | Required to propose |

*Parameters may vary - check current values on-chain*

## Governance vs Traditional DAOs

| Aspect | Namada | Many DAOs |
|--------|--------|----------|
| Voting power | Stake-weighted | Token-weighted |
| Delegation | Automatic to validator | Often manual |
| On-chain | Yes | Sometimes |
| Binding | Yes | Sometimes |

## Security Considerations

### Against Attacks

| Attack | Protection |
|--------|------------|
| Flash loan voting | Stake must be locked |
| Majority attack | High quorum/threshold |
| Spam proposals | Deposit requirement |
| Voter apathy | Validator voting |

### Time Locks

Grace period allows:
- Community review of passed proposals
- Detection of malicious proposals
- Emergency response if needed

## Participating Effectively

### As a Voter

1. **Stay informed**: Follow governance channels
2. **Read proposals**: Understand what you're voting on
3. **Vote**: Don't leave it to your validator
4. **Engage**: Discuss in forum and Discord

### As a Proposer

1. **Build consensus first**: Discuss before proposing
2. **Write clearly**: Explain the change
3. **Be responsive**: Answer questions
4. **Campaign**: Encourage voting

## Governance Resources

### Where to Find Proposals

- Block explorers: Governance section
- Forum: [forum.namada.net](https://forum.namada.net)
- Discord: #governance channel

### Discussion Channels

- Forum for long-form discussion
- Discord for quick questions
- Twitter for announcements

## FAQ

### What if I don't vote?

Your validator's vote applies to your stake.

### Can I change my vote?

Yes, until voting ends. Only your last vote counts.

### What happens to deposits?

Returned if proposal passes or meets quorum. May be slashed for spam.

### Can proposals be cancelled?

No, once submitted, proposals complete their lifecycle.

### How do I know about new proposals?

Follow governance channels, set up alerts, check regularly.

## Summary

```
Namada Governance in brief:
- Stake NAM to vote
- Proposals need 40% participation
- Need 66.67% approval to pass
- Validators vote for non-voting delegators
- Anyone can propose (with deposit)
- All decisions are on-chain and binding
```

## Next Steps

- [Vote on Proposals](/docs/guides/governance/vote-on-proposals)
- [Create Proposal](/docs/guides/governance/create-proposal)
- [PGF System](/docs/concepts/pgf-system)
