# PowerPathTestQuestionResult

The result of the question

## Example Usage

```typescript
import { PowerPathTestQuestionResult } from "@superbuilders/powerpath/models/components";

let value: PowerPathTestQuestionResult = {
  score: 4592.24,
  feedback: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `score`                                                                | *number*                                                               | :heavy_check_mark:                                                     | The score assigned to the question, considering the student's response |
| `feedback`                                                             | *string*                                                               | :heavy_check_mark:                                                     | The feedback for the question                                          |