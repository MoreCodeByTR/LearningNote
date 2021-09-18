# React Hook
[官方文档](https://zh-hans.reactjs.org/docs/hooks-faq.html)
## 案例
- [使用useEffect获取数据](https://codesandbox.io/s/jvvkoo8pq3?file=/src/index.js:513-518)
## 使用注意事项
- 只在React函数最顶层进行调用，确保Hook在每次调用的时候能够按照正确的顺序进行执行；
- 只能在React函数组件或自定义Hook中进行Hook调用，不能在类组件和普通javaScript函数进行调用；
## useEffect 
- useEffect通常会在组件挂载和更新之后进行执行；
- 在effect中return返回一个函数为清除函数，防止内存泄漏，不是必须要返回的，需要时使用；
- 当存在多个useEffect时，react将按照声明的顺序依次调用；
### FAQ
>1.为什么在组件内部调用UseEffect?
> 
> 答：可以直接访问组件的state或props，无需额外API

将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。我们不需要特殊的 API 来读取它 —— 它已经保存在函数作用域中。Hook 使用了 JavaScript 的闭包机制，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API。
```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

>2.如何跳过对UseEffect的调用?
> 
> 答：传递数组作为 useEffect 的第二个可选参数即可。类似componentDidUpdate 中添加对 prevProps 或 prevState 的比较逻辑。
```javascript
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    document.title = `You clicked ${this.state.count} times`;
  }
}
```
```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新

```


