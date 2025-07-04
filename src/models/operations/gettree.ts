/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTreeRequest = {
  /**
   * Course Sourced ID
   */
  courseId: string;
  /**
   * User Sourced ID
   */
  userId: string;
};

export const GetTreeStatus = {
  Active: "active",
  Tobedeleted: "tobedeleted",
} as const;
export type GetTreeStatus = ClosedEnum<typeof GetTreeStatus>;

export type GetTreeAcademicSession = {
  sourcedId: string;
};

export type GetTreeOrg = {
  sourcedId: string;
};

/**
 * Represents a course.
 */
export type GetTreeCourse = {
  sourcedId?: string | undefined;
  status: GetTreeStatus;
  dateLastModified?: Date | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  title: string;
  academicSession?: GetTreeAcademicSession | null | undefined;
  courseCode?: string | null | undefined;
  grades?: Array<string> | null | undefined;
  subjects?: Array<string> | null | undefined;
  subjectCodes?: Array<string> | null | undefined;
  org: GetTreeOrg;
  level?: string | null | undefined;
  gradingScheme?: string | null | undefined;
};

export type GetTreeLessonPlanLessonPlan = {
  /**
   * Represents a course.
   */
  course: GetTreeCourse;
  subComponents: Array<components.LessonPlanTreeComponent>;
};

export type GetTreeLessonPlan = {
  lessonPlan: GetTreeLessonPlanLessonPlan;
};

export type GetTreeResponse = {
  lessonPlan: GetTreeLessonPlan;
};

/** @internal */
export const GetTreeRequest$inboundSchema: z.ZodType<
  GetTreeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  courseId: z.string(),
  userId: z.string(),
});

/** @internal */
export type GetTreeRequest$Outbound = {
  courseId: string;
  userId: string;
};

/** @internal */
export const GetTreeRequest$outboundSchema: z.ZodType<
  GetTreeRequest$Outbound,
  z.ZodTypeDef,
  GetTreeRequest
> = z.object({
  courseId: z.string(),
  userId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTreeRequest$ {
  /** @deprecated use `GetTreeRequest$inboundSchema` instead. */
  export const inboundSchema = GetTreeRequest$inboundSchema;
  /** @deprecated use `GetTreeRequest$outboundSchema` instead. */
  export const outboundSchema = GetTreeRequest$outboundSchema;
  /** @deprecated use `GetTreeRequest$Outbound` instead. */
  export type Outbound = GetTreeRequest$Outbound;
}

export function getTreeRequestToJSON(getTreeRequest: GetTreeRequest): string {
  return JSON.stringify(GetTreeRequest$outboundSchema.parse(getTreeRequest));
}

export function getTreeRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTreeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTreeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTreeRequest' from JSON`,
  );
}

/** @internal */
export const GetTreeStatus$inboundSchema: z.ZodNativeEnum<
  typeof GetTreeStatus
> = z.nativeEnum(GetTreeStatus);

/** @internal */
export const GetTreeStatus$outboundSchema: z.ZodNativeEnum<
  typeof GetTreeStatus
> = GetTreeStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTreeStatus$ {
  /** @deprecated use `GetTreeStatus$inboundSchema` instead. */
  export const inboundSchema = GetTreeStatus$inboundSchema;
  /** @deprecated use `GetTreeStatus$outboundSchema` instead. */
  export const outboundSchema = GetTreeStatus$outboundSchema;
}

/** @internal */
export const GetTreeAcademicSession$inboundSchema: z.ZodType<
  GetTreeAcademicSession,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type GetTreeAcademicSession$Outbound = {
  sourcedId: string;
};

/** @internal */
export const GetTreeAcademicSession$outboundSchema: z.ZodType<
  GetTreeAcademicSession$Outbound,
  z.ZodTypeDef,
  GetTreeAcademicSession
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTreeAcademicSession$ {
  /** @deprecated use `GetTreeAcademicSession$inboundSchema` instead. */
  export const inboundSchema = GetTreeAcademicSession$inboundSchema;
  /** @deprecated use `GetTreeAcademicSession$outboundSchema` instead. */
  export const outboundSchema = GetTreeAcademicSession$outboundSchema;
  /** @deprecated use `GetTreeAcademicSession$Outbound` instead. */
  export type Outbound = GetTreeAcademicSession$Outbound;
}

export function getTreeAcademicSessionToJSON(
  getTreeAcademicSession: GetTreeAcademicSession,
): string {
  return JSON.stringify(
    GetTreeAcademicSession$outboundSchema.parse(getTreeAcademicSession),
  );
}

export function getTreeAcademicSessionFromJSON(
  jsonString: string,
): SafeParseResult<GetTreeAcademicSession, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTreeAcademicSession$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTreeAcademicSession' from JSON`,
  );
}

/** @internal */
export const GetTreeOrg$inboundSchema: z.ZodType<
  GetTreeOrg,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type GetTreeOrg$Outbound = {
  sourcedId: string;
};

/** @internal */
export const GetTreeOrg$outboundSchema: z.ZodType<
  GetTreeOrg$Outbound,
  z.ZodTypeDef,
  GetTreeOrg
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTreeOrg$ {
  /** @deprecated use `GetTreeOrg$inboundSchema` instead. */
  export const inboundSchema = GetTreeOrg$inboundSchema;
  /** @deprecated use `GetTreeOrg$outboundSchema` instead. */
  export const outboundSchema = GetTreeOrg$outboundSchema;
  /** @deprecated use `GetTreeOrg$Outbound` instead. */
  export type Outbound = GetTreeOrg$Outbound;
}

export function getTreeOrgToJSON(getTreeOrg: GetTreeOrg): string {
  return JSON.stringify(GetTreeOrg$outboundSchema.parse(getTreeOrg));
}

export function getTreeOrgFromJSON(
  jsonString: string,
): SafeParseResult<GetTreeOrg, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTreeOrg$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTreeOrg' from JSON`,
  );
}

/** @internal */
export const GetTreeCourse$inboundSchema: z.ZodType<
  GetTreeCourse,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string().optional(),
  status: GetTreeStatus$inboundSchema,
  dateLastModified: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  title: z.string(),
  academicSession: z.nullable(
    z.lazy(() => GetTreeAcademicSession$inboundSchema),
  ).optional(),
  courseCode: z.nullable(z.string()).optional(),
  grades: z.nullable(z.array(z.string())).optional(),
  subjects: z.nullable(z.array(z.string())).optional(),
  subjectCodes: z.nullable(z.array(z.string())).optional(),
  org: z.lazy(() => GetTreeOrg$inboundSchema),
  level: z.nullable(z.string()).optional(),
  gradingScheme: z.nullable(z.string()).optional(),
});

/** @internal */
export type GetTreeCourse$Outbound = {
  sourcedId?: string | undefined;
  status: string;
  dateLastModified?: string | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  title: string;
  academicSession?: GetTreeAcademicSession$Outbound | null | undefined;
  courseCode?: string | null | undefined;
  grades?: Array<string> | null | undefined;
  subjects?: Array<string> | null | undefined;
  subjectCodes?: Array<string> | null | undefined;
  org: GetTreeOrg$Outbound;
  level?: string | null | undefined;
  gradingScheme?: string | null | undefined;
};

/** @internal */
export const GetTreeCourse$outboundSchema: z.ZodType<
  GetTreeCourse$Outbound,
  z.ZodTypeDef,
  GetTreeCourse
> = z.object({
  sourcedId: z.string().optional(),
  status: GetTreeStatus$outboundSchema,
  dateLastModified: z.date().transform(v => v.toISOString()).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  title: z.string(),
  academicSession: z.nullable(
    z.lazy(() => GetTreeAcademicSession$outboundSchema),
  ).optional(),
  courseCode: z.nullable(z.string()).optional(),
  grades: z.nullable(z.array(z.string())).optional(),
  subjects: z.nullable(z.array(z.string())).optional(),
  subjectCodes: z.nullable(z.array(z.string())).optional(),
  org: z.lazy(() => GetTreeOrg$outboundSchema),
  level: z.nullable(z.string()).optional(),
  gradingScheme: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTreeCourse$ {
  /** @deprecated use `GetTreeCourse$inboundSchema` instead. */
  export const inboundSchema = GetTreeCourse$inboundSchema;
  /** @deprecated use `GetTreeCourse$outboundSchema` instead. */
  export const outboundSchema = GetTreeCourse$outboundSchema;
  /** @deprecated use `GetTreeCourse$Outbound` instead. */
  export type Outbound = GetTreeCourse$Outbound;
}

export function getTreeCourseToJSON(getTreeCourse: GetTreeCourse): string {
  return JSON.stringify(GetTreeCourse$outboundSchema.parse(getTreeCourse));
}

export function getTreeCourseFromJSON(
  jsonString: string,
): SafeParseResult<GetTreeCourse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTreeCourse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTreeCourse' from JSON`,
  );
}

/** @internal */
export const GetTreeLessonPlanLessonPlan$inboundSchema: z.ZodType<
  GetTreeLessonPlanLessonPlan,
  z.ZodTypeDef,
  unknown
> = z.object({
  course: z.lazy(() => GetTreeCourse$inboundSchema),
  subComponents: z.array(components.LessonPlanTreeComponent$inboundSchema),
});

/** @internal */
export type GetTreeLessonPlanLessonPlan$Outbound = {
  course: GetTreeCourse$Outbound;
  subComponents: Array<components.LessonPlanTreeComponent$Outbound>;
};

/** @internal */
export const GetTreeLessonPlanLessonPlan$outboundSchema: z.ZodType<
  GetTreeLessonPlanLessonPlan$Outbound,
  z.ZodTypeDef,
  GetTreeLessonPlanLessonPlan
> = z.object({
  course: z.lazy(() => GetTreeCourse$outboundSchema),
  subComponents: z.array(components.LessonPlanTreeComponent$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTreeLessonPlanLessonPlan$ {
  /** @deprecated use `GetTreeLessonPlanLessonPlan$inboundSchema` instead. */
  export const inboundSchema = GetTreeLessonPlanLessonPlan$inboundSchema;
  /** @deprecated use `GetTreeLessonPlanLessonPlan$outboundSchema` instead. */
  export const outboundSchema = GetTreeLessonPlanLessonPlan$outboundSchema;
  /** @deprecated use `GetTreeLessonPlanLessonPlan$Outbound` instead. */
  export type Outbound = GetTreeLessonPlanLessonPlan$Outbound;
}

export function getTreeLessonPlanLessonPlanToJSON(
  getTreeLessonPlanLessonPlan: GetTreeLessonPlanLessonPlan,
): string {
  return JSON.stringify(
    GetTreeLessonPlanLessonPlan$outboundSchema.parse(
      getTreeLessonPlanLessonPlan,
    ),
  );
}

export function getTreeLessonPlanLessonPlanFromJSON(
  jsonString: string,
): SafeParseResult<GetTreeLessonPlanLessonPlan, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTreeLessonPlanLessonPlan$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTreeLessonPlanLessonPlan' from JSON`,
  );
}

/** @internal */
export const GetTreeLessonPlan$inboundSchema: z.ZodType<
  GetTreeLessonPlan,
  z.ZodTypeDef,
  unknown
> = z.object({
  lessonPlan: z.lazy(() => GetTreeLessonPlanLessonPlan$inboundSchema),
});

/** @internal */
export type GetTreeLessonPlan$Outbound = {
  lessonPlan: GetTreeLessonPlanLessonPlan$Outbound;
};

/** @internal */
export const GetTreeLessonPlan$outboundSchema: z.ZodType<
  GetTreeLessonPlan$Outbound,
  z.ZodTypeDef,
  GetTreeLessonPlan
> = z.object({
  lessonPlan: z.lazy(() => GetTreeLessonPlanLessonPlan$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTreeLessonPlan$ {
  /** @deprecated use `GetTreeLessonPlan$inboundSchema` instead. */
  export const inboundSchema = GetTreeLessonPlan$inboundSchema;
  /** @deprecated use `GetTreeLessonPlan$outboundSchema` instead. */
  export const outboundSchema = GetTreeLessonPlan$outboundSchema;
  /** @deprecated use `GetTreeLessonPlan$Outbound` instead. */
  export type Outbound = GetTreeLessonPlan$Outbound;
}

export function getTreeLessonPlanToJSON(
  getTreeLessonPlan: GetTreeLessonPlan,
): string {
  return JSON.stringify(
    GetTreeLessonPlan$outboundSchema.parse(getTreeLessonPlan),
  );
}

export function getTreeLessonPlanFromJSON(
  jsonString: string,
): SafeParseResult<GetTreeLessonPlan, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTreeLessonPlan$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTreeLessonPlan' from JSON`,
  );
}

/** @internal */
export const GetTreeResponse$inboundSchema: z.ZodType<
  GetTreeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  lessonPlan: z.lazy(() => GetTreeLessonPlan$inboundSchema),
});

/** @internal */
export type GetTreeResponse$Outbound = {
  lessonPlan: GetTreeLessonPlan$Outbound;
};

/** @internal */
export const GetTreeResponse$outboundSchema: z.ZodType<
  GetTreeResponse$Outbound,
  z.ZodTypeDef,
  GetTreeResponse
> = z.object({
  lessonPlan: z.lazy(() => GetTreeLessonPlan$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTreeResponse$ {
  /** @deprecated use `GetTreeResponse$inboundSchema` instead. */
  export const inboundSchema = GetTreeResponse$inboundSchema;
  /** @deprecated use `GetTreeResponse$outboundSchema` instead. */
  export const outboundSchema = GetTreeResponse$outboundSchema;
  /** @deprecated use `GetTreeResponse$Outbound` instead. */
  export type Outbound = GetTreeResponse$Outbound;
}

export function getTreeResponseToJSON(
  getTreeResponse: GetTreeResponse,
): string {
  return JSON.stringify(GetTreeResponse$outboundSchema.parse(getTreeResponse));
}

export function getTreeResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetTreeResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTreeResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTreeResponse' from JSON`,
  );
}
