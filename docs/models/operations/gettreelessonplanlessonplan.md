# GetTreeLessonPlanLessonPlan

## Example Usage

```typescript
import { GetTreeLessonPlanLessonPlan } from "@superbuilders/powerpath/models/operations";

let value: GetTreeLessonPlanLessonPlan = {
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
| `course`                                                                                   | [operations.GetTreeCourse](../../models/operations/gettreecourse.md)                       | :heavy_check_mark:                                                                         | Represents a course.                                                                       |
| `subComponents`                                                                            | [components.LessonPlanTreeComponent](../../models/components/lessonplantreecomponent.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |