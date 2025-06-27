# GetCourseProgressLearningObjectiveSet2

## Example Usage

```typescript
import { GetCourseProgressLearningObjectiveSet2 } from "@superbuilders/powerpath/models/operations";

let value: GetCourseProgressLearningObjectiveSet2 = {
  source: "<value>",
  learningObjectiveResults: [
    {
      learningObjectiveId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `source`                                                                                                                       | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `learningObjectiveResults`                                                                                                     | [operations.GetCourseProgressLearningObjectiveResult2](../../models/operations/getcourseprogresslearningobjectiveresult2.md)[] | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |