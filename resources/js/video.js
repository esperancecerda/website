var video_list = ["ESPECTRO.mp4", "TRAMP_HALL_CHIENS.mp4"];
var video_index = 0;
var video_player = null;

function onload (){
  console.log ("body loaded");
  video_player = document.getElementById("idle_video");
  video_player.setAttribute("src", video_list[video_index]);
  video_player.play();
}

function onVideoEnded (){
  console.log("video ended");
  if(video_index < video_list.length -1){
    video_index++;
  }
  else{
    video_index = 0;
  }
  video_player.setAttribute("src", video_list[video_index]);
  video_player.play();
}



---

var videoSource = ["./resources/videos/TRAMP_HALL_CHIENS.mp4",
                  "./resources/videos/Convo5.mp4",
                  "./resources/videos/ESPECTRO.mp4"];

var videoCount = videoSource.length;

document.getElementById("idle_video").setAttribute("src",videoSource[0]);

    function videoPlay(videoNum)
    {
document.getElementById("idle_video").setAttribute("src",videoSource[videoNum]);
document.getElementById("idle_video").load();
document.getElementById("idle_video").play();
}
document.getElementById('idle_video').addEventListener('ended',myHandler,false);
function myHandler() {
i++;
if(i == (videoCount-1)){
i = 0;
videoPlay(i);
}
else{
videoPlay(i);
}

     }
