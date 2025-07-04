/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { PowerPathCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$lessonPlansGetStudentCourseProgress } from "./tools/lessonPlansGetStudentCourseProgress.js";
import { tool$lessonPlansGetSyllabus } from "./tools/lessonPlansGetSyllabus.js";
import { tool$lessonPlansUpdateStudentResponse } from "./tools/lessonPlansUpdateStudentResponse.js";
import { tool$lessonsCreateAttempt } from "./tools/lessonsCreateAttempt.js";
import { tool$lessonsFinalizeResponse } from "./tools/lessonsFinalizeResponse.js";
import { tool$lessonsGetAttempts } from "./tools/lessonsGetAttempts.js";
import { tool$lessonsGetNextQuestion } from "./tools/lessonsGetNextQuestion.js";
import { tool$lessonsGetProgress } from "./tools/lessonsGetProgress.js";
import { tool$lessonsResetAttempt } from "./tools/lessonsResetAttempt.js";
import { tool$lessonsUpdateStudentResponse } from "./tools/lessonsUpdateStudentResponse.js";
import { tool$powerPathCourseMasteryCreateExternalPlacementTest } from "./tools/powerPathCourseMasteryCreateExternalPlacementTest.js";
import { tool$powerPathCourseMasteryCreateExternalTestOut } from "./tools/powerPathCourseMasteryCreateExternalTestOut.js";
import { tool$powerPathCourseMasteryImportExternalTestAssignmentResults } from "./tools/powerPathCourseMasteryImportExternalTestAssignmentResults.js";
import { tool$powerPathCourseMasteryMakeExternalTestAssignment } from "./tools/powerPathCourseMasteryMakeExternalTestAssignment.js";
import { tool$powerPathCourseMasteryTestOut } from "./tools/powerPathCourseMasteryTestOut.js";
import { tool$powerPathLessonPlansAttachComponent } from "./tools/powerPathLessonPlansAttachComponent.js";
import { tool$powerPathLessonPlansAttachResource } from "./tools/powerPathLessonPlansAttachResource.js";
import { tool$powerPathLessonPlansCreateLessonPlan } from "./tools/powerPathLessonPlansCreateLessonPlan.js";
import { tool$powerPathLessonPlansDeleteLessonPlan } from "./tools/powerPathLessonPlansDeleteLessonPlan.js";
import { tool$powerPathLessonPlansDeleteLessonPlanItem } from "./tools/powerPathLessonPlansDeleteLessonPlanItem.js";
import { tool$powerPathLessonPlansGetTree } from "./tools/powerPathLessonPlansGetTree.js";
import { tool$powerPathLessonPlansUpdateLessonPlanItem } from "./tools/powerPathLessonPlansUpdateLessonPlanItem.js";
import { tool$powerPathPlacementGetAllPlacementTests } from "./tools/powerPathPlacementGetAllPlacementTests.js";
import { tool$powerPathPlacementGetCurrentLevel } from "./tools/powerPathPlacementGetCurrentLevel.js";
import { tool$powerPathPlacementGetNextPlacementTest } from "./tools/powerPathPlacementGetNextPlacementTest.js";
import { tool$powerPathPlacementGetSubjectProgress } from "./tools/powerPathPlacementGetSubjectProgress.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  security?: SDKOptions["security"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "PowerPath",
    version: "0.3.1",
  });

  const client = new PowerPathCore({
    security: deps.security,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$powerPathPlacementGetAllPlacementTests);
  tool(tool$powerPathPlacementGetCurrentLevel);
  tool(tool$powerPathPlacementGetNextPlacementTest);
  tool(tool$powerPathPlacementGetSubjectProgress);
  tool(tool$powerPathCourseMasteryCreateExternalPlacementTest);
  tool(tool$powerPathCourseMasteryCreateExternalTestOut);
  tool(tool$powerPathCourseMasteryImportExternalTestAssignmentResults);
  tool(tool$powerPathCourseMasteryMakeExternalTestAssignment);
  tool(tool$powerPathCourseMasteryTestOut);
  tool(tool$powerPathLessonPlansCreateLessonPlan);
  tool(tool$powerPathLessonPlansGetTree);
  tool(tool$powerPathLessonPlansDeleteLessonPlan);
  tool(tool$powerPathLessonPlansAttachComponent);
  tool(tool$powerPathLessonPlansAttachResource);
  tool(tool$powerPathLessonPlansUpdateLessonPlanItem);
  tool(tool$powerPathLessonPlansDeleteLessonPlanItem);
  tool(tool$lessonPlansGetStudentCourseProgress);
  tool(tool$lessonPlansUpdateStudentResponse);
  tool(tool$lessonPlansGetSyllabus);
  tool(tool$lessonsCreateAttempt);
  tool(tool$lessonsFinalizeResponse);
  tool(tool$lessonsGetProgress);
  tool(tool$lessonsGetAttempts);
  tool(tool$lessonsGetNextQuestion);
  tool(tool$lessonsResetAttempt);
  tool(tool$lessonsUpdateStudentResponse);

  return server;
}
