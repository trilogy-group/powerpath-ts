# LineItemResource

## Example Usage

```typescript
import { LineItemResource } from "@superbuilders/powerpath/models/operations";

let value: LineItemResource = {
  type: "resource",
  assessmentLineItemSourcedId: "<id>",
  courseComponentResourceSourcedId: "<id>",
  title: "<value>",
  results: [
    {
      status: "active",
      scoreDate: new Date("2024-10-13T09:48:15.092Z"),
      scoreStatus: "not submitted",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"resource"*                                                                                 | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `assessmentLineItemSourcedId`                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `courseComponentResourceSourcedId`                                                           | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `title`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `results`                                                                                    | [operations.GetCourseProgressResult2](../../models/operations/getcourseprogressresult2.md)[] | :heavy_check_mark:                                                                           | Assessment results for the resource and student                                              |