$(document).ready(function(){
	// 1. heart red or empty toggler
	var $heart = $('.heart');
		
	// 2. adding comment
	var $addComment = $('.photo_addcomment_area');

	// 1. heart red or empty toggler
	$heart.click(function(){
		//눌렀을 때 likes 수 늘리기
		var likes = $(this).parent().parent().children('.likes_count').children('.likes_number');
		var likesNumber = parseInt(likes.html());
		var newValue;

		//if문
			//class 비어있으면 추가해주고
			//class 차있으면 빼주고
		if($(this).hasClass('fa-heart-o')){
			newValue = likesNumber +1;
		}else{
			newValue = likesNumber -1;
		}

		likes.html(newValue);

		// when click, toggle
		$(this).toggleClass('fa-heart-o fa-heart');

		//color of heart icon turns to red
		//$('.fa-heart-o').css("color","red");
	});

	// 2. adding comment
	$addComment.keydown(function(event){
		// 단계 로직 설정
			//1. 키다운으로 엔터 13이 발생하면
			//2. 입력받은 댓글 텍스트를 긁어서 변수에 저장
			//3. 입력하던 댓글 창 지워주기
			//4. 댓글 출력 area에 출력
		if(event.keyCode == 13){
			var newComment = event.target.value;
			var commentList = $(this).parent().parent().children('.comment_container');
			$(this).val('').blur();
			commentList.append('<li class="comment_content">\
							<strong class="comment_author">Jihyo</strong>'+ newComment +'</li>');
		}
	});
});