# Becca Bot allows you to ask for all class information 

A readme.md file with explanations of what your bot does, what commands it responds to, the approach taken, installation instructions, unsolved problems, etc.

##What the bot does 

Becca Bot listens for the following commands and responds with the requested informaion 
* Can I have the class slides?
	* Respondes with the link to the class slides, direct messaging the user who made the request 
* Can I have the Github link?
	* Respondes with the link to the class Github page, direct messaging the user who made the request 
* Can I have the class syllabus?
	* Respondes and displays two images of the class syllabus in the Slack channel 
* Do we have class today?
	* Checks and responses if today's date is a holiday, meaning we don't have class
	* If it is not a holiday, it checks if it's a Tuesday or Thursday meaning we have class
	* If it is not a Tuesday/Thursday, we do not have class 

##Installation Instructions 

To install hubot download or fork this repository. Change directories to the location of your hubot and run 
> HUBOT_SLACK_TOKEN=SECRET_TOKEN_HERE ./bin/hubot --adapter slack 

To setup Hubot from scratch, see the following [guide](https://git.generalassemb.ly/GregoryTesto/jsr-1022-course-materials/tree/master/curriculum/lesson-plans/05-in-class-lab#installing-and-configuring-everything)

##Approach and Unsolved Problems

###Approach 

I built a bot that helps me know when class is and how I can get the various materials for the class. I have noticed this to be a repeitive task when I join class or do class work and wanted a way to easily know 1. how to find the slides 2. view the syllabus 3. the link to Github 4. where or not we have class today including holidays 

* how to find the slides 

I stored the link to the slides in a variable and had Hubot listen for the question. Using name.reply Hubot direct mentions the user who asked for the slides. 

* view the syllabus 

I used imgur to host both pages of the syllbus and stored each of these in variables. Hubot listens for the user to ask for the syllbus and responds with a messaging to the channel providing both pages/images of the slides. I needed to use images of the syllbus so I could leverage imgur to host the images and have slack auto expand the png file the hubot shared. 

* the link to Github 

I stored the link to the Github in a variable and had Hubot listen for the question. Using name.reply Hubot direct mentions the user who asked for the Github link with the link. 

* where or not we have class today including holidays 

For the class question, I am using the native JavaScript data class/object and its method to get the current date, month, year, and day of week storing each in a variable. I then use if statements to format the result to have leading zeros for days and months to get matching string lenght for all dates and concatenate the date to be the format I need. Next I created an array of dates we do not have class in the same format as the current date logic. I then use the includes method to check if the array includes today's date meaning it'd be a holiday. If it's a holiday, hubot response with a message and today's date. If it's not a holiday, Hubot checks if it's a Tuesday or Thursday using the Date class gettoday method and responds with a message that we have class if it's  T/Th. Finally if it's not a holiday or a T/Th it responds we do not class. 

###Unsolved Problems 
* The dates we have class is not considering the local users timezome, it's using the default epoch of the JS Date Class 
* The dates we have class is also not considering the class end date in it's logic  
