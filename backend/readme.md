# backend

规范：
- commonjs
- 模块化

生产依赖:
- express app实例
- dotenv 独立全局变量，将代码和配置内容分离
- mysql2
- ORM：sequelize

应用级中间件：
- cors
- expressjson (Parser解析数据用)

三方库：


开发依赖：
- nodemon 实时响应backend代码变化

重点：
- 数据库配置，链接
- 分析，建立model关系
- 路由模块化
- 路由和控制器分离
- 错误处理和错误转发到全部错误处理
- md5加密,bcrypt加密,jwt加签解签token
- 数据合法性校验

## 模块化

## dotenv

## express

## mysql2

## ORM：Sequelize

### 建立model

### 创建model关系

### 同步关系

## 路由

## 加密解密

## 合法校验

## Controller
**通用思路：**
- 验证接口权限
- 获取请求数据
- 验证请求数据(数据格式，业务逻辑)
- 返回请求数据

**需要实现的功能**
- 注册用户
- 用户登录
- 获取用户信息