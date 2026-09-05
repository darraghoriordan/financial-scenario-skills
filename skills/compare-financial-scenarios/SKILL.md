---
name: compare-financial-scenarios
description: Compare two or more user-selected financial scenarios using their structured inputs and deterministic outputs. Use for neutral what-if comparisons, changed assumptions, timeline differences, and numerical trade-offs; not for choosing a winner or recommending a product or strategy.
---

# Compare Financial Scenarios

Compare what the models show without deciding what the user should do.

## Choose the capability mode

- **Connected mode:** Resolve exact scenario IDs and versions, then obtain normalized inputs and deterministic results from the scenario service.
- **Standalone mode:** Compare scenario specifications or projections supplied in the conversation. Calculate simple deltas only when units, dates, and money-value bases align. Do not manufacture missing projections.

Connected mode may offer cloning or branching so the user can define another what-if. Standalone mode may return a portable comparison table and a list of inputs needed for a fuller calculation.

## Select and normalize

Confirm the exact scenarios and versions. If a scenario name is ambiguous, list matches and ask the user to choose. In connected mode, open or calculate each through the host application's tools. In standalone mode, use only artifacts supplied in the current conversation. Do not reconstruct results from memory.

Before comparing values, align or explicitly disclose differences in:

- horizon and timestep;
- currency and exchange-rate basis;
- nominal versus inflation-adjusted money values;
- people, ownership, and tax residency;
- tax year and rule versions;
- stochastic seed or distribution summary.

Do not subtract incompatible values. If normalization is impossible, compare the assumptions qualitatively and keep the numerical series separate.

Read [references/comparison-frame.md](references/comparison-frame.md) when deciding which deltas to present.

## Isolate the changed assumptions

Start with an input diff. Separate user-intended changes from incidental differences such as names, versions, IDs, or calculation dates. Group related changes into events the user recognizes: job change, property purchase, retirement date, expense change, account contribution, or asset sale.

Then report the material output deltas at matching dates. Prefer a small set of measures relevant to the question rather than every available field.

## Remain neutral

- Do not rank, score, endorse, or identify a winning scenario.
- Do not call an option best, optimal, safer, prudent, conservative, suitable, or recommended.
- Do not infer user preferences from higher ending wealth or a later shortfall.
- Do not recommend a product, allocation, contribution, withdrawal, financing method, or strategy.

Use symmetric language: “Scenario A models X and produces Y; Scenario B models P and produces Q.” Let the user decide which trade-offs matter.

## Report the comparison

Lead with the one-sentence numerical distinction most responsive to the question. Then show:

1. material input differences;
2. matching output deltas and their dates;
3. the engine-defined shortfall or horizon result for each;
4. assumptions that limit comparability;
5. any user-selected alternative that remains unmodeled.

State that both are projections based on assumptions, not guarantees. When asked which is better, offer to compare another user-selected metric or assumption instead of choosing.
