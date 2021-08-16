canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");

mars_image_array=["mars.1.jpg","mars.2.jpg","mars.3.jpg","mars.4.jpg"];
random_numbers=Math.floor(Math.random()*4);
console.log(random_numbers)


rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

background_Image=mars_image_array[random_numbers];
console.log("background_Image"+background_Image);
rover_image="rover.png";

function add()  {
    background_Image_tag=new Image();
    background_Image_tag.onload=uploadbackground;
    background_Image_tag.src=background_Image;
    
    rover_Image_tag=new Image();
   rover_Image_tag.onload=uploadrover;
    rover_Image_tag.src=rover_image;
    
} 

function uploadbackground()  {
    ctx.drawImage(background_Image_tag,0,0,canvas.width,canvas.height);
} 

function uploadrover()  {
    ctx.drawImage(rover_Image_tag,rover_x,rover_y,rover_width,rover_height);
} 

window.addEventListener("keydown" ,my_keydown);
function my_keydown(e)   {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38')  {
        up();
        console.log("up");  
    }
    if (keypressed=='40')  {
        down();
        console.log("down");
    }

    if (keypressed=='37')  {
        left();
        console.log("left");
    }

    if (keypressed=='39')  {
        right();
        console.log("right");
    }
}

function up()  {
    if(rover_y>=0)  
    {
rover_y=rover_y-10;
console.log("when up arrow is pressed, x=" + rover_x + "y=" + rover_y);
uploadbackground();
uploadrover();
    }
}

function down()  {
    if(rover_y<=500)  
    {
rover_y=rover_y+10;
console.log("when down arrow is pressed, x=" + rover_x + "y=" + rover_y);
uploadbackground();
uploadrover();
    }
} 


function left()  {
    if(rover_x>=0)  
    {
rover_x=rover_x-10;
console.log("when left arrow is pressed, x=" + rover_x + "y=" + rover_y);
uploadbackground();
uploadrover();
    }
}


function right()  {
    if(rover_x<=700)  
    {
rover_x=rover_x+10;
console.log("when right arrow is pressed, x=" + rover_x + "y=" + rover_y);
uploadbackground();
uploadrover();
    }
}
