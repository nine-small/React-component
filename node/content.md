## Context

上下文：Context，表示做某一些事情的环境。

React中的上下文特点：

1. 当某个组件创建了上下文后，上下文中的数据，会被所有后代组件共享
2. 如果某个组件创建了上下文，会导致该组件不再纯粹
3. 一般情况下，用于第三方组件（通用组件）

### 旧的API

**创建上下文**

只有类组件才能创建上下文

1. 给类组件书写静态属性 childContextTypes，使用该属性对上下文中的数据类型进行约束
2. 添加实例方法  getChildContext，该方法返回的对象，即为上下文中的数据，该数据必须满足类型约束。该方法会在每一次render之后运行。

**使用上下文**

需求： 如果要使用上下文中的数据，组件必须有一个静态属性contextType，该属性描述了需要获取的上下文中的数据类型。

1. 可以在组件的构造函数中，通过第二个参数，获取上下文数据
2. **从自建的context属性中获取**
3. 在函数组件中，通过第二个参数，获取上下文数据。

上下文的数据不可以直接变化，最终都是通过状态改变。
在上下文中加入一个处理函数，可以用于后代组件更改上下文的数据。

### 新的API

旧版API存在严重的效率问题，并且容易导致滥用。

**创建上下文**

上下文是一个独立于组件的对象，该对象通过React.createContext(默认值)进行创建

返回值中的两个属性

1. Provider属性：一个组件，该组件会创建一个上下文，该组件有一个value属性，通过该属性，可以为其数据赋值。
    1. 同一个Provider，不要用到多个组件中，如果需要在其他组件中使用该数据，应该考虑将其数据提升到更高的层次。

2. Consumer属性：

**使用上下文中的数据**

要求： 
1. 在类组件使用，必须拥有静态属性：contextType，应赋值为上下文属性。

2. 在函数组件中，需要使用Consumer来获取上下文数据。
    1. Consumer是一个组件
    2. 她的子节点，是一个函数（她的props.children需要传递一个函数）

Consumer也可以在类组件中使用。

**属于细节**

如果，上下文提供者（Context.Provider)中的value属性发生变化（Object.js)
会导致该上下文提供的所有后代元素全部重新渲染，无论该子元素是否有优化，会跳过 shouldComponentUpdate 函数，无论 shouldComponentUpdate 返回值是什么。






























