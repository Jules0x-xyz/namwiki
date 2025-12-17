---
title: Vote on Proposals
description: How to participate in Namada governance by voting on proposals
sidebar_position: 1
tags: [governance, voting, proposals, participation]
keywords: [vote namada, governance voting, proposals, dao voting]
---

# Vote on Proposals

Participate in Namada's on-chain governance by voting on proposals that shape the protocol's future.

:::tip Time & Difficulty
⏱️ **5 minutes** | 🎯 **Difficulty**: Beginner
:::

## Why Voting Matters

Your vote affects:
- 🔧 Protocol upgrades
- 💰 Treasury spending
- 📜 Parameter changes
- 🌐 Network direction

## Who Can Vote?

- ✅ NAM stakers (delegators)
- ✅ Validators
- ✅ Anyone with delegated stake

Voting power = Amount of NAM staked

## Find Active Proposals

### Using Block Explorer

1. Go to a Namada block explorer
2. Navigate to **Governance** section
3. View **Active Proposals**

### Using CLI

```bash
# List all proposals
namadac query-proposal

# View specific proposal
namadac query-proposal --proposal-id 1
```

## Understanding Proposals

Each proposal includes:

| Field | Description |
|-------|-------------|
| ID | Unique proposal number |
| Title | Brief description |
| Author | Who submitted it |
| Type | Default/PGF/ETH Bridge |
| Description | Full details |
| Voting Period | Start/end times |
| Status | Active/Passed/Rejected |

### Proposal Types

1. **Default** - Protocol changes, parameter updates
2. **PGF Funding** - Public goods funding requests
3. **PGF Steward** - Steward elections

## Vote Using Extension

### Step 1: Find the Proposal

1. Open Extension
2. Go to **Governance**
3. Select an active proposal
4. Read the proposal details

### Step 2: Cast Your Vote

Options:
- **Yay** - Support the proposal
- **Nay** - Oppose the proposal
- **Abstain** - Neutral (still counts toward quorum)

### Step 3: Confirm

1. Select your vote
2. Review transaction details
3. Click **Vote**
4. Sign the transaction

## Vote Using CLI

### View Proposal Details

```bash
namadac query-proposal --proposal-id 1
```

### Cast Your Vote

```bash
# Vote yay
namadac vote-proposal \
  --proposal-id 1 \
  --vote yay \
  --signer my-wallet

# Vote nay
namadac vote-proposal \
  --proposal-id 1 \
  --vote nay \
  --signer my-wallet

# Vote abstain
namadac vote-proposal \
  --proposal-id 1 \
  --vote abstain \
  --signer my-wallet
```

## Validator Votes vs Your Vote

### Default Behavior

If you don't vote, your validator's vote is used:

```
You staked with ValidatorA
ValidatorA votes Yay
Your stake counts as Yay
```

### Override Your Validator

Your vote always overrides:

```
ValidatorA votes Yay
You vote Nay
Your stake counts as Nay
```

**Important**: Always vote if you disagree with your validator!

## Voting Period

Proposals have a voting window:

```
Proposal Created → Voting Opens → Voting Closes → Execution
      Day 0            Day 1         Day 7          Day 8+
```

| Phase | Description |
|-------|-------------|
| Grace period | Proposal can be viewed |
| Voting period | Votes accepted |
| Tally | Results calculated |
| Execution | If passed, changes applied |

## Quorum & Threshold

For a proposal to pass:

### Quorum

Minimum participation required:
- Usually 40% of staked NAM
- If quorum not met, proposal fails

### Threshold

Percentage of Yes votes needed:
- Usually 66.67% (2/3)
- Of votes cast, not total stake

### Example

```
Total Staked: 100,000 NAM
Quorum: 40,000 NAM

Votes:
- Yay: 35,000 NAM
- Nay: 10,000 NAM
- Abstain: 5,000 NAM
- Total: 50,000 NAM (✅ quorum met)

Result:
- Yay %: 35,000 / 45,000 = 77.8% (abstain doesn't count)
- Threshold: 66.67%
- ✅ PASSED
```

## Best Practices

### Before Voting

1. **Read the proposal** - Understand what you're voting on
2. **Check discussions** - Forum, Discord, Twitter
3. **Evaluate impact** - How does it affect you and the network?
4. **Consider validator's position** - But form your own opinion

### Vote Considerations

| Factor | Questions to Ask |
|--------|-----------------|
| Technical merit | Is this technically sound? |
| Security | Any security implications? |
| Economic impact | How does this affect token economics? |
| Community sentiment | What does the community think? |
| Alignment | Does this align with network goals? |

## Checking Results

### View Vote Tally

```bash
namadac query-proposal --proposal-id 1
```

### In Explorer

1. Go to the proposal
2. View current vote counts
3. See if quorum is met

## FAQ

### Can I change my vote?

Yes! You can vote again until the voting period ends. Only your last vote counts.

### Does abstaining help?

Yes - it counts toward quorum but not toward passing/rejecting.

### What if I miss a vote?

Your validator's vote is used. If they don't vote either, your stake doesn't count.

### Is voting anonymous?

No - votes are on-chain and visible. However, you can vote from a non-public address.

### What happens after a proposal passes?

Depends on the type:
- Parameter changes: Applied automatically
- Upgrades: Implemented after delay
- PGF: Funds distributed

## Governance Resources

- **Forum**: [forum.namada.net](https://forum.namada.net) - Proposal discussions
- **Discord**: #governance channel
- **Documentation**: Official governance docs

## Next Steps

- [Create a Proposal](/docs/guides/governance/create-proposal) - Submit your own
- [Apply for PGF](/docs/guides/governance/apply-for-pgf) - Get funding
- [Governance Basics](/docs/concepts/governance-basics) - Deep dive
