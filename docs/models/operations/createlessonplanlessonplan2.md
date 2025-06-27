# CreateLessonPlanLessonPlan2

## Example Usage

```typescript
import { CreateLessonPlanLessonPlan2 } from "@superbuilders/powerpath/models/operations";

let value: CreateLessonPlanLessonPlan2 = {
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
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `lessonPlan`                                                                                                         | [operations.CreateLessonPlanLessonPlanLessonPlan2](../../models/operations/createlessonplanlessonplanlessonplan2.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |