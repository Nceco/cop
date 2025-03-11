---
title: Foo - 高级FooOne
atomId: FooOne
---
# FooOne - 高级FooOne

```tsx
/**
 * button: 按钮
 */
import React from "react";
import {Mbutton} from "cop";

const color = [
  {color: '#FF5B4F', count: 99},
  {color: '#00BBBD', count: 100, overflowCount: 99},
  {color: '#E5E6EB', count: 1000, overflowCount: 999},
  {color: '#FF5B4F', count: 7},
]
const Index = () => {
  return <Mbutton style={{width:'100px',height:'50px',background:'red'}} text={'nihao'} />
}

export default Index
```
