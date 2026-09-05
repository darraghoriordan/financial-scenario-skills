---
name: model-financial-scenario
description: Turn a user's explicit financial what-if into a structured, editable scenario proposal using available scenario tools. Use for adding or changing incomes, expenses, accounts, assets, debts, milestones, dates, and cashflow rules; not for choosing products, allocations, contribution levels, financing methods, or strategies for the user.
---

# Model Financial Scenario

Translate the user's stated choices into a numerical what-if. The user chooses the action; the skill structures it for calculation.

## Choose the capability mode

Use the strongest mode actually available:

- **Connected mode:** When a scenario service exposes typed read, update, validation, projection, versioning, and persistence tools, use those tools. Treat its deterministic engine and stored scenario as authoritative.
- **Standalone mode:** When those tools are absent, build a portable scenario specification from user-supplied data. Perform only transparent, hand-checkable arithmetic and clearly state that tax, pension, asset, debt, and cashflow interactions require a capable scenario engine.

Do not pretend standalone mode has product data or full-fidelity calculations. Offer the structured specification as something the user can inspect, edit, save, or import into a compatible service.

## Preserve the advice boundary

- Do not recommend, endorse, rank, or select a financial product, product class, financing method, contribution level, allocation, drawdown order, savings target, or strategy.
- Model exact choices the user supplies. If a required choice in those categories is missing, ask one focused question.
- You may fill neutral bookkeeping details such as a clear name or date interpretation. Label any guessed numerical value as an editable modelling assumption, never as suitable for the user.
- Do not mention providers unless the user supplied the name for record-keeping.

## Read before writing

Inspect the active scenario and available entity IDs. Resolve whether the request changes an existing item, adds a new item, or creates a separate scenario branch. Do not replace an existing item merely because its name resembles the request.

In connected mode, use the host application's typed scenario tools. Never construct an unvalidated free-form patch or calculate the projection yourself.

Read [references/scenario-model.md](references/scenario-model.md) when mapping the request to entities, dates, and tools.

## Build an atomic proposal

1. Restate the user-directed change in one sentence.
2. Resolve units: currency, cents or decimal amount, annual versus periodic value, percentage representation, and date precision.
3. Resolve timing from explicit age, year, month, or an existing milestone.
4. Create a missing named milestone before attaching other entities to it.
5. Validate cross-references such as account, income, asset, and milestone IDs.
6. Apply related changes together when partial application would misrepresent the request.
7. In connected mode, run the deterministic engine and surface the resulting input diff and material output changes. In standalone mode, return the validated specification and identify calculations that were not performed.

Do not invent a sale event for an asset, financing for a purchase, or a destination account for cash. Secured financing belongs with its asset when the host model uses integrated asset financing; unsecured debt tools are not a fallback for mortgages or vehicle finance.

## Handle ambiguity proportionally

Ask only when the answer changes the financial choice or produces materially different results. If the user says “in three years,” use the scenario's current temporal convention rather than inventing a named milestone. If a phrase has a safe, reversible interpretation, proceed and state it.

For multiple plausible financial choices, present neutral options without selecting one. Continue after the user chooses.

## Confirm the result

After a successful proposal, summarize:

- what changed;
- which assumptions were inferred;
- when the change starts and ends;
- which scenario version was recalculated, when connected;
- the most material numerical changes reported by the engine, or the limits of standalone output.

Describe outcomes as projections under assumptions, not forecasts or guarantees.
