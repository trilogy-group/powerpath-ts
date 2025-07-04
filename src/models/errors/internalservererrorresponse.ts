/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { PowerPathError } from "./powerpatherror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type InternalServerErrorResponseImsxCodeMinorField = {
  imsxCodeMinorFieldName?: "TargetEndSystem" | undefined;
  imsxCodeMinorFieldValue?: "internal_server_error" | undefined;
};

export type InternalServerErrorResponseImsxCodeMinor = {
  imsxCodeMinorField: Array<InternalServerErrorResponseImsxCodeMinorField>;
};

export type InternalServerErrorResponseData = {
  imsxCodeMajor: "failure";
  imsxSeverity: "error";
  imsxDescription: string;
  imsxCodeMinor: InternalServerErrorResponseImsxCodeMinor;
  imsxErrorDetails?: Array<{ [k: string]: string }> | undefined;
};

export class InternalServerErrorResponse extends PowerPathError {
  imsxCodeMajor: "failure";
  imsxSeverity: "error";
  imsxDescription: string;
  imsxCodeMinor: InternalServerErrorResponseImsxCodeMinor;
  imsxErrorDetails?: Array<{ [k: string]: string }> | undefined;

  /** The original data that was passed to this error instance. */
  data$: InternalServerErrorResponseData;

  constructor(
    err: InternalServerErrorResponseData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.imsxCodeMajor = err.imsxCodeMajor;
    this.imsxSeverity = err.imsxSeverity;
    this.imsxDescription = err.imsxDescription;
    this.imsxCodeMinor = err.imsxCodeMinor;
    if (err.imsxErrorDetails != null) {
      this.imsxErrorDetails = err.imsxErrorDetails;
    }

    this.name = "InternalServerErrorResponse";
  }
}

/** @internal */
export const InternalServerErrorResponseImsxCodeMinorField$inboundSchema:
  z.ZodType<
    InternalServerErrorResponseImsxCodeMinorField,
    z.ZodTypeDef,
    unknown
  > = z.object({
    imsx_codeMinorFieldName: z.literal("TargetEndSystem").default(
      "TargetEndSystem",
    ).optional(),
    imsx_codeMinorFieldValue: z.literal("internal_server_error").default(
      "internal_server_error",
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "imsx_codeMinorFieldName": "imsxCodeMinorFieldName",
      "imsx_codeMinorFieldValue": "imsxCodeMinorFieldValue",
    });
  });

/** @internal */
export type InternalServerErrorResponseImsxCodeMinorField$Outbound = {
  imsx_codeMinorFieldName: "TargetEndSystem";
  imsx_codeMinorFieldValue: "internal_server_error";
};

/** @internal */
export const InternalServerErrorResponseImsxCodeMinorField$outboundSchema:
  z.ZodType<
    InternalServerErrorResponseImsxCodeMinorField$Outbound,
    z.ZodTypeDef,
    InternalServerErrorResponseImsxCodeMinorField
  > = z.object({
    imsxCodeMinorFieldName: z.literal("TargetEndSystem").default(
      "TargetEndSystem" as const,
    ),
    imsxCodeMinorFieldValue: z.literal("internal_server_error").default(
      "internal_server_error" as const,
    ),
  }).transform((v) => {
    return remap$(v, {
      imsxCodeMinorFieldName: "imsx_codeMinorFieldName",
      imsxCodeMinorFieldValue: "imsx_codeMinorFieldValue",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InternalServerErrorResponseImsxCodeMinorField$ {
  /** @deprecated use `InternalServerErrorResponseImsxCodeMinorField$inboundSchema` instead. */
  export const inboundSchema =
    InternalServerErrorResponseImsxCodeMinorField$inboundSchema;
  /** @deprecated use `InternalServerErrorResponseImsxCodeMinorField$outboundSchema` instead. */
  export const outboundSchema =
    InternalServerErrorResponseImsxCodeMinorField$outboundSchema;
  /** @deprecated use `InternalServerErrorResponseImsxCodeMinorField$Outbound` instead. */
  export type Outbound = InternalServerErrorResponseImsxCodeMinorField$Outbound;
}

export function internalServerErrorResponseImsxCodeMinorFieldToJSON(
  internalServerErrorResponseImsxCodeMinorField:
    InternalServerErrorResponseImsxCodeMinorField,
): string {
  return JSON.stringify(
    InternalServerErrorResponseImsxCodeMinorField$outboundSchema.parse(
      internalServerErrorResponseImsxCodeMinorField,
    ),
  );
}

export function internalServerErrorResponseImsxCodeMinorFieldFromJSON(
  jsonString: string,
): SafeParseResult<
  InternalServerErrorResponseImsxCodeMinorField,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      InternalServerErrorResponseImsxCodeMinorField$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'InternalServerErrorResponseImsxCodeMinorField' from JSON`,
  );
}

/** @internal */
export const InternalServerErrorResponseImsxCodeMinor$inboundSchema: z.ZodType<
  InternalServerErrorResponseImsxCodeMinor,
  z.ZodTypeDef,
  unknown
> = z.object({
  imsx_codeMinorField: z.array(
    z.lazy(() => InternalServerErrorResponseImsxCodeMinorField$inboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    "imsx_codeMinorField": "imsxCodeMinorField",
  });
});

/** @internal */
export type InternalServerErrorResponseImsxCodeMinor$Outbound = {
  imsx_codeMinorField: Array<
    InternalServerErrorResponseImsxCodeMinorField$Outbound
  >;
};

/** @internal */
export const InternalServerErrorResponseImsxCodeMinor$outboundSchema: z.ZodType<
  InternalServerErrorResponseImsxCodeMinor$Outbound,
  z.ZodTypeDef,
  InternalServerErrorResponseImsxCodeMinor
> = z.object({
  imsxCodeMinorField: z.array(
    z.lazy(() => InternalServerErrorResponseImsxCodeMinorField$outboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    imsxCodeMinorField: "imsx_codeMinorField",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InternalServerErrorResponseImsxCodeMinor$ {
  /** @deprecated use `InternalServerErrorResponseImsxCodeMinor$inboundSchema` instead. */
  export const inboundSchema =
    InternalServerErrorResponseImsxCodeMinor$inboundSchema;
  /** @deprecated use `InternalServerErrorResponseImsxCodeMinor$outboundSchema` instead. */
  export const outboundSchema =
    InternalServerErrorResponseImsxCodeMinor$outboundSchema;
  /** @deprecated use `InternalServerErrorResponseImsxCodeMinor$Outbound` instead. */
  export type Outbound = InternalServerErrorResponseImsxCodeMinor$Outbound;
}

export function internalServerErrorResponseImsxCodeMinorToJSON(
  internalServerErrorResponseImsxCodeMinor:
    InternalServerErrorResponseImsxCodeMinor,
): string {
  return JSON.stringify(
    InternalServerErrorResponseImsxCodeMinor$outboundSchema.parse(
      internalServerErrorResponseImsxCodeMinor,
    ),
  );
}

export function internalServerErrorResponseImsxCodeMinorFromJSON(
  jsonString: string,
): SafeParseResult<
  InternalServerErrorResponseImsxCodeMinor,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      InternalServerErrorResponseImsxCodeMinor$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'InternalServerErrorResponseImsxCodeMinor' from JSON`,
  );
}

/** @internal */
export const InternalServerErrorResponse$inboundSchema: z.ZodType<
  InternalServerErrorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  imsx_codeMajor: z.literal("failure").default("failure"),
  imsx_severity: z.literal("error").default("error"),
  imsx_description: z.string(),
  imsx_CodeMinor: z.lazy(() =>
    InternalServerErrorResponseImsxCodeMinor$inboundSchema
  ),
  imsx_error_details: z.array(z.record(z.string())).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "imsx_codeMajor": "imsxCodeMajor",
      "imsx_severity": "imsxSeverity",
      "imsx_description": "imsxDescription",
      "imsx_CodeMinor": "imsxCodeMinor",
      "imsx_error_details": "imsxErrorDetails",
    });

    return new InternalServerErrorResponse(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type InternalServerErrorResponse$Outbound = {
  imsx_codeMajor: "failure";
  imsx_severity: "error";
  imsx_description: string;
  imsx_CodeMinor: InternalServerErrorResponseImsxCodeMinor$Outbound;
  imsx_error_details?: Array<{ [k: string]: string }> | undefined;
};

/** @internal */
export const InternalServerErrorResponse$outboundSchema: z.ZodType<
  InternalServerErrorResponse$Outbound,
  z.ZodTypeDef,
  InternalServerErrorResponse
> = z.instanceof(InternalServerErrorResponse)
  .transform(v => v.data$)
  .pipe(
    z.object({
      imsxCodeMajor: z.literal("failure").default("failure" as const),
      imsxSeverity: z.literal("error").default("error" as const),
      imsxDescription: z.string(),
      imsxCodeMinor: z.lazy(() =>
        InternalServerErrorResponseImsxCodeMinor$outboundSchema
      ),
      imsxErrorDetails: z.array(z.record(z.string())).optional(),
    }).transform((v) => {
      return remap$(v, {
        imsxCodeMajor: "imsx_codeMajor",
        imsxSeverity: "imsx_severity",
        imsxDescription: "imsx_description",
        imsxCodeMinor: "imsx_CodeMinor",
        imsxErrorDetails: "imsx_error_details",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InternalServerErrorResponse$ {
  /** @deprecated use `InternalServerErrorResponse$inboundSchema` instead. */
  export const inboundSchema = InternalServerErrorResponse$inboundSchema;
  /** @deprecated use `InternalServerErrorResponse$outboundSchema` instead. */
  export const outboundSchema = InternalServerErrorResponse$outboundSchema;
  /** @deprecated use `InternalServerErrorResponse$Outbound` instead. */
  export type Outbound = InternalServerErrorResponse$Outbound;
}
