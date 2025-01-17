const menuElement = document.querySelector('.menu');
const linksElement = document.querySelector('.links');

menuElement.addEventListener('click', openNav);

function openNav(e) {
    document.body.style.overflowY = 'hidden';
    linksElement.classList.toggle('show');
    if(linksElement.getAttribute('class') == 'links') {
        document.body.style.overflow = 'auto';
    }
}

console.log(linksElement.getAttribute('class'));

const token = localStorage.getItem("authToken");
  const logoutButton = document.getElementById("logoutButton");

  if (token) {
    // Tampilkan tombol logout jika token ada
    logoutButton.style.display = "inline-block";
  }

  // Tambahkan event listener untuk tombol logout
  logoutButton.addEventListener("click", () => {
    // Hapus token dari localStorage
    localStorage.removeItem("authToken");

    // Redirect ke halaman login
    window.location.href = "loginregis.html";
  });


