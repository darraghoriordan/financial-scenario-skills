# Scenario model mapping

Adapt these concepts to the host application's typed tools and schema.

In standalone mode, emit the same conceptual shape as structured Markdown, YAML, or JSON. Include a schema version, currency, calculation date, and a list of unresolved choices. Never fabricate stable IDs; use local temporary identifiers and label them as such.

## Entities

- **Income:** annual or periodic money received, with owner and start/end timing.
- **Expense:** recurring or one-off cost, with amount, frequency, and start/end timing.
- **Account:** opening balance, currency, growth/yield/fee assumptions, tax wrapper, and access rules.
- **Asset:** value, purchase/sale timing, growth, income, expenses, country, and optionally integrated secured financing.
- **Unsecured debt:** balance, interest, payment, frequency, and timing for debt without linked collateral.
- **Cashflow rule:** explicit routing of available cash to an existing destination, with source, type, limits, priority, and timing.
- **Milestone:** a stable age, year, or model-derived event used by other entities.
- **Scenario settings:** horizon, people, currency, inflation basis, timestep, and presentation money value.

## Invariants

- Percentages use the schema's declared representation consistently.
- Amounts and frequencies describe the same period.
- Start precedes end and falls inside the scenario horizon.
- References point to existing stable IDs, not guessed names.
- Protected system milestones are not modified or removed.
- A new custom milestone is created before another entity references it.
- Asset sale is absent unless the user requested disposal.
- Financing is absent unless the user selected it.
- Contribution and cashflow routing uses a destination selected by the user.
- Partial first-year amounts are not manually prorated if the engine already prorates them.

## Safe tool sequence

For related edits, create dependencies first: milestone, then account or asset, then income or expense, then cashflow rule. Validate the complete change before persistence and use preview or confirmation when the host's authorization policy requires it. If a tool reports an unavailable ID or invalid unit, re-read the scenario rather than guessing a replacement.
