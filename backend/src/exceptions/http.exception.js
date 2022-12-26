//自定义错误处理
class HttpException extends Error{
    constructor(status,message,errors){
        //ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面，
        //然后再用子类的构造函数修改this。所以必须先调用super方法，
        //否则javascript引擎会报错。
        super()
        this.status = status
        this.message = message
        this.errors = errors
    }
}

module.exports = HttpException
