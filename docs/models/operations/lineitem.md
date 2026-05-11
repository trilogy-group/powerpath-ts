# LineItem


## Supported Types

### `operations.LineItemComponent`

```typescript
const value: operations.LineItemComponent = {
  type: "component",
  assessmentLineItemSourcedId: "<id>",
  courseComponentSourcedId: "<id>",
  title: "<value>",
  results: [],
};
```

### `operations.LineItemResource`

```typescript
const value: operations.LineItemResource = {
  type: "resource",
  assessmentLineItemSourcedId: "<id>",
  courseComponentResourceSourcedId: "<id>",
  title: "<value>",
  results: [
    {
      status: "active",
      scoreDate: new Date("2024-10-13T09:48:15.092Z"),
      scoreStatus: "not submitted",
    },
  ],
};
```

