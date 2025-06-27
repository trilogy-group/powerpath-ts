# AssessmentResultLearningObjectiveSet

## Example Usage

```typescript
import { AssessmentResultLearningObjectiveSet } from "@superbuilders/powerpath/models/components";

let value: AssessmentResultLearningObjectiveSet = {
  source: "<value>",
  learningObjectiveResults: [
    {
      learningObjectiveId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `source`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `learningObjectiveResults`                                                                 | [components.LearningObjectiveResult](../../models/components/learningobjectiveresult.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |