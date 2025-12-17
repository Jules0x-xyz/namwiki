---
title: MASP Explained
description: Understanding Namada's Multi-Asset Shielded Pool technology
sidebar_position: 1
tags: [masp, privacy, technology, concepts]
keywords: [masp, multi-asset shielded pool, namada privacy, shielded transactions]
---

# MASP Explained

The Multi-Asset Shielded Pool (MASP) is Namada's breakthrough privacy technology. This guide explains how it works in accessible terms.

## What is MASP?

MASP stands for **Multi-Asset Shielded Pool**. It's the technology that enables:

- 🛡️ Private transactions
- 💎 Multiple assets sharing privacy
- 🔗 Broken transaction links
- 🎁 Shielded rewards

## The Key Innovation

### Traditional Privacy

Most privacy coins work like this:

```
Zcash: Only ZEC can be private
Monero: Only XMR can be private
Each chain has its own privacy pool
```

### Namada's MASP

Namada allows **any asset** to use the same pool:

```
MASP Pool: NAM + ATOM + OSMO + USDC + ...
All assets share the same privacy set
```

This is revolutionary because:
- More assets = larger anonymity set
- Your NAM transactions hide among ALL transactions
- Privacy scales with ecosystem adoption

## How It Works

### The Shielded Pool Metaphor

Imagine a giant swimming pool:

```
   SHIELDED POOL (MASP)
╔═══════════════════════════════════════╗
║  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧  ║
║  💧 NAM ATOM OSMO USDC NAM ATOM 💧   ║
║  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧  ║
║       All mixed together              ║
╚═══════════════════════════════════════╝
         │                  │
    Someone enters      Someone exits
    (shield)            (unshield)
         ↓                  ↓
   "Added water"       "Took water"
   (not "whose")       (not "whose")
```

When you shield:
- Your assets join the pool
- They mix with everyone else's
- Individual ownership becomes unknowable

When you transfer shielded:
- Transaction happens inside the pool
- No one can see sender, receiver, or amount
- Only sender and receiver know

## Technical Components

### Zero-Knowledge Proofs

MASP uses **zk-SNARKs** (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge):

```
Prover: "I have funds and am authorized to spend them"
Verifier: "I can verify this is true"
          "But I learn nothing else"
```

Properties:
- **Completeness**: Valid transactions always verify
- **Soundness**: Invalid transactions never verify
- **Zero-knowledge**: Verifier learns nothing beyond validity

### Nullifiers

Prevent double-spending without revealing identity:

```
When you create a shielded note:
  Note: "100 NAM belongs to [encrypted owner]"
  
When you spend it:
  Reveal nullifier (unique to this note)
  Network: "This note is now spent"
  Network doesn't know WHO spent it
```

### Commitments

Hide transaction details:

```
Commitment = Hash(asset, amount, owner, randomness)

Anyone can see: A commitment exists
No one can see: What's inside without the key
```

## The Anonymity Set

Your privacy depends on others in the pool:

### Small Pool

```
Only 10 people in pool
You're 1 of 10
Privacy: Limited
```

### Large Pool

```
10,000 people in pool
You're 1 of 10,000
Privacy: Strong
```

### MASP Advantage

```
NAM holders: 5,000
ATOM holders: 3,000
OSMO holders: 2,000
---
Total anonymity set: 10,000
Everyone benefits!
```

## Shielded Rewards

MASP incentivizes privacy through rewards:

### Why Incentivize?

- More participants = better privacy
- Benefits are public good
- Individual incentive needed

### How It Works

```
1. You shield assets
2. Assets contribute to anonymity set
3. You earn rewards proportional to:
   - Amount shielded
   - Time shielded
   - Asset type weights
4. Rewards paid in NAM
```

### Economics

```
Shielded assets help everyone's privacy
  ↓
Public benefit created
  ↓
Protocol rewards contributors
  ↓
More people shield
  ↓
Privacy improves for all
```

## Privacy Guarantees

### What MASP Hides

| Element | Hidden? |
|---------|---------|
| Sender address | ✅ Yes |
| Receiver address | ✅ Yes |
| Amount | ✅ Yes |
| Asset type | ✅ Yes |
| Transaction time | ❌ No* |
| Transaction occurred | ❌ No |

*The fact that a shielded transaction happened is visible, but not the details.

### What's Still Visible

- Shield/unshield transactions (but not what happens inside)
- Total shielded pool size
- Number of shielded transactions
- Your own transactions (to you)

## Viewing Keys

You can selectively reveal information:

### Full Viewing Key

Reveals all your shielded transactions to holder:
- Useful for auditors, tax reporting
- You control who gets it

### Payment Disclosure

Prove a specific transaction occurred:
- "I paid Alice 100 NAM on [date]"
- Selective disclosure

### Address Disclosure

Share your shielded address without spending ability:
- Receive funds
- Others can't spend your funds

## Comparison with Other Privacy Tech

| Feature | MASP | Zcash | Monero | Tornado Cash |
|---------|------|-------|--------|--------------|
| Multi-asset | ✅ | ❌ | ❌ | ❌ |
| Proof system | zk-SNARKs | zk-SNARKs | Ring sigs | zk-SNARKs |
| IBC compatible | ✅ | ❌ | ❌ | ❌ |
| Shielded rewards | ✅ | ❌ | ❌ | ❌ |
| Native L1 | ✅ | ✅ | ✅ | ❌ (L2) |

## Using MASP

### Basic Operations

1. **Shield**: Move transparent → shielded
2. **Transfer**: Shielded → shielded
3. **Unshield**: Shielded → transparent

### Best Practices

- Shield early, stay shielded
- Use common amounts
- Wait between shield/unshield
- Generate fresh payment addresses

See [Privacy Best Practices](/docs/concepts/privacy-best-practices) for more.

## Future Developments

MASP continues to evolve:

- 🔮 **Faster proofs**: Improved proving time
- 🌉 **More bridges**: ETH bridge integration
- 📱 **Mobile support**: Lighter proofs for phones
- ⚡ **Instant finality**: Faster confirmations

## FAQ

### Is MASP audited?

Yes, MASP is based on Zcash's Sapling protocol with extensive auditing and years of production use.

### Can government break MASP?

Current cryptography is considered secure. The math is sound. Implementation security is actively maintained.

### What if I lose my keys?

Like all crypto: If you lose your keys, you lose access. The privacy protection works both ways.

### Is MASP quantum-resistant?

Not currently. Quantum-resistant upgrades are being researched across the industry.

## Learn More

- [zk-SNARKs ELI5](/docs/concepts/zk-snarks-eli5) - Understand the proofs
- [Privacy Best Practices](/docs/concepts/privacy-best-practices) - Use privacy effectively
- [Shielded vs Transparent](/docs/getting-started/shielded-vs-transparent) - Practical differences
