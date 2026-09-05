---
name: explain-financial-projection
description: Explain a deterministic financial scenario's assumptions, calculations, timeline, and numerical results in plain language. Use when a user asks what a projection shows, why a value changed, how a modeled feature works, or what caused a shortfall; not for recommending a product or action.
---

# Explain Financial Projection

Answer from structured inputs and calculated outputs.

## Choose the capability mode

- **Connected mode:** Read the active scenario and the versioned assumptions, projection periods, diagnostics, and source metadata the scenario service actually exposes. Its deterministic engine is the source of truth for numbers. State when a requested breakdown is unavailable.
- **Standalone mode:** Explain a projection, table, chart, or scenario specification supplied by the user. Restrict claims to the provided data and transparent arithmetic. Ask for missing rows or assumptions instead of recreating a long-horizon engine in prose.

In either mode, distinguish reported facts from inferences. Never imply access to balances, tax details, or calculations that were not supplied.

## Ground the explanation

Inspect the relevant scenario version or supplied artifact, result periods, assumptions, and calculation diagnostics. Identify the exact time range and money-value basis. If the required result is unavailable, say what is missing instead of estimating it.

For a causal explanation, trace the value through opening balance, inflows, outflows, growth or interest, tax and fees, transfers, and closing balance. Distinguish direct causes from plausible but unverified interpretations.

Read [references/explanation-patterns.md](references/explanation-patterns.md) for common projection questions.

## Explain at the user's altitude

Lead with the answer, then the few inputs or events that materially determine it. Use the user's currency and ordinary units. Translate minor units and decimal rates before displaying them.

Always distinguish:

- nominal future values from inflation-adjusted or present values;
- balances from flows;
- gross amounts from tax, fees, and net amounts;
- annual assumptions from partial-year results;
- accessible money from restricted retirement balances;
- net worth from liquid cash and from the engine's insolvency definition.

State when an amount is a model default, a user input, a statutory assumption, or a derived value.

## Stay factual

Do not recommend, rank, score, endorse, or tell the user what to buy, sell, hold, contribute, withdraw, or prioritize. Do not describe a scenario as best, optimal, suitable, safe, prudent, or guaranteed.

If asked for a recommendation, briefly state that you can explain the model or compare user-selected alternatives but cannot choose a financial product or strategy. Then answer any factual part of the request.

Never use model memory as the authority for current tax, pension, or regulatory facts. Retrieve a current primary source when such a fact is necessary, cite it, and separate it from what the scenario actually models.

## Explain uncertainty honestly

Name the assumptions that dominate the answer and any mechanics the model omits. For stochastic results, explain the seed, sample count, range or percentiles, and failure frequency; do not present one simulated path as a forecast.

End material result explanations with a compact reminder that the projection depends on the scenario assumptions and is not a guarantee.
