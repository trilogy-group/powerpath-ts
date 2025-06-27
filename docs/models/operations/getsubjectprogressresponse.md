# GetSubjectProgressResponse

Success

## Example Usage

```typescript
import { GetSubjectProgressResponse } from "@superbuilders/powerpath/models/operations";

let value: GetSubjectProgressResponse = {
  progress: [
    {
      course: {
        courseCode: "<value>",
        dateLastModified: "<value>",
        grades: [],
        level: "<value>",
        orgSourcedId: "<id>",
        sourcedId: "<id>",
        status: "<value>",
        subjects: [],
        title: "<value>",
      },
      inEnrolled: true,
      hasUsedTestOut: false,
      testOutLessonId: "<id>",
      completedLessons: 9057.68,
      totalLessons: 1499.78,
      totalAttainableXp: 4798.16,
      totalXpEarned: 7813.39,
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `progress`                                                   | [operations.Progress](../../models/operations/progress.md)[] | :heavy_check_mark:                                           | The progress of the student in each of the subject's courses |