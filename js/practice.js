$(document).ready(function(){
	$('.content').click(function(){
		//$('.content').hide();
		$('body').css({'backgroundColor':'black','color':'white'});
	});
	$('.btn_show').click(function(){
		$('.content').show();
	});
	$('.btn_hide').click(function(){
		$('.content').hide();
	});
});



		

	