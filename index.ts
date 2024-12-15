import { fetch } from "bun";

async function getPosts(): Promise<void> {
    try {
        const response = await fetch('https://dummy-json.mock.beeceptor.com/posts');
        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            return;
        }
        const posts = await response.json();
        console.log(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Call the function and handle the promise
getPosts().then(() => {
    console.log('Posts fetched successfully.');
}).catch((error) => {
    console.error('Error in getPosts:', error);
});
