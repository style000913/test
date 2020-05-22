{
    /*
        1.先拿到goods_id
            1.1.window.location.href  location.search location.search.slice(1);
        2.通过goods_id从本地数据库匹配到这个商品对象
        3.查找对象
        4.通过商品对象渲染对象
    */

    let data = getLocalSearch();
    /*
    goods_id = data.goods_id; //es5写法
    let {goods_id} = getLocalSearch(); //es6写法
    */
    // console.log(data);
    let {goods_id,teach_id} = getLocalSearch(), //es6写法
        music_songs_data = getMusicSongData(goods_id),
        detailHtml = '',    
        oMusicDetail = $('#music-detail');
    // console.log(goods_id,teach_id);
    detailHTML = `
    <div class="h2">${music_songs_data.song}</div>
		<div class="row">
			<div class="col-md-4 py-3 px-3" style="border:1px solid rgba(83,34,80,.15);">
				<img class="img-fluid rounded" src="${music_songs_data.song_img}" alt="${music_songs_data.song_img.substr(10)}">
			</div>
			<div class="col-md-6">
				<div class="artical-details-info-right">
					<p><strong>Release Date:</strong>${music_songs_data.release_data}</p>
					<p><strong>Reched:</strong>$${music_songs_data.reched} million</p>
					<p><strong>Genre:</strong>${music_songs_data.genre}</p>
					<p><strong>Country:</strong> ${music_songs_data.country},</p>
					<p><strong>singer:</strong>${music_songs_data.singer}</p>
                    <p><strong>casting:</strong>`;
                    music_songs_data.casting.forEach((items,key)=>{
                        if(key === music_songs_data.casting.length-1){
                            detailHTML+=`<a href="#">${items}</a>`;
                        }else{
                            detailHTML+=`<a href="#">${items}</a>,`;
                        }
                      })
    detailHTML+=`
                    </p>
                <div class="dicription">
                    <p><strong>Description :</strong>${music_songs_data.description}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    oMusicDetail.innerHTML = detailHTML;
}