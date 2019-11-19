
module.exports = function(bot){

 //listens for the user to ask for the class slides and direct mentions the user with the link 
	bot.hear(/Can I have the class slides\?/, function(name){

	var classSlides = "https://slides.com/gregorytesto/"
 
  return name.reply("Totally! Here they are" + classSlides);
	});

//listens for the user to ask for the Github link and direct mentions the user with the link 
	bot.hear(/Can I have the Github link\?/, function(name){

	var githubLink = "https://git.generalassemb.ly/GregoryTesto/jsr-1022-course-materials"
 
  return name.reply("Yep, you sure can, here is it " + githubLink);
	});

//listens for the user to ask for the class syllabus and responds with two images of the syllabus in the channel 
	bot.hear(/Can I have the class syllabus\?/, function(syllabus){

		var page1 = "https://i.imgur.com/Bi3brxy.png";
		var page2 = "https://i.imgur.com/YdjJn2z.png";
			
		return syllabus.send("Of course, it's two pages! Here's page one " + page1 + "." + "And page two " + page2 + ".");

	});

//listens for the user to ask if there's class today, checks todays date + holidays + T/Th and responds 
	bot.hear(/Do we have class today\?/, function(res){
	var today = new Date(); 
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0 so add 1
	var yyyy = today.getFullYear();
	var dayOfWeek = today.getDay();  //2 = Tuesday, 4 = Thursday

	//format days 1-9 to include leading 0 
	if (dd < 10) {
	    dd = '0' + dd;
	}
	//format month 1-9 to include leading 0 
	if (mm < 10) {
	    mm = '0' + mm;
	}
	//combine formatted date string to match noClassArr formatting 
	var today = yyyy + '-' + mm + '-' + dd; 
	//an array of dates we do not have class 
	var noClassArr = ['2019-11-28', '2019-12-25', '2019-12-26', '2019-12-31', '2020-1-1'];

	if (noClassArr.includes(today)) {
	  return res.send ("There is no class today because it's a holiday. Today is " + today + '.');
	} else if (dayOfWeek === 2 || dayOfWeek === 4) {
	   return res.send("We have class!");
	} else {
	   return res.send("We don't have class but it's not a holiday - we have class Tuesdays and Thursdays!")
	}
	});

//I spent multiple hours googling how to lookup a list of users in a channel/Slack room, read multiple articles, and could never get it to work. I don't know what I am suppose to do here. 
//I would end up with a massive user data object that was an array of object. When I attempted to traverse it using indexes or keys it always resulted in an error and my hubot failed to load
//I want to actually learn how to handle this or how to find the right resources to achieve this. 

    // var arrayOfUsers = bot.adapter.client.rtm.dataStore.users;
    // console.log(arrayOfUsers.profile.name);


};