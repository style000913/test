{
    /*
        演染商品主页面
        1.数据库设计
            1.1
            id
            song_img图片
            歌曲song
            出生日期release_data
            价格reched
            类型genre
            国家country
            歌手singer
            歌曲分类casting
            个人描述description 
        2.存储数据库数据
            music_songs_list = [
                {
                    id:1,
                    song_img:'../images/post_1.jpg',
                    song:Lorem ipsum,
                    release_data:March 20, 2014,
                    reched:250,
                    genre:pop,
                    country:UK,
                    singer:adipiscing,
                    casting:Donec,variu,mauris,sociis,
                    description:Cras quis eros eget sem vestibulum malesuada ac nec lectus. Sed sodales ultricies varius. Nullam eu lorem ac justo vestibulum tincidunt. Vivamus id erat sit amet sapien vulputate faucibus sed quis ex.
                },
                {
                    id:2
                    song_img:'../images/post_2.jpg'
                    song:consectetur
                    release_data:March 20, 2014
                    reched:260
                    genre:pop
                    country:
                    singer:adipiscing
                    casting:Donec,variu,mauris,sociis
                    description:Cras quis eros eget sem vestibulum malesuada ac nec lectus. Sed sodales ultricies varius. Nullam eu lorem ac justo vestibulum tincidunt. Vivamus id erat sit amet sapien vulputate faucibus sed quis ex.
                },
                {
                    id:3
                    song_img:'../images/post_3.jpg'
                    song:adipiscing
                    release_data:March 20, 2014
                    reched:270
                    genre:pop
                    country:UK
                    singer:adipiscing
                    casting:Donec,variu,mauris,sociis
                    description:Cras quis eros eget sem vestibulum malesuada ac nec lectus. Sed sodales ultricies varius. Nullam eu lorem ac justo vestibulum tincidunt. Vivamus id erat sit amet sapien vulputate faucibus sed quis ex.
                },
                {
                    id:4
                    song_img:'../images/post_4.jpg'
                    song:Donec nec
                    release_data:March 20, 2014
                    reched:280
                    genre:pop
                    country:UK
                    singer:adipiscing
                    casting:Donec,variu,mauris,sociis
                    description:Cras quis eros eget sem vestibulum malesuada ac nec lectus. Sed sodales ultricies varius. Nullam eu lorem ac justo vestibulum tincidunt. Vivamus id erat sit amet sapien vulputate faucibus sed quis ex.
                }
            ]
        3.拿去数据库数据
        4.渲染数据
    */
   //封装模块
let music_songs_list = getMusicSongsList();
// console.log(music_songs_list);
    /*
    1.动态渲染
        1.1找到要渲染的元素
        1.2遍历数据进行渲染
            1.2.1定义一个字符串
            1.2.2把字符串进行拼接
            1.2.3元素赋值
    */
   let oMusicSongs = $('#music_songs');
   showBodyHtml(oMusicSongs,music_songs_list);
}