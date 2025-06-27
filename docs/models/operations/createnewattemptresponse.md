# CreateNewAttemptResponse

Success

## Example Usage

```typescript
import { CreateNewAttemptResponse } from "@superbuilders/powerpath/models/operations";

let value: CreateNewAttemptResponse = {
  attempt: {
    attempt: 231.88,
    score: 1011.05,
    scoreStatus: "partially graded",
    startedAt: new Date("2023-05-12T18:37:59.771Z"),
    completedAt: new Date("2024-10-26T04:51:22.006Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `attempt`                                                                                | [operations.CreateNewAttemptAttempt](../../models/operations/createnewattemptattempt.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |