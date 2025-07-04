/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The result of processing the student's response
 */
export type ResponseResult = {
  /**
   * The score for this specific response (0 or 1)
   */
  score: number;
  /**
   * Optional feedback for the student's response
   */
  feedback?: any | undefined;
};

/**
 * Represents the result of updating the student's response to the question in the PowerPath100 lesson (ComponentResource)
 */
export type PowerPath100UpdateStudentQuestionResponseResult = {
  lessonType?: "powerpath-100" | undefined;
  /**
   * The updated PowerPath score of the student in this lesson
   */
  powerpathScore: number;
  /**
   * The result of processing the student's response
   */
  responseResult: ResponseResult;
  /**
   * The assessment result object for the question (for debugging)
   */
  questionResult?: any | undefined;
  /**
   * The assessment result object for the test (for debugging)
   */
  testResult?: any | undefined;
  /**
   * The accuracy of the student's attempted questions
   */
  accuracy: number;
  /**
   * The number of correct questions the student has answered in the lesson
   */
  correctQuestions: number;
  /**
   * The total number of questions in the lesson
   */
  totalQuestions: number;
  /**
   * The XP the student has earned in the lesson
   */
  xp: number | null;
  /**
   * The multiplier for the student's XP
   */
  multiplier: number | null;
};

/** @internal */
export const ResponseResult$inboundSchema: z.ZodType<
  ResponseResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  score: z.number(),
  feedback: z.any().optional(),
});

/** @internal */
export type ResponseResult$Outbound = {
  score: number;
  feedback?: any | undefined;
};

/** @internal */
export const ResponseResult$outboundSchema: z.ZodType<
  ResponseResult$Outbound,
  z.ZodTypeDef,
  ResponseResult
> = z.object({
  score: z.number(),
  feedback: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseResult$ {
  /** @deprecated use `ResponseResult$inboundSchema` instead. */
  export const inboundSchema = ResponseResult$inboundSchema;
  /** @deprecated use `ResponseResult$outboundSchema` instead. */
  export const outboundSchema = ResponseResult$outboundSchema;
  /** @deprecated use `ResponseResult$Outbound` instead. */
  export type Outbound = ResponseResult$Outbound;
}

export function responseResultToJSON(responseResult: ResponseResult): string {
  return JSON.stringify(ResponseResult$outboundSchema.parse(responseResult));
}

export function responseResultFromJSON(
  jsonString: string,
): SafeParseResult<ResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ResponseResult' from JSON`,
  );
}

/** @internal */
export const PowerPath100UpdateStudentQuestionResponseResult$inboundSchema:
  z.ZodType<
    PowerPath100UpdateStudentQuestionResponseResult,
    z.ZodTypeDef,
    unknown
  > = z.object({
    lessonType: z.literal("powerpath-100").default("powerpath-100").optional(),
    powerpathScore: z.number(),
    responseResult: z.lazy(() => ResponseResult$inboundSchema),
    questionResult: z.any().optional(),
    testResult: z.any().optional(),
    accuracy: z.number(),
    correctQuestions: z.number(),
    totalQuestions: z.number(),
    xp: z.nullable(z.number()),
    multiplier: z.nullable(z.number()),
  });

/** @internal */
export type PowerPath100UpdateStudentQuestionResponseResult$Outbound = {
  lessonType: "powerpath-100";
  powerpathScore: number;
  responseResult: ResponseResult$Outbound;
  questionResult?: any | undefined;
  testResult?: any | undefined;
  accuracy: number;
  correctQuestions: number;
  totalQuestions: number;
  xp: number | null;
  multiplier: number | null;
};

/** @internal */
export const PowerPath100UpdateStudentQuestionResponseResult$outboundSchema:
  z.ZodType<
    PowerPath100UpdateStudentQuestionResponseResult$Outbound,
    z.ZodTypeDef,
    PowerPath100UpdateStudentQuestionResponseResult
  > = z.object({
    lessonType: z.literal("powerpath-100").default("powerpath-100" as const),
    powerpathScore: z.number(),
    responseResult: z.lazy(() => ResponseResult$outboundSchema),
    questionResult: z.any().optional(),
    testResult: z.any().optional(),
    accuracy: z.number(),
    correctQuestions: z.number(),
    totalQuestions: z.number(),
    xp: z.nullable(z.number()),
    multiplier: z.nullable(z.number()),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PowerPath100UpdateStudentQuestionResponseResult$ {
  /** @deprecated use `PowerPath100UpdateStudentQuestionResponseResult$inboundSchema` instead. */
  export const inboundSchema =
    PowerPath100UpdateStudentQuestionResponseResult$inboundSchema;
  /** @deprecated use `PowerPath100UpdateStudentQuestionResponseResult$outboundSchema` instead. */
  export const outboundSchema =
    PowerPath100UpdateStudentQuestionResponseResult$outboundSchema;
  /** @deprecated use `PowerPath100UpdateStudentQuestionResponseResult$Outbound` instead. */
  export type Outbound =
    PowerPath100UpdateStudentQuestionResponseResult$Outbound;
}

export function powerPath100UpdateStudentQuestionResponseResultToJSON(
  powerPath100UpdateStudentQuestionResponseResult:
    PowerPath100UpdateStudentQuestionResponseResult,
): string {
  return JSON.stringify(
    PowerPath100UpdateStudentQuestionResponseResult$outboundSchema.parse(
      powerPath100UpdateStudentQuestionResponseResult,
    ),
  );
}

export function powerPath100UpdateStudentQuestionResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<
  PowerPath100UpdateStudentQuestionResponseResult,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PowerPath100UpdateStudentQuestionResponseResult$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PowerPath100UpdateStudentQuestionResponseResult' from JSON`,
  );
}
