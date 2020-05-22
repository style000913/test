
function $ (ele) {
  return document.querySelector(ele);
}
function $all (ele) {
  return document.querySelectorAll(ele);
}

/*模态框*/
function pop (msg) {
  /*找元素*/
  let oPopModel = $('#popModel'),//找打#popModel
    oPopModelModalBodyP = $('#popModel .modal-body p'); //找打#popModel.modal-body p,模态框的p标签（模态框的提示语句）
  // console.log(oPopModel);
  // console.log(oPopModelModalBodyP);
  /*找元素*/

  /*模态框的出现和提示语句的改变*/
  oPopModelModalBodyP.innerHTML = msg; //将oPopModelModalBodyP的值改变为msg的值
  oPopModel.style.display = "block";//将模态框的状态设置为block，让模态框出来
  /*模态框的出现和提示语句的改变*/

  /*
  3.3.2.1关闭按钮
  3.3.2隐藏 添加事件
  */
  /*找元素*/
  let oPopModelModalHeaderSpan = $('#popModel .modal-header span'),//找到模态框的打叉
    oPopModelModalFooterButton = $('#popModel .modal-footer button');//找到模态框的关闭按钮
  // console.log(oPopModelModalHeaderSpan,oPopModelModalFoterButton);
  /*找元素*/
  /*模态框隐藏*/
  oPopModelModalHeaderSpan.addEventListener('click', closePop, false);//oPopModelModalHeaderSpan绑定closePop事件
  oPopModelModalFooterButton.addEventListener('click', closePop, false);//oPopModelModalFooterButton绑定closePop事件
  function closePop () {
    // console.log(oPopModel);
    oPopModel.style.display = "none";//将oPopModel的状态设置为none，隐藏
  }
  /*模态框隐藏*/
}
/*模态框*/
/*
数据库拿去
*/
function getMusicSongsList(){
  let music_songs_list = 
  [
    {
        id:1,
        song_img:'../images/post_1.jpg',
        song:'Lorem ipsum',
        release_data:'March 20, 2014',
        reched:'250',
        genre:'pop',
        country:'UK',
        singer:'adipiscing',
        casting:['Donec'],
        description:'Cras quis eros eget sem vestibulum malesuada ac nec lectus. Sed sodales ultricies varius. Nullam eu lorem ac justo vestibulum tincidunt. Vivamus id erat sit amet sapien vulputate faucibus sed quis ex.'
    },
    {
        id:2,
        song_img:'../images/post_2.jpg',
        song:'consectetur',
        release_data:'March 20, 2014',
        reched:'260',
        genre:'pop',
        country:'UK',
        singer:'adipiscing',
        casting:['Donec','variu'],
        description:'Cras quis eros eget sem vestibulum malesuada ac nec lectus. Sed sodales ultricies varius. Nullam eu lorem ac justo vestibulum tincidunt. Vivamus id erat sit amet sapien vulputate faucibus sed quis ex.'
    },
    {
        id:3,
        song_img:'../images/post_3.jpg',
        song:'adipiscing',
        release_data:'March 20, 2014',
        reched:'270',
        genre:'pop',
        country:'UK',
        singer:'adipiscing',
        casting:['Donec','variu','mauris'],
        description:'Cras quis eros eget sem vestibulum malesuada ac nec lectus. Sed sodales ultricies varius. Nullam eu lorem ac justo vestibulum tincidunt. Vivamus id erat sit amet sapien vulputate faucibus sed quis ex.'
    },
    {
        id:4,
        song_img:'../images/post_4.jpg',
        song:'Donec nec',
        release_data:'March 20, 2014',
        reched:'280',
        genre:'pop',
        country:'UK',
        singer:'adipiscing',
        casting:['Donec','variu','mauris','sociis'],
        description:'Cras quis eros eget sem vestibulum malesuada ac nec lectus. Sed sodales ultricies varius. Nullam eu lorem ac justo vestibulum tincidunt. Vivamus id erat sit amet sapien vulputate faucibus sed quis ex.'
    }
  ];
  let music_songs_data_list = JSON.parse(localStorage.getItem('music_songs'))
  if(!music_songs_data_list){
    //存入最初的数据
    localStorage.setItem('music_songs',JSON.stringify(music_songs_list));
    music_songs_data_list = music_songs_list;
  }
  return music_songs_data_list;
}
function showBodyHtml(element,data){
  // console.log(data);
  let html =  '';
  data.forEach(item=>{
    html += `
      <div class="row my-3 py-3 border-grey-color">
				<div class="col-md-4">
          <img onclick="tipDetail(${item.id})" src="${item.song_img}" alt="${item.song_img.substr(10)}">
          
				</div>
				<div class="col-md-8" style="padding-left:10px;">
					<h2>${item.song}</h2>
					<p><strong>Release Date:${item.release_data}</strong></p>
					<p><strong>Reched:$${item.reched} million</strong></p>
					<p><strong>Genre:${item.genre}</strong></p>
					<p><strong>Country:${item.country}</strong></p>
					<p><strong>singer:${item.singer}</strong></p>
          <p>
            <strong>casting:</strong>`;
            item.casting.forEach((items,key)=>{
              if(key === item.casting.length-1){
                html+=`<a href="#">${items}</a>`;
              }else{
                html+=`<a href="#">${items}</a>,`;
              }
              // console.log(items);
            })
            html+=`</p></div></div>`;
  })
  element.innerHTML = html;
}
function tipDetail(goods_id){
  location.href = './detail.html?goods_id='+goods_id+'&teach_id=10';
}
// javascrpit:window.location.href='./detail.html?goods_id=${item.id}'

/* url参数获取*/
function getLocalSearch(){
  let goods_id = location.search;
    
  goods_id = goods_id.substr(1);

  goods_id = goods_id.split('&');

  let data = {}; //定义一个接受的对象

  goods_id.forEach(item=>{
      item = item.split('=');
      data[item[0]] = item[1];
  })
  return data;
}
/* url参数获取*/

function getMusicSongData(goods_id){
  let music_songs_list = getMusicSongsList(),//所有音乐的集合
      music_songs_data = {};
        
    // console.log(music_songs_list);

    for(let item of music_songs_list){
        //匹配音乐id的数据
        if(item.id == goods_id){
            music_songs_data = item;
            break;
        }
    }
    console.log('public方法封装打印',music_songs_data);
    return music_songs_data;
}