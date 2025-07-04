/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { lessonPlansUpdateStudentResponse } from "../../funcs/lessonPlansUpdateStudentResponse.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateStudentItemResponseRequest$inboundSchema.optional(),
};

export const tool$lessonPlansUpdateStudentResponse: ToolDefinition<
  typeof args
> = {
  name: "lesson-plans-update-student-response",
  description: `Update student item response


Update the student item response for a student in a course.

---

The item may be a **component** or **componentResource**.

You should provide either the **componentId** or the **componentResourceId**.

If you provide the **componentId**, the data in the response payload should be in relation to the student's response to the entire component.

If you provide the **componentResourceId**, the data in the response payload should be in relation to the student's response to the specific resource.
    `,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await lessonPlansUpdateStudentResponse(
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
