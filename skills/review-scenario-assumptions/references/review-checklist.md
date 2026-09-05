# Scenario assumption review checklist

## Scenario frame

- People, birth years, ownership, country, tax residency, currency
- Start year/month, end year, timestep, and life-horizon milestone
- Nominal versus present-value display and inflation basis
- Calculation version, generated date, and stochastic seed if used

## Current position

- Account and asset balances have an as-of date
- Debt balances, interest rates, payments, and secured links reconcile
- No duplicate asset, debt, or account entered through two models
- Restricted and accessible balances are distinguished

## Future flows and events

- Income and expenses have amount, frequency, owner, start, and end
- Annual versus periodic values are not confused
- Milestone references exist and dates fall inside the horizon
- Purchases do not imply sales; purchases do not imply financing
- Asset income and expenses are not duplicated as standalone flows
- Partial first year is handled once by the engine

## Growth, inflation, tax, and fees

- Each material default has a rationale and review date
- Nominal growth and inflation are not mixed with real values
- Fees and yield are separate from capital growth where the engine supports them
- Tax jurisdiction and rule year are recorded
- Current tax, pension, and regulatory facts are verified from primary sources

## Cash routing and retirement accounts

- Every cashflow rule has an active source/destination and deterministic priority
- Contribution amounts, rates, account choice, and order came from the user
- Contribution caps and access rules use the correct period and jurisdiction
- Scenario retirement timing is distinct from legal account access and calculator drawdown assumptions

## Results and limitations

- The engine-defined shortfall has a date and unmet amount
- Net worth, liquid cash, and accessible retirement balances are not conflated
- High-impact assumptions are visible beside key results
- Known omissions and unsupported individual circumstances are stated
