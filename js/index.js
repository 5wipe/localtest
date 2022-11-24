$(function(){
	$("#main .inner03 .numInner .title").click(function(){
		$(this).toggleClass("on").next().stop().slideToggle(300);
	});
	$('#cookie .comLinkList a.agree').click(function(){
		$('#cookie').fadeOut();
		return false;
	});
	$('#main .inner03 .info .comNumList li .del').click(function(){
		$('#delPop').fadeIn();
		return false;
	});
	$('#delPop .confirm .cancel a,#delPop .closePop').click(function(){
		$(this).parents('#delPop').fadeOut();
		var $this = $(this);
		setTimeout(function(){
			$this.parents('#delPop').find('.popBox.confirm').show();
			$this.parents('#delPop').find('.popBox.finish').hide();
		},350);
		return false;
	});
	$('#delPop .confirm .next a').click(function(){
		$(this).parents('#delPop').find('.popBox.confirm').hide();
		$(this).parents('#delPop').find('.popBox.finish').show();
		return false;
	});
	$('#main .inner03 .comLink a').click(function(){
		$('#upload').fadeIn();
		return false;
	});
	$('#upload .confirm .cancel a,#upload .closePop').click(function(){
		$(this).parents('#upload').fadeOut();
		var $this = $(this);
		setTimeout(function(){
			$this.parents('#upload').find('.popBox.confirm').show();
			$this.parents('#upload').find('.popBox.change').hide();
			$this.parents('#upload').find('.popBox.finish').hide();
		},350);
		return false;
	});
	$('#upload .photoBox .date span').click(function(){
		$(this).parents('#upload').find('.popBox.confirm').hide();
		$(this).parents('#upload').find('.popBox.change').show();
	});
	$('#upload .change .back a').click(function(){
		$(this).parents('#upload').find('.popBox.confirm').show();
		$(this).parents('#upload').find('.popBox.change').hide();
		return false;
	});
	$('#upload .change .next a,#upload .confirm .finish a').click(function(){
		$(this).parents('#upload').find('.popBox.confirm').hide();
		$(this).parents('#upload').find('.popBox.change').hide();
		$(this).parents('#upload').find('.popBox.finish').show();
		return false;
	});
});