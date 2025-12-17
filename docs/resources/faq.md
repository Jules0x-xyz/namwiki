---
title: FAQ
description: Frequently asked questions about Namada
sidebar_position: 2
tags: [faq, questions, help, support]
keywords: [namada faq, common questions, help, troubleshooting]
---

# Frequently Asked Questions

Quick answers to the most common Namada questions.

## General Questions

### What is Namada?

Namada is a proof-of-stake Layer 1 blockchain focused on multi-asset privacy. It allows you to shield any asset from any connected blockchain, making your transactions private.

### What makes Namada different from other privacy chains?

Unlike Zcash (ZEC only) or Monero (XMR only), Namada's MASP allows **any asset** to share the same privacy pool. This means NAM, ATOM, OSMO, and other IBC tokens all contribute to the same anonymity set.

### Is Namada live on mainnet?

Yes! Namada mainnet launched in December 2023. Check the [official website](https://namada.net) for current status.

### Who created Namada?

Namada was developed by Heliax, a public goods laboratory. The project is now community-governed.

## Token Questions

### What is NAM used for?

NAM is used for:
- Staking and earning rewards
- Paying transaction fees
- Governance voting
- Shielded rewards distribution

### Where can I buy NAM?

See our [Where to Buy](/docs/resources/where-to-buy) page for current options.

### What's the total supply of NAM?

Check [CoinGecko](https://coingecko.com) or the official website for current tokenomics.

## Wallet Questions

### Which wallet should I use?

- **Namada Extension**: Best for most users, full feature support
- **Keplr**: Good for IBC, transparent only
- **CLI**: Best for power users and validators

See [Wallet Comparison](/docs/guides/wallets/wallet-comparison).

### I lost my seed phrase. Can I recover my wallet?

No. Without your seed phrase, there is no way to recover your wallet. This is why backing it up securely is critical.

### Is there a mobile wallet?

Not yet. Mobile support is in development.

## Privacy Questions

### Are my transactions really private?

Shielded transactions (`znam` addresses) are cryptographically private. The sender, receiver, and amount are all hidden using zero-knowledge proofs.

### Can the government see my transactions?

Shielded transactions are protected by mathematics, not policy. The cryptography is the same whether facing any observer.

### What's visible on block explorers?

For shielded transactions: Only that "a shielded transaction occurred." No details are visible.

For transparent transactions: Everything (sender, receiver, amount).

### Can I prove a transaction happened?

Yes. You can generate viewing keys or payment proofs to selectively reveal specific transactions.

## Staking Questions

### How much can I earn from staking?

APY varies based on network conditions, typically 5-15%. Check current rates on staking dashboards.

### How long is the unbonding period?

21 days. During this time, you don't earn rewards and can't access your tokens.

### Can I stake shielded NAM?

Shielded staking is a planned feature. Currently, staking requires transparent NAM.

### What is slashing?

Slashing is a penalty for validator misbehavior. If your validator is slashed, you may lose a portion of your staked tokens.

## Transaction Questions

### How long do transactions take?

- Block time: ~6 seconds
- Shielded proof generation: 1-5 seconds
- Total: Usually under 15 seconds

### How much do transactions cost?

- Transparent transfer: ~0.001 NAM
- Shielded transfer: ~0.01 NAM

See [Transaction Fees](/docs/concepts/transaction-fees).

### Why did my transaction fail?

Common reasons:
- Insufficient balance for amount + fee
- Network congestion
- Invalid address format
- Wallet not synced

## IBC Questions

### What is IBC?

Inter-Blockchain Communication - a protocol for transferring assets between Cosmos chains.

### Which chains can I transfer from/to?

Namada connects to the Cosmos ecosystem. Check current channels on block explorers.

### How long do IBC transfers take?

Usually 30 seconds to 2 minutes.

## Governance Questions

### How do I vote?

See [Vote on Proposals](/docs/guides/governance/vote-on-proposals).

### What if I don't vote?

Your validator's vote applies to your stake. You can override by voting yourself.

### Can I submit proposals?

Yes! Anyone can submit proposals. See [Create Proposal](/docs/guides/governance/create-proposal).

## Technical Questions

### Is Namada EVM compatible?

No. Namada is not EVM compatible. It's built on the Cosmos SDK with custom modules.

### Can I run a node?

Yes. See official documentation for node operation guides.

### Is there a testnet?

Yes. Testnet information is available on the official docs.

## Troubleshooting

### My balance isn't showing

1. Check you're on correct network (mainnet vs testnet)
2. Wait for wallet to sync
3. Refresh the page/app
4. Check shielded vs transparent balance

### Transaction is pending forever

1. Wait up to 60 seconds
2. Check block explorer
3. If dropped, try again with higher gas

### Wallet won't connect

1. Refresh the page
2. Check extension is enabled
3. Ensure correct network selected
4. Try disconnecting and reconnecting

### Can't shield assets

1. Ensure sufficient NAM for fees
2. Check you have tokens to shield
3. Try smaller amount first
4. Wait and retry

## Security Questions

### Is Namada audited?

Yes. Key components including MASP have been audited. See official docs for audit reports.

### What if there's a bug?

Report security issues through responsible disclosure. Check official channels for the security policy.

### Is the code open source?

Yes. Namada is fully open source on [GitHub](https://github.com/anoma/namada).

## More Help

Can't find your answer?

- 💬 [Discord](https://discord.gg/namada) - Community support
- 📝 [Forum](https://forum.namada.net) - Discussions
- 📚 [Official Docs](https://docs.namada.net) - Technical documentation
- 🐦 [Twitter](https://twitter.com/namada) - Updates

---

:::tip Didn't Find Your Question?
[Submit an issue](https://github.com/namwiki/namwiki/issues) or ask in Discord!
:::
