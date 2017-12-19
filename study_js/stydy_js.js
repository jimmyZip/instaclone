//조건문
var date = new Date();
var hour = date.getHours();

if(hour < 11){
	alert('아침');
}
else if(hour < 15){
	alert('점심');
}
else{
	alert('저녁');
}

////////////////////
var age = 31;
var name = '김진홍';
if(age<24){
	alert('초반');
}else if(age<27){
	alert('중반');
}else if(age>29){
	alert('30대 이상이시네요');
}else{
	alert('후반');
}

//////////////////////////

var array = ['grape','apple','banana','mango','pineapple'];
for (var i=0;i<array.length;i++){
	alert(array[1]);
	i++;
}

/////////////////////////////////////
var dan = 8;
var count =1;
while(count<10){
	console.log(dan*count);
	count++;
}

//중첩 while문으로 구구단 짜기
var dan = 2;
var count = 1;
while(dan<10){
	while(count<10){
		console.log(dan*count);
		count++;
	}
	dan++;
	count=1;
}

//중첩 while문으로 구구단 짜는데 7단과 카운트 6까지만
var dan = 2;
var count = 1;
while(dan<8){
	while(count<7){
		console.log(dan*count);
		count++;
	}
	dan++;
	count=1;
}

//방법2
var dan = 2;
var count = 1;
while(dan<8){
	while(count<7){
		console.log(dan*count);
		count++;
	}
	dan++;
	count=1;
}

