# CreateLessonPlanLessonPlanLessonPlan2

## Example Usage

```typescript
import { CreateLessonPlanLessonPlanLessonPlan2 } from "@superbuilders/powerpath/models/operations";

let value: CreateLessonPlanLessonPlanLessonPlan2 = {
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
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `course`                                                                                   | [operations.CreateLessonPlanCourse2](../../models/operations/createlessonplancourse2.md)   | :heavy_check_mark:                                                                         | Represents a course.                                                                       |
| `subComponents`                                                                            | [components.LessonPlanTreeComponent](../../models/components/lessonplantreecomponent.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |