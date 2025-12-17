---
title: zk-SNARKs ELI5
description: Understanding zero-knowledge proofs in simple terms
sidebar_position: 2
tags: [zk-snarks, cryptography, privacy, concepts]
keywords: [zk-snarks explained, zero knowledge proofs, cryptography basics, eli5]
---

# zk-SNARKs ELI5

Zero-knowledge proofs sound intimidating, but the core concept is simple. This guide explains zk-SNARKs like you're five (or at least like you're not a cryptographer).

## What is a Zero-Knowledge Proof?

A zero-knowledge proof lets you prove something is true **without revealing any other information**.

### The Ali Baba Cave

Classic example:

```
There's a circular cave with a locked door in the middle.
You claim to know the password.
I want proof without learning the password.

Solution:
1. I wait outside
2. You go in and pick a path (A or B)
3. I shout "come out path A!" or "come out path B!"
4. If you know the password, you can always comply
5. If you don't, you're stuck 50% of the time

Repeat 20 times: 
- Cheater probability: (1/2)^20 = 0.0001%
- I'm now convinced, but never saw the password
```

## ELI5: The Colorblind Friend

Imagine:

```
You have two balls: Red and Green
Your friend is colorblind - they look the same to him
You want to PROVE they're different colors
Without telling him WHICH is which

Solution:
1. He holds both balls behind his back
2. He may (or may not) switch them
3. He shows them to you
4. You say "switched" or "not switched"

If they were the same color:
  You'd be guessing (50% chance)
  
If they're different:
  You always know (100% correct)

After 20 rounds of you being right:
  He's convinced they're different
  But he STILL doesn't know which is red/green
```

**That's zero-knowledge!**

## The zk-SNARK Acronym

**zk-SNARK** stands for:

| Letter | Meaning | ELI5 |
|--------|---------|------|
| **z** | Zero | Reveals nothing |
| **k** | Knowledge | Beyond the claim |
| **S** | Succinct | Proof is tiny |
| **N** | Non-interactive | One message, no back-and-forth |
| **AR** | Argument | Mathematically sound |
| **K** | Knowledge | Prover really knows the secret |

## How Namada Uses zk-SNARKs

### The Privacy Problem

Without privacy:
```
Alice sends 100 NAM to Bob
Everyone sees: Alice → 100 NAM → Bob
```

### The zk-SNARK Solution

With privacy:
```
Alice creates a proof:
"I have valid funds AND I'm sending to a valid address"

The network verifies:
✅ Proof is valid
✅ No double-spending
✅ Amounts balance

But learns nothing about:
❌ Who is Alice
❌ Who is Bob  
❌ What's the amount
```

## Real-World Analogies

### Sudoku Proof

```
You solved a Sudoku puzzle.
You want to prove it without showing the solution.

zk-SNARK approach:
- You show the puzzle is valid (rules followed)
- Verifier checks your proof (tiny, fast)
- Verifier is convinced
- Verifier never sees your numbers
```

### Where's Waldo

```
You found Waldo in a crowded picture.
You want to prove it without revealing his location.

zk-SNARK approach:
- Cover the picture with a huge piece of paper
- Cut a tiny hole where Waldo is
- Show Waldo through the hole
- Verifier sees Waldo exists
- Verifier doesn't know WHERE in the picture
```

### Age Verification

```
You want to enter a bar (21+ only).
You don't want to show your full ID.

zk-SNARK approach:
- Prove: "I am over 21"
- Without revealing: Name, exact age, address, photo
- Bar is satisfied
- Your privacy is protected
```

## Why zk-SNARKs are Special

### Succinctness

Proof size is tiny regardless of computation:

```
Proving "I computed a billion calculations correctly"
Proof size: ~200 bytes
Verification time: ~10 milliseconds

vs. Traditional approach:
Re-run all billion calculations
Time: Hours
```

### Non-Interactive

No back-and-forth needed:

```
Traditional proof:
  Prover: "I know X"
  Verifier: "Prove step 1"
  Prover: "Here"
  Verifier: "Prove step 2"
  ... (many rounds)

zk-SNARK:
  Prover: "Here's the proof"
  Verifier: "Verified" ✅
  Done!
```

## The Math (Simplified)

Don't worry about the details, but here's the gist:

### Polynomial Magic

```
1. Convert your statement into a math puzzle
2. The puzzle involves polynomials (fancy equations)
3. Only someone with the secret can solve it
4. The solution is tiny and fast to verify
5. The solution reveals nothing about the secret
```

### Trusted Setup

zk-SNARKs need initial "random" values:

```
Setup ceremony:
- Many people contribute randomness
- Each person destroys their contribution
- If ANYONE was honest, the system is secure

Namada used a trusted setup with many participants
```

## zk-SNARKs in Practice

### Creating a Shielded Transaction

What happens when you send shielded NAM:

```
1. Your wallet gathers:
   - Your secret keys
   - Your shielded balance
   - Recipient's address
   - Amount to send

2. Wallet creates zk-SNARK proving:
   - You own the funds
   - You're not overspending
   - Recipient address is valid
   - Amounts balance correctly

3. Proof is broadcast (not the secrets!)

4. Network verifies proof

5. Transaction is accepted

6. Only you and recipient know the details
```

### Proof Generation Time

Creating proofs takes work:

| Device | Approximate Time |
|--------|-----------------|
| Modern computer | 1-5 seconds |
| Older computer | 5-15 seconds |
| Mobile phone | 10-30 seconds |

Verification is always fast (~10ms).

## Common Misconceptions

### "zk-SNARKs can be hacked"

The math is sound. Risks are in implementation, not theory.

### "Government can break them"

No known attacks. Would require breaking fundamental mathematics.

### "They're too slow for real use"

Modern implementations are practical. Namada transactions take seconds.

### "Only for crypto"

zk-SNARKs have many applications:
- Anonymous voting
- Private identity verification
- Confidential business logic
- Medical record privacy

## The Future

zk-SNARKs are evolving:

- **Faster proofs**: Hardware acceleration
- **Smaller proofs**: More efficient constructions
- **No trusted setup**: New variants (STARKs, Bulletproofs)
- **Universal setup**: One ceremony for everything

## Why This Matters for You

As a Namada user:

1. **Privacy is real** - Not just "trust us" promises
2. **Mathematically guaranteed** - Cryptography protects you
3. **Fast and practical** - Transactions in seconds
4. **Future-proof** - Based on well-studied mathematics

## Summary

```
zk-SNARKs in one sentence:
"I can prove I know something without telling you what I know."

For Namada:
"I can prove my transaction is valid without revealing its details."
```

## Learn More

- [MASP Explained](/docs/concepts/masp-explained) - How Namada uses zk-SNARKs
- [Privacy Best Practices](/docs/concepts/privacy-best-practices) - Use privacy effectively
- [Shielded vs Transparent](/docs/getting-started/shielded-vs-transparent) - Practical differences
