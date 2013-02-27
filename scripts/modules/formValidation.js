jw.formValidation = {
	_init: function(options){
		//console.log('formValidation init', this);
		this.options = $.extend({}, this.options, options);	//Merge paramaters objects

		this.myForm = options.target;
		this.$myForm = $(options.target);

		this._addListeners();
	},

	doValidation: function(){
		var check_email = function(str) {
			//console.log(str);
			var at='@',
				dot='.',
				lat=str.indexOf(at),
				lstr=str.length,
				ldot=str.indexOf(dot);

			var highlightError = function(){
				$('#email').css({'border': '1px solid #FF0000'});
				$('#emailRequired').css({'display': 'inline'});
			}

			if (str.indexOf(at)==-1){
				highlightError();
			   return false
			}

			if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
				highlightError();
			   return false
			}

			if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
				highlightError();
				return false
			}

			if (str.indexOf(at,(lat+1))!=-1){
				highlightError();
				return false
			}

			if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
				highlightError();
				return false
			}

			if (str.indexOf(dot,(lat+2))==-1){
				highlightError();
				return false
			}
			
			if (str.indexOf(" ")!=-1){
				highlightError();
				return false

			}

			return true;				
		}

		var $name = this.$myForm.find('#name'),
			$email = this.$myForm.find('#email'),
			$math = this.$myForm.find('#math'),
			$message = this.$myForm.find('#message');

		//console.log(check_email($email.val()));
		if ($email.val() === null || $email.val() === '' || check_email($email.val()) === false) {
			$email.addClass('error');
			$('#emailRequired').show();
			$email.focus();
			
			return false;
		}else{
			$email.removeClass('error');
			$('#emailRequired').hide();
		}

		if($math.val() !== '3'){
			$('#mathRequired').show();
			$math.addClass('error');

			return false;
		} else {
			$('#mathRequired').hide();
			$math.removeClass('error');
		}

		return true;	
	},

	_addListeners: function(){
		var that = this;

		this.$myForm.bind('submit', function(event){
			event.preventDefault();

			//console.log('submit form', that.$myForm);

			if(that.doValidation()){
				//console.log('hooray, form validates');
				
				var formSubmitDefer = $.ajax({
					method: 'POST',
					url: $(this).attr('action'),
					data: $(this).serialize(),
					success: function(data){
						//console.log('success', data);

						if(data !== 'error'){
							that.$myForm.remove();
							$('#form_contact_thanks').show();
						}
					},
					error: function(data){
						//console.log('error', data)
					}
				});
			}
		});
	},

	options: {
		form: ''
	}
}

if ( typeof define === "function" && define.amd ) {
	define( ['jquery'], function ($) { return jw.formValidation; } );
}