import assert from "node:assert/strict";
import test from "node:test";
import { renderPrompts } from "../src/lib/mining/ai-explain.ts";
import {
  AI_EXPLAIN_DEFAULT_PROMPT,
  AI_EXPLAIN_DEFAULT_SYSTEM_PROMPT,
} from "../src/lib/mining/ai-explain-prompts.ts";
import type { Settings } from "../src/lib/settings";

const settings = (over: Partial<Settings> = {}) =>
  ({
    aiExplainPrompt: AI_EXPLAIN_DEFAULT_PROMPT,
    aiExplainSystemPrompt: AI_EXPLAIN_DEFAULT_SYSTEM_PROMPT,
    aiExplainAnswerLanguage: "Portuguese",
    ...over,
  }) as Settings;

const input = { target: "echo de menos", sentence: "Te echo de menos cada día." };

test("the default system prompt is the same for every word, so providers can cache it", () => {
  const a = renderPrompts(settings(), input);
  const b = renderPrompts(settings(), { target: "cold", sentence: "She gave me a cold look." });
  assert.equal(a.system, AI_EXPLAIN_DEFAULT_SYSTEM_PROMPT);
  assert.equal(a.system, b.system);
  assert.ok(!AI_EXPLAIN_DEFAULT_SYSTEM_PROMPT.includes("{{"));
});

test("{{answerLanguage}} is the answer language chosen in Settings", () => {
  assert.equal(
    renderPrompts(settings(), input).user,
    "Sentence: Te echo de menos cada día.\n\nTarget: echo de menos\n\nAnswer in: Portuguese",
  );
  assert.match(
    renderPrompts(settings({ aiExplainAnswerLanguage: "" }), input).user,
    /\nAnswer in: English$/,
  );
});
