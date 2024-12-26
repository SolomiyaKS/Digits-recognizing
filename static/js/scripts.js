async function uploadImage() {
    const input = document.getElementById('imageInput');
    if (!input.files[0]) {
        alert("Please select a file to upload");
        return;
    }

    const file = input.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://127.0.0.1:8000/predict-image/', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        document.getElementById('predictionResult').textContent = `Prediction: ${result.prediction}`;
    } catch (error) {
        console.error('Error:', error);
        alert('Failed!');
    }
}

function createSnowflakes() {
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.classList.add('snowflake-container');
    document.body.appendChild(snowflakeContainer);

    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '&#10052;'; 
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflakeContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 10000); 
    }, 200);
}

window.onload = createSnowflakes;
