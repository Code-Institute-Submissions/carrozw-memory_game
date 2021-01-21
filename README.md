![Mockup](/assets/images/memoryGameMockup.png)

# UX

Who is it for?
* As a user, I want to quickly understand what the game is all about.
* As a user, I want to get in a cheerful mood.
* As a user, I want to gain something more than just having fun, in this case concentration and memory skills.
* As a user, I want to be able to chose whether I want to listen to the happy game music or not.


## Design / Color scheme

I visually aim the look for kids with the happy, bright and colourful colors. The different moods of the faces is also a good thing for kids to reflect over. "Is that face happy or sad?".
At the same time, it's not too crazy, so even older kids (adults) can stand the look.

## Typography

* I chose Fontdiner Swanky for a more playful feel and sans-serif as a back-up.

## Wireframe

* Download wireframe [Wireframe PDF](/assets/pdf/wireframe.pdf)

## Features

* Score 
* Music
* Bouncing brain 
* Glowing title 
* Amount of flipped cards visible
* Responsive on all device sizes
* Interactive elements


## Features left to implement

* Timer.
* Different levels, such as more cards, and different layout of the cards.
* High score
* Switch down arrow to an up arrow when instructions are displayed.

# Technologies Used

## Languages:

* HTML 5
* CSS3
* JavaScript


## Frameworks, Libraries & Programs:  

* Bootstrap      
* Google Fonts
* Font Awesome
* JQuery 
* Draw.io
* Visual Studio Code

## Testing 

* https://validator.w3.org/nu/#textarea    
* https://jigsaw.w3.org/css-validator/#validate_by_input   
* https://webaim.org/resources/contrastchecker/    
* https://jshint.com/  


## Further/manually testing:

My husband and kids played the game which exposed some bugs.
- mainly when clicking on the next card too quickly the previous clicked card may get stuck. My son manged to do something, sort of froze it all by dragging and clicking (not sure), but I couldn't replicate that issue. He just got skills I guess...

## Different browsers, I've tried all functions below on these browsers:

- Safari 14.0.2 - (latest on OSX)
- Chrome 87.0.4280.141 - (latest on OSX + Android)
- Firefox 84.0.2 - (latest on OSX)

### Play/Reset button
- In the middle of a game or when finished, click on the play/reset button and a new shuffled board is created.

### Instructions
- Click on instructions and the instruction steps will toggle down, when clicked again it toggle right back up again.

### Music
- Click the play button and the music will play. Click the pause button and the music stops.

### Flipping the cards
- Flipped all cards until all the cards have been matched.

### Receiving the happy finish message/modal
- Received the modal every time I've finished the game. And it disappears when clicking on the close or X on the modal.


## Known bugs / issues

* When clicking too quickly on next card, the first card may get stuck as there's a 500ms delay.
* Had trouble figuring out why turn card event listener wasn't working.
* Had trouble with the reset function.
* Had troubles implementing timer function so it got removed.

## Deployment

 - In my GitHub repository I go into settings, scroll down to GitHub pages.
 Select source (branch master, root) and then save. Now everytime I commit and push it's published to https://carrozw.github.io/memory_game/
 
# Credits

## Code

* https://www.w3schools.com/bootstrap4/bootstrap_collapse.asp
* https://css-tricks.com/making-css-animations-feel-natural/  - Brain animation
* https://www.jamendo.com/album/185935/children - The game song
* https://stackoverflow.com/questions/52505380/jquery-button-play-pause-audio-and-switch-images - Audio 
* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_glowing_text - Glowing title
* https://www.biob.in/2019/01/bouncing-text-animation-effect-using.html - Code to the bouncing instruction title.

## Content

* All content was written by the developer, except for the snippets already mentioned above.They have however been modified to suit my project.


## Media

* https://www.vectorstock.com/royalty-free-vector/funny-colorful-square-faces-set-vector-14015938
* https://www.smartmockups.com 
* https://www.ppt-backgrounds.net/rainbow/3644-unicorn-and-rainbow-art-backgrounds.html - Background image
* https://www.freepik.com/free-vector/
* https://redketchup.io/icon-editor
* https://fontawesome.com/

# Aknowledgements

* My mentor, Anna Villanueva who offers great support and valid input.
* My husband, who's been my tutor support deluxe through this project.
* Multiple sources of videos and stack overflow for inspiration.
* Tutor support, helping with my path to my background image when deployed.
