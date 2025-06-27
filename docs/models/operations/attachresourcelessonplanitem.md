# AttachResourceLessonPlanItem

## Example Usage

```typescript
import { AttachResourceLessonPlanItem } from "@superbuilders/powerpath/models/operations";

let value: AttachResourceLessonPlanItem = {
  lessonPlanId: "<id>",
  type: "component",
  order: 4896.9,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `lessonPlanId`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | [operations.AttachResourceType](../../models/operations/attachresourcetype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `componentId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `componentResourceId`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `order`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `parentId`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `skipped`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |