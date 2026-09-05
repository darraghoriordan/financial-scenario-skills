---
name: review-scenario-assumptions
description: Inspect a financial scenario for missing, stale, contradictory, unexplained, or high-impact assumptions and help the user choose what to update. Use for scenario checkups and data-quality reviews; not for prescribing replacement values, products, contribution levels, allocations, financing, or strategies.
---

# Review Scenario Assumptions

Review the scenario as a model-quality exercise. Find assumptions that deserve the user's attention without deciding the financial choices for them.

## Choose the capability mode

- **Connected mode:** Inspect the stored scenario plus any prior versions, calculation outputs, source metadata, and review dates the scenario service actually exposes. Name unavailable provenance or history rather than assuming it exists. Use engine-supported sensitivity runs only after the user selects the values.
- **Standalone mode:** Review a user-supplied scenario specification, spreadsheet, projection, or prose description. Return a structured gap analysis and an import-ready list of assumptions; do not claim completeness when source records are unavailable.

The standalone review is still useful for preparing a scenario. Connected mode adds traceability, automatic consistency checks, full recalculation, and durable version history.

## Establish the evidence

Inspect the latest scenario version, calculation date, source metadata, and deterministic result. Distinguish current-balance snapshots from future scenario assumptions. Do not treat projected income or expenses as actual transaction history.

Read [references/review-checklist.md](references/review-checklist.md) and use only the sections relevant to the scenario.

## Identify review candidates

Flag an assumption when it is:

- required but missing;
- internally contradictory or outside the model's valid range;
- stale according to its recorded review date or source lifecycle;
- an unexplained default with material impact;
- inconsistent with a linked entity, date, owner, currency, or milestone;
- unusually influential on the projection;
- unsupported by the model's available inputs;
- precise despite substantial uncertainty.

Do not flag a value merely because it differs from an industry average. External benchmarks can provide factual context when current and well sourced, but they do not determine what is appropriate for the user.

## Prioritize by model impact

Lead with assumptions that can reverse the engine-defined horizon result, move a material event, or materially change balances, tax, debt, or accessible cash. State why each item matters and where it appears in the scenario.

If the engine supports sensitivity runs, vary one assumption at a time across values selected by the user. Do not invent a recommended range. Keep the baseline unchanged and label every run as exploratory.

## Ask for decisions, not confirmation bias

Ask focused questions using the user's records where possible:

- “The salary assumption was last reviewed on DATE. What annual amount should the scenario use now?”
- “This purchase has no financing method. Should this what-if use cash or financing?”
- “The expense ends at the retirement milestone. Is that timing intentional?”

Do not ask leading questions or preselect a financial product, allocation, contribution amount, withdrawal order, or financing method.

## Propose safely

Return findings before changing anything. For each proposed update show the old value, new user-supplied value, timing, source, and affected entities. Use the host application's normal validation and deterministic recalculation flow, plus preview or confirmation when its authorization policy requires it. Never persist a review-generated guess.

Conclude with unresolved assumptions and the date of the review. Describe the resulting model as updated, not validated as suitable or guaranteed.
