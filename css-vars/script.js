const inputs = document.querySelectorAll('input');

const handleChange = (event) => {
    const value = event.currentTarget.value;
    const unit = event.currentTarget.dataset.unit;
    const formattedValue = value + unit;
    document.documentElement.style.setProperty(`--${event.currentTarget.name}`, formattedValue)
}

inputs.forEach(input => input.addEventListener('input', (e) => handleChange(e)))
