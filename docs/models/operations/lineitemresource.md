# LineItemResource

## Example Usage

```typescript
import { LineItemResource } from "@superbuilders/powerpath/models/operations";

let value: LineItemResource = {
  assessmentLineItemSourcedId: "<id>",
  courseComponentResourceSourcedId: "<id>",
  title: "<value>",
  results: [
    {
      status: "tobedeleted",
      scoreDate: new Date("2023-07-28T17:10:23.139Z"),
      scoreStatus: "fully graded",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `assessmentLineItemSourcedId`                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `courseComponentResourceSourcedId`                                                           | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `title`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `results`                                                                                    | [operations.GetCourseProgressResult2](../../models/operations/getcourseprogressresult2.md)[] | :heavy_check_mark:                                                                           | Assessment results for the resource and student                                              |