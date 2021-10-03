(function ($) {
  // Автор: Дмитрий Давыдов
  // Материал с сайта https://smartlanding.biz/otpravka-dannyx-formy-v-telegram.html
  $(".pop-up-order-form").submit(function (event) {
    event.preventDefault();
    // Сохраняем в переменную form id текущей формы, на которой сработало событие submit
    let form = $('#' + $(this).attr('id'))[0];

    // Сохраняем в переменную класс с параграфом для вывода сообщений
    let message = $(this).find(".contact-form__message");
    
    let fd = new FormData(form);
    $.ajax({
      url: "/mailer/php/send-message-to-telegram1.php",
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      success: function success(res) {
        let respond = $.parseJSON(res);
        if (respond.err) {
          message.html(respond.err).css('color', '#d42121');
          setTimeout(() => {
            message.text('');
          }, 3000);
        } else if (respond.okSend) {
          message.html(respond.okSend).css('color', '#21d4bb');
          setTimeout(() => {
            message.text('');
            document.querySelector('.pop-up').classList.add('pop-up-hidden')
          }, 3000);
        } else {
          alert('Необработанная ошибка. Проверьте консоль и устраните.');
        }
      },
    });
  });
  $(".pop-up-order-header").submit(function (event) {
    event.preventDefault();

    // Сохраняем в переменную form id текущей формы, на которой сработало событие submit
    let form = $('#' + $(this).attr('id'))[0];

    // Сохраняем в переменную класс с параграфом для вывода сообщений

    let fd = new FormData(form);
    $.ajax({
      url: "/mailer/php/send-message-to-telegram2.php",
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      success: function success(res) {
        let respond = $.parseJSON(res);
        if (respond.err) {
          document.querySelector('.header-btn').classList.add('sendError');
          setTimeout(() => {
            document.querySelector('.header-btn').classList.remove('sendError');
          }, 3000);
        } else if (respond.okSend) {
          document.querySelector('.header-btn').classList.add('sendOk');
          setTimeout(() => {
            document.querySelector('.header-btn').classList.remove('sendOk');
          }, 3000);
        } else {
          alert('Необработанная ошибка. Проверьте консоль и устраните.');
        }
      },
    });
  });
  $(".form-request").submit(function (event) {
    event.preventDefault();

    // Сохраняем в переменную form id текущей формы, на которой сработало событие submit
    let form = $('#' + $(this).attr('id'))[0];

    // Сохраняем в переменную класс с параграфом для вывода сообщений

    let fd = new FormData(form);
    console.log(fd)
    $.ajax({
      url: "/mailer/php/send-message-to-telegram3.php",
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      success: function success(res) {
        let respond = $.parseJSON(res);
        if (respond.err) {
          document.querySelector('.footer-send-btn').classList.add('sendError');
          setTimeout(() => {
            document.querySelector('.footer-send-btn').classList.remove('sendError');
          }, 3000);
        } else if (respond.okSend) {
          document.querySelector('.footer-send-btn').classList.add('sendOk');
          setTimeout(() => {
            document.querySelector('.footer-send-btn').classList.remove('sendOk');
          }, 3000);
        } else {
          alert('Необработанная ошибка. Проверьте консоль и устраните.');
        }
      },
    });
  });
 
}(jQuery));