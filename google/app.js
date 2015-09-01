

$(function(){
    
		
		//HEADER MENU 
		
		$('.guides').click(function(){
   $(".guidesHide").addClass("guidesShow");
   
   $(".forecasts").addClass("hide");
   
   $(".newsShow").addClass("newsHide");
   $(".newsShow").removeClass("newsShow");
   $(".mapsShow").addClass("mapsHide");
   $(".mapsHide").removeClass("mapsShow");
   $(".playersShow").addClass("playersHide");
   $(".playersHide").removeClass("playersShow");
   
  });
  
  $('.news').click(function(){
   
   $(".newsHide").addClass("newsShow");
   
   $(".forecasts").addClass("hide");
   
   $(".guidesShow").addClass(".guidesHide");
   $(".guidesHide").removeClass("guidesShow");
   $(".mapsShow").addClass("mapsHide");
   $(".mapsHide").removeClass("mapsShow");
   $(".playersShow").addClass("playersHide");
   $(".playersHide").removeClass("playersShow");
   
  });
  
  $('.maps').click(function(){
   
   $(".mapsHide").addClass("mapsShow");
   $(".forecasts").addClass("hide");
   
   $(".playersShow").addClass("playersHide");
   $(".playersHide").removeClass("playersShow");
   $(".newsShow").addClass("newsHide");
   $(".newsShow").removeClass("newsShow");
   $(".guidesShow").addClass(".guidesHide");
   $(".guidesHide").removeClass("guidesShow");
   
  });
  
  $('.players').click(function(){
   
   $(".playersHide").addClass("playersShow");
   $(".forecasts").addClass("hide");
   
   $(".newsShow").addClass("newsHide");
   $(".newsShow").removeClass("newsShow");
   $(".guidesShow").addClass(".guidesHide");
   $(".guidesHide").removeClass("guidesShow");
   $(".mapsShow").addClass("mapsHide");
   $(".mapsHide").removeClass("mapsShow");
   
  });
  //HEADER MENU END
  
  $(".language").hide();
  $(".languageRUS").hide();
  $(".changeRUS").addClass("change");
  $(".languageRUS").addClass("language");
  $(".change").click(function(){
	  $(".language").toggle();
	  
  });
		
  
		
		
    });
	
	$(document).ready(main);