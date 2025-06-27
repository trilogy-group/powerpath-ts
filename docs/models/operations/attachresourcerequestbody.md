# AttachResourceRequestBody

## Example Usage

```typescript
import { AttachResourceRequestBody } from "@superbuilders/powerpath/models/operations";

let value: AttachResourceRequestBody = {
  componentResourceId: "<id>",
  order: 1529.19,
  parentId: "<id>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `componentResourceId`                                                         | *string*                                                                      | :heavy_check_mark:                                                            | The Sourced ID of the Component Resource to attach to the Lesson Plan         |
| `order`                                                                       | *number*                                                                      | :heavy_check_mark:                                                            | The order of the Lesson Plan Item                                             |
| `parentId`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | The Sourced ID of the parent Lesson Plan Item. It must reference a Component. |
| `skipped`                                                                     | *boolean*                                                                     | :heavy_minus_sign:                                                            | Whether the Lesson Plan Item is skipped for this user                         |