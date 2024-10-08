const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const quoteBtn = document.querySelector(".quoteBtn");
const toggle = document.getElementById('darkModeToggle');

const getQuote = async () => {
    try {
        const response = await fetch("https://quotes-api-self.vercel.app/quote");
        if (!response.ok) {
            throw new Error("Cannot fetch quote");
        }
        const data = await response.json();
        quote.textContent = "";
        const { quote: qu, author: au } = data;
        quote.textContent = qu;
        author.textContent = `- ${au}`;

    }
    catch (error) {
        console.error(error);
    }
}

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
});

quoteBtn.addEventListener("click", getQuote);