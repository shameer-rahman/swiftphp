if (window.webkit) {
var native = window.webkit.messageHandlers.native
var clicks = 0
function sendCount(){
    
    var message = {"cmd":"increment","count":clicks,"callbackFunc":function(responseAsJSON){
        var response = JSON.parse(responseAsJSON)
        
        latitude = response['latitude']
        longitude = response['longitude']
        
        var myLatlng = new google.maps.LatLng(latitude, longitude);
	map.panTo(myLatlng);
	marker.setMap(null);
	addmarker(myLatlng)
        
        // document.querySelector("#messages_from_java").innerText = "Current location is " + longitude
    }.toString()}
    native.postMessage(message)
}
}

	function addmarker(latilongi) {
	    var marker = new google.maps.Marker({
	        position: latilongi,
	        draggable: true,
	        animation: google.maps.Animation.DROP,
	        map: map
	    });
	    map.setCenter(marker.getPosition())
	}

// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


myApp.onPageInit('form', function(page) {
                 

                 function initialize() {
        	 latitude = 25.204849
        	 longitude = 55.270783
        
                 var myLatlng = new google.maps.LatLng(latitude, longitude);
                 var myOptions = {
                 zoom: 12,
                 center: myLatlng,
                 mapTypeId: google.maps.MapTypeId.ROADMAP
                 }
                 map = new google.maps.Map(document.getElementById("googleMap"), myOptions);
                 TestMarker();
                 
                 // Function for adding a marker to the page.
                 function addMarker(location) {
                 marker = new google.maps.Marker({
                                                 position: location,
                                                 map: map,
                                                 animation: google.maps.Animation.DROP,
                                                 draggable:true
                                                 });
                 }
                 
                 // Testing the addMarker function
                 function TestMarker() {
                 CentralPark = new google.maps.LatLng(latitude, longitude);
                 addMarker(CentralPark);
                 }
                 }
                 

                 
                                  
                 initialize()
                 
                 
                 
});

myApp.onPageInit('days', function(page) {

if (window.webkit) {
function sendDays(){

    var aMessage = {'cmd':'hello', 'data':jQuery("#hrs2").text()}
    window.webkit.messageHandlers.native.postMessage(aMessage)
    
    var message = {"cmd":"getDays", "data": jQuery("#hrs2").text() ,"count":clicks,"callbackFunc":function(responseAsJSON){
        var response = JSON.parse(responseAsJSON)
        
        days = response['days'].toString()
        time = response['time'].toString()
        othertime = response['othertime'].toString()
        
        var temp = new Array();
        var temp2 = new Array();
        var temp3 = new Array();
        
	temp = days.split(",");
	temp2 = time.split(",");
	temp3 = othertime.split(",");
	
	
	
	jQuery('.day').each(function(index) {
		jQuery(this).text(temp[index])
	});
		
	var myPicker = myApp.picker({
	    input: '#picker-input',
	    container: '#picker-container',
	    toolbar: false,
	    rotateEffect: true,
	    cols: [
	       {
	         values: temp2
	       }
	     ]
	}); 
	
	var myPicker2 = myApp.picker({
	    input: '#picker-input2',
	    container: '#picker-container2',
	    toolbar: false,
	    rotateEffect: true,
	    cols: [
	       {
	         values: temp3
	       }
	     ]
	});
	
	
	var myPicker3 = myApp.picker({
		    input: '#picker-input3',
		    container: '#picker-container3',
		    toolbar: false,
		    rotateEffect: true,
		    cols: [
		       {
		         values: temp3
		       }
		     ]
		});
		
		
	var myPicker4 = myApp.picker({
		    input: '#picker-input4',
		    container: '#picker-container4',
		    toolbar: false,
		    rotateEffect: true,
		    cols: [
		       {
		         values: temp3
		       }
		     ]
		});
		
		
	var myPicker5 = myApp.picker({
		    input: '#picker-input5',
		    container: '#picker-container5',
		    toolbar: false,
		    rotateEffect: true,
		    cols: [
		       {
		         values: temp3
		       }
		     ]
		});
		
		
	var myPicker6 = myApp.picker({
		    input: '#picker-input6',
		    container: '#picker-container6',
		    toolbar: false,
		    rotateEffect: true,
		    cols: [
		       {
		         values: temp3
		       }
		     ]
		});
		
		
	var myPicker7 = myApp.picker({
		    input: '#picker-input7',
		    container: '#picker-container7',
		    toolbar: false,
		    rotateEffect: true,
		    cols: [
		       {
		         values: temp3
		       }
		     ]
		});		
	jQuery("#picker-container2").css('display', 'none');
jQuery("#picker-container3").css('display', 'none');
jQuery("#picker-container4").css('display', 'none');
jQuery("#picker-container5").css('display', 'none');
jQuery("#picker-container6").css('display', 'none');
jQuery("#picker-container7").css('display', 'none');
        
        // document.querySelector("#hrs2").innerText = othertime
    }.toString()}
    native.postMessage(message)

}

sendDays()
}
		
	
	
jQuery("a.day").click(function(ind){
    var index = jQuery(this).index();
    
    jQuery('a.day').each(function(index) {
		jQuery(this).removeClass('active');
    });
    
    jQuery(this).addClass('active');
	
   if (index == 0) {
   	jQuery("#picker-container").removeAttr("style");
	jQuery("#picker-container2").css('display', 'none');
	jQuery("#picker-container3").css('display', 'none');
	jQuery("#picker-container4").css('display', 'none');
	jQuery("#picker-container5").css('display', 'none');
	jQuery("#picker-container6").css('display', 'none');
	jQuery("#picker-container7").css('display', 'none');
   } else if (index == 1) {
	jQuery("#picker-container").css('display', 'none');
	jQuery("#picker-container2").removeAttr("style");
	jQuery("#picker-container3").css('display', 'none');
	jQuery("#picker-container4").css('display', 'none');
	jQuery("#picker-container5").css('display', 'none');
	jQuery("#picker-container6").css('display', 'none');
	jQuery("#picker-container7").css('display', 'none');
   } else if (index == 2) {
	jQuery("#picker-container").css('display', 'none');
	jQuery("#picker-container2").css('display', 'none');
	jQuery("#picker-container3").removeAttr("style");
	jQuery("#picker-container4").css('display', 'none');
	jQuery("#picker-container5").css('display', 'none');
	jQuery("#picker-container6").css('display', 'none');
	jQuery("#picker-container7").css('display', 'none');
   } else if (index == 3) {
	jQuery("#picker-container").css('display', 'none');
	jQuery("#picker-container2").css('display', 'none');
	jQuery("#picker-container3").css('display', 'none');
	jQuery("#picker-container4").removeAttr("style");
	jQuery("#picker-container5").css('display', 'none');
	jQuery("#picker-container6").css('display', 'none');
	jQuery("#picker-container7").css('display', 'none');
   } else if (index == 4) {
	jQuery("#picker-container").css('display', 'none');
	jQuery("#picker-container2").css('display', 'none');
	jQuery("#picker-container3").css('display', 'none');
	jQuery("#picker-container4").css('display', 'none');
	jQuery("#picker-container5").removeAttr("style");
	jQuery("#picker-container6").css('display', 'none');
	jQuery("#picker-container7").css('display', 'none');
   } else if (index == 5) {
	jQuery("#picker-container").css('display', 'none');
	jQuery("#picker-container2").css('display', 'none');
	jQuery("#picker-container3").css('display', 'none');
	jQuery("#picker-container4").css('display', 'none');
	jQuery("#picker-container5").css('display', 'none');
	jQuery("#picker-container6").removeAttr("style");
	jQuery("#picker-container7").css('display', 'none');
   } else if (index == 6) {
	jQuery("#picker-container").css('display', 'none');
	jQuery("#picker-container2").css('display', 'none');
	jQuery("#picker-container3").css('display', 'none');
	jQuery("#picker-container4").css('display', 'none');
	jQuery("#picker-container5").css('display', 'none');
	jQuery("#picker-container6").css('display', 'none');
	jQuery("#picker-container7").removeAttr("style");
   }
});
	

	

var price = jQuery("#price").text()
jQuery("#price2").text(price)

var hrs = jQuery("#hrs").text()
jQuery("#hrs2").text(hrs) 


jQuery(document).on('click', ".picker-item", function(){

	var cls = jQuery(this).parent().parent().parent().parent().parent().attr('id')
	var ind = cls.substr(cls.length - 1);
	var d = jQuery(".buttons-row").find("#"+ind).text();
	
	if (d == "S") {
		day = "Sunday"
	} else if (d == "M") {
		day = "Monday"
	} else if (d == "T") {
		day = "Tuesday"
	} else if (d == "W") {
		day = "Wednesday"
	} else if (d == "TH") {
		day = "Thursday"
	} else if (d == "F") {
		day = "Friday"
	} else if (d == "SA") {
		day = "Saturday"
	}

	if (jQuery(this).hasClass('active-item')){
		jQuery(this).removeClass('active-item');
		jQuery(this).css('color', '#000000');
	} else {			
		jQuery('#' + cls + ' .picker-item').each(function(index) {
		
			jQuery(this).removeClass('active-item');
			jQuery(this).css('color', '#000000');
	
		});		
		
		jQuery(this).addClass('active-item');
		jQuery(this).css('color', '#B4D053');
	}
	
		buttonSelector = 'active-item'; 
		if (jQuery(this).attr("class").search(buttonSelector) != -1) { 
			jQuery(".buttons-row").find("#"+ind).addClass("fill")
			if (jQuery("ul.summary li").hasClass(ind)) {
				jQuery("ul.summary li." + ind).find(".item-after").text(jQuery('#' + cls + ' .active-item').text())
			} else {
				jQuery("ul.summary").append('<li class="item-content no-padding ' + ind + '"><div class="item-inner"><div class="item-title">Every ' + day + '</div><div class="item-after">' + jQuery('#' + cls + ' .active-item').text() + '</div></div></li>');			
			}
			
		} else {
			//alert("remove #" + ind)
			jQuery(".buttons-row").find("#"+ind).removeClass("fill")
			jQuery("li." + ind).remove();
		}
	
	
});


jQuery('.chk').change(function() {

if(jQuery(".label-checkbox i").hasClass("fa-circle-thin")) {
	    jQuery(".label-checkbox i").removeClass('fa-circle-thin').addClass('fa-check-circle');
} else {
	    jQuery(".label-checkbox i").removeClass('fa-check-circle').addClass('fa-circle-thin');
}

	jQuery("ul.summary li").each(function() {
	    var ind = jQuery(this).attr('class') 
	    var val = jQuery(this).find(".item-title").text();

	    if(jQuery('.chk').is(':checked')) {
	    	jQuery(this).find(".item-title").text("Every " + val);
	    } else {
	        jQuery(this).find(".item-title").text(val.substring(5, val.length));
	    }
	});
});

 

});


myApp.onPageInit('services', function(page) {

    var isMaticSelected = false	
    var isFridgeSelected = false	
    var isCupboardSelected = false	
    var isWindowSelected = false	

    jQuery(".plus").click(function(){
        var hrs = jQuery("#hrs").text()
        if (hrs < 8) {
            var tot_hrs = parseInt(hrs) + parseInt(1);
            jQuery("#hrs").text(tot_hrs)
            computePrice()
        }
    });
    
    jQuery(".srv").click(function(){
    	var index = jQuery(this).index();
    	var hours =  jQuery("#hrs").text()
        
        if(index == 1) {
        	if (isMaticSelected == false) {
	        	jQuery(this).find('.item-title').css("color", "#B4D053");
	        	isMaticSelected = true	
	        } else {
	        	jQuery(this).find('.item-title').css("color", "#000");
        		isMaticSelected = false		        
	        }	
        
        }
        
        if(index == 2) {
        	if (isFridgeSelected == false) {
	        	jQuery(this).find('.item-title').css("color", "#B4D053");
	        	jQuery("#hrs").text(parseInt(hours) + parseInt(1));
	        	isFridgeSelected = true	
	        } else {
	        	jQuery(this).find('.item-title').css("color", "#000");
	        	jQuery("#hrs").text(parseInt(hours) - parseInt(1));
        		isFridgeSelected = false		        
	        }	
        
        }
        
        if(index == 3) {
        	if (isCupboardSelected == false) {
	        	jQuery(this).find('.item-title').css("color", "#B4D053");
	        	jQuery("#hrs").text(parseInt(hours) + parseInt(1));
	        	isCupboardSelected = true	
	        } else {
	        	jQuery(this).find('.item-title').css("color", "#000");
	        	jQuery("#hrs").text(parseInt(hours) - parseInt(1));
        		isCupboardSelected = false		        
	        }	
        
        }
        
        if(index == 4) {
        	if (isWindowSelected == false) {
	        	jQuery(this).find('.item-title').css("color", "#B4D053");
	        	jQuery("#hrs").text(parseInt(hours) + parseInt(1));
	        	isWindowSelected = true	
	        } else {
	        	jQuery(this).find('.item-title').css("color", "#000");
	        	jQuery("#hrs").text(parseInt(hours) - parseInt(1));
        		isWindowSelected = false		        
	        }	
        
        }
        
        computePrice()
        
    });
    
    jQuery(".minus").click(function(){
        var hours = jQuery("#hrs").text()
        var bed =  jQuery(".num").text()
        var bedrooms = bed.charAt(0)
        
        if (bedrooms == 6 && hours > 8 && isFridgeSelected == false && isCupboardSelected == false && isWindowSelected == false) {
            jQuery("#hrs").text(parseInt(hours) - parseInt(1));
            
        } else if (bedrooms == 5 && hours > 7 && isFridgeSelected == false && isCupboardSelected == false && isWindowSelected == false) {
            jQuery("#hrs").text(parseInt(hours) - parseInt(1));
            
        } else if (bedrooms == 4 && hours > 6 && isFridgeSelected == false && isCupboardSelected == false && isWindowSelected == false) {
            jQuery("#hrs").text(parseInt(hours) - parseInt(1));
            
        } else if (bedrooms == 3 && hours > 5 && isFridgeSelected == false && isCupboardSelected == false && isWindowSelected == false) {
            jQuery("#hrs").text(parseInt(hours) - parseInt(1));
            
        } else if (bedrooms == 2 && hours > 4 && isFridgeSelected == false && isCupboardSelected == false && isWindowSelected == false) {
            jQuery("#hrs").text(parseInt(hours) - parseInt(1));
            
        } else if (bedrooms == 1 && hours > 3 && isFridgeSelected == false && isCupboardSelected == false && isWindowSelected == false) {
            jQuery("#hrs").text(parseInt(hours) - parseInt(1));
            
        } else if (bedrooms == "S" && hours > 2 && isFridgeSelected == false && isCupboardSelected == false && isWindowSelected == false) {
            jQuery("#hrs").text(parseInt(hours) - parseInt(1));
        }
        
        computePrice()
        
        
    });
    
    function computePrice() {
        var totalHours = jQuery("#hrs").text()
        var maticPrice = 0
        var fridgePrice = 0
        var cupboardPrice = 0
        var windowPrice = 0
        
        if(isMaticSelected == true) {
            maticPrice = 40
        }
        
        if(isFridgeSelected == true) {
            fridgePrice = 10
        }
        
        if(isCupboardSelected == true) {
            cupboardPrice = 10
        }
        
        if(isWindowSelected == true) {
            windowPrice = 20
        }
        
        jQuery("#price").text(parseInt(totalHours) * parseInt(45) +  parseInt(maticPrice) + parseInt(fridgePrice) + parseInt(cupboardPrice) + parseInt(windowPrice))
    }
    
    function computeHour(hour) {
        var totalHours =  jQuery("#hrs").text()
        var maticHour = 0
        var fridgeHour = 0
        var cupboardHour = 0
        var windowHour = 0
        
        if(isMaticSelected == true) {
            maticHour = 0
        }
        
        if(isFridgeSelected == true) {
            fridgeHour = 1
        }
        
        if(isCupboardSelected == true) {
            cupboardHour = 1
        }
        
        if(isWindowSelected == true) {
            windowHour = 1
        }
        
        jQuery("#hrs").text(parseInt(hour) +  parseInt(maticHour) + parseInt(fridgeHour) + parseInt(cupboardHour) + parseInt(windowHour))
    }

    jQuery("#example_id").ionRangeSlider({
    min: 0,
    max: 6,
    step: 1,
    grid: true,
    values: ["Studio","1","2","3","4","5","6"],
    onChange: function (data) {
    
        var bedroom = data.from
        var bed = 0.14
        
        if (bedroom == "0") {
        	jQuery(".num").text('S”');
        	jQuery("#br").text("STUDIO FLAT");
        } else {
        	jQuery(".num").text(data.from + '”');
        	jQuery("#br").text("BEDROOMS");
        }
        
        if (bedroom == "0") {
        	bed = 0.14
        	computeHour(2)
        } else if (bedroom == "1") {
        	bed = 0.28
        	computeHour(3)
        } else if (bedroom == "2") {
        	bed = 0.43
        	computeHour(4)
        } else if (bedroom == "3") {
        	bed = 0.57
        	computeHour(5)
        } else if (bedroom == "4") {
        	bed = 0.71
        	computeHour(6)
        } else if (bedroom == "5") {
        	bed = 0.85
        	computeHour(7)
        } else if (bedroom == "6") {
        	bed = 1.0
        	computeHour(8)
        }
        jQuery('.first.circle').circleProgress('value', bed);
        computePrice()
    },
    onFinish: function (data) {
    
        var bedroom = data.from
        var bed = 0.14
        
        if (bedroom == "0") {
        	jQuery(".num").text('S”');
        	jQuery("#br").text("STUDIO FLAT");
        } else {
        	jQuery(".num").text(data.from + '”');
        	jQuery("#br").text("BEDROOMS");
        }
        
        if (bedroom == "0") {
        	bed = 0.14
        	computeHour(2)
        } else if (bedroom == "1") {
        	bed = 0.28
        	computeHour(3)
        } else if (bedroom == "2") {
        	bed = 0.43
        	computeHour(4)
        } else if (bedroom == "3") {
        	bed = 0.57
        	computeHour(5)
        } else if (bedroom == "4") {
        	bed = 0.71
        	computeHour(6)
        } else if (bedroom == "5") {
        	bed = 0.85
        	computeHour(7)
        } else if (bedroom == "6") {
        	bed = 1.0
        	computeHour(8)
        }
        jQuery('.first.circle').circleProgress('value', bed);
        computePrice()
    }
});

jQuery('.first.circle').circleProgress({
    value: 0.14,
    size: 100,
    startAngle: -Math.PI / 4 * 2,
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(100 * progress) + '<i>%</i>');
});
});


// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}