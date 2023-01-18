import {memo} from 'react'

const PageSlice = props=>{
    //props:文章条数 / 当前第几页 

    //小于十条 不分页
    if(props.count <= 10){
        return null
    }

    //条数转换页数
    const pageNum = []
    for (let index = 1; index < Math.ceil(count/10); index++) {
        pageNum.push(index)
    }
    
}
export default memo(PageSlice)