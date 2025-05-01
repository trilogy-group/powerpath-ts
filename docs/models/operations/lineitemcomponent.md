# LineItemComponent

## Example Usage

```typescript
import { LineItemComponent } from "@superbuilders/powerpath/models/operations";

let value: LineItemComponent = {
  assessmentLineItemSourcedId: "<id>",
  courseComponentSourcedId: "<id>",
  title: "<value>",
  results: [
    {
      status: "active",
      scoreDate: new Date("2025-02-04T15:35:16.992Z"),
      scoreStatus: "submitted",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `assessmentLineItemSourcedId`                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `courseComponentSourcedId`                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `title`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `results`                                                                                    | [operations.GetCourseProgressResult1](../../models/operations/getcourseprogressresult1.md)[] | :heavy_check_mark:                                                                           | Assessment results for the component and student                                             |