# CreateLessonPlanLessonPlanLessonPlan1

## Example Usage

```typescript
import { CreateLessonPlanLessonPlanLessonPlan1 } from "@superbuilders/powerpath/models/operations";

let value: CreateLessonPlanLessonPlanLessonPlan1 = {
  course: {
    status: "tobedeleted",
    title: "<value>",
    org: {
      sourcedId: "<id>",
    },
  },
  subComponents: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `course`                                                                                   | [operations.CreateLessonPlanCourse1](../../models/operations/createlessonplancourse1.md)   | :heavy_check_mark:                                                                         | Represents a course.                                                                       |
| `subComponents`                                                                            | [components.LessonPlanTreeComponent](../../models/components/lessonplantreecomponent.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |