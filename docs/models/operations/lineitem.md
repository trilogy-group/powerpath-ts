# LineItem


## Supported Types

### `operations.LineItemComponent`

```typescript
const value: operations.LineItemComponent = {
  assessmentLineItemSourcedId: "<id>",
  courseComponentSourcedId: "<id>",
  title: "<value>",
  results: [],
};
```

### `operations.LineItemResource`

```typescript
const value: operations.LineItemResource = {
  assessmentLineItemSourcedId: "<id>",
  courseComponentResourceSourcedId: "<id>",
  title: "<value>",
  results: [
    {
      status: "active",
      scoreDate: new Date("2023-10-14T09:48:15.092Z"),
      scoreStatus: "not submitted",
    },
  ],
};
```

