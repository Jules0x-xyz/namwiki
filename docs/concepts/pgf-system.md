---
title: PGF System
description: Understanding Namada's Public Goods Funding mechanism
sidebar_position: 3
tags: [pgf, governance, funding, public-goods]
keywords: [pgf, public goods funding, namada treasury, community funding]
---

# PGF System

Public Goods Funding (PGF) is Namada's built-in mechanism for funding ecosystem development. This guide explains how it works.

## What is PGF?

PGF is a decentralized treasury system that:

- 💰 Funds ecosystem development
- 🗳️ Is controlled by token holders
- 👥 Is managed by elected stewards
- 🔄 Operates continuously

## Why Public Goods Funding?

### The Public Goods Problem

Public goods are:
- Valuable to many
- Hard to profit from directly
- Underfunded by markets

Examples in crypto:
- Core protocol development
- Educational content
- Open-source tools
- Community programs

### The Solution

PGF creates sustainable funding:
```
Protocol inflation → Treasury → Community decides → Funded projects
```

## How PGF Works

### Funding Flow

```
┌─────────────────────────────────────────────┐
│           PROTOCOL INFLATION                │
│         (New NAM created)                   │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│           PGF TREASURY                      │
│    (Accumulates over time)                  │
└─────────────────┬───────────────────────────┘
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
┌───────────────┐   ┌───────────────┐
│   STEWARD     │   │  GOVERNANCE   │
│   GRANTS      │   │  PROPOSALS    │
│   (fast)      │   │  (community)  │
└───────┬───────┘   └───────┬───────┘
        │                   │
        └─────────┬─────────┘
                  ▼
┌─────────────────────────────────────────────┐
│           FUNDED PROJECTS                   │
│   Development, Education, Community, etc.   │
└─────────────────────────────────────────────┘
```

### Two Paths to Funding

| Path | Speed | Size | Approval |
|------|-------|------|----------|
| Steward Grants | Fast (days) | Smaller | Steward decision |
| Governance | Slower (weeks) | Any size | Community vote |

## PGF Stewards

### Role

Stewards are elected community members who:
- Manage portions of the treasury
- Make funding decisions
- Represent the community
- Are accountable to voters

### Election

Stewards are elected through governance:
1. Candidates announce
2. Community evaluates
3. Proposal submitted
4. Token holders vote
5. If passed, steward is elected

### Powers & Limits

| Can Do | Cannot Do |
|--------|-----------|
| Approve grants from their allocation | Spend treasury arbitrarily |
| Prioritize certain projects | Override governance decisions |
| Represent community interests | Keep funds for themselves |

### Accountability

Stewards must:
- Report on funded projects
- Justify spending decisions
- Face re-election
- Can be removed by governance

## Funding Types

### Continuous Funding

Ongoing payments for sustained work:

```
Project: Core documentation maintenance
Funding: 500 NAM/month
Duration: Until governance stops it

Every epoch, 500 NAM flows to the project
```

Use cases:
- Core team salaries
- Infrastructure costs
- Ongoing maintenance

### Retroactive Funding

One-time payment for completed work:

```
Project: Built a useful tool
Work: Already done
Request: 2000 NAM recognition/reward
```

Use cases:
- Completed projects
- Past contributions
- Bounties

## Treasury Economics

### Income

The treasury receives:
- Portion of block inflation
- Portion of transaction fees
- Community donations

### Spending

Spent on approved:
- Development projects
- Education initiatives
- Community programs
- Infrastructure
- Security audits
- Marketing

### Sustainability

```
If: Income > Spending
Then: Treasury grows (future security)

If: Income < Spending
Then: Treasury shrinks (need to reduce spending)
```

Governance balances spending vs. sustainability.

## Governance Process

### Proposal Types

**PGF Funding Proposal**

```json
{
  "type": "PGF",
  "continuous": [...],  // Ongoing payments
  "retro": [...]        // One-time payments
}
```

**PGF Steward Proposal**

```json
{
  "type": "PGFSteward",
  "add": "tnam1newsteward...",  // Or
  "remove": "tnam1oldsteward..."
}
```

### Voting

Same as other governance:
- Quorum: 40% of staked NAM
- Threshold: 66.67% approval
- Period: ~5 epochs

## Applying for Funding

### Steps

1. **Develop idea** - Clear project concept
2. **Community discussion** - Forum + Discord
3. **Choose path**:
   - Small/fast → Contact steward
   - Large/community → Governance proposal
4. **Submit** - Proposal or steward application
5. **Advocate** - Campaign for support
6. **Deliver** - If funded, do the work
7. **Report** - Share outcomes

See [Apply for PGF](/docs/guides/governance/apply-for-pgf) for detailed guide.

## Example Funded Projects

### Development

- Protocol improvements
- SDK development
- Tool creation
- Integration work

### Education (like this wiki!)

- Documentation
- Tutorials
- Video content
- Translations

### Community

- Meetups and events
- Ambassador programs
- Community moderation
- Support channels

### Infrastructure

- Public RPC nodes
- Block explorers
- Faucets
- Testing environments

## Checks and Balances

### Against Misuse

| Protection | How It Works |
|-----------|--------------|
| Voting | Community approves spending |
| Steward limits | Can't spend entire treasury |
| Transparency | All spending on-chain |
| Accountability | Poor performers removed |
| Competition | Multiple stewards |

### Governance Oversight

Token holders can:
- Elect/remove stewards
- Approve/reject large spending
- Change PGF parameters
- Monitor treasury

## FAQ

### Where does the money come from?

Protocol inflation and fees. New NAM is created and allocated to PGF.

### Who decides what gets funded?

Community through governance, and stewards through their allocations.

### Can anyone apply?

Yes! Both individuals and teams can apply for funding.

### How much funding is available?

Varies based on treasury balance and governance decisions. Check current treasury on explorer.

### Is funding guaranteed?

No. Projects must be approved through governance or steward decisions.

## Resources

- [Apply for PGF](/docs/guides/governance/apply-for-pgf)
- [Governance Basics](/docs/concepts/governance-basics)
- [Create Proposal](/docs/guides/governance/create-proposal)
- [Forum](https://forum.namada.net) - Proposal discussions
