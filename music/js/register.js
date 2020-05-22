/*
需求分析
1.找元素
2.添加事件
3.事件函数
    3.1用户没有输入内容，弹窗提示请输入，不要alter
*/
{
  /*
  3.2利用js实现弹窗
      3.2.1.1.找到div
      3.2.1.2.把div的内容用js赋值
      3.2.1.3.优化的方式不断的赋值，加剧了浏览器的负荷，运行速度太慢，加快
      3.2.1.4.显示隐藏的方式来做这个 显示隐藏的方式
      3.2.1.5.找到div p标签
      3.2.1.6.给p标签的元素赋值
      3.2.1.7.更改div的显示和隐藏
  */

  /*按钮绑定事件*/
  ocontainerBtn = $('.container>.btn');
  ocontainerBtn.addEventListener('click', register.false);
  /*按钮绑定事件*/

  /*
  3.3注册功能
      3.3.1数据设计
          表musci_user
          字段id
              tel电话
              pwd密码
              money金额
      3.3.2数据保存逻辑
          3.3.2.1最外层为数组，数组包含对象，对象内容有id，tel，pwd，money
          3.3.2.1-例：[
                          {
                              id:1
                              tel:18859968955
                              pwd:123456
                              money:100
                          }
                          {
                              id:1
                              tel:18059578706
                              pwd:123456
                              money:100
                          }
                      ]
                      转换为JSON，保存至本地数据库
  */

  function register () {
    /*
    3.3.3注册之前让它过滤
        3.3.3.1找元素
        3.3.3.2过滤
            3.3.3.2.1、没有输入，不要存入数据库并提示请输入
            3.3.3.2.2、输入框用value获取值，p a div 标签用innerHTML获取值
            3.3.3.2.3、提示后，终止继续执行
        3.3.3.3假设只让用户输入手机号才能注册
            3.3.3.3.1、resExp（Regular expression）正则表达式
            3.3.3.3.2、正则表达式使用方法构造函数new RegExp，直接量//
            3.3.3.3.3、输入的值与正则表达式限制的条件不一样
            3.3.3.3.4、提示后，终止继续执行
    */

    /*找元素*/
    let o1exampleInputUsername = $('#exampleInputUsername'),//找到用户名输入框
      o1exampleInputPassword = $('#exampleInputPassword');//找到密码输入框
    //console.log(o1exampleInputUsername,o1exampleInputPassword);
    /*找元素*/

    /*用户名验证*/
    if (!o1exampleInputUsername.value) {
      pop('用户名为空，请输入用户名');
      return false;//阻止继续执行
    }
    //用户名限制只能为手机号
    /*
    手机规则 首位1 第二位345678 第三位0-9 共11位
    手机号正则
    reg1 = /^1[345678][0-9]{9}$/
    reg1 = /^1[345678]\d{9}$/
    */
    let reg1 = /^1[345678]\d{9}$/  //手机号的正则表达式
    //reg1.test()用于测试正则表达式
    if (!reg1.test(o1exampleInputUsername.value)) {
      pop('用户名格式错误，请重新输入');
      return false;//阻止继续执行
    }
    /*用户名验证*/

    /*密码验证*/
    if (!o1exampleInputPassword.value) {
      pop('密码为空，请输入密码');
      return false;//阻止继续执行
    }
    let reg2 = /^\d{6}$/ //六位数密码
    if (!reg2.test(o1exampleInputPassword.value)) {
      pop('密码格式错误，请重新输入');
      return false;//阻止继续执行
    }
    /*密码验证*/

    /*
    3.3.4注册前先看这个用户名注册过没有
        3.3.4.1拿出本地数据
        3.3.4.2拿出来的数据赋值命名：多数据命名用list，单数据用data
    */
    let music_user_list = JSON.parse(localStorage.getItem('music_user')) || [], //从数据库读取数据
      len = music_user_list.length, //定义数组长度
      flag = true; //定义开关
    // console.log(music_user_list);
    // console.log(music_user_list[0].user_name);

    // console.log(typeof(music_user_list));
    //第一个用户注册时，本地数据库为空
    // 看这个用户名注册过没有
    // forEach没办法跳出
    for (const item of music_user_list) {
      // console.log(item.user_name,o1exampleInputUsername.value);
      if (item.user_name == o1exampleInputUsername.value) {
        flag = false;
        // console.log(11);
        break;
      }
    }
    // 3.3.5如果注册过了提示注册失败
    if (!flag) {
      pop('抱歉！该用户名以注册过');
      setTimeout(() => {
        location.reload();
      }, 2000)
      return false;
    }
    //id如何自增
    //let 1+1 id:2 不行 删除 效果都可以，有bug
    // 假设用户数组为空，那么他就是1，假设不为空，则它的id是最后一个用户的id+1
    // 代码开发分宽松模式，严格模式  微信开发采取的就是严格模式
    let id = len === 0 ? 1 : music_user_list[len - 1].id + 1;
    console.log(id);
    // 把用户存入本地
    let userData = {
      id: id,
      user_name: o1exampleInputUsername.value,
      pwd: o1exampleInputPassword.value,
      money: 100
    }
    // console.log(userData);
    music_user_list.push(userData);
    localStorage.setItem('music_user', JSON.stringify(music_user_list));
    /*
    3.3.6新用户写入本地数据库，提示注册成功跳转登录
    */
    pop('恭喜你，注册成功');
    setTimeout(() => {
      location.href = "./login.html"
    }, 3000)
  }
}