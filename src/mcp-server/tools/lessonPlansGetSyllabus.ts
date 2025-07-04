/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { lessonPlansGetSyllabus } from "../../funcs/lessonPlansGetSyllabus.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetCourseSyllabusRequest$inboundSchema,
};

export const tool$lessonPlansGetSyllabus: ToolDefinition<typeof args> = {
  name: "lesson-plans-get-syllabus",
  description: `Get course syllabus

Get course syllabus`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await lessonPlansGetSyllabus(
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
