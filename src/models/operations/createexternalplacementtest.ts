/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateExternalPlacementTestRequest =
  | (components.CreateExternalTestOutInput & { lessonType: "test-out" })
  | (components.CreateExternalPlacementInput & { lessonType: "placement" });

export const CreateExternalPlacementTestLessonType = {
  Powerpath100: "powerpath-100",
  Quiz: "quiz",
  TestOut: "test-out",
  Placement: "placement",
} as const;
export type CreateExternalPlacementTestLessonType = ClosedEnum<
  typeof CreateExternalPlacementTestLessonType
>;

/**
 * Success
 */
export type CreateExternalPlacementTestResponse = {
  lessonType: CreateExternalPlacementTestLessonType;
  /**
   * The sourcedId of the created external test reference (ComponentResource)
   */
  lessonId: string;
  /**
   * The sourcedId of the component (unit) containing the test
   */
  courseComponentId: string;
  /**
   * The sourcedId of the resource representing the external test
   */
  resourceId: string;
  /**
   * The URL to the external test system
   */
  launchUrl?: string | undefined;
  /**
   * The tool provider id
   */
  toolProvider: string;
  /**
   * The ID of the test in the spreadsheet
   */
  vendorId: string;
  /**
   * The courseId to enroll the student in if they fail the placement test (optional)
   */
  courseIdOnFail?: string | null | undefined;
  /**
   * The grades for the resource
   */
  grades?: Array<number> | undefined;
};

/** @internal */
export const CreateExternalPlacementTestRequest$inboundSchema: z.ZodType<
  CreateExternalPlacementTestRequest,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.CreateExternalTestOutInput$inboundSchema.and(
    z.object({ lessonType: z.literal("test-out") }).transform((v) => ({
      lessonType: v.lessonType,
    })),
  ),
  components.CreateExternalPlacementInput$inboundSchema.and(
    z.object({ lessonType: z.literal("placement") }).transform((v) => ({
      lessonType: v.lessonType,
    })),
  ),
]);

/** @internal */
export type CreateExternalPlacementTestRequest$Outbound =
  | (components.CreateExternalTestOutInput$Outbound & {
    lessonType: "test-out";
  })
  | (components.CreateExternalPlacementInput$Outbound & {
    lessonType: "placement";
  });

/** @internal */
export const CreateExternalPlacementTestRequest$outboundSchema: z.ZodType<
  CreateExternalPlacementTestRequest$Outbound,
  z.ZodTypeDef,
  CreateExternalPlacementTestRequest
> = z.union([
  components.CreateExternalTestOutInput$outboundSchema.and(
    z.object({ lessonType: z.literal("test-out") }).transform((v) => ({
      lessonType: v.lessonType,
    })),
  ),
  components.CreateExternalPlacementInput$outboundSchema.and(
    z.object({ lessonType: z.literal("placement") }).transform((v) => ({
      lessonType: v.lessonType,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateExternalPlacementTestRequest$ {
  /** @deprecated use `CreateExternalPlacementTestRequest$inboundSchema` instead. */
  export const inboundSchema = CreateExternalPlacementTestRequest$inboundSchema;
  /** @deprecated use `CreateExternalPlacementTestRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateExternalPlacementTestRequest$outboundSchema;
  /** @deprecated use `CreateExternalPlacementTestRequest$Outbound` instead. */
  export type Outbound = CreateExternalPlacementTestRequest$Outbound;
}

export function createExternalPlacementTestRequestToJSON(
  createExternalPlacementTestRequest: CreateExternalPlacementTestRequest,
): string {
  return JSON.stringify(
    CreateExternalPlacementTestRequest$outboundSchema.parse(
      createExternalPlacementTestRequest,
    ),
  );
}

export function createExternalPlacementTestRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateExternalPlacementTestRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateExternalPlacementTestRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateExternalPlacementTestRequest' from JSON`,
  );
}

/** @internal */
export const CreateExternalPlacementTestLessonType$inboundSchema:
  z.ZodNativeEnum<typeof CreateExternalPlacementTestLessonType> = z.nativeEnum(
    CreateExternalPlacementTestLessonType,
  );

/** @internal */
export const CreateExternalPlacementTestLessonType$outboundSchema:
  z.ZodNativeEnum<typeof CreateExternalPlacementTestLessonType> =
    CreateExternalPlacementTestLessonType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateExternalPlacementTestLessonType$ {
  /** @deprecated use `CreateExternalPlacementTestLessonType$inboundSchema` instead. */
  export const inboundSchema =
    CreateExternalPlacementTestLessonType$inboundSchema;
  /** @deprecated use `CreateExternalPlacementTestLessonType$outboundSchema` instead. */
  export const outboundSchema =
    CreateExternalPlacementTestLessonType$outboundSchema;
}

/** @internal */
export const CreateExternalPlacementTestResponse$inboundSchema: z.ZodType<
  CreateExternalPlacementTestResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  lessonType: CreateExternalPlacementTestLessonType$inboundSchema,
  lessonId: z.string(),
  courseComponentId: z.string(),
  resourceId: z.string(),
  launchUrl: z.string().optional(),
  toolProvider: z.string(),
  vendorId: z.string(),
  courseIdOnFail: z.nullable(z.string()).optional(),
  grades: z.array(z.number()).optional(),
});

/** @internal */
export type CreateExternalPlacementTestResponse$Outbound = {
  lessonType: string;
  lessonId: string;
  courseComponentId: string;
  resourceId: string;
  launchUrl?: string | undefined;
  toolProvider: string;
  vendorId: string;
  courseIdOnFail?: string | null | undefined;
  grades?: Array<number> | undefined;
};

/** @internal */
export const CreateExternalPlacementTestResponse$outboundSchema: z.ZodType<
  CreateExternalPlacementTestResponse$Outbound,
  z.ZodTypeDef,
  CreateExternalPlacementTestResponse
> = z.object({
  lessonType: CreateExternalPlacementTestLessonType$outboundSchema,
  lessonId: z.string(),
  courseComponentId: z.string(),
  resourceId: z.string(),
  launchUrl: z.string().optional(),
  toolProvider: z.string(),
  vendorId: z.string(),
  courseIdOnFail: z.nullable(z.string()).optional(),
  grades: z.array(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateExternalPlacementTestResponse$ {
  /** @deprecated use `CreateExternalPlacementTestResponse$inboundSchema` instead. */
  export const inboundSchema =
    CreateExternalPlacementTestResponse$inboundSchema;
  /** @deprecated use `CreateExternalPlacementTestResponse$outboundSchema` instead. */
  export const outboundSchema =
    CreateExternalPlacementTestResponse$outboundSchema;
  /** @deprecated use `CreateExternalPlacementTestResponse$Outbound` instead. */
  export type Outbound = CreateExternalPlacementTestResponse$Outbound;
}

export function createExternalPlacementTestResponseToJSON(
  createExternalPlacementTestResponse: CreateExternalPlacementTestResponse,
): string {
  return JSON.stringify(
    CreateExternalPlacementTestResponse$outboundSchema.parse(
      createExternalPlacementTestResponse,
    ),
  );
}

export function createExternalPlacementTestResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateExternalPlacementTestResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateExternalPlacementTestResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateExternalPlacementTestResponse' from JSON`,
  );
}
