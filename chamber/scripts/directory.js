/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

header {
    background-color: #4a4a8a;
    color: white;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

footer {
    background-color: #4a4a8a;
    color: white;
    text-align: center;
    padding: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0;
}

/* Card Container */
#cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1rem;
    padding: 1rem;
}

/* Individual Card Styles */
section {
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    padding: 1rem;
}

h2 {
    color: #4a4a8a;
    margin-bottom: 0.5rem;
}

img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

p {
    margin: 0.5rem 0;
}
