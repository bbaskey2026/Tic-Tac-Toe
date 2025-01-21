require('dotenv').config();
const axios = require('axios');  // Use axios instead of fetch
const readlineSync = require('readline-sync');
const open = require('open');

const apiKey = process.env.HUGGINGFACE_API_KEY;

// Function to interact with Hugging Face API
async function askAI(prompt) {
    try {
        const response = await axios({
            method: 'POST',
            url: 'https://api-inference.huggingface.co/models/distilgpt2',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            data: {
                inputs: prompt,
                parameters: {
                    max_length: 100,
                    num_return_sequences: 1
                }
            }
        });

        // Extract generated text from response
        if (response.data && response.data[0]) {
            return response.data[0].generated_text || 'No response text found';
        }
        return 'Sorry, no valid response was generated.';

    } catch (error) {
        console.error('Error communicating with Hugging Face:', error.message);
        return "Sorry, I couldn't process that request.";
    }
}

// Function to handle system tasks
async function handleTask(response) {
    try {
        if (response.toLowerCase().includes("open browser")) {
            console.log("Opening the browser...");
            await open('https://www.google.com');
        } else {
            console.log("AI Response:", response);
        }
    } catch (error) {
        console.error('Error in handleTask:', error.message);
    }
}

// Main interaction loop
async function main() {
    console.log("AI Agent started. Type 'exit' to quit.");
    
    while (true) {
        try {
            const userInput = readlineSync.question("\nYou: ");
            
            if (userInput.toLowerCase() === 'exit') {
                console.log("Exiting the AI agent...");
                break;
            }

            if (!userInput.trim()) {
                console.log("Please enter a valid input.");
                continue;
            }

            const aiResponse = await askAI(userInput);
            await handleTask(aiResponse);

        } catch (error) {
            console.error('Error in main loop:', error.message);
        }
    }
}

// Start the application
main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});