# __Portfolio Project 2 - JavaScript__

## Blackjack 

> (formerly Black Jack and Vingt-Un) is a casino banking game. The most widely played casino banking game in the world, it uses decks of 52 cards and descends from a global family of casino banking games known as Twenty-One. This family of card games also includes the British game of Pontoon and the European game, Vingt-et-Un.[2] Blackjack players do not compete against each other. The game is a comparing card game where each player competes against the dealer.
[Wikipedia](https://en.wikipedia.org/wiki/Blackjack)

This project is my take on this timeless game and the aim of this project is to build an interactive front-end webpage which uses HTML, CSS and most importantly JavaScript. 
The webpage responds to the Player's actions, allowing the Player to actively engage with data, and alter the way the site displays the information to achieve their preferred goals.

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
This project objective is to deliver an interactive front-end webpage which uses HTML, CSS and JS. 
I wish to demonstrate my competency as a developer using HMTL & CSS languages but most importantly showcase my JavaScript skills and abilities.  

***

## __Brief__
After reviewing 3 project ideas provided by Code Institute in their Assessment Guide - Ideas, I knew I want to go with something more challenging then a Rock, Paper, Scissors or a Quiz so I started looking around for ideas for this Project. Having to choose between my two favourite ideas; a Tic, Tac, Toe and Blackjack; I decided to take on a timeless game of Blackjack and build an interactive front-end webpage which uses HTML, CSS and JavaScript.

***

## __UX User Experience__
The blackjack target user is anyone who enjoys playing this classic card game. 
Blackjack aims to finish the game with a higher total than that of the dealer, without exceeding 21.

***

### __User Stories__
__As a Player, I wish:__ 
- to play a simple and fun but still challenging game.
- to be able to see instructions before the start of the game.
- to play a game that navigates easyly and is fully responsive across multiple platforms.
- to be able to go reset the game at any point.
- to be able to control the game using labelled buttons.
- to be able to see the current scores of the game.
- to be encouraged to replay and increase scores.
- to be able to check the high-scores table.

***

### __Wireframes__
Before writing any HTML or CSS, I used Eagle to gather ideas and Balsamiq to create wireframes.
Once completed, my wireframes were exported to pdf and converted to png files with [ilovepdf.com](ilovepdf.com)

Home Page:

![Home Page Wireframe](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/wireframes/welcome-wf.png)

Game Page:

![Game Page Wireframe](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/wireframes/game-wf.png)

Game with High Scores Page:

![High Scores Page Wireframe](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/wireframes/game-scores-wf.png)

#### __Tablet Design__ 

![Tablet Wireframes](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/wireframes/game-full-tablet-wf.png)

#### __Desktop Design__ 

![Desktop Wireframes](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/wireframes/game-full-wf.png)

***

### __Site Structure__

Blackjack is a 2-page website. 

The home page is the default loading page which gives the Player instructions as well is serves as a logging-in page (JS). 
The game page is where the JS magic happens and DOM is modified - one page lets the user initiate and control actions and gives feedback.

### __Colour Scheme__

I used <img height="12" src="https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/colormind-logo.png"> [Colormind](http://colormind.io/) to find a perfect colour scheme that would tie-in with the classic feel of the game, be easily readable and visually appealing to Players.

![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/colormind.png)

### __Typography__

The two fonts used were imported into the CSS from [Google Fonts](https://fonts.google.com/)

I used 'Luckest Guy' for logo, 'Syncopate' for all headings & any other text.

![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/google-font-luckiest-guy.png)

![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/google-font-syncopate.png)

Sans-serif is the nominated fallback font.

### __Imagery__

The images have been compressed in [compressor.io](https://compressor.io/) to enable faster loading times. 

The content images on Gallery Page are aligned in neat, symmetrical grids for optimal viewing and user experience. 

***

## __Features__

### __Existing Features__

#### __Home__

- __Home page is designed to be fully responsive. it serves two purpouses:__
    - Welcome screen - HTML, CSS and JS - allowes the Player to type-in/change Player name.
    - Game Rules - HTML and CSS -  instructions on how to play game of Blackjack.
    - Social links


Mobile first:


![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/welcome-login-mobile-screen.png) ![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/welcome-mobile-screen.png)

Large display:


![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/welcome-login-screen.png)
![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/welcome-screen.png)


***
#### __Game Page__ 
- __Top Bar__
    - The Player can navigate back to the Welcome/Info Screen from the Game page through the 'Home' icon, top left.
    - The Player can also open the High-scores screen from the Game page through the 'Star' icon, top right.

![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-top-bar-screen.png) 


- __Main Game View__
    - The Player is presented with the game area, pre-populated with playing cards backs and a message (in the middle of the screen) inviting the Player to start the game.
    - The Blackjack game can be initiated by either clicking >>>START NEW GAME<<< in the messages area or by clicking the 'START NEW GAME' button, at the bottom of a screen.
    - The game message area is designed to not only show the results of a round but also provide options for the next move.
    - Two areas above and below the message area are to display cards for both the Dealer and the PLayer. To make the game more exciting and less predictable, the Dealer's first card is kept hidden and is not shown until the end of a round. 
    - Hit! and Stay options are available for the Player to decide whether he/she wants to draw another card or stay and finish the round. 
    - Once the round finishes, the Player is presented with results and the message area shows the result of the round.
    - The score section, at the bottom of the screen, shows the Player's sum of drawn cards, credit available and the number of rounds played.


Mobile first:


![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-start-mobile-screen.png) ![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-3-mobile-screen.png) 


Large display:


![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-start-screen.png) 
![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-busted-screen.png)
![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-blackjack-screen.png) 
![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/game-gameover-screen.png)


***
#### __Totals & High Scores Screen__ 
- Throughout the game, the Player is presented with the total sum of his/hers cards on hand, credit and number of rounds played.
- Once the game is over (when the Player runs out of credit), his/hers score is then saved to the 'High Scores' table and presented back. 



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
- [JS](https://www.w3.org/standards/webdesign/script) - adds functionality to the game.
- [Balsamiq](https://balsamiq.com/) - for wireframes
- [Eagle](https://en.eagle.cool/) - to collect, search and organize your design files in a logical way and all in one place
- [Font Awesome](https://fontawesome.com/) - multiple icons implemented throughout the site from font awesome version 5
- [Google Fonts](https://fonts.google.com/) - All three fonts used in the website imported from here 
- [CSS Gradient](https://cssgradient.io/) - created a gradient background for websites
- [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - used extensively to experiment with grid, flexbox and general responsiveness
- [Gitpod](https://www.gitpod.io/) - used to create and host the website
- [Github](https://github.com/) - used to deploy the website 
- [Am I Responsive](https://ui.dev/amiresponsive) - to create an image displaying the home page on various devices 
- [Grammarly](https://app.grammarly.com/) - to make writing clear and engaging as well as eliminate grammar errors
- [Favicon](https://favicon.io/) - to make icon
- [ILovePDF](https://www.ilovepdf.com/) - to convert wireframes from pdf to png
- [COMPRESSOR](https://compressor.io/) - to compress images 

***

## __Testing__

- HTML [Markup Validator](https://validator.w3.org/) by The World Wide Web Consortium [W3C](https://www.w3.org/)

![index.html](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/html-check-index.png) __index.html__
***
![game.html](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/html-check-game.png) __game.html__


***


- CSS Validator [Jigsaw](https://jigsaw.w3.org/css-validator/) by The World Wide Web Consortium [W3C](https://www.w3.org/)

![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/css-check-index.png)


***


- Lighthouse feature in Google Chrome's Developer Tools

![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/lighthouse-index-laptop.png) __results for Index Page__
***
![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/lighthouse-game-laptop.png) __results for Game Page__


***


- JSHint Tools [JSHint](https://jshint.com/)

![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/js-test-index.png) __results for Index Page__
***
![image](https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/js-test-game.png) __results for Game Page__


***


- Tests based on user stories:

| User Goal | Requirement met | 
| --------- | --------------- | 
|play a simple and fun but still challenging game| Yes |
|see instructions before the start of the game| Yes |
|easy nav and full responsivenes across platforms| Yes |
|reset the game at any point| Yes |
|control the game using labelled buttons| Yes |
|see the current scores of the game| Yes |
|encouraged to replay and increase scores| Yes |
|check the high-scores table| Yes |


***


__Home Webpage:__
- Verified that the Player is greeted with his/hers name or asked to provide a Player name.
- Verified that Player-name completing input element is required before moving on to the game page.
- Verified that 'Save Your Name' bttn does save the Player name and creates a basic profile with credits and rounds played being saved to local memory.
- Verified that 'Change User' bttn appears when a Player-name is saved in local memory and by pressing, gives the option to delete Player data. 
- Verified that 'Enter Blackjack' bttn appears after Player-name is successfully saved to local memory.
- Verified that the zoom-in effect on all paragraphs on the page.
- Verified that the sounds of shuffle is played correctly.
- Verified the social links hover effect does work correctly.
- Verified the social links open successfully on a separate webpage when clicked.

__Game Webpage:__
- Verified that clicking the 'Home' icon on the top bar brought the user back to the home screen
- Verified that clicking the 'Star' icon on the top bar allowed the user to open High-Scores
- Verified that all buttons and/or clickable instructions work correctly.
- Verified that the 'hidden' Dealer's card is hidden until the final results are shown.
- Verified that the messages are displayed correctly and according to the game rules and results.
- Verified that the scores are displayed at the bttm of the page and calculated correctly. 
- Verified that the sound of the game over is played correctly.
- Verified that on the game over, data is saved correctly and presented back to the Player.

__High-Scores:__
- Verified that clicking the 'Home' icon on the top bar brought the user back to the home screen
- Verified that clicking the 'Star' icon on the top bar allowed the user to open High-Scores
- Verified that clicking 'Reset Game', 'Clear High Scores' and 'Close High Scores' work as per labels.
- Verified the social links hover effect does work correctly.
- Verified the social links appear on the high-scores page and open successfully on a separate webpage when clicked.


***


- Responsive tests were carried out manually using [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/). 
The site loaded and ran smoothly on all devices and content was adjusted as expected for each screen size.

    Devices tested:
    - min. width of 320px
    - media breakpoint at 460px
    - Samsung Galaxy S8, S20 Ultra
    - Iphone SE, XR, 12pro
    - Pixel 5
    - Ipad Air & Mini
    - Surface pro 7 & duo
    - Nest Hub & Hub Max

***

- Browser Compatibility

After publishing the site through Github pages, the site was tested on Google Chrome, Microsoft Edge, Safari and Mozilla Firefox, with no visible issues for the user. 
The site has loaded perfectly and had no issues across all browsers.


***

## __Deployment__

The site was deployed to GitHub __[link](https://github.com/ShemmyYo/black-jack-js)__

### __Deploy to GitHub Pages__

1. Navigate to the settings tab in the GitHub repository 
2. Once in settings, navigate to the pages tab on the left of the page 
3. From the source section drop-down menu, select the Main Branch, then click "Save".
4. page will not automatically refresh and show a detailed ribbon display to indicate successful deployment 

### __Local Deployment__

To make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/shemmyyo/black-jack-js.git`

### __To Fork the Repository__ 

To make a copy or ‘fork’ the repository - 

1. Log into GitHub and locate the repository  
2. On the right-hand side of the page select the ‘fork’ option to create and copy the original

Alternatively, if using Gitpod, you can click below to create your workspace using this repository


[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://github.com/ShemmyYo/black-jack-js)

***

## __Credits__

### __Code__

- [Scrimba JS](https://www.youtube.com/watch?v=jS4aFq5-91M&list=PLvzs_z0mfNiTyI3WKIsKSBJqh7C856W4Q&index=3&t=7075s)
- [Kenny Yip Coding](https://www.youtube.com/watch?v=bMYCWccL-3U)

Throughout the building process I found many helpful tutorials online.
I sometimes applied principles within them to the site, after fully understanding their code and modifying to fit the site's needs.

### __Design__

- Design files incl. content, references and images were collected and organised with [Eagle](https://en.eagle.cool/)
- Wireframes were made using [Balsamiq](https://balsamiq.com/)
- Colour scheme was chosen with <img height="12" src="https://github.com/ShemmyYo/black-jack-js/blob/main/assets/other/colormind-logo.png"> [Colormind](http://colormind.io)
- Gradient buttons were generated with [CSS Gradient](https://cssgradient.io/) - happy little website and free tool that lets you create a gradient background
- The two fonts used across the site were imported from [Google Fonts](https://fonts.google.com/)

### __Content__

- Instructions borrowed from [blackjackapprenticeship.com](https://www.blackjackapprenticeship.com/how-to-play-blackjack/)
- Playing cards have been downloaded from [ImKennyYip](https://github.com/ImKennyYip/black-jack/tree/master/cards)

### __Media__

- Favincon made with Favicon.io
- mp3 sounds downloaded from [fiftysounds.com](https://www.fiftysounds.com/royalty-free-music/game-defeat.html)

## __Acknowledgements__ 

This website was executed and completed as a Portfolio 2 Project for the Full Stack Software Developer Diploma at [Code Institute](https://codeinstitute.net/)

As always, big thank you to [Harry Dhillon](https://github.com/Harry-Leepz), my mentor who provided me with guide and excellent feedback throughout the project

Shemmy, 2022