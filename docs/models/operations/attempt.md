# Attempt

## Example Usage

```typescript
import { Attempt } from "@superbuilders/powerpath/models/operations";

let value: Attempt = {
  attempt: 9580.01,
  score: 6365.58,
  scoreStatus: "exempt",
  startedAt: new Date("2024-09-01T15:17:57.377Z"),
  completedAt: new Date("2025-07-09T04:07:58.413Z"),
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