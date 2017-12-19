var questionList = [
	'비트코인의 시세는?',
	'이더리움의 시세는?',
	'퀀텀의 시세는?'
];

var answerList = [
	'2000만원',
	'90만원',
	'6만원'
];

var step = 0;
var score = 0;

while(step<questionList.length){
	var answer = prompt(questionList[step]);
	if(answer==answerList[step]){
		score = score + 10;
	}
	step = step + 1;
}
alert('당신의 점수는'+score+'점 입니다.');