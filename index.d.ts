export const financeSkillNames: readonly [
  "model-financial-scenario",
  "explain-financial-projection",
  "compare-financial-scenarios",
  "review-scenario-assumptions",
];

export type FinanceSkillName = (typeof financeSkillNames)[number];

export interface FinanceSkillCatalogEntry {
  name: FinanceSkillName;
  description: string;
}

export function getFinanceSkillCatalog(): FinanceSkillCatalogEntry[];

export function loadFinanceSkill(skillName: FinanceSkillName): string;
