// do the Show More Projects button with using DOM
document.getElementById("showMoreProjects").addEventListener("click", function() {
    let newProject = document.createElement("article");
    newProject.innerHTML = `
      <h2>Sentiment Analysis in Arabic Tweets</h2>
      <p>The goal of this project is to build a machine learning model that accurately classifies Arabic tweets as positive or negative. The project involves data cleaning, preprocessing of Arabic text, feature extraction, model training, evaluation, and deployment of a web app for real-time sentiment prediction.</p>
      <time datetime="2025-04">April 2025</time>
      <figure>
        <img src="test.jpg" alt="Screenshot of output">
      </figure>
      <a href="https://github.com/MUSAB10000/sentiment-Analysis-in-Arabic-tweets">View on GitHub</a>
    `;
    document.querySelector("main").appendChild(newProject);
  });
  