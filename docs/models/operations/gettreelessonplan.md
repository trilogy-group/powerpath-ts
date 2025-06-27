# GetTreeLessonPlan

## Example Usage

```typescript
import { GetTreeLessonPlan } from "@superbuilders/powerpath/models/operations";

let value: GetTreeLessonPlan = {
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
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `lessonPlan`                                                                                     | [operations.GetTreeLessonPlanLessonPlan](../../models/operations/gettreelessonplanlessonplan.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |