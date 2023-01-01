//数据加密 md5方式
const md5 = require('md5')
const bcrypt = require('bcrypt')

const SALT = 10
const HACK = 'HACK'

//md5加密方法---------------------------------------------
const md5Passwd = (passwd)=>{
    return new Promise((resolve,reject)=>{
        const md5PWD = md5(passwd + HACK)
        if(md5PWD){
            resolve(md5PWD)
        }else{
            reject(false)
        }
        
    })
}



const md5MatchPasswd = (trueMd5PWD,passwd)=>{
    return new Promise((resolve,reject)=>{
        const newMd5PWD = md5(passwd + HACK)
        if(trueMd5PWD === newMd5PWD){
           resolve(true)
        }else{
           resolve(false)
        }
    })
}



//hash加密方法-----------------------------------------------
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



const hashMatchPasswd = (oldhashPWD,passwd)=>{
    return new Promise(async (resolve,reject)=>{
        const match = await bcrypt.compare(passwd, oldhashPWD)
        console.log(match)
    })
}

module.exports = {md5Passwd,md5MatchPasswd,hashMatchPasswd,hashPasswd}


//MD5 Test
// async function test1(){
//     const passwd = 'abcd'
//     const md5pwd = md5Passwd(passwd)
//     console.log('md5pwd',md5pwd);

// }
// test1()


//Hash Test
/* async function test2(){
    const passwd = 'abcd'
    const hashpwd = await hashPasswd(passwd)
    console.log('md5pwd',hashpwd);
    const match = await matchPasswd(hashpwd,'abcd')
    console.log("passwd match",match)
}
test2() */