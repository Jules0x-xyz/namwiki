---
title: CLI Wallet Introduction
description: Learn to use the Namada command-line interface wallet for advanced operations
sidebar_position: 3
tags: [wallet, cli, advanced, command-line]
keywords: [namada cli, command line wallet, namadac, namadaw]
---

# CLI Wallet Introduction

The Namada CLI wallet provides full access to all Namada features through the command line. Perfect for power users, developers, and validators.

:::tip Time & Difficulty
⏱️ **15 minutes** | 🎯 **Difficulty**: Intermediate-Advanced
:::

## Prerequisites

- Basic command line knowledge
- Terminal access (Linux, macOS, or WSL)
- Namada binaries installed

## Installation

### Option 1: Download Binaries

1. Visit [Namada releases](https://github.com/anoma/namada/releases)
2. Download for your OS
3. Extract and add to PATH

```bash
# Example for Linux
wget https://github.com/anoma/namada/releases/download/v0.31.0/namada-v0.31.0-Linux-x86_64.tar.gz
tar -xzf namada-v0.31.0-Linux-x86_64.tar.gz
sudo mv namada-v0.31.0-Linux-x86_64/* /usr/local/bin/
```

### Option 2: Build from Source

```bash
# Install Rust if needed
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Clone and build
git clone https://github.com/anoma/namada.git
cd namada
make install
```

### Verify Installation

```bash
namada --version
# Output: Namada v0.31.0

namadac --version
namadaw --version
```

## CLI Tools Overview

| Binary | Purpose |
|--------|---------|
| `namada` | Node operations |
| `namadac` | Client for transactions |
| `namadaw` | Wallet management |

## Wallet Management (namadaw)

### Create New Wallet

```bash
namadaw gen --alias my-wallet
```

You'll be prompted for a password and shown your mnemonic:

```
Enter your decryption password: 
Generated mnemonic code:
word1 word2 word3 ... word24

Derived transparent address: tnam1qp6eyv...
Derived shielded payment address: znam1abc...
```

:::danger Save Your Mnemonic
Write down all 24 words immediately. This is your only backup!
:::

### Import Existing Wallet

```bash
namadaw derive --alias imported-wallet
```

Enter your 24-word mnemonic when prompted.

### List Addresses

```bash
# All addresses
namadaw list

# Transparent addresses only
namadaw list --transparent

# Shielded addresses only
namadaw list --shielded
```

### Generate Shielded Payment Address

```bash
namadaw gen-payment-addr --alias payment-addr --key my-wallet
```

## Client Operations (namadac)

### Check Balance

```bash
# Transparent balance
namadac balance --owner my-wallet --token NAM

# Shielded balance
namadac balance --owner my-wallet --token NAM --shielded
```

### Transparent Transfer

```bash
namadac transfer \
  --source my-wallet \
  --target tnam1qp6eyv5q2s3e4h8r7t9u0i1o2p3a4s5d6f7g8h9j \
  --token NAM \
  --amount 100
```

### Shield Assets

```bash
namadac transfer \
  --source my-wallet \
  --target my-wallet \
  --token NAM \
  --amount 100 \
  --shielded
```

### Shielded Transfer

```bash
namadac transfer \
  --source my-wallet \
  --target znam1abc123def456... \
  --token NAM \
  --amount 100 \
  --shielded
```

### Unshield Assets

```bash
namadac transfer \
  --source my-wallet \
  --target my-wallet \
  --token NAM \
  --amount 100 \
  --unshielded
```

## Staking Commands

### Delegate to Validator

```bash
namadac bond \
  --source my-wallet \
  --validator tnam1validator... \
  --amount 1000
```

### Check Bonds

```bash
namadac bonds --owner my-wallet
```

### Unbond

```bash
namadac unbond \
  --source my-wallet \
  --validator tnam1validator... \
  --amount 500
```

### Claim Rewards

```bash
namadac claim-rewards \
  --source my-wallet \
  --validator tnam1validator...
```

## Governance Commands

### List Proposals

```bash
namadac query-proposal
```

### Vote on Proposal

```bash
namadac vote-proposal \
  --proposal-id 1 \
  --vote yay \
  --signer my-wallet
```

## IBC Commands

### Transfer via IBC

```bash
namadac ibc-transfer \
  --source my-wallet \
  --receiver cosmos1abc... \
  --token NAM \
  --amount 100 \
  --channel-id channel-0
```

## Configuration

### Config File Location

```bash
~/.namada/
├── config.toml        # Node config
├── wallet.toml        # Wallet config
└── chains/
    └── namada.xxx/    # Chain data
```

### Set RPC Endpoint

```bash
export NAMADA_RPC="https://rpc.namada.net"
# Or use --node flag
namadac balance --owner my-wallet --node https://rpc.namada.net
```

## Common Flags

| Flag | Description |
|------|-------------|
| `--node` | RPC endpoint URL |
| `--chain-id` | Specify chain ID |
| `--gas-limit` | Set gas limit |
| `--gas-price` | Set gas price |
| `--dry-run` | Simulate without executing |
| `--force` | Skip confirmations |

## Useful Aliases

Add to your `.bashrc` or `.zshrc`:

```bash
alias nw='namadaw'
alias nc='namadac'

# Quick balance check
alias nam-bal='namadac balance --owner my-wallet --token NAM'

# Quick shielded balance
alias nam-sbal='namadac balance --owner my-wallet --token NAM --shielded'
```

## Error Handling

### Common Errors

**"No matching keys found"**
```bash
# List available keys
namadaw list
```

**"Insufficient balance"**
```bash
# Check balance first
namadac balance --owner my-wallet --token NAM
```

**"RPC timeout"**
```bash
# Try different endpoint
namadac balance --owner my-wallet --node https://other-rpc.net
```

## Security Best Practices

1. **Encrypt your keys**: Always use password protection
2. **Backup wallet files**: `~/.namada/wallet.toml`
3. **Use hardware wallet**: When available
4. **Verify addresses**: Double-check before sending
5. **Test with small amounts**: Before large transfers

## Scripts and Automation

### Batch Operations

```bash
#!/bin/bash
# claim-all-rewards.sh

VALIDATORS=(
  "tnam1val1..."
  "tnam1val2..."
  "tnam1val3..."
)

for val in "${VALIDATORS[@]}"; do
  namadac claim-rewards --source my-wallet --validator $val
done
```

### Monitor Balance

```bash
#!/bin/bash
# watch-balance.sh

while true; do
  clear
  echo "Balance at $(date)"
  namadac balance --owner my-wallet --token NAM
  sleep 60
done
```

## Next Steps

- [Transaction Guides](/docs/guides/transactions/buy-nam)
- [Staking Guides](/docs/guides/staking/understanding-staking)
- [Official CLI Reference](https://docs.namada.net/cli)
