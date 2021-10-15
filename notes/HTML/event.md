Event 接口的只读属性 currentTarget 表示的，标识是当事件沿着 DOM 触发时事件的当前目标。它总是指向事件绑定的元素，而 Event.target 则是事件触发的元素。

  > Note: The value of event.currentTarget is only available while the event is being handled. If you console.log() the event object, storing it in a variable, and then look for the currentTarget key in the console, its value will be null. Instead, you can either directly console.log(event.currentTarget) to be able to view it in the console or use the debugger statement, which will pause the execution of your code thus showing you the value of event.currentTarget.

直接打印event对象是无法查看event.currentTarget, 但是可以打印event.currentTarget进行查看