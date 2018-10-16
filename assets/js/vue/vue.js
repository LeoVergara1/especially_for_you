var app = new Vue({
  el:".vue",

    data: {
      mensaje: "Aprende Vue.js Fácilmente",
      src: "https://vuejs.org/images/logo.png"
      },
    created: function () {

    },
    methods: {
      showingMessage: function () {
        return this.mensaje;
      },
      send: function() {
        console.log("Send message")
        var templateParams = {
          to_name: 'Brandon',
          notes: 'Dijó que si :)',
          message_html: 'Dijó que si :)'
        };
       emailjs.send('gmail', 'template_jnd1f1CT', templateParams).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
       })
      },
      closed: function() {
        console.log("Send message")
        var templateParams = {
          to_name: 'Brandon',
          notes: 'Sólo cerro el modal :(',
          message_html: 'Sólo cerro el modal :('
        };
       emailjs.send('gmail', 'template_jnd1f1CT', templateParams).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
       })
      }
    }
})