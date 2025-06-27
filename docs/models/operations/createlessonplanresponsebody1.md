# CreateLessonPlanResponseBody1

Lesson plan already exists

## Example Usage

```typescript
import { CreateLessonPlanResponseBody1 } from "@superbuilders/powerpath/models/operations";

let value: CreateLessonPlanResponseBody1 = {
  lessonPlan: {
    lessonPlan: {
      course: {
        status: "tobedeleted",
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
| `lessonPlan`                                                                                     | [operations.CreateLessonPlanLessonPlan1](../../models/operations/createlessonplanlessonplan1.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |