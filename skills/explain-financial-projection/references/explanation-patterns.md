# Projection explanation patterns

## “Why did this balance change?”

Reconcile opening balance + contributions/transfers + growth/yield − withdrawals − tax − fees = closing balance. Name only components present in the structured result.

## “Why does the scenario run short?”

Use the engine's failure definition. Identify the first failing period, unmet cashflow, available eligible balances, and events immediately preceding it. Do not substitute negative net worth for cashflow insolvency unless the engine defines it that way.

## “Can I afford this?”

Reframe factually: describe what the selected scenario does under its assumptions, whether and when it encounters an engine-defined shortfall, and the user-entered alternatives that can be modeled. Do not declare affordability or suitability.

## “Why is year one unusual?”

Check the start month. Explain engine proration and whether annual tax or contribution caps remain annual. Do not prorate values a second time in the explanation.

## “Why is the future value so large?”

Identify the nominal/real basis, compounding period, growth or inflation rates, recurring flows, and horizon. Show the corresponding inflation-adjusted value when the result provides it.

## “When does a milestone happen?”

State whether it is fixed by age/year or derived from model output. For derived milestones, name the threshold and the first period in which the engine reports it; do not call the threshold safe or sufficient.

## “What tax was applied?”

Use the calculation's tax-year, jurisdiction, owner, taxable-income buckets, and result breakdown. Separate liability, withholding, and settlement. State simplifications and cite current primary sources only when discussing rules beyond the recorded model.
