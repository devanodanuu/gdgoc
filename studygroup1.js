console.log("---Ticket Masuk Zoo---");
let pengunjung = [
    {nama: "judy", umur: 4},
    {nama: "Joko", umur: 35},
    {nama: "sela", umur: 65},
    {nama: "zell", umur: 19}
]; 

let hargaTicket = 50000;

for (let i = 0; i < pengunjung.length; i++){ 
    let namaPengunjung = pengunjung[i].nama;
    let umur = pengunjung[i].umur;
    let pesan = "";

    if(umur < 5){
        pesan = "Free! untuk balita";
    }else if (umur <= 12) {
        pesan = "Diskon 50%! harga tiket: " + (hargaTicket / 2);
    }else if (umur >= 60) {
        pesan = "Diskon 30%! harga tiket: " + (hargaTicket * 0.7);
    }else{
        pesan = "Harga normal: " + hargaTicket;
    }

    console.log("Nama pengunjung: " + namaPengunjung); 
    console.log("Umur: " + umur + " tahun");          
    console.log("Keterangan:", pesan);
}