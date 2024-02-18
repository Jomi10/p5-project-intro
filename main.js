function preload(){
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    fill("green");
    stroke("green");
    circle(50, 50, 50);
    fill("green");
    stroke("green");
    circle(550, 50, 50);
    fill("green");
    stroke("green");
    circle(50, 420, 50);
    fill("green");
    stroke("green");
    circle(550, 420, 50);
    fill("red");
    stroke("red");
    rect(75, 40, 455, 20);
    rect(75, 415, 455, 20);
    rect(35, 75, 20, 320);
    rect(540, 75, 20, 320)
    



}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}