document.getElementById('loginForm").addEventListener('submit', function(event) {

    event.preventDefault();
    
    const username document.getElementById('username').value;
    
    const password document.getElementById('password').value;
    
    fetch('/login', {
    
    method: 'POST',
    
    headers: {
    
    'Content-Type': 'application/json'
    
    },
    
    body: JSON.stringify({username, password})
    
    })
    
    .then(response -> {
    
    if (response.ok) {
    
    // Jika login berhasil, redirect ke beranda.html
    
    window.location.href 'Beranda.html';
    
    } else {
    
    // Jika login gagal, tampilkan pesan kesalahan alert('Login gagal. Silakan coba lagi.');
    alert('Login gagal, Silakan coba lagi');
    
    }
    
    })
    
    .catch(error => {
    
    console.error('Error:', error);
    
    });
    
});



document.getElementById('transaksiForm").addEventListener('submit', function(event) {

    event.preventDefault();
    
    const username document.getElementById('username').value;
    
    const password document.getElementById('password').value;
    
    fetch('/transaksi', {
    
    method: 'POST',
    
    headers: {
    
    'Content-Type': 'application/json'
    
    },
    
    body: JSON.stringify({username, password})
    
    })
    
    .then(response -> {
    
    if (response.ok) {
    
    // Jika transaksi berhasil, redirect ke beranda.html
    
    window.location.href 'Beranda.html';
    
    } else {
    
    // Jika transaksi gagal, tampilkan pesan kesalahan alert('transaksi gagal. Silakan coba lagi.');
    alert('Login gagal, Silakan coba lagi');
    
    }
    
    })
    
    .catch(error => {
    
    console.error('Error:', error);
    
    });
    
});
