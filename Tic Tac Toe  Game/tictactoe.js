var countClick; // use to test Draw situation
var buttonVal=0;// may be 0 or 1 
var arr=[]; // array to  store game data for winner calcuation

// function calcWinner use to calculate winner 
function calcWinner(x) {
			    	 document.getElementById(""+x+"").style.backgroundColor = (buttonVal == 0) ? "yellow" : "white";
			    	 document.getElementById(""+x+"").value = buttonVal;
			    	 document.getElementById(""+x+"").innerHTML = buttonVal;
			         document.getElementById(""+x+"").disabled = true;
			    	 document.getElementById("sr").innerHTML = "Restart";
					 arr[x]=buttonVal;// store current game data
					 countClick++;
					 if(arr.length>4){
						  if( (arr[0]+arr[1]+arr[2])==0 ||   (arr[0]+arr[1]+arr[2])==3 ||
							  (arr[3]+arr[4]+arr[5])==0 ||   (arr[3]+arr[4]+arr[5])==3 ||
							  (arr[6]+arr[7]+arr[8])==0 ||   (arr[6]+arr[7]+arr[8])==3 ||
							  (arr[0]+arr[3]+arr[6])==0 ||   (arr[0]+arr[3]+arr[6])==3 ||
							  (arr[1]+arr[4]+arr[7])==0 ||   (arr[1]+arr[4]+arr[7])==3 ||
							  (arr[2]+arr[5]+arr[8])==0 ||   (arr[2]+arr[5]+arr[8])==3 ||
							  (arr[0]+arr[4]+arr[8])==0 ||   (arr[0]+arr[4]+arr[8])==3 ||
							  (arr[6]+arr[4]+arr[2])==0 ||   (arr[6]+arr[4]+arr[2])==3 ){
								  document.getElementById("winner").innerHTML = "Player_"+buttonVal +" won this game !!";
						    	  var arrButton = document.getElementsByClassName("button");
						    	  for (i = 0; i <9; i++)
						    		  arrButton[i].disabled=true;
						    	  return;
					      }//inner if
					      if(countClick==9)
							  document.getElementById("winner").innerHTML = "Match Draw!!";
					  }//outer if
			    	  buttonVal = (buttonVal == 0) ? 1 : 0;
					  console.log(countClick);
}// function calcWinner

// function loadGame will load game on click on Start/Restart 
function loadGame(){
					countClick=0;
			    	document.getElementById("sr").innerHTML = "Game On !!";
			    	document.getElementById("winner").innerHTML = "A Beautiful Mind";
		    		var buttonHtml = "";
		    		for (i = 0; i <9; i++) { 
		    			arr.length=0;// clear data of previous game
						if(i==2 || i==5)
							buttonHtml=buttonHtml + "<button class=\"button\" "+"id=\"" +i+"\" onclick=\"calcWinner(this.id)\" value=\"\"></button><br> " ;
						else
							buttonHtml=buttonHtml + "<button class=\"button\" "+"id=\"" +i+"\" onclick=\"calcWinner(this.id)\" value=\"\"></button> " ;
				  	}//for;
			    	document.getElementById("b").innerHTML =   buttonHtml ;
					document.getElementById("b").style.background = "grey";

}// function loadGame
      