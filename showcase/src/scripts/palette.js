document.addEventListener('DOMContentLoaded', () => {
    const palettes = document.querySelectorAll('.palette');

    palettes.forEach(palette => {
        palette.addEventListener('click', function() {
            const paletteName = this.getAttribute('data-palette');
            switch (paletteName) {
                case 'palette1':
                    updateThemeColors('#186F65', '#B5CB99', '#FCE09B', '#B2533E', '#3D0C11');
                    break;
                case 'palette2':
                    updateThemeColors('#1D2B53', '#7E2553', '#FF004D', '#F6D776', '#FAEF5D');
                    break;
                case 'palette3':
                    updateThemeColors('#FF8080', '#FFCF96', '#F6FDC3', '#CDFADB', '#0D9276');
                    break;
                // Additional palettes as needed
            }
        });
    });

    function updateThemeColors(primary, secondary, tertiary, quaternary, quinary) {
        document.documentElement.style.setProperty('--primary-color', primary);
        document.documentElement.style.setProperty('--secondary-color', secondary);
        document.documentElement.style.setProperty('--tertiary-color', tertiary);
        document.documentElement.style.setProperty('--quaternary-color', quaternary);
        document.documentElement.style.setProperty('--quinary-color', quinary);
        // Update body background and text color as an example of dynamic change
        document.documentElement.style.setProperty('--body-bg-color', primary); // Or another color as preferred
        document.documentElement.style.setProperty('--text-color', quinary); // Or another contrasting color as needed
    }
});
