# Financial Scenario Skills

Four reusable agent skills for numerical personal-finance scenario products. They turn a monolithic finance chatbot prompt into focused capabilities that can be loaded only when relevant:

- [`model-financial-scenario`](./skills/model-financial-scenario/) turns explicit user choices into validated, editable what-if proposals.
- [`explain-financial-projection`](./skills/explain-financial-projection/) explains deterministic results and calculation mechanics.
- [`compare-financial-scenarios`](./skills/compare-financial-scenarios/) compares user-selected scenarios without choosing a winner.
- [`review-scenario-assumptions`](./skills/review-scenario-assumptions/) finds missing, stale, contradictory, or high-impact assumptions.

Each skill has two capability levels:

- **Standalone:** useful in an ordinary chatbot with user-supplied data, producing structured scenario specifications, assumption reviews, transparent explanations, and neutral comparisons.
- **Connected:** uses a compatible scenario service for stored data, typed mutations, full deterministic projections, version history, validation, and persistence.

Plan in Decades provides the connected implementation used to develop these skills. Its detailed finance engine and data model remain the source of truth for calculations; the public skills provide the conversational workflow around those capabilities.

## Architecture

```text
User request
    -> relevant public skill
        -> standalone: supplied data + transparent limited arithmetic
        -> connected: typed scenario tools
            -> validation + deterministic finance engine
            -> versioned database + approval/persistence flow
```

Skills can replace large system-prompt sections and tool-routing instructions. They do not replace authorization, persistence, validation, or the deterministic calculation APIs.

## Safety boundary

These skills support factual scenario modelling. They do not recommend financial products or strategies, select contributions or allocations, or replace professional financial, tax, or legal advice.

## Installation

Copy an individual folder from `skills/` into the skills directory supported by your agent environment, or publish the repository through your preferred skill catalogue.

## Licence

Copyright 2026 Darragh ORiordan and Plan in Decades. Licensed under the [Apache License 2.0](./LICENSE); see [NOTICE](./NOTICE).
