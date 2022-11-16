# __Portfolio Project 2 - JavaScript__

## Blackjack 

> (formerly Black Jack and Vingt-Un) is a casino banking game. The most widely played casino banking game in the world, it uses decks of 52 cards and descends from a global family of casino banking games known as Twenty-One. This family of card games also includes the British game of Pontoon and the European game, Vingt-et-Un.[2] Blackjack players do not compete against each other. The game is a comparing card game where each player competes against the dealer.
[Wikipedia](https://en.wikipedia.org/wiki/Blackjack)

This project is my take on this timeless game and the aim of this project is to build an interactive front-end webpage which uses HTM, CSS but most importingly JavaScript .

Link: https://shemmyyo.github.io/black-jack-js/


![Multi Device Information Demo](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/am-i-responsive-black.png)
![Multi Device Game Demo](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/am-i-responsive-black-game.png)

## __Live Web-Page__
[Blackjack](https://shemmyyo.github.io/black-jack-js/)

## __GitHub Repository__
[https://github.com/ShemmyYo/black-jack-js](https://github.com/ShemmyYo/black-jack-js)

## __Tech Stack__

<img height="42" src="assets/other/html.png"> __HTML5__
<img height="50" src="assets/other/css-img.png"> __CSS3__
<img height="45" src="assets/other/js.png"> __JavaScript__
<img height="50" src="assets/other/gitpod.png"> __Gitpod__
<img height="45" src="assets/other/github.png"> __Git__

***

## __Contents__

- [Project Goals](#project-goals)
- [Brief](#brief)
- [UX User Experience](#ux-user-experience)
    - [User Stories](#user-stories)
    - [Wireframes](#wireframes)
    - [Site Structure](#site-structure)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
- [Features](#features)
    - [Existing Features](#existing-features)
        - [Instructions](#home)
        - [Game](#game)
        - [high Scores](#scores)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
    - [Deploy to GitHub Pages](#deploy-to-github-pages)
    - [Local Deployment](#local-deployment)
    - [To Fork the Repository](#to-fork-the-repository)
- [Credits](#credits)
    - [Code](#code)
    - [Design](#design)
    - [Content](#content)
    - [Media](#media) 
- [Acknowledgements](#acknowledgements)

***

## __Project Goals__

## __Brief__

***

## __UX User Experience__

### __User Stories__

### __Wireframes__
Before writing any HTML or CSS, I used Eagle to gather ideas and Balsamiq to create wireframes.
Once completed, my wireframes were exported to pdf and coverted to png files with 

Home Page:

![Home Page Wireframe](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/wireframes/welcome-wf.jpg)

Game Page:

![Game Page Wireframe](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/wireframes/game-wf.jpg)

Game with High Scores Page:

![High Scores Page Wireframe](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/wireframes/game-scores-wf.jpg)

#### __Tablet__ 

![Tablet Wireframes](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/wireframes/game-full-tablet-wf.jpg)

#### __Desktop Design__ 

![Desktop Wireframes](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/wireframes/game-full-wf.jpg)

***

### __Site Structure__

Blackjack 2 page website. 

The home page is the default loading page which gaves the Player instructions as well is serving as logging in page (JS). 
Game page is where the JS magic happens and DOM is modiied - one page lets the user initiate and control actions, and gives feedback.

### __Colour Scheme__

I used <img height="12" src="https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/colormind-logo.png"> [Colormind](http://colormind.io/) to find a perfect colour scheme that would tie-in with the classic feel of the page, be easily readable and visually appealing to users.

![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/colormind.png)

### __Typography__

The two fonts used were imported into the css from [Google Fonts](https://fonts.google.com/)

I used 'Luckest Guy' for logo, 'Syncopate' for all headings & any other text.

![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/google-font-luckiest-guy.png)

![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/google-font-syncopate.png)

Sans-serif is the nominated fallback font

### __Imagery__

The images have been compressed in [compressor.io](https://compressor.io/) to enable faster loading times. 

The content images on Gallery Page are aligned in neat symmetrical grids for optimal viewing and user experience. 

***

## __Features__

### __Existing Features__

#### __Home__

- __Home page is designed to be fully responsive. it serves two purpouses:__
    - Welcome screen - HTML, CSS and JS code checking/adding new Player.
    - Game Rules - HTML and CSS
    - Social links


Mobile first:


![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/welcome-login-mobile-screen.png) ![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/welcome-mobile-screen.png)

Large display:


![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/welcome-login-screen.png)
![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/welcome-screen.png)


***
#### __Game Page__ 
- __Top Bar__

The Player can navigate back to the Welcome/Info Screen from the Game page through the 'Home' icon, top left.
The Player can also open the High-scores screen from the Game page through the 'Star' icon, top right.

![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-top-bar-screen.png) 


- __Main Game View__

- The Player is presented with the game area, pre-populated with playing cards backs and message (are in the  middle of the screen) inviting Player to start game.
- The Blackjack game can be iniciated by either clicking >>>START NEW GAME<<< in messages area or by clicking 'START NEW GAME' button, the bottom of a screen.
- The game message area is designed to not only show results of a round but also provides options for next move.
- Two areas above and below message area are to display cards for both the Dealer and the PLayer. To make the game more exciting and less predictable, Dealer's first cards is being kept hidden and is not shown until the end of a round. 
- Hit! and Stay options are available for the Player to decide whether he/she wants to draw another card or stay and finish the round. 
- Once the round finishes, the Player is presented with results and message area shows the result of the round.
- The score section, at the bottom of screen, shows the Player's sum of drawned cards, credit available and number of rounds played.


Mobile first:


![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-start-mobile-screen.png) ![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-3-mobile-screen.png) 


Large display:


![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-start-screen.png) 
![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-busted-screen.png)
![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-blackjack-screen.png) 
![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-gameover-screen.png)


***
#### __Totals & High Scores Screen__ 

- Throughout the game, the Player is being presented with total sum of his/hers cards on hand, credit and number of rounds played.
- Once the game is over (when Player runs out of credit), his/hers score is then saved to 'High Scores' table and presented back. 



Mobile first:


![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-info-mobile-screen.png)
![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-high-scores-mobile-screen.png)


Large display:


![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-info-screen.png)
![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-high-scores-screen.png)


***

## __Technologies Used__

- [HTML5](https://html.spec.whatwg.org/) - provides content and structure 
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - provides styling 
- [JS] (https://www.w3.org/standards/webdesign/script) - adds functionality to the game.
- [Balsamiq](https://balsamiq.com/) - for wireframes
- [Eagle](https://en.eagle.cool/) - to collect, search and organize your design files in a logical way and all in one place
- [Font Awesome](https://fontawesome.com/) - multiple icons implemented throughout the site from font awesome version 5
- [Google Fonts](https://fonts.google.com/) - All three fonts used in the website imported from here 
- [CSS Gradient](https://cssgradient.io/) - created a gradient background for websites
- [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - used extensively to experiment with grid, flexbox and general responsiveness
- [Gitpod](https://www.gitpod.io/) - used to used to create and host the website
- [Github](https://github.com/) - used to deploy the website 
- [Am I Responsive](https://ui.dev/amiresponsive) - to create an image displaying the home page on various devices 
- [Grammarly](https://app.grammarly.com/) - to make writing clear and engaging as well as eliminate grammar errors
- [Favicon](https://favicon.io/) - to make icon
- [ILovePDF](https://www.ilovepdf.com/) - to convers fireframes from pdf to png
- [COMPRESSOR](https://compressor.io/) - to compress images 

***

## __Testing__

- HTML [Markup Validator](https://validator.w3.org/) by The World Wide Web Consortium [W3C](https://www.w3.org/)

![index.html](https://github.com/ShemmyYo) __index.html__
***
![game.html](https://github.com/ShemmyYo/) __game.html__
***


***