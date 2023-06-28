const nama = "Ibnu Farrel";
console.log(nama);
let usia = 16;
console.log(usia);

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let manusia;
    let generasi;

    if (usia == 1) {
        generasi = "generasi bayi";
        console.log('bayi');
    }
    else if (usia >= 2 && usia <= 10) {
        generasi = "generasi anak-anak";
        console.log('anak-anak');
    }
    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja";
        console.log('remaja');
    }
    else if (usia >= 18 && usia <= 40) {
        generasi = "generasi dewasa";
        console.log('dewasa');
    }
    else if (usia > 40 && usia <= 99) {
        generasi = "generasi lansia";
        console.log('lansia');
    }
    if (usia == 100) {
        generasi = 'bejir 1 abad';
        console.log('bejir lu makhluk apaan hidup nyampe 1 abad');
        manusia = 'manusia dewa';
    } else if (usia > 100) {
        generasi = 'bejir kagak mati'
        console.log('bejir lu makhluk apaan hidup nyampe 1 abad lebih');
        manusia = 'manusia dewa';
    }
    else {
        console.log('manusia normal')
        manusia = 'manusia normal';
    }
    console.log(`nama saya ${nama}, usia saya ${usia} tahun, saya ${generasi} dan saya ${manusia}`)
    return biodata.innerHTML = generasi;
}

generateBiodata();