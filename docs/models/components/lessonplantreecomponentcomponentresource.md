# LessonPlanTreeComponentComponentResource

## Example Usage

```typescript
import { LessonPlanTreeComponentComponentResource } from "@superbuilders/powerpath/models/components";

let value: LessonPlanTreeComponentComponentResource = {
  tenantId: "<id>",
  clientAppId: "<id>",
  id: "<id>",
  courseComponentSourcedId: "<id>",
  resource: {
    sourcedId: "<id>",
    status: "tobedeleted",
    title: "<value>",
    vendorResourceId: "<id>",
    metadataDetails: {
      type: "<value>",
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `tenantId`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `clientAppId`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | The ID of the lesson plan item                             |
| `sortOrder`                                                | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `metadata`                                                 | Record<string, *any*>                                      | :heavy_minus_sign:                                         | N/A                                                        |
| `courseComponentSourcedId`                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `resource`                                                 | [components.Resource](../../models/components/resource.md) | :heavy_check_mark:                                         | N/A                                                        |