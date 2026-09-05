# Plan in Decades connected adapter

This document describes how the public skills map to the richer Plan in Decades product. It intentionally documents capability boundaries rather than private implementation details.

## Keep as product tools

The following capabilities should remain authenticated application tools or APIs:

- list, resolve, open, clone, and version scenarios;
- read current scenario inputs and deterministic projection results;
- add, modify, and remove accounts, assets, incomes, expenses, loans, milestones, settings, and cashflow rules;
- validate IDs, ownership, units, dates, ranges, and domain invariants;
- run the full tax, pension, inflation, asset, loan, and cash-distribution engine;
- preview diffs where supported, enforce the product's authorization policy, persist versions, and retain audit history.

Moving these into prompt-only skills would weaken correctness, security, and the product differentiation.

## Move from the system prompt into skills

The skills can own:

- intent routing between modelling, explanation, comparison, and assumption review;
- entity-selection guidance and safe tool sequencing;
- clarification policy and the distinction between harmless bookkeeping defaults and user financial choices;
- advice boundaries and neutral output language;
- partial-year explanation rules;
- milestone-reference behavior;
- result explanation and comparison frames;
- fallback behavior when connected tools are unavailable.

Keep only global identity, non-overridable safety rules, active scenario context, and compact capability descriptions in the runtime system prompt.

## Suggested tool mapping

`model-financial-scenario` can orchestrate scenario-library tools plus typed updates for scenario settings, incomes, expenses, accounts, assets, unsecured debts, milestones, and cashflow rules.

`explain-financial-projection` needs read-only access to inputs, projection periods, tax and cashflow breakdowns, assumptions, and calculation diagnostics.

`compare-financial-scenarios` needs read-only access to two or more exact scenario versions and a server-side normalized comparison result. Cloning is optional and should occur only on an explicit user request.

`review-scenario-assumptions` needs read access to assumption provenance and review dates. Any proposed mutation must flow through the same authorization, validation, and recalculation path as direct modelling.

## Migration approach

1. Add skill loading while retaining the existing prompt behavior.
2. Evaluate tool selection, clarification rate, mutation accuracy, advice-boundary adherence, latency, and token use.
3. Remove only the system-prompt sections covered by a loaded skill.
4. Keep tool schemas and server validation unchanged during the first migration.
5. Add read-only comparison and assumption-provenance tools where the skills expose gaps.
6. Retire duplicated prompt text after deterministic regression and live evaluation coverage passes.
