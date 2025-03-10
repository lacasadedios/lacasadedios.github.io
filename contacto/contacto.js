document.getElementById('sedeSelect').addEventListener('change', function() {
    const btn = document.getElementById('mapaBtn');
    btn.href = this.value;
    btn.classList.remove('disabled');
});
