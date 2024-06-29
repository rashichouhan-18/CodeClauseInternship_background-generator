document.addEventListener("DOMContentLoaded", () => {
    const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    const gradientType = document.getElementById('gradientType');
    const preview = document.getElementById('preview');

    function updateBackground() {
        const gradient = gradientType.value === 'linear' 
            ? `linear-gradient(to right, ${color1.value}, ${color2.value})` 
            : `radial-gradient(circle, ${color1.value}, ${color2.value})`;

        preview.style.background = gradient;
    }

    color1.addEventListener('input', updateBackground);
    color2.addEventListener('input', updateBackground);
    gradientType.addEventListener('change', updateBackground);
    
    // Initialize with default values
    updateBackground();
});
