# UpdateStudentItemResponseRequest

## Example Usage

```typescript
import { UpdateStudentItemResponseRequest } from "@superbuilders/powerpath/models/operations";

let value: UpdateStudentItemResponseRequest = {
  studentId: "<id>",
  componentResourceId: "<id>",
  result: {
    status: "active",
    scoreDate: new Date("2025-10-10T01:11:16.050Z"),
    scoreStatus: "not submitted",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `studentId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `componentResourceId`                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [operations.UpdateStudentItemResponseResult](../../models/operations/updatestudentitemresponseresult.md) | :heavy_check_mark:                                                                                       | The student's result for the item, either a component or a componentResource                             |