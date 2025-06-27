# AttachComponentLessonPlanItem

## Example Usage

```typescript
import { AttachComponentLessonPlanItem } from "@superbuilders/powerpath/models/operations";

let value: AttachComponentLessonPlanItem = {
  lessonPlanId: "<id>",
  type: "resource",
  order: 2270.29,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `lessonPlanId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `type`                                                                           | [operations.AttachComponentType](../../models/operations/attachcomponenttype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `componentId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `componentResourceId`                                                            | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `order`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `parentId`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `skipped`                                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |