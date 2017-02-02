jQuery(function ($) {

//var audio = new Audio('music/horse.ogg');
//var audio = 0;

var index=0,
    playing=false,
    mediaPath='music/',
    extension='.ogg',
    tracks = [{ 
                "track": 1,
                "artist": "Céline Dion",
                "name": "Water and a Flame",
                "length": "03:43",
                "file": "1",
                "extension": ".mp3"
            },
            { 
                "track": 2,
                "artist": "Rihanna",
                "name": "Stay ft. Mikky Ekko",
                "length": "04:08",
                "file": "2",
                "extension": ".mp3"
            },
            { 
                "track": 3,
                "artist": "Kwabs",
                "name": "Perfect Ruin",
                "length": "04:22",
                "file": "3",
                "extension": ".mp3"
            }],
    trackCount = tracks.length,
    npTitle = $('#npTitle')
    audio = $("#audio1").bind('play', function(){
       playing=true;
   }).bind('pause', function(){
      playing=false;
   }).bind('ended', function(){
      console.log("kovi");
      if((index + 1) < trackCount){
         index++;
         loadTrack(index);
         audio.play();
      } else {
         audio.pause();
         index = 0;
         loadTrack(index);
      }
   }).get(0),
   btnPrev = $('#btnPrev').click(function(){
      if((index - 1) > -1){
         index--;
         loadTrack(index);
         if (playing){
            audio.play();
         }
      } else{
         audio.pause();
         index = 0;
         loadTrack(index);
      }
   }),
   btnNext = $('#btnNext').click(function(){
      if((index + 1) < trackCount){
         index++;
         loadTrack(index);
         if (playing){
            audio.play();
         } else {
            audio.pause();
            index = 0;
            loadTrack(index);
         }
      }
   }),
      loadTrack = function (id){
      npTitle.text(tracks[id].name);
      index = id;
      audio.src=mediaPath + tracks[id].file + tracks[id].extension;
   },
      playTrack = function (id){
      loadTrack(id);
      audio.play();
   };
   loadTrack(index);
});
