		var i=0;
        var k=0;
        var arr=['Hey, I am Kshitiz Kamal!..','Nice to meet you..','Scroll to know more..'];
		var speed=130;
		var speed_rev=50;
		function typer()
		{
			
			if(i<arr[k].length){
			document.getElementById("text").innerHTML=arr[k].substring(0,i-1)+"|";
			i++;
			setTimeout(typer,speed);
			}
			else if(i==arr[k].length)
			{ for(var j=1;j<=100000000;j+=0.33);
			i++;
			setTimeout(typer,speed);
			}
			else
			{
			i-=2;
				typer_rev();
			}
		}
		function typer_rev()
		{
			
			if(i>0 && i!=0){
			document.getElementById("text").innerHTML=arr[k].substring(0,i-1)+"|";
			i--;
			setTimeout(typer_rev,speed_rev);
			}
			else
			{
                k=(k+1)%3;
				typer();
			}
		}