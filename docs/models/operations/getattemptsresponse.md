# GetAttemptsResponse

Success

## Example Usage

```typescript
import { GetAttemptsResponse } from "@superbuilders/powerpath/models/operations";

let value: GetAttemptsResponse = {
  attempts: [
    {
      attempt: 3695.65,
      score: 2689.01,
      scoreStatus: "exempt",
      startedAt: new Date("2023-02-12T06:28:48.900Z"),
      completedAt: new Date("2024-08-24T18:15:31.607Z"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `attempts`                                                 | [operations.Attempt](../../models/operations/attempt.md)[] | :heavy_check_mark:                                         | N/A                                                        |