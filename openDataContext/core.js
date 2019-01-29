
/************************************************************************************************************************************/

if(wx.setUserCloudStorage){
	var value2 = Date.parse(new Date()).toString() + '_' + parseInt(Math.random() * 10000);
	wx.setUserCloudStorage({ KVDataList: [{ key: "score", value: value2 }] });
}
function beginCall(data) {
  let ctx = sharedCanvas.getContext("2d");
  ctx.clearRect(0, 0, sharedCanvas.width, sharedCanvas.height);
  var _dataStr = JSON.stringify(data)+":";
  for (let i = 0; i < _dataStr.length; i++) {
    let num = _dataStr.charCodeAt(i);
    let str = ("00000000" + num.toString(2)).slice(-9);
    for (let k = 0; k < 3; k++) {
      var r = Number(str.charAt(k * 3)) * 255;
      var g = Number(str.charAt(k * 3 + 1)) * 255;
      var b = Number(str.charAt(k * 3 + 2)) * 255;
      let i1 = i * 3 + k;
      var x = (i1 % sharedCanvas.width);
      var y = Math.floor(i1 / sharedCanvas.width);
      ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      ctx.fillRect(x, y, 1, 1);
    }
  }
}
function drawSaveFun(mainData, fun){
	wx.getFriendCloudStorage({
	  keyList: mainData.keys,
	  success: (res2) => {
		var myData = {};
		for(let i = 0;i<res2.data.length;i++){
		  let item = res2.data[i];
		  if(item.openid == mainData.myopenid){
			myData.nick = encodeURIComponent(item.nickname);
			myData.head = item.avatarUrl;
			break;
		  }
		}
		beginCall({isOK:true, data: myData});
	  },
	  fail: (res) => {
		beginCall({isOK:false, fail: res});
	  }
	})
}

export const wxdecode = {

    drawSaveFun: (mainData, fun) => {
        drawSaveFun(mainData, fun);
    }
}
