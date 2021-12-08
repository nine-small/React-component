# 表单组件

利用上下文进行管理。

## 一套表单组件
属性： formData 用来存储整个表单包含的所有的值
方法： changeFormData 用来改变formData中的值

1. formData是一个对象，它的格式应该是这样的
```js
formData = {
    loginId:'xxxxx',
    loginPwd:'xxxxxx'
}
```
2. changeFormData有两个参数，name和val
```js
changeFormData = (name,val)=>{
    this.setState({
        formData:{
            ...this.statte.formData,
            [name]:val
        }
    })
}
```