# AttachComponentRequestBody

## Example Usage

```typescript
import { AttachComponentRequestBody } from "@superbuilders/powerpath/models/operations";

let value: AttachComponentRequestBody = {
  componentId: "<id>",
  order: 1486.2,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `componentId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | The Sourced ID of the Course Component to attach to the Lesson Plan                |
| `order`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The order of the Lesson Plan Item                                                  |
| `parentId`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | The Sourced ID of the parent Lesson Plan Item. It must also reference a Component. |
| `skipped`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Whether the Lesson Plan Item is skipped for this user                              |