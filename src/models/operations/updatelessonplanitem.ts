/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const UpdateLessonPlanItemType = {
  Component: "component",
  Resource: "resource",
} as const;
export type UpdateLessonPlanItemType = ClosedEnum<
  typeof UpdateLessonPlanItemType
>;

export type UpdateLessonPlanItemRequestBody = {
  lessonPlanId?: string | undefined;
  type?: UpdateLessonPlanItemType | undefined;
  componentId?: string | null | undefined;
  componentResourceId?: string | null | undefined;
  order?: number | undefined;
  parentId?: string | null | undefined;
  skipped?: boolean | undefined;
};

export type UpdateLessonPlanItemRequest = {
  /**
   * Lesson plan item ID
   */
  lessonPlanItemId: string;
  requestBody?: UpdateLessonPlanItemRequestBody | undefined;
};

/** @internal */
export const UpdateLessonPlanItemType$inboundSchema: z.ZodNativeEnum<
  typeof UpdateLessonPlanItemType
> = z.nativeEnum(UpdateLessonPlanItemType);

/** @internal */
export const UpdateLessonPlanItemType$outboundSchema: z.ZodNativeEnum<
  typeof UpdateLessonPlanItemType
> = UpdateLessonPlanItemType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateLessonPlanItemType$ {
  /** @deprecated use `UpdateLessonPlanItemType$inboundSchema` instead. */
  export const inboundSchema = UpdateLessonPlanItemType$inboundSchema;
  /** @deprecated use `UpdateLessonPlanItemType$outboundSchema` instead. */
  export const outboundSchema = UpdateLessonPlanItemType$outboundSchema;
}

/** @internal */
export const UpdateLessonPlanItemRequestBody$inboundSchema: z.ZodType<
  UpdateLessonPlanItemRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  lessonPlanId: z.string().optional(),
  type: UpdateLessonPlanItemType$inboundSchema.optional(),
  componentId: z.nullable(z.string()).optional(),
  componentResourceId: z.nullable(z.string()).optional(),
  order: z.number().optional(),
  parentId: z.nullable(z.string()).optional(),
  skipped: z.boolean().default(false),
});

/** @internal */
export type UpdateLessonPlanItemRequestBody$Outbound = {
  lessonPlanId?: string | undefined;
  type?: string | undefined;
  componentId?: string | null | undefined;
  componentResourceId?: string | null | undefined;
  order?: number | undefined;
  parentId?: string | null | undefined;
  skipped: boolean;
};

/** @internal */
export const UpdateLessonPlanItemRequestBody$outboundSchema: z.ZodType<
  UpdateLessonPlanItemRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateLessonPlanItemRequestBody
> = z.object({
  lessonPlanId: z.string().optional(),
  type: UpdateLessonPlanItemType$outboundSchema.optional(),
  componentId: z.nullable(z.string()).optional(),
  componentResourceId: z.nullable(z.string()).optional(),
  order: z.number().optional(),
  parentId: z.nullable(z.string()).optional(),
  skipped: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateLessonPlanItemRequestBody$ {
  /** @deprecated use `UpdateLessonPlanItemRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateLessonPlanItemRequestBody$inboundSchema;
  /** @deprecated use `UpdateLessonPlanItemRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateLessonPlanItemRequestBody$outboundSchema;
  /** @deprecated use `UpdateLessonPlanItemRequestBody$Outbound` instead. */
  export type Outbound = UpdateLessonPlanItemRequestBody$Outbound;
}

export function updateLessonPlanItemRequestBodyToJSON(
  updateLessonPlanItemRequestBody: UpdateLessonPlanItemRequestBody,
): string {
  return JSON.stringify(
    UpdateLessonPlanItemRequestBody$outboundSchema.parse(
      updateLessonPlanItemRequestBody,
    ),
  );
}

export function updateLessonPlanItemRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateLessonPlanItemRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateLessonPlanItemRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateLessonPlanItemRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateLessonPlanItemRequest$inboundSchema: z.ZodType<
  UpdateLessonPlanItemRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  lessonPlanItemId: z.string(),
  RequestBody: z.lazy(() => UpdateLessonPlanItemRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateLessonPlanItemRequest$Outbound = {
  lessonPlanItemId: string;
  RequestBody?: UpdateLessonPlanItemRequestBody$Outbound | undefined;
};

/** @internal */
export const UpdateLessonPlanItemRequest$outboundSchema: z.ZodType<
  UpdateLessonPlanItemRequest$Outbound,
  z.ZodTypeDef,
  UpdateLessonPlanItemRequest
> = z.object({
  lessonPlanItemId: z.string(),
  requestBody: z.lazy(() => UpdateLessonPlanItemRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateLessonPlanItemRequest$ {
  /** @deprecated use `UpdateLessonPlanItemRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateLessonPlanItemRequest$inboundSchema;
  /** @deprecated use `UpdateLessonPlanItemRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateLessonPlanItemRequest$outboundSchema;
  /** @deprecated use `UpdateLessonPlanItemRequest$Outbound` instead. */
  export type Outbound = UpdateLessonPlanItemRequest$Outbound;
}

export function updateLessonPlanItemRequestToJSON(
  updateLessonPlanItemRequest: UpdateLessonPlanItemRequest,
): string {
  return JSON.stringify(
    UpdateLessonPlanItemRequest$outboundSchema.parse(
      updateLessonPlanItemRequest,
    ),
  );
}

export function updateLessonPlanItemRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateLessonPlanItemRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateLessonPlanItemRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateLessonPlanItemRequest' from JSON`,
  );
}
