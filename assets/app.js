// Mengambil referensi elemen-elemen HTML
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let calculation = '';

// Menambahkan event listener ke setiap tombol
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === '=') {
            calculate();
        } else if (value === 'C') {
            clearDisplay();
        } else {
            addToDisplay(value);
        }
    });
});

// Menambahkan angka atau operator ke tampilan
function addToDisplay(value) {
    calculation += value;
    display.value = calculation;
}

// Menghitung dan menampilkan hasil perhitungan
function calculate() {
    try {
        const result = eval(calculation);
        display.value = result;
        calculation = '';
    } catch (error) {
        display.value = 'Error';
    }
}

// Menghapus tampilan
function clearDisplay() {
    calculation = '';
    display.value = '';
}
