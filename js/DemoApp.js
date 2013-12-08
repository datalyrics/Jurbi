/*
 * using YourFramework
 */ 
var myDiv1 = new YourFramework.YourDiv.NameDiv({name: 'User 1'});
var myDiv2 = new YourFramework.YourDiv.NameDiv({name: 'User 2'});
var myDiv3 = new YourFramework.YourDiv.NameDiv();

myDiv1.printName();
myDiv2.printName();
myDiv3.printName();
myDiv3.setName('User 3');
myDiv3.printName();

var myDiv4 = new YourFramework.YourDiv.NameDivClick({name: 'User 4'});
var myDiv5 = new YourFramework.YourDiv.NameDivClick({name: 'User 5'});
var myDiv6 = new YourFramework.YourDiv.NameDivClick({name: 'User 6'});
myDiv4.printName();
myDiv5.printName();
myDiv6.printName();
    
    
    
    