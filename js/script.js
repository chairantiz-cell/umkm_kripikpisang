/* GALERI FOTO */
function bukaFoto(src) {
    const lightbox = document.getElementById("lightbox");
    const fotoBesar = document.getElementById("fotoBesar");

    fotoBesar.src = src;
    lightbox.classList.add("active");
}

function tutupFoto() {
    document.getElementById("lightbox").classList.remove("active");
}

/* TUTUP FOTO DENGAN TOMBOL ESC */
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        tutupFoto();
    }
});

/* KOMENTAR */
const formKomentar = document.getElementById("formKomentar");
const daftarKomentar = document.getElementById("daftarKomentar");

let komentar = JSON.parse(localStorage.getItem("komentarZahra")) || [];

/* TAMPILKAN KOMENTAR */
function tampilkanKomentar() {
    daftarKomentar.innerHTML = "";

    komentar.forEach(function(item) {
        const kotak = document.createElement("div");
        kotak.className = "comment-item";

        const nama = document.createElement("h6");
        nama.textContent = item.nama;

        const isi = document.createElement("p");
        isi.textContent = item.isi;

        kotak.appendChild(nama);
        kotak.appendChild(isi);

        daftarKomentar.appendChild(kotak);
    });
}

/* TAMBAH KOMENTAR */
formKomentar.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const isi = document.getElementById("isiKomentar").value.trim();

    if (nama === "" || isi === "") {
        alert("Nama dan komentar harus diisi!");
        return;
    }

    komentar.unshift({
        nama: nama,
        isi: isi
    });

    localStorage.setItem("komentarZahra", JSON.stringify(komentar));

    tampilkanKomentar();
    formKomentar.reset();

    alert("Komentar berhasil dikirim!");
});

/* TAMPILKAN KOMENTAR SAAT WEBSITE DIBUKA */
tampilkanKomentar();