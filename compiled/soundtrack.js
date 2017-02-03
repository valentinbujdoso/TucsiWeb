jQuery(function ($) {

var index=0,
   audio = new Audio(),
   playing=false,
   mediaPath='music/',
   extension='.ogg',
   tracks = [{ 
                "track": 0,
                "artist": "Céline Dion",
                "name": "Water and a Flame",
                "length": "03:43",
                "file": "1",
                "extension": ".mp3"
            },
            { 
                "track": 1,
                "artist": "Rihanna",
                "name": "Stay",
                "length": "04:08",
                "file": "2",
                "extension": ".mp3"
            },
            { 
                "track": 2,
                "artist": "Kwabs",
                "name": "Perfect Ruin",
                "length": "04:22",
                "file": "3",
                "extension": ".mp3"
            }],
   trackCount = tracks.length,
   npTitle = $('#npTitle')   
   btnPlay = $('#btnPlay').click(function(){
      if(playing == false)
      {
      audio.play();
      playing = true;
      } else {
      audio.pause();
      playing = false;
      }
   }),
   
   audio.addEventListener('ended', function(){
   if((index + 1) < trackCount)
   {
      index++; 
      loadTrack(index);
      this.play();
   } else {
      this.pause();
      index = 0;
      loadTrack(index);
   }
   }, false),
   
   
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
         console.log("Test1");
         index++;
         console.log(index);
         loadTrack(index);
         if (playing){
            audio.play();
         }
         } else {
            audio.pause();
            index = 0;
            loadTrack(index);
         }
   }),
      loadTrack = function (id){
      npTitle.text(tracks[id].name);
      index = id;
      audio.src=mediaPath + tracks[id].file + tracks[id].extension;
      console.log(audio.src);
   };
   console.log(index);
   loadTrack(index);
});
