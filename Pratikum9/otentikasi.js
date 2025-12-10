function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // username & password yang sudah ditentukan
    const validUser = "wahyu";
    const validPass = "2005";

    if (user === validUser && pass === validPass) {
        alert("Login berhasil!");
        window.location.href = "sukses.html"; // arahkan ke halaman sukses
        return false; // mencegah form reload
    } else {
        alert("Login gagal! Username atau password salah.");
        return false; // tetap di halaman login
    }
}
