# PlacementTest

## Example Usage

```typescript
import { PlacementTest } from "@superbuilders/powerpath/models/operations";

let value: PlacementTest = {
  componentResources: {},
  resources: {},
  resourcesMetadata: {},
  assessmentLineItems: {},
  assessmentResults: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `componentResources`                                                             | [operations.ComponentResources](../../models/operations/componentresources.md)   | :heavy_check_mark:                                                               | N/A                                                                              |
| `resources`                                                                      | [operations.Resources](../../models/operations/resources.md)                     | :heavy_check_mark:                                                               | N/A                                                                              |
| `resourcesMetadata`                                                              | [operations.ResourcesMetadata](../../models/operations/resourcesmetadata.md)     | :heavy_check_mark:                                                               | N/A                                                                              |
| `assessmentLineItems`                                                            | [operations.AssessmentLineItems](../../models/operations/assessmentlineitems.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `assessmentResults`                                                              | [operations.AssessmentResult](../../models/operations/assessmentresult.md)[]     | :heavy_check_mark:                                                               | N/A                                                                              |