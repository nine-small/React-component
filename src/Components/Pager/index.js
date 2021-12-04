import React, { Component } from 'react'
// 需要对传入的属性进行验证
import PropTypes from 'prop-types'
import './index.css'

export default class Pager extends Component {
    // 属性验证
    static propTypes = {
        total:PropTypes.number,
        page:PropTypes.number,
        limit:PropTypes.number,
        showPage:PropTypes.number,
        limitList:PropTypes.arrayOf(PropTypes.number),
        toPage:PropTypes.number
    }
    // 属性默认值
    static defaultProps = {
        total:100,
        page:1,
        limit:10,
        showPage:5,
        limitList:[5,10,20],
        toPage:1
    }
    constructor(props){
        super(props)
        this.state = {
            total:props.total,
            page:props.page,
            limit:props.limit,
            showPage:props.showPage,
            showData:this.getShowData(), 
            toPage:props.toPage,         
        }
    }
        // 根据当前的页码获取显示的最小页面
        getMin = ()=>{
            let min
            if(!this.state){
              min = this.props.page - Math.floor(this.props.showPage / 2)
            }else{
                min = this.state.page - Math.floor(this.state.showPage / 2)
            }
            min = min < 1 ? 1 : min;
            return min;
        }
        // 根据当前页码获取显示的最大页码
        getMax = ()=>{
            let max;
            let allPage = this.getAllPage();
            if(!this.state){
                max = this.props.page + Math.floor(this.props.showPage / 2);
            }else{
                max = this.state.page + Math.floor(this.state.showPage / 2);
            }
            max = max > allPage ? allPage : max;
            return max
        }
        // 获取显示的页码
        getShowData = ()=>{
            const min = this.getMin();
            const max = this.getMax();
            const showData = [];
            for(let i = min ; i <= max ; i++){
                showData.push(i)
            }
            return showData;
        }
        // 跳转页码
        changePage = (val)=>{
            this.setState({
                page:val,
                toPage:val
            },()=>{
                this.setState({
                    showData:[...this.getShowData()],
                })
                this.props.changePage && this.props.changePage(this.state.page)})
        }
        // 获取总页数
        getAllPage = ()=>{
            if(!this.state){
                return Math.ceil(this.props.total / this.props.limit)
            }else{
                return Math.ceil(this.state.total / this.state.limit)
            }
        }
        // 改变每页显示条数
        changeSize = (val)=>{
            this.setState({
                limit:val
            },()=>{
                this.changePage(1)
                this.props.changeSize && this.props.changeSize(val)
            })
        }


        handleToPage = (e)=>{
            if(e.which !== 13) return;
            const val = +e.target.value;
            if(val < 0 || val > this.getAllPage() || isNaN(val)){
                alert('最大页码为'+this.getAllPage()+'页')
                return
            } 
            this.setState({
                toPage:val
            })
            this.changePage(val)
        }
    render() {
        // 可以选择多少条数据--- 渲染
        const showLimitList = this.props.limitList.map(el=>{
            return <option value={el} key={el}>{`显示${el}条`}</option>
        })
        // 可见的页码数
        const showDataList = this.state.showData.map(el=>{
            return <li 
            className={this.state.page === el ? 'active' :""} 
            key={el} 
            onClick={()=>{
                this.changePage(el)
            }}>{el}</li>
        })
        return (
            <div>
                <ul className='turn-page'>
                    <li onClick={()=>{
                        if(this.state.page === 1) return 
                        this.changePage(1)
                    }} className={this.state.page === 1 ? "not" :""}>第一页</li>
                    <li onClick={()=>{
                        if(this.state.page === 1) return
                        this.changePage(this.state.page - 1)
                    }} className={this.state.page === 1 ? "not" :""}>上一页</li>
                    {showDataList}
                    <li onClick={()=>{
                        const allPage = this.getAllPage()
                        if(allPage === this.state.page) return 
                        this.changePage(this.state.page + 1)
                    }} className={this.getAllPage() === this.state.page ? 'not' : ''}>下一页</li>
                    <li onClick={()=>{
                        const allPage = this.getAllPage()
                        if(allPage === this.state.page) return
                        this.changePage(allPage)
                    }} className={this.getAllPage() === this.state.page ? 'not' : ''}>最后一页</li>
                    <select value={this.state.limit} onChange={(e)=>{
                        this.changeSize(e.target.value)
                    }}>
                        {showLimitList}
                    </select>
                    <input 
                    className='toPage' 
                    type="text" 
                    value={this.state.toPage} 
                    type='number' 
                    onChange={(e)=>this.setState({
                        toPage:e.target.value
                    })}
                    onKeyUp={this.handleToPage}/>
                </ul>
                

            </div>
        )
    }
}

// Pager.defaultProps = { }

