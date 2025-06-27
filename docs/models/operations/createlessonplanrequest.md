# CreateLessonPlanRequest

## Example Usage

```typescript
import { CreateLessonPlanRequest } from "@superbuilders/powerpath/models/operations";

let value: CreateLessonPlanRequest = {
  courseId: "<id>",
  userId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `courseId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | The Sourced ID of the course                                                             |
| `userId`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | The Sourced ID of the student                                                            |
| `classId`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | (optional) The Sourced ID of the class. Defaults to current year's class for the student |