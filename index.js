$(".main,.imagesin,.dots,.main-table,.result").hide()

var totalplayers =4
$(".startgame").click(()=>{
$(".horse")[0].play()
	while(totalplayers<1 || totalplayers>4){
		totalplayers=prompt("Enter total number of players...Min of 1 player and Max of 4 players are allowed ")
	}
	
	$(".main,.imagesin,.dots,.main-table").show()
	$(".first").hide()
})
var turn =1
var player1=1,player2=1,player3=1,player4=1
var totalplayersarr = [{name:".player1",position:1},{name:".player2",position:1},{name:".player3",position:1},{name:".player4",position:1}]
	var playersarr = []
	for (var i =0;i<totalplayers;i++){
         playersarr.push(totalplayersarr[i])
	}
var player1move = true
var player2move = true
var player3move = true
var player4move = true
var topheight=55
$(".roll").click(()=>{
		var  number = Math.floor(Math.random()*6)+1
	src = "dice-"+number+".png"
	$(".dice").attr("src",src)
	var moving = number*100
	var currentplayer=".player1"
	var nextplayer = null
	if(turn>playersarr.length){
		turn=1
	}
	if (turn===1){
		turn+=1
		currentplayer=".player1"
		nextplayer = ".player2"
	}
	else{
		if (turn===2){
			turn+=1
			currentplayer=".player2"
			nextplayer = ".player3"
	
		}
		else{
			if (turn===3){
	
				turn+=1
				currentplayer=".player3"
				nextplayer = ".player4"
		
			}
			else{
				if (turn===4){
		
					turn=1
					currentplayer=".player4"
					nextplayer = ".player1"
			
				}
			}
		}
	}
	if(currentplayer===".player1"){
			$(".displayplayer1").addClass("redround")
			$(".displayplayer2").removeClass("blueround")
			$(".displayplayer3").removeClass("greenround")
			$(".displayplayer4").removeClass("pinkround")
		}
		if(currentplayer===".player2"){
			$(".displayplayer1").removeClass("redround")
			$(".displayplayer2").addClass("blueround")
			$(".displayplayer3").removeClass("greenround")
			$(".displayplayer4").removeClass("pinkround")
		}
		if(currentplayer===".player3"){
			$(".displayplayer1").removeClass("redround")
			$(".displayplayer2").removeClass("blueround")
			$(".displayplayer3").addClass("greenround")
			$(".displayplayer4").removeClass("pinkround")
		}
		if(currentplayer===".player4"){
			$(".displayplayer1").removeClass("redround")
			$(".displayplayer2").removeClass("blueround")
			$(".displayplayer3").removeClass("greenround")
			$(".displayplayer4").addClass("pinkround")
		}
	var movingside="+"

	if(currentplayer===".player1"){
           if((player1+number)<=100){
     
      for(var i=1;i<=number;i++){

		var y = 100
		if(currentplayer===".player1"){
			$(".displayplayer1").css("color","red")
			$(".displayplayer2").css("color","white")
			$(".displayplayer3").css("color","white")
			$(".displayplayer4").css("color","white")
			player1+=1
		}
		if(currentplayer===".player2"){
			$(".displayplayer1").css("color","white")
			$(".displayplayer2").css("color","red")
			$(".displayplayer3").css("color","white")
			$(".displayplayer4").css("color","white")
			player2+=1
		}
		if(currentplayer===".player3"){
			$(".displayplayer1").css("color","white")
			$(".displayplayer2").css("color","white")
			$(".displayplayer3").css("color","green")
			$(".displayplayer4").css("color","white")
			player3+=1
		}
		if(currentplayer===".player4"){
			$(".displayplayer1").css("color","white")
			$(".displayplayer2").css("color","white")
			$(".displayplayer3").css("color","white")
			$(".displayplayer4").css("color","pink")
			player4+=1
		}
		
       if((player1>10)||(player2>10)||(player3>10)||(player4>10))
       {
         if(currentplayer===".player1"){
                if((player1-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player1move=!player1move
			y=0
		}
		       if(player1move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }

         if(currentplayer===".player2"){
                if((player2-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player2move=!player2move
			y=0
		}
		       if(player2move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }
         if(currentplayer===".player3"){
                if((player3-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player3move=!player3move
			y=0
		}
		       if(player3move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }
         if(currentplayer===".player4"){
                if((player4-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player4move=!player4move
			y=0
		}
		       if(player4move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }
       }
		$(currentplayer).css({"position":"absolute","left":movingside+"="+y+"px"})
		y+=100
	}

    }
	}
    
    
if(currentplayer===".player2"){
           if((player2+number)<=100){
     
      for(var i=1;i<=number;i++){

		var y = 100
		if(currentplayer===".player1"){
			player1+=1
		}
		if(currentplayer===".player2"){
			player2+=1
		}
		if(currentplayer===".player3"){
			player3+=1
		}
		if(currentplayer===".player4"){
			player4+=1
		}
		
       if((player1>10)||(player2>10)||(player3>10)||(player4>10))
       {
         if(currentplayer===".player1"){
                if((player1-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player1move=!player1move
			y=0
		}
		       if(player1move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }

         if(currentplayer===".player2"){
                if((player2-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player2move=!player2move
			y=0
		}
		       if(player2move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }
         if(currentplayer===".player3"){
                if((player3-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player3move=!player3move
			y=0
		}
		       if(player3move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }
         if(currentplayer===".player4"){
                if((player4-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player4move=!player4move
			y=0
		}
		       if(player4move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }
       }
		$(currentplayer).css({"position":"absolute","left":movingside+"="+y+"px"})
		y+=100
	}

    }
	}


	if(currentplayer===".player3"){
           if((player3+number)<=100){
     
      for(var i=1;i<=number;i++){

		var y = 100
		if(currentplayer===".player1"){
			player1+=1
		}
		if(currentplayer===".player2"){
			player2+=1
		}
		if(currentplayer===".player3"){
			player3+=1
		}
		if(currentplayer===".player4"){
			player4+=1
		}
		
       if((player1>10)||(player2>10)||(player3>10)||(player4>10))
       {
         if(currentplayer===".player1"){
                if((player1-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player1move=!player1move
			y=0
		}
		       if(player1move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }

         if(currentplayer===".player2"){
                if((player2-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player2move=!player2move
			y=0
		}
		       if(player2move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }
         if(currentplayer===".player3"){
                if((player3-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player3move=!player3move
			y=0
		}
		       if(player3move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }
         if(currentplayer===".player4"){
                if((player4-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player4move=!player4move
			y=0
		}
		       if(player4move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }
       }
		$(currentplayer).css({"position":"absolute","left":movingside+"="+y+"px"})
		y+=100
	}

    }
	}    

if(currentplayer===".player4"){
           if((player4+number)<=100){
     
      for(var i=1;i<=number;i++){

		var y = 100
		if(currentplayer===".player1"){
			player1+=1
		}
		if(currentplayer===".player2"){
			player2+=1
		}
		if(currentplayer===".player3"){
			player3+=1
		}
		if(currentplayer===".player4"){
			player4+=1
		}
		
       if((player1>10)||(player2>10)||(player3>10)||(player4>10))
       {
         if(currentplayer===".player1"){
                if((player1-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player1move=!player1move
			y=0
		}
		       if(player1move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }

         if(currentplayer===".player2"){
                if((player2-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player2move=!player2move
			y=0
		}
		       if(player2move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }
         if(currentplayer===".player3"){
                if((player3-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player3move=!player3move
			y=0
		}
		       if(player3move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }
         if(currentplayer===".player4"){
                if((player4-1)%10===0){
            
			$(currentplayer).css({"position":"absolute","top":"-=53px"})
			player4move=!player4move
			y=0
		}
		       if(player4move){
       	               movingside="+"
                      }
               else{
       	          movingside="-"
                    }
         }
       }
		$(currentplayer).css({"position":"absolute","left":movingside+"="+y+"px"})
		y+=100
	}

    }
	}
	
	if(player1===100){
	$(".main,.imagesin,.dots,.main-table,.first").hide()
    $(".result").show()
    $(".winner").append("Player 1")
    $(".fa").click(()=>{
    	location.reload()
    })
}
if(player2===100){
$(".main,.imagesin,.dots,.main-table,.first").hide()
    $(".result").show()
    $(".winner").append("Player 2")
    $(".fa").click(()=>{
    	location.reload()
    })
}
if(player3===100){
$(".main,.imagesin,.dots,.main-table,.first").hide()
    $(".result").show()
    $(".winner").append("Player 3")
    $(".fa").click(()=>{
    	location.reload()
    })
}
if(player4===100){
$(".main,.imagesin,.dots,.main-table,.first").hide()
    $(".result").show()
    $(".winner").append("Player 4")
    $(".fa").click(()=>{
    	location.reload()
    })
}

if(number===1||number===5||number===6){
   if(turn===1){
   	turn=4
   }
   else{
   turn-=1
}
}

	// snake at 23
	if(player1===23){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
			$(".player1").css({"position":"absolute","left":"420px","top":"508px"})
		player1=3
	},1000)
		
	}
	if(player2===23){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
         $(".player2").css({"position":"absolute","left":"420px","top":"511px"})
		player2=3
		},1000)
		
	}
	if(player3===23){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
          		$(".player3").css({"position":"absolute","left":"420px","top":"515px"})
		player3=3
		},1000)

	}
	if(player4===23){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
       $(".player4").css({"position":"absolute","left":"420px","top":"520px"})
		player4=3
		},1000)
		}

       //snake at 46
      if(player1===46){
      	$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
			$(".player1").css({"position":"absolute","left":"730px","top":"418px"})
		player1=26
	},1000)
		
	}
	if(player2===46){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
         $(".player2").css({"position":"absolute","left":"730px","top":"422px"})
		player2=26
		},1000)
		
	}
	if(player3===46){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
          		$(".player3").css({"position":"absolute","left":"730px","top":"427px"})
		player3=26
		},1000)

	}
	if(player4===46){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
       $(".player4").css({"position":"absolute","left":"730px","top":"431px"})
		player4=26
		},1000)
		}
    //snake at 59

    if(player1===59){
    	$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
			$(".player1").css({"position":"absolute","left":"330px","top":"368px"})
		player1=39
	},1000)
		
	}
	if(player2===59){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
         $(".player2").css({"position":"absolute","left":"330px","top":"372px"})
		player2=39
		},1000)
		
	}
	if(player3===59){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
          		$(".player3").css({"position":"absolute","left":"330px","top":"376px"})
		player3=39
		},1000)

	}
	if(player4===59){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
       $(".player4").css({"position":"absolute","left":"330px","top":"380px"})
		player4=39
		},1000)
		}

      //snake at 84

      if(player1===84){
      	$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
			$(".player1").css({"position":"absolute","left":"730px","top":"508px"})
		player1=6
	},1000)
		
	}
	if(player2===84){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
         $(".player2").css({"position":"absolute","left":"730px","top":"512px"})
		player2=6
		},1000)
		
	}
	if(player3===84){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
          		$(".player3").css({"position":"absolute","left":"730px","top":"516px"})
		player3=6
		},1000)

	}
	if(player4===84){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
       $(".player4").css({"position":"absolute","left":"730px","top":"520px"})
		player4=6
		},1000)
		}
     //snake at 91
     if(player1===91){
     	$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
			player1move=true
			$(".player1").css({"position":"absolute","left":"1130px","top":"188px"})
		player1=70
	},1000)
		
	}
	if(player2===91){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
			player2move=true
         $(".player2").css({"position":"absolute","left":"1130px","top":"192px"})
		player2=70
		},1000)
		
	}
	if(player3===91){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		player3move=true
		setTimeout(()=>{
          		$(".player3").css({"position":"absolute","left":"1130px","top":"196px"})
		player3=70
		},1000)

	}
	if(player4===91){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		player4move=true
		setTimeout(()=>{
       $(".player4").css({"position":"absolute","left":"1130px","top":"200px"})
		player4=70
		},1000)
		}
     //snake at 99
     if(player1===99){
     	$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
			$(".player1").css({"position":"absolute","left":"330px","top":"138px"})
		player1=79
	},1000)
		
	}
	if(player2===99){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
         $(".player2").css({"position":"absolute","left":"330px","top":"142px"})
		player2=79
		},1000)
		
	}
	if(player3===99){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
          		$(".player3").css({"position":"absolute","left":"330px","top":"146px"})
		player3=79
		},1000)

	}
	if(player4===99){
		$(".rattlesnake")[0].play()
	setTimeout(()=>{
		$(".rattlesnake")[0].pause()
	},900)
		setTimeout(()=>{
       $(".player4").css({"position":"absolute","left":"330px","top":"150px"})
		player4=79
		},1000)
		}

   //ladder
   //ladder at 5

    if(player1===5){
    	$(".laddersound")[0].play()
    	player1move=false
		setTimeout(()=>{
			$(".player1").css({"position":"absolute","left":"630px","top":"448px"})
		player1=16
	},1000)
		
	}
	if(player2===5){
		$(".laddersound")[0].play()
		player2move=false
		setTimeout(()=>{
         $(".player2").css({"position":"absolute","left":"630px","top":"452px"})
		player2=16
		},1000)
		
	}
	if(player3===5){
		$(".laddersound")[0].play()
		player3move=false
		setTimeout(()=>{
          		$(".player3").css({"position":"absolute","left":"630px","top":"456px"})
		player3=16
		},1000)

	}
	if(player4===5){
		$(".laddersound")[0].play()
		player4move=false
		setTimeout(()=>{
       $(".player4").css({"position":"absolute","left":"630px","top":"460px"})
		player4=16
		},1000)
		}

     //ladder at 20
     if(player1===20){
     	$(".laddersound")[0].play()
     	player1move=true
		setTimeout(()=>{
			$(".player1").css({"position":"absolute","left":"230px","top":"82px"})
		player1=81
	},1000)
		
	}
	if(player2===20){
		$(".laddersound")[0].play()
		player2move=true
		setTimeout(()=>{
         $(".player2").css({"position":"absolute","left":"230px","top":"86px"})
		player2=81
		},1000)
		
	}
	if(player3===20){
		$(".laddersound")[0].play()
		player3move=true
		setTimeout(()=>{
          		$(".player3").css({"position":"absolute","left":"230px","top":"90px"})
		player3=81
		},1000)

	}
	if(player4===20){
		$(".laddersound")[0].play()
		player4move=true
		setTimeout(()=>{
       $(".player4").css({"position":"absolute","left":"230px","top":"94px"})
		player4=81
		},1000)
		}
     //ladder at 30
     if(player1===30){
     	$(".laddersound")[0].play()
     	player1move=false
		setTimeout(()=>{
			$(".player1").css({"position":"absolute","left":"1130px","top":"342px"})
		player1=31
	},1000)
		
	}
	if(player2===30){
		$(".laddersound")[0].play()
		player2move=false
		setTimeout(()=>{
         $(".player2").css({"position":"absolute","left":"1130px","top":"346px"})
		player2=31
		},1000)
		
	}
	if(player3===30){
		$(".laddersound")[0].play()
		player3move=false
		setTimeout(()=>{
          		$(".player3").css({"position":"absolute","left":"1130px","top":"350px"})
		player3=31
		},1000)

	}
	if(player4===30){
		$(".laddersound")[0].play()
		player4move=false
		setTimeout(()=>{
       $(".player4").css({"position":"absolute","left":"1130px","top":"354px"})
		player4=31
		},1000)
		}

    //ladder at 32
     if(player1===32){
     	$(".laddersound")[0].play()
     	player1move=true
		setTimeout(()=>{
			$(".player1").css({"position":"absolute","left":"1030px","top":"82px"})
		player1=89
	},1000)
		
	}
	if(player2===32){
		$(".laddersound")[0].play()
		player2move=true
		setTimeout(()=>{
         $(".player2").css({"position":"absolute","left":"1030px","top":"86px"})
		player2=89
		},1000)
		
	}
	if(player3===32){
		$(".laddersound")[0].play()
		player3move=true
		setTimeout(()=>{
          		$(".player3").css({"position":"absolute","left":"1030px","top":"90px"})
		player3=89
		},1000)

	}
	if(player4===32){
		$(".laddersound")[0].play()
		player4move=true
		setTimeout(()=>{
       $(".player4").css({"position":"absolute","left":"1030px","top":"92px"})
		player4=89
		},1000)
		}

      //ladder at 37

       if(player1===37){
       	$(".laddersound")[0].play()
       	player1move=true
		setTimeout(()=>{
			$(".player1").css({"position":"absolute","left":"740px","top":"82px"})
		player1=86
	},1000)
		
	}
	if(player2===37){
		$(".laddersound")[0].play()
		player2move=true
		setTimeout(()=>{
         $(".player2").css({"position":"absolute","left":"740px","top":"86px"})
		player2=86
		},1000)
		
	}
	if(player3===37){
		$(".laddersound")[0].play()
		player3move=true
		setTimeout(()=>{
          		$(".player3").css({"position":"absolute","left":"740px","top":"90px"})
		player3=86
		},1000)

	}
	if(player4===37){
		$(".laddersound")[0].play()
		player4move=true
		setTimeout(()=>{
       $(".player4").css({"position":"absolute","left":"740px","top":"92x"})
		player4=86
		},1000)
		}

		//ladder at 53

		 if(player1===53){
		 	$(".laddersound")[0].play()
		 	player1move=true
		setTimeout(()=>{
			$(".player1").css({"position":"absolute","left":"840px","top":"188px"})
		player1=67
	},1000)
		
	}
	if(player2===53){



		$(".laddersound")[0].play()
		player2move=true
		setTimeout(()=>{
         $(".player2").css({"position":"absolute","left":"840px","top":"192px"})
		player2=67
		},1000)
		
	}
	if(player3===53){
		$(".laddersound")[0].play()
		player3move=true
		setTimeout(()=>{
          		$(".player3").css({"position":"absolute","left":"840px","top":"196px"})
		player3=67
		},1000)

	}
	if(player4===53){
		$(".laddersound")[0].play()
		player4move=true
		setTimeout(()=>{
       $(".player4").css({"position":"absolute","left":"840px","top":"200px"})
		player4=67
		},1000)
		}


})