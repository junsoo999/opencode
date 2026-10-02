export * as ConfigHyperAccel from "./hyperaccel"

import { mapValues } from "remeda"

// Built-in HyperAccel provider, merged beneath every user/project config so any
// config file can override it. Edit the endpoint and model list here.
//
// Environment overrides:
//   HYPERACCEL_BASE_URL  OpenAI-compatible endpoint (must end with /v1)
//   HYPERACCEL_API_KEY   API key, if the endpoint requires one
//   HYPERACCEL_MODEL     model ID served by the endpoint
//   HYPERACCEL_CONTEXT   context window of that model, in tokens
//   HYPERACCEL_OUTPUT    max output tokens per response
export const source = "hyperaccel"

export const text = `{
  "model": "hyperaccel/{env:HYPERACCEL_MODEL}",
  "provider": {
    "hyperaccel": {
      "name": "HyperAccel",
      "npm": "@ai-sdk/openai-compatible",
      "options": {
        "baseURL": "{env:HYPERACCEL_BASE_URL}",
        "apiKey": "{env:HYPERACCEL_API_KEY}"
      },
      "models": {
        "{env:HYPERACCEL_MODEL}": {
          "name": "HyperAccel LPU ({env:HYPERACCEL_MODEL})",
          "tool_call": true,
          "limit": { "context": {env:HYPERACCEL_CONTEXT}, "output": {env:HYPERACCEL_OUTPUT} }
        }
      }
    }
  }
}`

const defaults = {
  HYPERACCEL_BASE_URL: "http://localhost:8000/v1",
  HYPERACCEL_API_KEY: "hyperaccel",
  HYPERACCEL_MODEL: "JunHowie/Qwen3-8B-GPTQ-Int4",
  HYPERACCEL_CONTEXT: "16384",
  HYPERACCEL_OUTPUT: "4096",
}

// Limits are substituted unquoted into the JSON above, so anything but a
// positive integer falls back to the default instead of breaking the config.
const numeric = new Set(["HYPERACCEL_CONTEXT", "HYPERACCEL_OUTPUT"])

export function env() {
  return mapValues(defaults, (value, key) => {
    const override = process.env[key]
    if (!override) return value
    if (numeric.has(key) && !/^[1-9]\d*$/.test(override)) return value
    return override
  })
}
