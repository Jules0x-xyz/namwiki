---
title: Block Explorers
description: Tools to explore the Namada blockchain
sidebar_position: 5
tags: [explorer, blockchain, tools, resources]
keywords: [block explorer, namada explorer, transaction lookup, address search]
---

# Block Explorers

Block explorers allow you to view and search blockchain data. Here are the explorers available for Namada.

## What Can You Do?

With a block explorer, you can:

- 🔍 **Search addresses** - View balances and transaction history
- 📝 **Lookup transactions** - Verify transfers and status
- 📊 **View validators** - Check uptime, commission, stake
- 🗳️ **Monitor governance** - See proposals and votes
- 📈 **Track network** - Blocks, TPS, statistics

## Available Explorers

### Primary Explorers

| Explorer | Features | Link |
|----------|----------|------|
| *Coming Soon* | Full-featured explorer | - |

*Explorer listings will be added as they become available.*

### Validator-Focused

| Tool | Purpose |
|------|---------|
| Validator Dashboard | Uptime, rewards, delegators |
| Staking Explorer | Staking statistics |

## Using Explorers

### Search by Address

Enter a `tnam...` address to see:
- Current balance
- Transaction history
- Staking status
- Governance votes

**Note**: Shielded (`znam`) addresses don't appear on explorers - that's the point!

### Search by Transaction Hash

Enter a transaction hash to see:
- Status (success/failed)
- Block height
- Gas used
- Details

### View Validators

Explorer validator pages show:
- Commission rate
- Total stake
- Self-stake
- Uptime history
- Delegator count

## What You Can't See

Due to privacy features:

| Visible | Hidden |
|---------|--------|
| Transparent transactions | Shielded transaction details |
| `tnam` balances | `znam` balances |
| Shield/unshield events | What happens in shielded pool |
| Network statistics | Individual shielded users |

## API Access

Many explorers offer APIs for developers:

### Common Endpoints

| Endpoint | Purpose |
|----------|---------|
| `/blocks` | Block data |
| `/transactions` | Transaction lookup |
| `/validators` | Validator information |
| `/addresses` | Address balances |

### Use Cases

- Portfolio tracking apps
- Analytics dashboards
- Automated monitoring
- Custom tooling

## Explorer Comparison

When choosing an explorer, consider:

| Feature | Look For |
|---------|----------|
| Speed | Fast loading, real-time updates |
| Accuracy | Up-to-date, correct data |
| Features | Staking, governance, analytics |
| API | Developer access if needed |
| Privacy | No excessive tracking |

## Alternative Tools

### CLI Queries

Query directly via command line:

```bash
# Account balance
namadac balance --owner tnam1...

# Transaction status
namadac tx-status --hash 0x...

# Validator info
namadac validator-state
```

### RPC Endpoints

Query nodes directly:

```bash
curl https://rpc.namada.net/block?height=1000
```

## Tips for Using Explorers

### Verifying Transactions

1. Copy transaction hash
2. Search on explorer
3. Confirm status = "Success"
4. Verify correct recipient and amount

### Checking Validators

1. Search validator address
2. Check uptime (99%+ preferred)
3. Note commission rate
4. Review recent activity

### Monitoring Governance

1. Go to governance section
2. View active proposals
3. Check voting status
4. See your validator's vote

## Privacy Considerations

When using explorers:

- Your searches may be logged
- Consider using VPN
- Don't search your own addresses if privacy-sensitive
- Remember transparent activities are already public

## Running Your Own Explorer

For privacy or reliability:

1. Run a Namada node
2. Deploy explorer software
3. Query your own data

Benefits:
- No third-party tracking
- Always available
- Customizable

## Testnet Explorers

For testing:

| Network | Explorer |
|---------|----------|
| Testnet | Coming Soon |

## Reporting Issues

Found incorrect data?

1. Report to explorer team
2. Cross-check with other explorers
3. Query via CLI for truth
4. Share findings in community

## Updates

Explorer ecosystem is growing. Check back for new additions!

---

*Last updated: December 2024*
