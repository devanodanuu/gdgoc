let nama1 = "Judy Hopps";
let jarakHarian1 = 3;
let nama2 = "Nick Wilde";
let jarakHarian2 = 2;

let jumlahHari = 5;
let totalJarak1 = jarakHarian1 * jumlahHari;
let totalJarak2 = jarakHarian2 * jumlahHari;

console.log("=== LATIHAN PENJAGA ZOOTOPIA ===");
console.log(`Jarak lari per hari:`);
console.log(`Judy Hopps: ${jarakHarian1} km`);
console.log(`Nick Wilde: ${jarakHarian2} km`);
console.log(" ");

for (let hari = 1; hari <= jumlahHari; hari++) {
    console.log(`Hari ${hari}:`);
    console.log(`- ${nama1} lari ${jarakHarian1} km`);
    console.log(`- ${nama2} lari ${jarakHarian2} km`);

    if (hari < jumlahHari) {
        console.log("");
    }
}

console.log(" ");
console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
console.log(`${nama1}: ${totalJarak1} km`);
console.log(`${nama2}: ${totalJarak2} km`);

/* === END OF SCRIPT === */