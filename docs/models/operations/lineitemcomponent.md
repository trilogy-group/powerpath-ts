# LineItemComponent

## Example Usage

```typescript
import { LineItemComponent } from "@superbuilders/powerpath/models/operations";

let value: LineItemComponent = {
  type: "component",
  assessmentLineItemSourcedId: "<id>",
  courseComponentSourcedId: "<id>",
  title: "<value>",
  results: [],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"component"*                                                                                | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `assessmentLineItemSourcedId`                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `courseComponentSourcedId`                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `title`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `results`                                                                                    | [operations.GetCourseProgressResult1](../../models/operations/getcourseprogressresult1.md)[] | :heavy_check_mark:                                                                           | Assessment results for the component and student                                             |