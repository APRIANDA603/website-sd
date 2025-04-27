const dataSiswa = {
    "3129698530": { nama: "Alin Zirlina", asal: "SD Negeri Tetaan", status: "Lulus" },
    "0987654321": { nama: "Siti Nurhaliza", asal: "SD Negeri Tetaan", status: "Lulus" },
    "1122334455": { nama: "Budi Santoso", asal: "SD Negeri Tetaan", status: "Tidak Lulus" }
};

function playClickSound() {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/1826/1826-preview.mp3');
    audio.play();
}

function login() {
    playClickSound();
    const nisn = document.getElementById('nisnLogin').value.trim();
    if (dataSiswa[nisn]) {
        window.location.href = "cek-kelulusan.html";
    } else {
        alert("NISN tidak ditemukan!");
    }
}

function cekKelulusan() {
    playClickSound();
    const nisn = document.getElementById('nisnCek').value.trim();
    const result = document.getElementById('result');
    const error = document.getElementById('error');
    const name = document.getElementById('student-name');
    const school = document.getElementById('student-school');
    const status = document.getElementById('student-status');

    result.classList.add('hidden');
    error.classList.add('hidden');

    if (dataSiswa[nisn]) {
        const siswa = dataSiswa[nisn];
        name.textContent = `Nama: ${siswa.nama}`;
        school.textContent = `Asal Sekolah: ${siswa.asal}`;
        status.textContent = `Status Kelulusan: ${siswa.status}`;
        result.classList.remove('hidden');

        if (siswa.status === "Lulus") {
            showConfetti();
        }
    } else {
        error.classList.remove('hidden');
    }
}

function showConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        confetti(Object.assign({}, defaults, { particleCount: 50, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }}));
        confetti(Object.assign({}, defaults, { particleCount: 50, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }}));
    }, 250);
}
