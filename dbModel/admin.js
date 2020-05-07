/** 
*
*  @author: Mr_Wei 
*  @version: 1.0.0 
*  @description: 管理员模型
*  @Date: 2019/10/16 11:05
*
*/ 

const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const adminModel = mongoose.Schema({
    email:{
        require:true,
        type:String
    },
    username:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String,
        set(val){
            return bcrypt.hashSync(val, 10)
        }
    },
    identity:{
        // require:true,
        type:String
    },
    date:{
        require:true,
        type:String
    }
})

module.exports = mongoose.model("Admin", adminModel)
var admin=mongoose.model("Admin", adminModel)
var wang=new admin({
    email: '459854025@qq.com',
    username: 'wang',
    password: '123456',
    date: '2020.5.6'
})
wang.save(function (err,ret) {
    if(err){
        console.log('保存失败')
    }else{
        console.log('保存成功')
    }
    
})