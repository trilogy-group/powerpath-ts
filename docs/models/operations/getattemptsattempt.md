# GetAttemptsAttempt

## Example Usage

```typescript
import { GetAttemptsAttempt } from "@superbuilders/powerpath/models/operations";

let value: GetAttemptsAttempt = {
  attempt: 3907.21,
  score: 4685.17,
  scoreStatus: "submitted",
  startedAt: new Date("2024-08-21T06:28:06.689Z"),
  completedAt: new Date("2025-02-08T03:09:23.443Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `attempt`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The attempt number                                                                            |
| `score`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | The current score for this attempt                                                            |
| `scoreStatus`                                                                                 | [operations.GetAttemptsScoreStatus](../../models/operations/getattemptsscorestatus.md)        | :heavy_check_mark:                                                                            | The status of this attempt                                                                    |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When this attempt was started                                                                 |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When this attempt was completed                                                               |