---
title: IBC Transfers
description: Transfer assets between Namada and other Cosmos chains using IBC
sidebar_position: 3
tags: [ibc, transfer, cosmos, interchain]
keywords: [ibc transfer, cosmos ibc, namada ibc, interchain transfer]
---

# IBC Transfers

IBC (Inter-Blockchain Communication) allows you to transfer assets between Namada and other Cosmos ecosystem chains seamlessly.

:::tip Time & Difficulty
⏱️ **5 minutes** | 🎯 **Difficulty**: Intermediate
:::

## What is IBC?

IBC is the native communication protocol for Cosmos chains that allows:

- 🔄 **Asset transfers** between chains
- 🔐 **Trustless** - No bridges or intermediaries
- ⚡ **Fast** - Usually under 1 minute
- 💰 **Low fees** - Minimal transaction costs

## Supported Chains

Namada has IBC connections to:

| Chain | Token | Channel |
|-------|-------|---------|
| Cosmos Hub | ATOM | channel-0 |
| Osmosis | OSMO | channel-1 |
| Celestia | TIA | channel-2 |
| Stargaze | STARS | channel-3 |

*Channels may vary. Check official docs for current list.*

## Transfer TO Namada

### From Osmosis (Example)

**Using Keplr:**

1. Open Keplr
2. Select **Osmosis** network
3. Click **IBC Transfer**
4. Select destination: **Namada**
5. Enter your Namada `tnam` address
6. Select asset and amount
7. Click **Transfer**
8. Sign transaction

**Using CLI:**

```bash
# On Osmosis
osmosisd tx ibc-transfer transfer \
  transfer \
  channel-X \
  tnam1youraddress... \
  100000uosmo \
  --from mykey \
  --fees 500uosmo
```

### From Cosmos Hub

1. Open Keplr → Cosmos Hub
2. Click **Send** → **IBC Transfer**
3. Choose **Namada**
4. Enter `tnam` address
5. Enter amount
6. Confirm

### Verification

After transfer:

1. Wait 30 seconds - 2 minutes
2. Check your Namada wallet
3. Balance should appear

## Transfer FROM Namada

### Using Namada Extension

1. Open Extension
2. Click **Send** or **IBC**
3. Select **IBC Transfer**
4. Choose destination chain
5. Enter recipient address
6. Select asset and amount
7. Confirm

### Using CLI

```bash
namadac ibc-transfer \
  --source my-wallet \
  --receiver cosmos1abc123... \
  --token NAM \
  --amount 100 \
  --channel-id channel-0
```

### Parameters Explained

| Parameter | Description |
|-----------|-------------|
| `--source` | Your Namada wallet alias |
| `--receiver` | Destination address on target chain |
| `--token` | Asset to transfer |
| `--amount` | Amount to send |
| `--channel-id` | IBC channel for target chain |

## IBC Token Denominations

When tokens travel via IBC, they get wrapped:

```
Native NAM on Namada: NAM
NAM on Osmosis: ibc/ABC123... (IBC denom)
```

When you transfer back, they unwrap to native form.

### Check IBC Denoms

```bash
# List your IBC tokens
namadac balance --owner my-wallet
```

## Multi-Hop Transfers

Sometimes you need multiple hops:

```
Ethereum → Gravity Bridge → Osmosis → Namada
```

Each hop is a separate transaction:

1. Bridge ETH to Gravity Bridge
2. IBC from Gravity to Osmosis
3. IBC from Osmosis to Namada

## Fees

| Type | Approximate Cost |
|------|-----------------|
| IBC to Namada | ~0.01-0.1 (source chain token) |
| IBC from Namada | ~0.01 NAM |
| Total round trip | ~0.02-0.2 combined |

## Timing

| Stage | Duration |
|-------|----------|
| Transaction broadcast | Instant |
| Source chain confirm | 6-15 seconds |
| IBC relay | 10-30 seconds |
| Destination confirm | 6-15 seconds |
| **Total** | **30s - 2 min** |

## Troubleshooting

### "Transfer pending for too long"

1. Check source chain explorer
2. Check relayer status
3. Wait up to 5 minutes
4. If stuck, the transfer may timeout and refund

### "Tokens not appearing"

1. Verify correct channel was used
2. Check IBC denomination
3. Wait for confirmations
4. Check block explorer

### "Channel not found"

```bash
# List available channels
namadac query-ibc-channels
```

### "Insufficient funds for fee"

Keep native tokens on source chain for fees:
- Osmosis: Need OSMO for fees
- Cosmos Hub: Need ATOM for fees
- Namada: Need NAM for fees

## IBC Safety

### Verified Channels

Always use official channels. Fake channels can steal funds.

### Timeout Protection

IBC has built-in timeout:
- If transfer fails, funds return to source
- Default timeout: 10 minutes
- Funds are never "stuck" permanently

### Amount Limits

- No protocol limit on amounts
- Some relayers may have soft limits
- Test with small amounts first

## IBC + Shielding

For maximum privacy:

```
1. IBC transfer to Namada (tnam)
2. Shield assets (tnam → znam)
3. Use shielded (znam → znam)
4. Unshield when needed (znam → tnam)
5. IBC out if desired
```

The IBC transaction is public, but once shielded, your activities are private.

## Advanced: Running a Relayer

To relay IBC packets yourself:

```bash
# Using Hermes relayer
hermes create channel \
  --a-chain namada \
  --b-chain osmosis \
  --a-port transfer \
  --b-port transfer
```

See [Hermes documentation](https://hermes.informal.systems) for full setup.

## IBC Tokens on Namada

You can hold IBC tokens from other chains:

| Token | Origin | Use on Namada |
|-------|--------|---------------|
| ATOM | Cosmos Hub | Shield, trade, collateral |
| OSMO | Osmosis | Shield, trade |
| USDC | Multiple | Stable value, shield |

These can all be shielded in Namada's MASP!

## Next Steps

- [Shield Your IBC Assets](/docs/guides/transactions/shield-assets)
- [Understanding MASP](/docs/concepts/masp-explained)
- [Where to Buy NAM](/docs/resources/where-to-buy)
