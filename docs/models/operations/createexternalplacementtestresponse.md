# CreateExternalPlacementTestResponse

Success

## Example Usage

```typescript
import { CreateExternalPlacementTestResponse } from "@superbuilders/powerpath/models/operations";

let value: CreateExternalPlacementTestResponse = {
  lessonType: "placement",
  lessonId: "<id>",
  courseComponentId: "<id>",
  resourceId: "<id>",
  toolProvider: "<value>",
  vendorId: "<id>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `lessonType`                                                                                                         | [operations.CreateExternalPlacementTestLessonType](../../models/operations/createexternalplacementtestlessontype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `lessonId`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The sourcedId of the created external test reference (ComponentResource)                                             |
| `courseComponentId`                                                                                                  | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The sourcedId of the component (unit) containing the test                                                            |
| `resourceId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The sourcedId of the resource representing the external test                                                         |
| `launchUrl`                                                                                                          | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The URL to the external test system                                                                                  |
| `toolProvider`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The tool provider id                                                                                                 |
| `vendorId`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the test in the spreadsheet                                                                                |
| `courseIdOnFail`                                                                                                     | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The courseId to enroll the student in if they fail the placement test (optional)                                     |
| `grades`                                                                                                             | *number*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | The grades for the resource                                                                                          |