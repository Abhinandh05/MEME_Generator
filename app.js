const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn"
  );
  const memeImage = document.querySelector(".meme-generator img");
  const memeTitle = document.querySelector(".meme-generator .meme-title");
  const memeAuthor = document.querySelector(".meme-generator .meme-author");
  const style = document.createElement('style');
  const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeImage.classList.add("zoom-effect");
    memeAuthor.innerHTML = `Meme by: ${author}`;
  };
  
  const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };
  style.innerHTML = `
  .zoom-effect {
    transition: transform 0.2s;
  }

  .zoom-effect:hover {
    transform: scale(1.1);
  }
`;
document.head.appendChild(style);
  generateMemeBtn.addEventListener("click", generateMeme);
  
  generateMeme();