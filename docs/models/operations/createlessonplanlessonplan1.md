# CreateLessonPlanLessonPlan1

## Example Usage

```typescript
import { CreateLessonPlanLessonPlan1 } from "@superbuilders/powerpath/models/operations";

let value: CreateLessonPlanLessonPlan1 = {
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
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `lessonPlan`                                                                                                         | [operations.CreateLessonPlanLessonPlanLessonPlan1](../../models/operations/createlessonplanlessonplanlessonplan1.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |