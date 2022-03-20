## JSX

### 什么是JSX
- FaceBook起草的JS扩展语法
- 本质上是一个JS对象，会被babel编译，最终会被转换为React.createElement
- 每个JSX表达式，有且仅有一个根结点
```jsx
<></>
<React.Fragment></React.Fragment>
// 两种方式一样
```
- 每个JSX元素必须结束（XML规范）

### 在JSX中嵌入表达式
- 在jsx中写注释
```js
{/* 这个地方表示注释 */}
```
- 将表达式作为内容的一部分
    - null/undefined/false 是不显示到页面上的
    - 普通对象不能直接作为子元素
    - 可以放置react元素对象
    - 可以写数组，遍历每一项，作为子元素放入。即使是undefined，也会生成子元素，只是不显示而已
    - 将表达式作为元素属性,在jsx表达式中class要使用className。 
    - 属性使用小驼峰命名法
    - 防止注入攻击
        - 自动编码
        - dangerouslySetInnerHTML
        ```js
        const content = "<h1>title</h1><p>kdjfksfjl</p>"
        const div = (
            <div dangerouslySetInnerHTML>
            {{__html:content}}
            </dvi>
        )
        ```

### 元素的不可变性

- 虽然JSX元素是一个对象，但是该对象是不可变的
- 如果确实要更改元素的属性，需要重新创建新的JSX元素