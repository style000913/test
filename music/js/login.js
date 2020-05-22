{
  // pop('登录成功');
  /*
  1.找元素
  2.给登录添加事件
  3.处理事件函数
    3.1过滤
    3.2判断这个用户名和密码对不对
    3.3对的话弹登录功能，3秒后跳转到主index.html页面
  */
  let oExampleInputUsername = $('#exampleInputUsername'),
      oExampleInputPassword = $('#exampleInputPassword'),
      oLoginBtn = $('#login_btn');
  // console.log(oExampleInputUsername, oExampleInputPassword, oLoginBtn);
  oLoginBtn.addEventListener('click', loginFn);//绑定事件
  function loginFn () {
    // console.log('1');
    let user_name = oExampleInputUsername.value.trim(),
        user_pwd = oExampleInputPassword.value.trim();
    if(!oExampleInputUsername.value.trim()){
      pop('请输入用户名');
      return false;
    }
    if(!oExampleInputPassword.value.trim()){
      pop('请输入密码');
      return false;
    }
    //获取用户组的数据
    let music_user_list = JSON.parse(localStorage.getItem('music_user')) || [];
        len = music_user_list.length,
        flag = true;
    console.log(music_user_list);
    if(len === 0){
      pop('抱歉用户名或者密码不正确！');
      return false;
    }
    for(const item of music_user_list){
      if (item.user_name == user_name && item.pwd == user_pwd) {
        flag = false;
        break;
      }
    }
    if(!flag){
      //登录成功，三秒后跳转到主页
      pop('登录成功！');
      setTimeout(()=>{location.href = "index.html"},3000)
    }else{
      //账号密码错误，账号密码置空或者三秒后刷新页面
      pop('用户名或者密码错误！');
      setTimeout(()=>{location.reload()},3000) //三秒后刷新页面
      // oExampleInputUsername.value = oExampleInputPassword.value = '';//用户名密码置空
      return false;
    }
  }
}