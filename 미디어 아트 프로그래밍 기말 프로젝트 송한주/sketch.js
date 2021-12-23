let x = 0;
let y = 480;
let w = 15;
let h = 20;

 function setup() {

  

 	createCanvas(820, 500);
     
     img = loadImage('data/blue keyy.png');
     img1 = loadImage('data/bettyy.png');
     img2 = loadImage('data/man.png');
     img3 = loadImage('data/kamilla rose.png');
     img4 = loadImage('data/winkies.png');
     img5 = loadImage('data/winkies shot.jpg');
     img6 = loadImage('data/old couple.png');
     img7 = loadImage('data/Old couple.jpg');
     img8 = loadImage('data/gun man.png');
     img9 = loadImage('data/gun man.jpg');
     img10 = loadImage('data/winkies shot4.jpg');
     img11 = loadImage('data/winkies shot2.jpg');
     img12 = loadImage('data/cowboy.png');
     img13 = loadImage('data/cowboy shot 4.jpg');
     img14 = loadImage('data/blue key.jpg');
     img15 = loadImage('data/winkies shot 14.jpg');
     img16 = loadImage('data/camilla rose shot.jpg');
     img17 = loadImage('data/unknown shot.jpg');
     img18 = loadImage('data/unknow shott.png');
     img19 = loadImage('data/blue key shot 3.jpg');
     img20 = loadImage('data/Unknown shot 2.jpg');
     img21 = loadImage('data/Unknown shot3.jpg');
     img22 = loadImage('data/camilla rose shot 3.jpg');
     img23 = loadImage('data/cowboy shot2.jpg');
     img24 = loadImage('data/gun man shot 4.jpg');
     img25 = loadImage('data/betty shot.jpg');
     img26 = loadImage('data/blue key shot 4.jpg');
     img27 = loadImage('data/blue key shot 5.jpg');
     img28 = loadImage('data/winkies shot 8.jpg');
     img29 = loadImage('data/winkies shot7.jpg');
     img30 = loadImage('data/winkies shot 6.jpg');
     img31 = loadImage('data/old couple shot 2.jpg');
     img32 = loadImage('data/old coupe shot 5.jpg');
     img33 = loadImage('data/road .jpg');
     img34 = loadImage('data/winkies shot 16.jpg');
     img35 = loadImage('data/winkies shot 17.jpg');
     img36 = loadImage('data/winkies shot 18.jpg');
     img37 = loadImage('data/camilla rose.jpg');
     img38 = loadImage('data/blue.jpg');
     img39 = loadImage('data/blue key shot 6.jpg');

     


 }

 function draw() {
    background(img38); 

 for (let i = 0; i < width; i+= 15) {
 		let distance = abs(mouseX - i);
     fill(distance, 100, 100, 200);
     rect(i, height - 20, 15, 20);

     loadingImage();
 }
 }

 function loadingImage() {
 if ((mouseX > x) && (mouseX < x+w) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img5, 0, 480, 820, -500);
     image(img4, mouseX, 400, 150, 100);

     }
     else if ((mouseX > x+5) && (mouseX < x+w+5) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img10, 0, 480, 820, -500);
     image(img4, mouseX, 400, 150, 100);
 }
 else if ((mouseX > x+10) && (mouseX < x+w+10) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img34, 0, 480, 820, -500);
     image(img4, mouseX, 400, 150, 100);
 }
 else if ((mouseX > x+15) && (mouseX < x+w+15) &&
 (mouseY > y) && (mouseY < y+h)) {
     image(img35, 0, 480, 820, -500);
 image(img4, mouseX, 400, 150, 100);
}
else if ((mouseX > x+20) && (mouseX < x+w+20) &&
(mouseY > y) && (mouseY < y+h)) {
    image(img36, 0, 480, 820, -500);
image(img4, mouseX, 400, 150, 100);
}

  else if ((mouseX > x+40) && (mouseX < x+w+40) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img7, 0, 480, 820, -500);
     image(img6, mouseX, 400, 150, 100);      
 }
 else if ((mouseX > x+70) && (mouseX < x+w+70) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img9, 0, 480, 820, -500);
     image(img8, mouseX, 400, 150, 100);
 }
 else if ((mouseX > x+100) && (mouseX < x+w+100) &&
 (mouseY > y) && (mouseY < y+h)) {
     image(img14, 0, 480, 820, -500);
 image(img, mouseX, 400, 150, 100);
 }
 else if ((mouseX > x+140) && (mouseX < x+w+140) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img11, 0, 480, 820, -500);
     image(img4, mouseX, 400, 150, 100);
 }
 else if ((mouseX > x+170) && (mouseX < x+w+170) &&
 (mouseY > y) && (mouseY < y+h)) {
     image(img15, 0, 480, 820, -500);
 image(img4, mouseX, 400, 150, 100);

     }
     else if ((mouseX > x+190) && (mouseX < x+w+190) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img13, 0, 480, 820, -500);
     image(img12, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+200) && (mouseX < x+w+200) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img16, 0, 480, 820, -500);
     image(img3, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+220) && (mouseX < x+w+220) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img17, 0, 480, 820, -500);
     image(img18, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+240) && (mouseX < x+w+240) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img19, 0, 480, 820, -500);
     image(img, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+260) && (mouseX < x+w+260) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img37, 0, 480, 820, -500);
     image(img3, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+300) && (mouseX < x+w+300) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img20, 0, 480, 820, -500);
     image(img18, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+350) && (mouseX < x+w+350) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img21, 0, 480, 820, -500);
     image(img18, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+400) && (mouseX < x+w+400) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img22, 0, 480, 820, -500);
     image(img3, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+450) && (mouseX < x+w+450) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img39, 0, 480, 820, -500);
     image(img, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+550) && (mouseX < x+w+550) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img23, 0, 480, 820, -500);
     image(img12, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+570) && (mouseX < x+w+570) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img24, 0, 480, 820, -500);
     image(img8, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+590) && (mouseX < x+w+590) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img30, 0, 480, 820, -500);
     image(img4, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+600) && (mouseX < x+w+600) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img25, 0, 480, 820, -500);
     image(img4, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+620) && (mouseX < x+w+620) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img29, 0, 480, 820, -500);
     image(img4, mouseX, 400, 150, 100);

     }
     else if ((mouseX > x+640) && (mouseX < x+w+640) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img28, 0, 480, 820, -500);
     image(img4, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+650) && (mouseX < x+w+650) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img26, 0, 480, 820, -500);
     image(img, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+660) && (mouseX < x+w+660) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img31, 0, 480, 820, -500);
     image(img6, mouseX, 400, 150, 100);
     }
     else if ((mouseX > x+670) && (mouseX < x+w+670) &&
     (mouseY > y) && (mouseY < y+h)) {
         image(img32, 0, 480, 820, -500);
     image(img6, mouseX, 400, 150, 100);
     }
    }