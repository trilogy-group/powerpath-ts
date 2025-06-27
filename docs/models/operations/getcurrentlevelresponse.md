# GetCurrentLevelResponse

Success

## Example Usage

```typescript
import { GetCurrentLevelResponse } from "@superbuilders/powerpath/models/operations";

let value: GetCurrentLevelResponse = {
  gradeLevel: null,
  onboarded: true,
  availableTests: 5738.47,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `gradeLevel`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | The grade level of the current level in the subject                      |
| `onboarded`                                                              | *boolean*                                                                | :heavy_check_mark:                                                       | Whether the student has completed the onboarding process for the subject |
| `availableTests`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | The number of placement tests available for the subject                  |