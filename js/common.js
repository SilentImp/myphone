$(document).ready(function() {
	$(document).click(function() {
        popup.fadeOut(200);
       	overlay.fadeOut(200);
        $(".js-select").removeClass("is-active");
    });
    var overlay = $(".js-overlay");
    var popup = $(".js-popup");
    function selectList() {
        var select = $(".js-select");
        var select_list = $(".js-select-list");
        $("body").on("click", ".js-select", function(event){
            if ($(this).hasClass("is-active")) {
                select.removeClass("is-active");
                //select_list.hide();
            }
            else {
                select.removeClass("is-active");
                //select_list.hide();
                //$(this).find(".js-select-list").show();
                $(this).addClass("is-active");
            }
            event.stopPropagation();
        });
        $("body").on("click", ".js-select-list a", function(event){
            var id = $(this).parent().attr("data-id");
            var html = $(this).html();
            $(this).parents(".js-select").find(".js-select-text").html(html);
            $(this).parents(".js-select").find(".js-select-input").val(id);
            //$(this).parent().hide();
            $(this).parents(".js-select").removeClass("is-active");
            event.stopPropagation();
        });
        $(".js-more-list").on("click", function(event){
        	$(this).parents(".js-select-list").addClass("has-scroll");
        	$(this).parents(".js-select-list").find("li").removeAttr("hidden");
        	$(this).parent().remove();
	        event.stopPropagation();
	    });
    }  
    selectList();
    $("body").on("click", ".js-select", function(event){
        event.stopPropagation();
    });

   	popup.on("click", function(event){
        event.stopPropagation();
    });

    $(".js-close").on("click", function(event){
    	$(this).parent().fadeOut(200);
    	overlay.fadeOut(200);
        event.stopPropagation();
    });
	$(".js-validate-form").each(function(){
			$(this).validate({
				errorClass: "has-error",
			rules: {
				firstname: "required",
				lastname: "required",
				username: {
					required: true,
					minlength: 2
				},
				password: {
					required: true,
					minlength: 5
				},
				confirm_password: {
					required: true,
					minlength: 5,
					equalTo: "#password"
				},
				email: {
					required: true,
					email: true
				},
				tel: {
					required: true,
					minlength: 2
				},
				//agree: "required"
			},
			messages: {
				firstname: "Вас так зовут?",
				lastname: "У вас такая фамилия?",
				// username: {
				// 	required: "Please enter a username",
				// 	minlength: "Your username must consist of at least 2 characters"
				// },
				password: {
					required: "Пароли не совпадают",
					minlength: "Минимум 5 символов",
				},
				confirm_password: {
					required: "Пароли не совпадают",
					minlength: "Минимум 5 символов",
					equalTo: "Please enter the same password as above"
				},
				email: "Тут что-то не так :(",
				//tel: "Телефон с ошибкой :(",
				tel: {
					required: "Телефон с ошибкой :(",
					digits: true,
					//minlength: "Your password must be at least 5 characters long",
					//equalTo: "Please enter the same password as above"
				},
				//agree: "Please accept our policy"
			}
		});
	});
	$(".js-enter-form").each(function(){
		$(this).validate({
			errorClass: "has-error",
			rules: {
				password: {
					required: true,
					minlength: 5
				},
				email: {
					required: true,
					email: true
				},
			},
			messages: {
				password: {
					required: "Неверный пароль :(",
					minlength: "Минимум 5 символов",
				},
				email: "Тут что-то не так :(",
			}
		});
	});
	   
});