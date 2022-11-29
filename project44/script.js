var names=new Array();
names[0]="Mohammed";
names[1]="Majed";
names[2]="khalid";
names[3]="mahmoud";
names[4]="maya";
names[5]="sara";
names[6]="malak";
names[7]="david";
names[8]="ali";
names[9]="mike";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='M'|| names[i].charAt(0)==='m'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}