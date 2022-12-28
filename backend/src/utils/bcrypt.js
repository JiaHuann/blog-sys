//数据加密 md5方式
// const md5 = require('md5')

// const HACK = 'HACK'

// const md5Passwd = (passwd)=>{
//     return new Promise((resolve,reject)=>{
//         const md5PWD = md5(passwd + HACK)
//         resolve(md5PWD)
//     })
// }


// const matchPasswd = (oldMd5PWD,passwd)=>{
//     return new Promise((resolve,reject)=>{
//         const newMd5PWD = md5(passwd + HACK)
//         if(oldMd5PWD === newMd5PWD){
//             resolve(true)
//         }else{
//             reject(false)
//         }
//     })
// }

// module.exports = md5Passwd
// module.exports = matchPasswd

// async function test(){
//     const passwd = 'abcd'
//     const md5pwd = md5Passwd(passwd)
//     console.log('md5pwd',md5pwd);

// }
// test()

//或者直接用 npm的 bcrypt

const bcrypt = require('bcrypt')

const SALT = 10

//加密
const hashPasswd = (passwd)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.hash(passwd,SALT,(err,encrypted)=>{
            if(err){
                reject(err)
            }
            resolve(encrypted)
        })
    })
}


//比对
const matchPasswd = (oldhashPWD,passwd)=>{
    return new Promise(async (resolve,reject)=>{
        const match = await bcrypt.compare(passwd, oldhashPWD)
        console.log(match)
    })
}

module.exports = {matchPasswd,hashPasswd}

//测试2
/* async function test2(){
    const passwd = 'abcd'
    const hashpwd = await hashPasswd(passwd)
    console.log('md5pwd',hashpwd);
    const match = await matchPasswd(hashpwd,'abcd')
    console.log("passwd match",match)
}
test2() */