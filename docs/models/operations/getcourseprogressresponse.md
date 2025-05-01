# GetCourseProgressResponse

Course progress

## Example Usage

```typescript
import { GetCourseProgressResponse } from "@superbuilders/powerpath/models/operations";

let value: GetCourseProgressResponse = {
  lineItems: [
    {
      assessmentLineItemSourcedId: "<id>",
      courseComponentSourcedId: "<id>",
      title: "<value>",
      results: [
        {
          status: "active",
          scoreDate: new Date("2024-07-17T03:13:52.996Z"),
          scoreStatus: "fully graded",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `lineItems`                                      | *operations.LineItem*[]                          | :heavy_check_mark:                               | Assessment line items for the course and student |