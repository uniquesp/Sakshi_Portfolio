$(document).ready(function(){
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerText = currentYear;
//################ navbar hide #############################

	$(window).scroll(function() {
	    if ($(document).scrollTop() > 200) {
	        $('.nav').addClass("hidden");
	    } else {
	        $('.nav').removeClass("hidden");
	    }
	});

//################ typing effect #############################
	function erasing_text_1(letter) {
            var string = letter;	
			var count = letter.length;
			function erase(){

				if(count == 0){
					clearInterval(time);
					typing_text_2();
				}else{
					letter = string.substr(0,count)
					count--;
					$("#developer").html(letter);
				}	
			}

			var time = setInterval(erase,80);
		}	


	function erasing_text_2(letter) {
            var string = letter;	
			var count = letter.length;
			function erase(){

				if(count == 0){
					clearInterval(time);
					typing_text();
				}else{
					letter = string.substr(0,count)
					count--;
					$("#developer").html(letter);
				}	
			}

			var time = setInterval(erase,80);
		}	
	

	function typing_text() {
            	
			var string = " DEVELOPER";
			var length = 11;
			var letter = "";
			var count = 1;
			function type(){

				if(count == length){
					clearInterval(time);
					erasing_text_1(letter);
					
				}else{
					letter = string.substr(0,count)
					count++;
					$("#developer").html(letter);
				}	
			}

			var time = setInterval(type,200);
		}	


	function typing_text_2() {
            	
			var string = " DESIGNER";
			var length = 10;
			var letter = "";
			var count = 1;
			function type(){

				if(count == length){
					clearInterval(time);
					erasing_text_2(letter);
				}else{
					letter = string.substr(0,count)
					count++;
					$("#developer").html(letter);
				}	
			}

			var time = setInterval(type,200);
		}			
     
 
	typing_text();

	function cursor(){

		$("#cursor").animate({
			opacity: 1,
		},'fast','swing').animate({
			opacity: 0,
		},'fast','swing')
	}

	setInterval(cursor,600);

//#################### skills animations ############################	



	var eventFired = false,
    objectPositionTop = ($('#skills').offset().top - 300);
    
	$(window).on('scroll', function() {

 		var currentPosition = $(document).scrollTop();
 		if (currentPosition > objectPositionTop && eventFired === false) {
  			 eventFired = true;

    		$('.progress-bar').each(function() {

      			$(this).animate({
        
        			width: $(this).data('percent') + '%'
      			}, 2000);
    		});
    	}
   }); 		
  		
//#################### navbar button scroll ############################	

	$(".page_scroll").click(function(){

		$('html,body').animate({

			scrollTop: $($(this).attr('href')).offset().top

		},'slow');
	})


//############## scroll button ##################################	


	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
	        document.getElementById("fix_button").style.display = "block";
	    } else {
	        document.getElementById("fix_button").style.display = "none";
	    }
	}

	$("#fix_button").click(function(){

		$('html,body').animate({

			scrollTop: 0

		},'slow');
	});

//##################### Form ###########################	



	$("form").submit(function(e){

		var error = ""
		if( $("#email").val() == "" ){

			error += "Email is requied."
		}
		else if( $("#subject").val() == ""){

			error += "Name is requied."
		}
		else if($("#message").val() == ""){

			error += "Message field is empty"
		}

		if(error != ""){
                  
            $("#error").html('<div class="alert alert-danger" role="alert">' + error + '</div>');      
            return false;
                  
        } else {
       	
	    	return true;
                  
        }
		

	})

  	//##################### scrolling div animations ###########################

  	$(function(){
  var $elems = $('.animateblock');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  
  $(window).scroll(function(){
    animate_elems();
  });
  
  function animate_elems() {
    wintop = $(window).scrollTop(); // calculate distance from top of window
 
    // loop through each item to check when it animates
    $elems.each(function(){
      $elm = $(this);
      
      if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item
      
      topcoords = $elm.offset().top; // element's distance from top of page in pixels
      
      if(wintop > (topcoords - (winheight*.75))) {
        // animate when top of the window is 3/4 above the element
        $elm.addClass('animated');
      }
    });
  } // end animate_elems()
});     
	

  	$("#box").click(function(){

  		$("html,body").animate({

  			scrollTop: $(this).scrollTop() + 500
  			},"slow")

  	});

});

//------------------------------------


$('#work .btn').hover(
    function() {
        var $this = $(this); // caching $(this)
        $this.data('defaultText', $this.text());
        $this.text("More Details");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('defaultText'));
    }
);



//##################### Skill chart ###########################

document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('skillsChart').getContext('2d');

    const data = {
        labels: [
            'JAVA', 'JavaScript', 'Python', 'PHP', 'JAVAEE', 'Express', 'Node',
            'SpringMVC', 'HTML', 'CSS', 'React', 'SpringBoot', 'Bootstrap',
            'MongoDB', 'MySQL', 'DSA'
        ],
        datasets: [
            {
                label: 'Programming Languages',
                data: [9, 8, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(100, 149, 237, 0.2)', // Light blue
                borderColor: 'rgba(100, 149, 237, 1)', // Darker blue
                borderWidth: 1
            },
            {
                label: 'Backend',
                data: [0, 0, 0, 7, 8, 7, 8, 7, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(70, 130, 180, 0.2)', // Steel blue
                borderColor: 'rgba(70, 130, 180, 1)', // Darker steel blue
                borderWidth: 1
            },
            {
                label: 'Web-development',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(135, 206, 250, 0.2)', // Sky blue
                borderColor: 'rgba(135, 206, 250, 1)', // Darker sky blue
                borderWidth: 1
            },
            {
                label: 'Frameworks',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 7, 7, 0, 0, 0],
                backgroundColor: 'rgba(0, 191, 255, 0.2)', // Deep sky blue
                borderColor: 'rgba(0, 191, 255, 1)', // Darker deep sky blue
                borderWidth: 1
            },
            {
                label: 'Database',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 0],
                backgroundColor: 'rgba(173, 216, 230, 0.2)', // Light blue
                borderColor: 'rgba(173, 216, 230, 1)', // Darker light blue
                borderWidth: 1
            },
            {
                label: 'Other',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
                backgroundColor: 'rgba(0, 191, 255, 0.2)', // Deep sky blue
                borderColor: 'rgba(0, 191, 255, 1)', // Darker deep sky blue
                borderWidth: 1
            }
        ]
    };

    const config = {
        type: 'radar',
        data: data,
		options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'black' // Dark black color for the angle lines
                    },
                    grid: {
                        color: 'black', // Dark black color for the grid lines
                        lineWidth: 1 // Adjust line width if needed
                    },
                    pointLabels: {
                        color: 'white', // White color for the labels
                        font: {
                            size: 18, // Font size for the labels
                            style: 'italic', // Font style for the labels
                            family: 'system-ui' // Font family for the labels
                        }
                    },
                    suggestedMin: 0,
                    suggestedMax: 10,
                    ticks: {
                        display: false // Hide ticks
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: 'white',
                        font: {
                            size: 14, // Font size for the legend labels
                            family: 'system-ui' // Font family for the legend labels
                        },
                        padding: 20 // Padding around each legend label
                    },
                    padding: {
                        top: 10, // Padding at the top of the legend
                        bottom: 10 // Padding at the bottom of the legend
                    },
                    margin: {
                        top: 20, // Margin at the top of the legend
                        bottom: 20 // Margin at the bottom of the legend
                    }
                },
                title: {
                    display: true,
                    text: 'Skills Distribution',
                    color: 'white',
                    font: {
                        size: 20,
						family: 'system-ui'
                    },
                    padding: {
                        top: 20, 
                        bottom: 10 
                    }
                }
            }
        },
    };

    const skillsChart = new Chart(ctx, config);
});










