var images=["Images/Mobile1.jpg","Images/Mobile2.jpg","Images/Mobile3.jpg","Images/Mobile4.jpg","Images/Mobile5.jpg","Images/Mobile6.jpg"];
       
       var i=0;
       function slide()
       {
           document.getElementById("Mobile1").src=images[i];
           if(i<images.length-1)
           {
               i=i+1;
           }
           else{
               i=0;
           }
           
       }
       setInterval(slide,2000);