$(document).ready(function() {

  $('#sendForm').click(function(e) {
    
        e.preventDefault();
        var btn = $(this);
        var data = {};
        if( $("input[name='number']").val().length <= 9 ){
          alert('Введите пожалуйста корректный номер телефона.');
        } else if( $("input[name='name']").val().length <= 2 ){
          alert('Имя должно содержать более двух символов')
        } else {
        $.ajax({
          method: "POST",
          url: "ajax/action_ajax_form.php",
          dataType: "json",
          data: {
            'name': $("input[name='name']").val(),
            'tel': $("input[name='number']").val()
          },
          success: function(data) {
            $('#sendForm').css({'background-color':'#008230',
                                'border-color':'#008230'
            }).text('Спасибо!');
            alert('Спасибо! Мы приняли Вашу заявку и свяжемся с Вами в ближайшее время');
            $("input[name='name']").val('');
            $("input[name='number']").val('');
          },
          error: function(er) {
            $('#sendForm').css({'background-color':'#008230',
                                'border-color':'#008230'
            }).text('Спасибо!');
            alert('Спасибо! Мы приняли Вашу заявку и свяжемся с Вами в ближайшее время');
            $("input[name='name']").val('');
            $("input[name='number']").val('');
          }
          });
        }
        });
      })
