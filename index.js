import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const financeSkillNames = Object.freeze([
  "model-financial-scenario",
  "explain-financial-projection",
  "compare-financial-scenarios",
  "review-scenario-assumptions",
]);

const packageDirectory = dirname(fileURLToPath(import.meta.url));
const skillNameSet = new Set(financeSkillNames);

function requireSkillName(skillName) {
  if (!skillNameSet.has(skillName)) {
    throw new Error(`Unknown financial scenario skill: ${skillName}`);
  }
}

function parseSkillDocument(content, skillName) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error(`Invalid SKILL.md frontmatter for ${skillName}`);
  }

  const frontmatter = match[1];
  const body = match[2].trim();
  const name = frontmatter.match(/^name:\s*(.+)$/m)?.[1]?.trim();
  const description = frontmatter
    .match(/^description:\s*([\s\S]*?)$/m)?.[1]
    ?.trim();

  if (name !== skillName || !description || !body) {
    throw new Error(`Incomplete SKILL.md metadata for ${skillName}`);
  }

  return { name, description, body };
}

function readSkillDocument(skillName) {
  requireSkillName(skillName);
  const path = join(packageDirectory, "skills", skillName, "SKILL.md");
  return parseSkillDocument(readFileSync(path, "utf8"), skillName);
}

function readLinkedReferences(skillName, body) {
  const referencePattern = /\]\((references\/[a-z0-9-]+\.md)\)/g;
  const referencePaths = [
    ...new Set([...body.matchAll(referencePattern)].map((match) => match[1])),
  ];

  return referencePaths.map((referencePath) => ({
    path: referencePath,
    content: readFileSync(
      join(packageDirectory, "skills", skillName, referencePath),
      "utf8",
    ).trim(),
  }));
}

export function getFinanceSkillCatalog() {
  return financeSkillNames.map((skillName) => {
    const { name, description } = readSkillDocument(skillName);
    return { name, description };
  });
}

export function loadFinanceSkill(skillName) {
  const { body } = readSkillDocument(skillName);
  const references = readLinkedReferences(skillName, body);
  const referenceText = references.map(
    ({ path, content }) =>
      `\n\n---\n\nSupporting material from ${path}:\n\n${content}`,
  );

  return `${body}${referenceText.join("")}`;
}
