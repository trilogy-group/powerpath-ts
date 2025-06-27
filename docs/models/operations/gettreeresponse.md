# GetTreeResponse

## Example Usage

```typescript
import { GetTreeResponse } from "@superbuilders/powerpath/models/operations";

let value: GetTreeResponse = {
  lessonPlan: {
    lessonPlan: {
      course: {
        status: "active",
        title: "<value>",
        org: {
          sourcedId: "<id>",
        },
      },
      subComponents: [],
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `lessonPlan`                                                                 | [operations.GetTreeLessonPlan](../../models/operations/gettreelessonplan.md) | :heavy_check_mark:                                                           | N/A                                                                          |