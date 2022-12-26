//数据加密
const md5 = require('md5')

const HACK = 'HACK'

const md5Passwd = (passwd)=>{
    return new Promise((resolve,reject)=>{
        const md5PWD = md5(passwd + HACK)
        resolve(md5PWD)
    })
}


const matchPasswd = (oldMd5PWD,passwd)=>{
    return new Promise((resolve,reject)=>{
        const newMd5PWD = md5(passwd + HACK)
        if(oldMd5PWD === newMd5PWD){
            resolve(true)
        }else{
            reject(false)
        }
    })
}

module.exports = md5Passwd
module.exports = matchPasswd

async function test(){
    const passwd = 'abcd'
    const md5pwd = md5Passwd(passwd)
    console.log('md5pwd',md5pwd);

}
test()