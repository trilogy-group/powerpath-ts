/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { lessonsGetAttempts } from "../../funcs/lessonsGetAttempts.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAttemptsRequest$inboundSchema,
};

export const tool$lessonsGetAttempts: ToolDefinition<typeof args> = {
  name: "lessons-get-attempts",
  description: `Get all attempts

Returns a list of all attempts for a student in a lesson

For Assessment Bank lessons, each attempt may represent a different sub test of the bank. Review results with care.

A 'Lesson' in this context is a ComponentResource object which has a Resource object associated with it.
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await lessonsGetAttempts(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
