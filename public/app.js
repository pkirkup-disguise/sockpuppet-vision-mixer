// app.js
let currentTransitionValue = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    const videoContainer = document.querySelector('#container');
    const videoContainer2 = document.querySelector('#container2');
    const videoContainer3 = document.querySelector('#container3');

    const transitionButton = document.querySelector('#transition-button');
    const transitionTimeInput = document.querySelector('#transition-time');

    fetch('http://localhost/api/v1/resources?type=videoclip')
        .then(response => response.json())
        .then(data => {
            data.result.forEach(video => {
                const videoElement = document.createElement('div');
                videoElement.className = 'video-tile';
                const thumbnail = document.createElement('img');
                thumbnail.src = `http://localhost/api/v1/thumbnail/${video.uid}?width=64&height=64`;
                thumbnail.alt = `${video.name} thumbnail`;
                videoElement.appendChild(thumbnail);
                const videoLink = document.createElement('a');
                videoLink.textContent = video.name;
                videoLink.href = '#';
                videoLink.addEventListener('click', event => {
                    event.preventDefault();
                    sendOscMessage(video.path);
                });
                videoElement.appendChild(videoLink);
                videoContainer.appendChild(videoElement);
            });

            data.result.forEach(video => {
                const videoElement2 = document.createElement('div');
                videoElement2.className = 'video-tile';
const thumbnail2 = document.createElement('img');
                thumbnail2.src = `http://localhost/api/v1/thumbnail/${video.uid}?width=64&height=64`;
                thumbnail2.alt = `${video.name} thumbnail`;
                videoElement2.appendChild(thumbnail2);
                const videoLink2 = document.createElement('a');
                videoLink2.textContent = video.name;
                videoLink2.href = '#';
                videoLink2.addEventListener('click', event => {
                    event.preventDefault();
                    sendOscMessage2(video.path);
                });
                videoElement2.appendChild(videoLink2);
                videoContainer2.appendChild(videoElement2);
            });

            data.result.forEach(video => {
                const videoElement3 = document.createElement('div');
                videoElement3.className = 'video-tile';
                const thumbnail3 = document.createElement('img');
                thumbnail3.src = `http://localhost/api/v1/thumbnail/${video.uid}?width=64&height=64`;
                thumbnail3.alt = `${video.name} thumbnail`;
                videoElement3.appendChild(thumbnail3);
                const videoLink3 = document.createElement('a');
                videoLink3.textContent = video.name;
                videoLink3.href = '#';
                videoLink3.addEventListener('click', event => {
                    event.preventDefault();
                    sendOscMessage3(video.path);
                });
                videoElement3.appendChild(videoLink3);
                videoContainer3.appendChild(videoElement3);
            });
        })
        .catch(error => console.error('Error:', error));

    transitionButton.addEventListener('click', event => {
    const transitionTime = parseInt(transitionTimeInput.value);
    if (isNaN(transitionTime)) {
        console.error('Invalid transition time');
        return;
    }

    let stepValue;
    if (currentTransitionValue === 0) {
        currentTransitionValue = 1;
        stepValue = 1 / (transitionTime * 1000);
        videoContainer.style.display = 'none'; // Hide Video container
        videoContainer2.style.display = 'block'; // Show Video 2 container
    } else {
        currentTransitionValue = 0;
        stepValue = -1 / (transitionTime * 1000);
        videoContainer.style.display = 'block'; // Show Video container
        videoContainer2.style.display = 'none'; // Hide Video 2 container
    }

    let transitionValue = currentTransitionValue;
    for (let i = 0; i < transitionTime * 1000; i++) {
        setTimeout(() => {
            transitionValue += stepValue;
            sendTransitionOscMessage(transitionValue);
        }, i);
    }
});

});

function sendOscMessage(videoPath) {
    const modifiedVideoPath = `${videoPath}.apx`;

    fetch('http://localhost:3000/sendOscMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoPath: modifiedVideoPath }),
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function sendOscMessage2(videoPath) {
    const modifiedVideoPath = `${videoPath}.apx`;

    fetch('http://localhost:3000/sendOscMessage2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoPath: modifiedVideoPath }),
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function sendOscMessage3(videoPath) {
    const modifiedVideoPath = `${videoPath}.apx`;

    fetch('http://localhost:3000/sendOscMessage3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoPath: modifiedVideoPath }),
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function sendTransitionOscMessage(value) {
    fetch('http://localhost:3000/sendTransitionOscMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: value }),
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
