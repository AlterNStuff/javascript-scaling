## What is this ?
This is a repo for a test website I made to implement scaling and centering a box using javascript. This is part of testing I'm doing for things I'll implement to my personal website.
It took me a while to understand so I'm posting it on github for anyone that might get a use out of it.

### How it works:
  I used window.innerHeight and window.innerWidth to get viewport size then did a bit of math:
  
  y = height
  scaley = box height
  posy = box y position
  scaley = 300px
  
  posy = (y/2) - (scaley/2) to get the position 
  
  and then
  
  if(y<305){
    scaley = y - 10;
  }

  to get modify the scale of the cube if the screen got to small

### Notable Mentions:
My friend PolyCat, he does way cooler stuff so check him out https://github.com/PolyCatDev
