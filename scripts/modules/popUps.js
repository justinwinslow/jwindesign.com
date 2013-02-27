/*

	POPUPS

	Author: Justin Winslow
	Last updated: 08/15/2012 by Justin Winslow

*/

if(typeof jw === 'undefined'){
	jw = {}
}

jw.popUps = {
	_init : function(options){
		//console.log('popups init', options, this);

		this.options = $.extend({}, this.options, options);	//Merge paramaters objects

		//ia.popUps.myPopUps.push(this);   //Make a reference to this object to be able to access its methods

		this.element = options.target;
		this.$element = $(options.target);

		this.$element.data('module', this);

		this._buildObscure();
		this._buildPopUp();

		this._addListeners();

		this._active = false;
	},

	_buildObscure: function(){
		if($('.popUp_obscure').length <= 0){
			$('<div class="popUp_obscure" />')
				.css({
					opacity:0,
					background: '#000',
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					'z-index': 100
				})
				.appendTo('body');
		}
	},

	_buildPopUp : function(){
		this.$myPopUp = $(
			'<div id="popUp_' + this.options.id + '" class="popUp">' +
				'<a href="#close" class="close">Close</a>' +
				'<h3>' + this.options.title + '</h3>' +
				'<div class="content">' +
					this.options.content +
				'</div>' +
			'</div>'
		)
		.css({
			position: 'fixed',
			display: 'none',
			'z-index': 101,
			width: this.options.width
		});

		// Preload images if there are any
		var images = this.$myPopUp.find('img');
		
		if(images.length){
			$.each(images, function(image){
				var myImage = new Image();
				
				myImage.src = $(images[image]).attr('src');
			});
		}
	},

	show : function(){
		//console.log('show', this);

		$('body').append(this.$myPopUp);

		this._position();
		
		$('.popUp_obscure').show().animate({
			opacity: 0.5
		}, 250);

		this.$myPopUp.show().fadeIn(250);

		this._active = true;
	},

	hide : function(){
		//this.$myPopUp.fadeOut(250);
		$('.popUp_obscure').fadeOut(250); 

		this.$myPopUp.fadeOut(250).detach();

		this._active = false;
	},

	_position : function(){
		var $win = $(window);

		console.log($win);

		$('.popUp_obscure').height($(document).height());
		
		if(this.$myPopUp.height() > $win.height()){
			this.$myPopUp.css({
				top: 0,
				left: Math.max(12, ($win.width()/2 - this.$myPopUp.width()/2))
			});
		}else{
			this.$myPopUp.css({
				top: Math.max(12, ($win.height()/2 - this.$myPopUp.height()/2)),
				left: Math.max(12, ($win.width()/2 - this.$myPopUp.width()/2))
			});
		}
	},

	_addListeners : function(){
		var that = this;

		this.$element.click(function(event){
			event.preventDefault();
			that.show();
		});

		this.$myPopUp.delegate('.close', 'click', function(event){
			event.preventDefault();
			that.hide();
		});

		$('body').delegate('.popUp_obscure', 'click', function(event){
			//console.log(that)
			//if(that._active == true){
				that.hide();
			//}
		});

		$(window).resize(function(event){
			if(that._active == true){
				that._position();	
			}
		});
	},

	someMethod: function(){
		console.log('some method');
	},

	options : {
		id: '',
		width : 600,
		padding : 24,
		closable : true, //Save this for later as an idea
		closeLink : true, //Display the close like in the top right
		dynamic : false,
		title: 'My Pop Up',
		content: ''
	}
}

if ( typeof define === "function" && define.amd ) {
	define( ['jquery', 'modules/createModule'], function ($) { return jw.popUps; } );
}