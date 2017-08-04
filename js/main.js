(function () {   
    var config = {
    	    apiKey: "AIzaSyD8EaCZIliPuXSeitm86zaOkR1XxoWzbcQ",
    	    authDomain: "cerita-lucu-2844d.firebaseapp.com",
    	    databaseURL: "https://cerita-lucu-2844d.firebaseio.com",
    	    projectId: "cerita-lucu-2844d",
    	    storageBucket: "",
    	    messagingSenderId: "1041028653269"
    	  };
    
    var list_data = document.getElementById("list-data");
    
    var defaultApp = firebase.initializeApp(config);

    var defaultDatabase = defaultApp.database();
    defaultDatabase = firebase.database();
    
    var result=[];
    
    var ref = firebase.database().ref('/lucus/').orderByChild('title');
	
	var idx_data=0;
  	ref.on('child_added', function(datas) {
		if(datas.val()!=null){
    		result.push({
    			'title': datas.val().title,
    			'content': datas.val().content
    		});

	  	    var li_form=document.createElement('li');
	  	    li_form.innerHTML = datas.val().title;
	  	    li_form.setAttribute("class", "ui-li-static cerita-list");
	  	    li_form.setAttribute("id", "data"+idx_data);
	  	    list_data.appendChild(li_form);
	  	    
	  	    ++idx_data;
		}
  	});
    
  	function settingList(){
  		list_data.innerHTML="";

   	 	var wk_form=document.createElement('li');
  	    wk_form.innerHTML = "Welcome to wkwkwk land...";
  	    wk_form.setAttribute("class", "ui-group-index");
  	    list_data.appendChild(wk_form);	
  		console.log(result);
    	for(var i=0;i<result.length;++i){
       	 	var li_form=document.createElement('li');
	  	    li_form.innerHTML = result[i].title;
	  	    li_form.setAttribute("class", "ui-li-static cerita-list");
	  	    li_form.setAttribute("id", "data"+i);
	  	    list_data.appendChild(li_form);	
    	}
  	}
    
    $('body').on('click', '.cerita-list',function(){
    	var row_id = $(this).attr('id').substr(4);
        var title_detail=document.getElementById('title-detail');
        var content_detail=document.getElementById('content-detail');
        
        title_detail.innerHTML="";
        title_detail.innerHTML=result[row_id].title;

        content_detail.innerHTML="";
        content_detail.innerHTML=result[row_id].content;
        
	    tau.openPopup("#btn_popup");
    });
    
    $('#btn-close').on('click', function(ev)
   {
      tau.closePopup();
   });
	
	window.addEventListener("tizenhwkey", function (ev) {
		var activePopup = null,
			page = null,
			pageid = "";

		if (ev.keyName === "back") {
			activePopup = document.querySelector(".ui-popup-active");
			page = document.getElementsByClassName("ui-page-active")[0];
			pageid = page ? page.id : "";

			if (pageid === "one" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
}());


