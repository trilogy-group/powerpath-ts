# GetNextPlacementTestResponse

Success

## Example Usage

```typescript
import { GetNextPlacementTestResponse } from "@superbuilders/powerpath/models/operations";

let value: GetNextPlacementTestResponse = {
  exhaustedTests: false,
  gradeLevel: null,
  lesson: "<value>",
  onboarded: true,
  availableTests: 9568.56,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `exhaustedTests`                                                         | *boolean*                                                                | :heavy_check_mark:                                                       | Whether the student has exhausted all placement tests                    |
| `gradeLevel`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | The grade level of the next placement test                               |
| `lesson`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | The sourcedId of the next placement test (ComponentResource)             |
| `onboarded`                                                              | *boolean*                                                                | :heavy_check_mark:                                                       | Whether the student has completed the onboarding process for the subject |
| `availableTests`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | The number of placement tests available for the subject                  |