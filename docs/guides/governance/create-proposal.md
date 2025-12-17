---
title: Create a Proposal
description: How to create and submit governance proposals on Namada
sidebar_position: 2
tags: [governance, proposals, submit, create]
keywords: [create proposal, submit proposal, governance proposal, namada proposal]
---

# Create a Proposal

Learn how to create and submit governance proposals to shape Namada's future.

:::tip Time & Difficulty
⏱️ **30 minutes** | 🎯 **Difficulty**: Advanced
:::

## Prerequisites

- NAM tokens for deposit and gas
- Clear proposal idea
- Community discussion completed
- Understanding of proposal types

## Before Creating a Proposal

### 1. Community Discussion

Before submitting on-chain:

1. **Draft your idea** - Write a clear proposal document
2. **Forum post** - Share on [forum.namada.net](https://forum.namada.net)
3. **Discord discussion** - Get initial feedback
4. **Iterate** - Refine based on feedback

:::warning Don't Skip This
Proposals without prior discussion often fail. Build consensus first!
:::

### 2. Gather Support

- Talk to validators
- Engage community members
- Address concerns
- Build coalition of supporters

## Proposal Types

### Default Proposal

For general governance:
- Parameter changes
- Protocol upgrades
- Non-funding decisions

### PGF Funding Proposal

For funding requests:
- Continuous funding
- One-time grants
- Steward actions

### PGF Steward Proposal

For steward elections:
- Add new stewards
- Remove stewards

## Proposal Structure

### Required Components

| Component | Description |
|-----------|-------------|
| Title | Short, clear description |
| Abstract | 1-2 paragraph summary |
| Motivation | Why is this needed? |
| Specification | Detailed technical changes |
| Impact | Who/what is affected? |
| Timeline | Implementation schedule |

### Good Proposal Example

```markdown
Title: Increase Block Gas Limit by 20%

Abstract:
This proposal increases the block gas limit from X to Y, 
enabling more transactions per block and reducing fees.

Motivation:
Recent network growth has led to congested blocks during 
peak usage. Users report delayed transactions and higher fees.

Specification:
- Change `max_block_gas` from 50,000,000 to 60,000,000
- Effective after voting period ends

Impact:
- More transactions per block
- Lower average fees
- Slightly larger block sizes
- Validators need adequate hardware

Timeline:
- If passed: Immediate effect next epoch
```

## Create Using CLI

### Step 1: Prepare Proposal JSON

Create a file `proposal.json`:

```json
{
  "proposal": {
    "author": "tnam1youraddress...",
    "content": {
      "title": "Your Proposal Title",
      "authors": "your-name@email.com",
      "discussions-to": "https://forum.namada.net/t/your-topic",
      "created": "2024-12-17",
      "license": "CC0",
      "abstract": "Brief summary of the proposal",
      "motivation": "Why this change is needed",
      "details": "Technical specification and implementation details"
    },
    "type": "Default",
    "voting_start_epoch": 100,
    "voting_end_epoch": 105,
    "grace_epoch": 108
  }
}
```

### Step 2: Calculate Epochs

```bash
# Get current epoch
namadac epoch

# Plan your timing:
# voting_start_epoch: Current + 2 (minimum)
# voting_end_epoch: Start + voting_period (usually 5 epochs)
# grace_epoch: End + grace_period (usually 3 epochs)
```

### Step 3: Submit Proposal

```bash
namadac init-proposal \
  --data-path proposal.json
```

### Step 4: Pay Deposit

Proposals require a deposit:
- Returned if proposal passes
- Slashed if proposal fails to reach quorum (optional)

```bash
# Deposit is automatic with init-proposal
# Ensure you have sufficient NAM
```

## Proposal Deposits

| Proposal Type | Typical Deposit |
|--------------|-----------------|
| Default | 500 NAM |
| PGF Funding | 500 NAM |
| PGF Steward | 500 NAM |

Deposits are returned if:
- Proposal passes
- Proposal fails but meets quorum

Deposits may be slashed if:
- Proposal is clearly malicious
- Spam proposals

## PGF Funding Proposal

For funding requests:

### Continuous Funding

```json
{
  "proposal": {
    "author": "tnam1youraddress...",
    "content": {
      "title": "Continuous Funding for XYZ Project",
      "abstract": "Request 1000 NAM/month for development"
    },
    "type": {
      "PGF": {
        "continuous": [
          {
            "target": "tnam1recipient...",
            "amount": "1000",
            "token": "NAM"
          }
        ]
      }
    }
  }
}
```

### One-Time Grant

```json
{
  "proposal": {
    "type": {
      "PGF": {
        "retro": [
          {
            "target": "tnam1recipient...",
            "amount": "5000",
            "token": "NAM"
          }
        ]
      }
    }
  }
}
```

## After Submission

### Track Your Proposal

```bash
# Find your proposal ID
namadac query-proposal

# Check status
namadac query-proposal --proposal-id YOUR_ID
```

### Campaign for Votes

1. Announce on Discord
2. Post on Twitter
3. Update forum thread
4. Engage with validators
5. Answer questions

### Monitor Voting

Track votes throughout the period:
- Check quorum progress
- Engage with concerned voters
- Address objections

## Proposal Lifecycle

```
1. DRAFT
   Write proposal, gather feedback
   
2. DISCUSSION
   Forum post, Discord, iteration
   
3. SUBMISSION
   Submit on-chain, pay deposit
   
4. VOTING PERIOD
   Community votes
   
5. TALLY
   Votes counted, result determined
   
6. EXECUTION
   If passed, changes implemented
   
7. DEPOSIT RETURN
   If successful, deposit returned
```

## Common Mistakes

| Mistake | Consequence |
|---------|-------------|
| No prior discussion | Low support, failure |
| Vague specification | Confusion, No votes |
| Wrong epochs | Invalid proposal |
| Insufficient deposit | Proposal rejected |
| Poor timing | Low attention |

## Best Practices

### Do

- ✅ Build consensus before submitting
- ✅ Be specific and detailed
- ✅ Engage with feedback
- ✅ Allow adequate voting time
- ✅ Have backup plan

### Don't

- ❌ Submit without discussion
- ❌ Be vague about changes
- ❌ Ignore criticism
- ❌ Rush the process
- ❌ Attack opponents

## FAQ

### How much does it cost?

Deposit (~500 NAM) + gas (~0.1 NAM). Deposit returned if proposal succeeds.

### Can I cancel a proposal?

No, once submitted, proposals cannot be cancelled.

### What if my proposal fails?

Learn from feedback, iterate, and try again. Many successful proposals failed initially.

### How long is voting?

Typically 5 epochs (~2.5 days). Check current parameters.

## Next Steps

- [Vote on Proposals](/docs/guides/governance/vote-on-proposals) - See voting in action
- [Apply for PGF](/docs/guides/governance/apply-for-pgf) - Funding process
- [Governance Basics](/docs/concepts/governance-basics) - Deep understanding
