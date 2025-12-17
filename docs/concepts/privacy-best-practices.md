---
title: Privacy Best Practices
description: Maximize your privacy when using Namada
sidebar_position: 5
tags: [privacy, security, best-practices, opsec]
keywords: [privacy tips, operational security, opsec, namada privacy]
---

# Privacy Best Practices

Having privacy technology is great, but using it effectively requires good practices. This guide helps you maximize your privacy on Namada.

## The Privacy Mindset

Privacy is a **habit**, not a feature:
- Technology provides tools
- You must use them correctly
- Small mistakes compound
- Consistent practice matters

## Key Principles

### 1. Minimize Exposure

Less public activity = more privacy

```
More Private:
  Shield → Stay shielded → Shield longer

Less Private:
  Shield → Unshield → Shield → Unshield → ...
```

### 2. Break Links

Don't create connections between addresses:

```
Bad:
  Exchange → tnam1 → znam1 → tnam1 (same address!)
  
Good:
  Exchange → tnam1 → znam1 → tnam2 (new address)
```

### 3. Blend In

Don't stand out from other users:

```
Stands out:
  Shield 1,234.56789 NAM

Blends in:
  Shield 1,000 NAM (common amount)
```

### 4. Time Your Actions

Don't rush between shield/unshield:

```
Obvious:
  10:00 - Shield 1000 NAM
  10:01 - Unshield 1000 NAM
  
Private:
  Mon - Shield 1000 NAM
  Fri - Unshield 500 NAM
```

## Practical Tips

### Shielding

| Do | Don't |
|-----|-------|
| Shield as much as possible | Keep everything transparent |
| Shield early in your journey | Wait until you need privacy |
| Shield from different sources | Always shield from same exchange |
| Use round amounts | Use exact amounts from exchanges |

### While Shielded

| Do | Don't |
|-----|-------|
| Stay shielded long-term | Unshield frequently |
| Generate new payment addresses | Reuse same address publicly |
| Accept payments to unique addresses | Share one address everywhere |
| Wait between operations | Rapid shield/unshield cycles |

### Unshielding

| Do | Don't |
|-----|-------|
| Unshield to fresh addresses | Reuse old transparent addresses |
| Unshield round amounts | Unshield exact amounts you shielded |
| Wait after shielding | Immediately unshield what you shielded |
| Unshield only what you need | Unshield everything |

## Amount Selection

### Why Amounts Matter

Unique amounts create fingerprints:

```
Alice shields 1,234.56 NAM (unique)
Later, 1,234.56 NAM is unshielded
Probably Alice!
```

### Common Amount Strategy

Use round numbers:
- 100, 500, 1000, 5000, 10000 NAM
- These are used by many others
- Harder to correlate

### Splitting

If you have 1,234 NAM:

```
Instead of: Shield 1,234 NAM

Try: Shield 1,000 NAM
     Shield 200 NAM
     Keep 34 NAM transparent (for fees)
```

## Timing Considerations

### Avoid Timing Correlation

If you:
1. Shield 1000 NAM at 10:00
2. Unshield 1000 NAM at 10:05

An observer sees:
- Same amount
- Close timing
- Likely connected

### Better Approach

- Wait days or weeks between shield/unshield
- Don't follow predictable patterns
- Mix up your timing

### Time Zone Privacy

Your activity timing can reveal your location:
- Active during 9-5 EST? Probably East Coast US
- Consider varying your transaction times

## Address Management

### Generating Fresh Addresses

For receiving shielded:

```bash
# Generate new payment address
namadaw gen-payment-addr --alias payment-1 --key my-wallet
namadaw gen-payment-addr --alias payment-2 --key my-wallet
```

### Address Usage Strategy

| Use Case | Strategy |
|----------|----------|
| Exchange withdrawal | Fresh transparent each time |
| Receiving payment | Fresh shielded for each sender |
| Public donation | Single published shielded |
| Salary | Fresh shielded per period |

### Never Reuse Transparently

Especially don't:
- Use same `tnam` for multiple exchanges
- Return unshielded NAM to original address
- Post same address publicly multiple times

## Operational Security (OPSEC)

### Device Security

- Use secure, updated devices
- Consider dedicated device for crypto
- Use VPN if concerned about IP
- Be careful on public WiFi

### Account Security

- Unique email for crypto accounts
- Strong, unique passwords
- Hardware 2FA when possible
- Consider privacy-focused email

### Social Security

- Don't reveal holdings publicly
- Be vague about amounts
- Don't flex your wallet
- Assume everything is monitored

## Common Mistakes

### Mistake 1: The Round Trip

```
❌ Shield 1000 NAM → Immediately unshield 1000 NAM
✅ Shield 1000 NAM → Wait weeks → Unshield 500 NAM
```

### Mistake 2: The Unique Amount

```
❌ Shield 7,891.23 NAM (your exact exchange withdrawal)
✅ Round down, shield common amounts
```

### Mistake 3: Address Reuse

```
❌ Unshield to your original exchange deposit address
✅ Unshield to fresh address, then send to exchange
```

### Mistake 4: Timing Tells

```
❌ Shield after every exchange withdrawal within minutes
✅ Accumulate, then shield larger amounts less frequently
```

### Mistake 5: Single Source

```
❌ All shields from one exchange → One unshield to different exchange
✅ Mix sources and destinations
```

## Advanced Practices

### Using Multiple Wallets

Consider separating:
- Exchange interaction wallet
- Shielded savings wallet
- Daily spending wallet
- Public identity wallet

### Transaction Splitting

Large amount? Split it up:
```
Instead of: Shield 10,000 NAM once

Try: Shield 2,000 NAM × 5 times over days
```

### Payment Address Rotation

For regular payments:
```
Month 1: Payment address A
Month 2: Payment address B
Month 3: Payment address C
```

All go to same shielded pool, but links are harder to establish.

## Privacy vs Convenience

There's always a tradeoff:

| More Private | More Convenient |
|--------------|-----------------|
| Multiple wallets | Single wallet |
| Fresh addresses | Address reuse |
| Manual operations | Auto-scripts |
| Longer waiting | Quick transactions |

Find your balance. Perfect privacy is impractical; good privacy is achievable.

## When Privacy Matters Most

Prioritize privacy for:
- 💰 Large amounts
- 🔒 Sensitive transactions
- 👤 Identity-linked activity
- 💼 Business operations

Less critical for:
- Small gas fee operations
- Public donations (intentionally public)
- Test transactions

## FAQ

### Is perfect privacy possible?

Very difficult. Aim for "good enough" - significantly harder to trace.

### Isn't this paranoid?

It's about having options. Privacy is easier to maintain than regain.

### What if I mess up?

One mistake isn't fatal. Multiple mistakes compound. Learn and improve.

### Should I use a VPN?

For IP privacy, yes. But a VPN alone doesn't make blockchain private.

## Summary Checklist

Before transacting, ask:
- [ ] Am I using a fresh address?
- [ ] Is my amount common/round?
- [ ] Have I waited since last operation?
- [ ] Is this necessary to do transparently?
- [ ] What links am I creating?

## Learn More

- [MASP Explained](/docs/concepts/masp-explained)
- [Shielded vs Transparent](/docs/getting-started/shielded-vs-transparent)
- [Shield Assets](/docs/guides/transactions/shield-assets)
