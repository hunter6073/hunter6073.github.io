(function($) {


    /* Vip Services form */
    function after_form_submitted_vip_services(data) 
    {
        console.log(data);

        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();
        $form = $(this);

        var first_name = $('#firstname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();


        $(".error").remove();
            
        if (first_name.length < 1) {
          $('#firstname').after('<span class="error">请输入姓名</span>');
        }

        if (email.length < 1) {
          $('#email').after('<span class="error">请输入邮箱</span>');
        } 
        else {
          var regEx_email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          var validEmail = regEx_email.test(email);
          if (!validEmail) {
            $('#email').after('<span class="error">Enter a valid email</span>');
          }
        }


        if (phone.length < 1) {
          $('#phone').after('<span class="error">请输入电话</span>');
        } 
        else {
          var regEx_phone = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
          var validPhone = regEx_phone.test(phone);
          if (!validPhone) {
            $('#phone').after('<span class="error">Enter a valid phone</span>');
          }
        }

        if (message.length < 1) {
          $('#message').after('<span class="error">请输入留言</span>');
        }

                
        if (first_name.length > 1 && message.length > 1 && phone.length > 1 && email.length > 1) {
            var regEx_email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var validEmail = regEx_email.test(email);

            var regEx_phone = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
            var validPhone = regEx_phone.test(phone);
              
            if (validEmail) {
                if (validPhone) {

                    $.ajax({
                      type: "POST",
                      url: 'https://easymayemail.herokuapp.com/sendMail1',
                      data: $form.serialize(),
                      // contentType: 'application/json',
                      dataType: 'jsonp'
                    }).done(function (data) {
                      $('button[type="submit"]', $form).each(function()
                      {
                        $btn = $(this);
                        $btn.prop('type','button' );
                        $btn.prop('orig_label',$btn.text());
                        $btn.text('发送成功！');
                      });
                    })
                }
            }
        }
    });	




    /* Contact Page form */
    function after_form_submitted_contact(data) 
    {
        console.log(data);

        if(data.result == 'success')
        {
            $('form#contact_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

    $('#contact_form').submit(function(e) {
        e.preventDefault();
        $form = $(this);
        
        var first_name = $('#firstname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
        var form_subject = $('#form_subject').val();


        $(".error").remove();
            
        if (first_name.length < 1) {
          $('#firstname').after('<span class="error">请输入姓名</span>');
        }

        if (email.length < 1) {
          $('#email').after('<span class="error">请输入邮箱</span>');
        } 
        else {
          var regEx_email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          var validEmail = regEx_email.test(email);
          if (!validEmail) {
            $('#email').after('<span class="error">Enter a valid email</span>');
          }
        }


        if (form_subject.length < 1) {
          $('#form_subject').after('<span class="error">请输入主题</span>');
        }


        if (phone.length < 1) {
          $('#phone').after('<span class="error">请输入电话</span>');
        } 
        else {
          var regEx_phone = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
          var validPhone = regEx_phone.test(phone);
          if (!validPhone) {
            $('#phone').after('<span class="error">Enter a valid phone</span>');
          }
        }

        if (message.length < 1) {
          $('#message').after('<span class="error">请输入内容</span>');
        }

               
        if (first_name.length > 1 && message.length > 1 && form_subject.length > 1 && phone.length > 1 && email.length > 1) {
            var regEx_email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var validEmail = regEx_email.test(email);

            var regEx_phone = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
            var validPhone = regEx_phone.test(phone);
              
            if (validEmail) {
                if (validPhone) {
                  $.ajax({
                    type: "POST",
                    url: 'https://easymayemail.herokuapp.com/sendMail1',
                    data: $form.serialize(),
                    // contentType: 'application/json',
                    dataType: 'jsonp'
                  }).done(function (data) {
                    $('button[type="submit"]', $form).each(function()
                    {
                      $btn = $(this);
                      $btn.prop('type','button' );
                      $btn.prop('orig_label',$btn.text());
                      $btn.text('发送成功！');
                    });
                  })
                }
            }
        }
      });  




    /* Index form */
    function after_form_submitted_index(data)  {

        console.log(data);

        if(data.result == 'success')
        {
            $('form#reservation_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

    $('#reservation_form').submit(function(e) {

        e.preventDefault();
        $form = $(this);

        var first_name = $('#firstname').val();
        var email = $('#email').val();
        var category = $('#category').val();


        $(".error").remove();
            
        if (first_name.length < 1) {
          $('#firstname').after('<span class="error">请输入姓名</span>');
        }

        // if (category.length < 1) {
        //   $('#category').after('<span class="error">This field is required</span>');
        // }

        if (email.length < 1) {
          $('#email').after('<span class="error">请输入邮箱</span>');
        } 
        else {
          var regEx_email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          var validEmail = regEx_email.test(email);
          if (!validEmail) {
            $('#email').after('<span class="error">请输入正确的邮箱</span>');
          }
        }

        
        if (first_name.length > 1 && email.length > 1) {
            var regEx_email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var validEmail = regEx_email.test(email);

            if (validEmail) {
                $.ajax({
                    type: "POST",
                    url: 'https://easymayemail.herokuapp.com/sendMail1',
                    data: $form.serialize(),
                    // contentType: 'application/json',
                    dataType: 'jsonp'
                }).done(function (data) {
                  console.log(data)
                })
            }
        }
    });  

})(jQuery);
