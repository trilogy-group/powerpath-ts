# CreateLessonPlanResponseBody2

Lesson plan created

## Example Usage

```typescript
import { CreateLessonPlanResponseBody2 } from "@superbuilders/powerpath/models/operations";

let value: CreateLessonPlanResponseBody2 = {
  lessonPlan: {
    lessonPlan: {
      course: {
        status: "active",
        title: "<value>",
        org: {
          sourcedId: "<id>",
        },
      },
      subComponents: [
        {
          id: "<id>",
          sourcedId: "<id>",
          status: "tobedeleted",
          title: "<value>",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `lessonPlan`                                                                                     | [operations.CreateLessonPlanLessonPlan2](../../models/operations/createlessonplanlessonplan2.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |