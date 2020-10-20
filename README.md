# CarCrasher
A quality experience game built in Phaser 2

Developed by: Anthony Jay P. Ansit

Date of submission: October 20, 2020

## Game Development Documentation 



### Project Description

This game design document describes the details for a browser 2D survival game. This documentation aims to describe and explain the development of the game from asset development to its implementation in game. Certain challenges that the developer had experienced while developing this game and what solutions they provide are also presented to broaden the scope of explanation that this documentation is trying to assert.



### Characters

A total of ten (10) characters are present in this game. Six (6) are different types of **Cars**, while the remaining four (4) are **Consumables** in game.

The main character of this game is a car enthusiast and also a modern daredevil. He alernates between different cars always improving his experience. He accepts any challenge that are thrown at him even if it cost his life. A healthy reminder though, the main character is immortal and can revert back everytime he fails to beat his previous record.
#### Cars

* **Black Car** - 1 of 2 default cars in your inventory
* **Taxi** - 1 of 2 default cars in your inventory
* **Red Car** - Can be purchased in shop. This car model and four (4) others is also used as a civillian car.
* **Police Car** - Can be purchased in shop. This car model and four (4) others is also used as a civillian car.
* **Van** - Can be purchased in shop. This car model and four (4) others is also used as a civillian car.
* **Truck** - Can be purchased in shop. This car model and four (4) others is also used as a civillian car.

#### Consumables

* **Hourglass** - It increases your time by one (1) which increases your survivability. 
* **Healthbox** - It increases your health by one hundred percent (100%) which greatly increases your survivability.
* **Booster** - It increases your speed while safe from collision.
* **Star** - It serves as the currency in game to purchase new cars.

### Story

In a seemingly peaceful day, one guy who calls himself a "daredevil" goes on a quest of beating his previous records by improving his survival rate on different highways. In the same day, the daredevil encountered problems on his quest. He realized that he is in fact running on a one way lane, and his only chance of survival is to avoid the cars that are moving towards him.

### Theme

This game depicts an intense survival, car chase vibe. The use of color in this game is intensified and is approriately used in accordance to what setting the character is in. Every element of this game harmonizes in creating an atmosphere that is intense and appropriate for survival games. It has also replicated the nuances of real highway events and car properties. This game should not show gory designs but instead designs that are somewhat similar to reality but have game-like experience.

### Art Style

This is a 2D isometric game, with high quality 2D sprites. Everything should be very colorful and feel alive, with highly animated scenarios and layered backgrounds.

### Music and Sounds

The music should stimulate an intense, almost 'car chase' sort of vibe. Every feature in the game should be accompanied with clear and stimulating sound elements such as car crash sound effect, explosion, and losing.

### Setting

This game is set on three (3) different highways which have different color theme.

**The beach** - which depicts a sunday morning setting of a highway that has houses on the left corner and a beach on the right.

  ![Alt Text](assets/images/theBeachMap.png)
  
**The Snowy Mountain** - which depicts a cold winter noon of a highway that has houses on the left corner and a forest on the right.
  
  ![Alt Text](assets/images/theSnowyMountainMap.png)
  
**The Midnight** - which depicts a dark evening of a highway that has has post towers and forest on the left corner and houses on the right.

  ![Alt Text](assets/images/theMidnightMap.png)

### Gameplay and Controls
  * Goals: Reach high survivability (higher than your previous records) and Buy all cars.
  * User Skills: evasion skills, resource control, fast reaction, and fast eye detection.
  * Items and power-ups: This game has a total of four (4) consumables items: 1. Booster - respawns every 15 seconds which allows you to avoid collision while your speed is increased. 2. Healthbox - respawns every 25 seconds which increases your health to one hundred percent (100%) if hitted. 3. Hourglass - respawns 5 instances every 6 seconds which increases your timer to allow you to survive longer. 4. Star - respawns every 5 seconds which serve as your money in game. 
  * Progression and Challenge: The game mechanics never changes, but the terrain does. There are three (3) maps which you could choose but has similar difficulties.
  * Losing: There are 2 lost cases in this game. First is when your HP goes to 0. Second is when you run out of time. The timer starts at 1 minute and decrements every second.


### Technical Description

  This game is very compatible with desktop set-ups and is recommended to be played there. This game is also playable in mobile devices but is not recommended.
  
### Demographics

Age: 12 to 50 , Sex: Everyone, Casual players mostly 

### Platform and Monetization

Free to play on open market websites such as Y8.com and itch.io.

### Fonts

<img src="https://github.com/centino90/carcrasher/blob/master/assets/fonts/minecraftia.png" width="300" height="150"/>

### Audio

### Graphics

#### Backgrounds
  - are what used in each game state to cover the default background and give additional aesthetic to the game. Aside from the game state backgrounds, the game also has in-game    backgrounds which are divided in four (4) parts: Left ground, Right ground, Middle ground, and Extension tile that are mold together to form a single scene.

  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/mountain.png" width="600" height="300"/>
  
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/inventory-bg.png" width="600" height="300"/>
  
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/shop-bg.png" width="600" height="300"/>
  
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/selectMap.png" width="600" height="300"/>
  
* Left ground

  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/sideroad.png" width="200" height="500"/>
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/snowCity.png" width="200" height="500"/>
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/nightLeft.png" width="200" height="500"/>

* Right Ground

  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/beachside.png" width="200" height="500"/>
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/snowSide.png" width="200" height="500"/>
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/nightRight.png" width="200" height="500"/>

* Middle Ground

  ![Alt Text](assets/images/road.png)
  ![Alt Text](assets/images/snowRoad.png)
  ![Alt Text](assets/images/nightRoad.png)
  
* Extension Tile

  ![Alt Text](assets/images/sea.png)
  ![Alt Text](assets/images/snowTile.png)
  ![Alt Text](assets/images/grass.png)
  ![Alt Text](assets/images/nightTile.png)
  
#### Others

* Buttons

  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/useCar.png" width="150" height="100"/>
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/startGame.png" width="150" height="100"/>
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/selectBtn.png" width="150" height="100"/>
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/playAgain.png" width="150" height="100"/>
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/taptoplay.png" width="400" height="100"/>
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/shop.png" width="150" height="100"/>
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/mechanics.png" width="150" height="100"/>
  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/inventory.png" width="150 height="100"/>
  
* Health bar

  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/healthFull.png" width="300" height="50"/>
  
* Booster status

  Booster Sprite frame 0
  
* Explosion

  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/explode.png" width="300" height="200"/>
  
* Preload Bar

  <img src="https://github.com/centino90/carcrasher/blob/master/assets/images/loadbar.png" width="300" height="50"/>

### Game States and Scenes
This is where the in-game snaps of each game states (scenes) will be presented. In this section, you will see and understand a few of my reasonings and choices behind the designs and aesthetics of this game.

<img src="https://drive.google.com/uc?export=view&id=1LSIeb6L98uJarIUshreZp3xb8tFEGGHw" width="600" height="300"/>

<img src="https://drive.google.com/uc?export=view&id=1e59QV8dxsz8mMAPvZWljqwpop5lJh09n" width="600" height="300"/>

<img src="https://drive.google.com/uc?export=view&id=1hfR8oEYBIH0Y-lzEnsH5ygosGyn5lkkj" width="600" height="300"/>

<img src="https://drive.google.com/uc?export=view&id=1gu-wOKuZE4CkbCMvS3Vlj3N78BbT0PGv" width="600" height="300"/>

<img src="https://drive.google.com/uc?export=view&id=1X8FYTwx82_bKiunua1lMJJKlGjVGjtuf" width="600" height="300"/>







Gameplay

Respawn
It is respawned in game by five (5) times each instance for every

Audience: Any person of any gender that is between 12 to 50 years old.

Platform & Monetization: Free to play on online markets (desktop and/or mobile)

Project description: Small scale project complete with layered audio and graphics. Built upon the Phaser 2 JS library which served as the game engine for the entire game (e.g. game mechanics, physics, etc.)

Art style: 2d Isometric game based upon vector art (e.g. spritesheets) developed using Adobe Illustrator.

Theme: An action game with a fast pace ‘car chase’ vibe.

Gameplay: Survival 

Game Assets

Backgrounds

Reminder: 
When the browser is refreshed, all of your stars in the inventory will be reverted back to 0



