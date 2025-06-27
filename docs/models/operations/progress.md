# Progress

The overview of the course's progress

## Example Usage

```typescript
import { Progress } from "@superbuilders/powerpath/models/operations";

let value: Progress = {
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
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `course`                                                                                            | [operations.GetSubjectProgressCourse](../../models/operations/getsubjectprogresscourse.md)          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `inEnrolled`                                                                                        | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `hasUsedTestOut`                                                                                    | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | Whether the student has a fully graded assessment result for a test-out lesson in the course        |
| `testOutLessonId`                                                                                   | *string*                                                                                            | :heavy_check_mark:                                                                                  | The sourcedId of the test-out lesson (ComponentResource) in the course                              |
| `completedLessons`                                                                                  | *number*                                                                                            | :heavy_check_mark:                                                                                  | The number of lessons that contain an assessment result with a score status of 'fully graded'       |
| `totalLessons`                                                                                      | *number*                                                                                            | :heavy_check_mark:                                                                                  | The total number of lessons in the course                                                           |
| `totalAttainableXp`                                                                                 | *number*                                                                                            | :heavy_check_mark:                                                                                  | The total XP that can be earned by the student in the course, not considering potential multipliers |
| `totalXpEarned`                                                                                     | *number*                                                                                            | :heavy_check_mark:                                                                                  | The total XP earned by the student considering calculated multipliers                               |