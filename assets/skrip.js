document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-collapse");

    accordions.forEach((accordion) => {
        // Event sebelum expand
        accordion.addEventListener("show.bs.collapse", function (event) {
            const showContent = confirm("Apakah Anda ingin menampilkan konten?");
            if (!showContent) {
                // Jika pengguna memilih 'Tidak', batalkan animasi expand
                event.preventDefault();
            }
        });

        // Event sebelum collapse
        accordion.addEventListener("hide.bs.collapse", function (event) {
            const hideContent = confirm("Apakah Anda ingin menutup konten?");
            if (!hideContent) {
                // Jika pengguna memilih 'Tidak', batalkan animasi collapse
                event.preventDefault();
            }
        });
    });
});

function toggleChaosMode() {
    const isChecked = document.getElementById("flexSwitchCheckDefault").checked;

    if (isChecked) {
        const ask = confirm("Apakah anda ingin mengacaukan tampilan web?");
        if(ask){
                    // Mengaktifkan mode "berantakan"
                document.body.style.backgroundColor = "pink";
                document.body.style.color = "lime";

                // Mengubah posisi header dan footer secara acak
                document.querySelector("header").style.position = "absolute";
                document.querySelector("header").style.top = Math.random() * 100 + "px";
                document.querySelector("header").style.left = Math.random() * 100 + "px";

                document.querySelector("footer").style.position = "absolute";
                document.querySelector("footer").style.bottom = Math.random() * 100 + "px";
                document.querySelector("footer").style.left = Math.random() * 100 + "px";

                // Mengubah warna latar belakang dan warna teks elemen lain
                document.querySelectorAll(".accordion-item").forEach(item => {
                    item.style.backgroundColor = "purple";
                    item.style.color = "yellow";
                    item.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
                });

                document.querySelectorAll("h1, h2, .accordion-button").forEach(element => {
                    element.style.color = "red";
                    element.style.backgroundColor = "cyan";
                    element.style.fontSize = Math.random() * 10 + 15 + "px";
                });
            }
        else{
            event.preventDefault();
        }
        }
        else {
            // Menonaktifkan mode "berantakan" dan mengembalikan ke style semula
            document.body.style.backgroundColor = "";
            document.body.style.color = "";

            document.querySelector("header").style.position = "";
            document.querySelector("header").style.top = "";
            document.querySelector("header").style.left = "";

            document.querySelector("footer").style.position = "";
            document.querySelector("footer").style.bottom = "";
            document.querySelector("footer").style.left = "";

            document.querySelectorAll(".accordion-item").forEach(item => {
            item.style.backgroundColor = "";
            item.style.color = "";
            item.style.transform = "";
            });

            document.querySelectorAll("h1, h2, .accordion-button").forEach(element => {
            element.style.color = "";
            element.style.backgroundColor = "";
            element.style.fontSize = "";
             });
        }
       
}
