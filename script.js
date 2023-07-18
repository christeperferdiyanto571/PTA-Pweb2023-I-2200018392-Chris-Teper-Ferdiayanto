function submitForm(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
    var form = event.target; // Mendapatkan elemen form yang dikirim
    var thankYouMessage = document.getElementById("thank-you-message");
  
    // Simulasikan pengiriman formulir atau lakukan tindakan lain yang diperlukan
    // ...
  
    // Tampilkan pesan terima kasih dan sembunyikan formulir
    form.style.display = "none";
    thankYouMessage.style.display = "block";
  }
  