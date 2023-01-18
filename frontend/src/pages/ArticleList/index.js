import {memo} from 'react'
import Article from '../Article'

const ArticleList = (props) =>{
    //数据没加载出来
    if(!props.articles){
        return(
            <h1 >
                加载中。。。
            </h1>
        )
    }

    //有文章：空数组
    if(props.articles.length === 0){
        <h1>一篇文章都没有耶</h1>
    }

    //有文章：非空数组
    return (
        <div>
            {/**文章数据 */}
            {
                props.articles.map(Article=>{
                    return <>item</>
                })
            }

            {/**分页 */}
            
        </div>
    )
}

export default ArticleList;