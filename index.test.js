import assert from "node:assert/strict";
import test from "node:test";

import {
  financeSkillNames,
  getFinanceSkillCatalog,
  loadFinanceSkill,
} from "./index.js";

test("catalog exposes every supported skill", () => {
  const catalog = getFinanceSkillCatalog();

  assert.deepEqual(
    catalog.map(({ name }) => name),
    financeSkillNames,
  );
  assert.ok(catalog.every(({ description }) => description.length > 40));
});

test("loaded prompts exclude frontmatter and include linked references", () => {
  const prompt = loadFinanceSkill("model-financial-scenario");

  assert.match(prompt, /^# Model Financial Scenario/);
  assert.doesNotMatch(prompt, /^---/);
  assert.match(
    prompt,
    /Supporting material from references\/scenario-model\.md/,
  );
  assert.match(prompt, /# Scenario model mapping/);
});

test("unknown skill names fail closed", () => {
  assert.throws(
    () => loadFinanceSkill("not-a-skill"),
    /Unknown financial scenario skill/,
  );
});
