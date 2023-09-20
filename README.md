<div align="center">

  ![logo100](./logo100.png)

  # **Math Magicians**
</div>

Welcome to the enchanting world of **Math Magicians**! Dive into the magic of numbers and fun!
Prepare to be amazed as we conjure up mathematical wonders that will leave you giggling and gasping in awe. From mind-boggling calculations on our Calculator page to quotes that will tickle your funny bone on our Quote page, we've got it all! Home is where the math is, and it's full of surprises, laughter, and endless possibilities. So, fasten your seatbelts, hold on tight, and let the math magic take you on a wild and hilarious ride!

---

## <b>Table of Contents 📗</b>

- [Built With 🛠](#built-with)
- [Tech Stack](#tech-stack)
- [Key Features 🏷️](#key-features)
- [Getting Started 💻](#getting-started)
  - [Prerequisites 🧱](#prerequisites)
  - [Setup ⚙️](#setup)
    - [Environment Variables](#environment-variables)
    - [Setting Up Environment Variables](#setting-up-environment-variables)
  - [Install 🏗️](#install)
- [Usage 📂](#usage)
- [Author 👤](#author)
- [Future Features 🔭](#future-features)
- [Contributing 🤝](#contributing)
- [Show your support 🌟](#support)
- [Acknowledgements 🙏](#acknowledgements)
- [License 📝](#license)

---

## **Built With 🛠**<a name="built-with"></a>

### **Tech Stack** <a name="tech-stack"></a>

The Math Magicians project leverages the following technologies:

- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React Logo" height="18px"> [React JS](https://reactnative.dev/): A popular JavaScript library for building user interfaces, particularly single-page applications where UI updates are frequent.
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript Logo" height="18px"> JavaScript: A versatile programming language commonly used for adding interactivity and functionality to web applications.
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3 Logo" height="18px"> [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS): The latest version of Cascading Style Sheets, used for styling the visual presentation of web pages.

---

### **Key Features 🏷️** <a name="key-features"></a>

**Math Magicians** is a Single Page App (SPA) tailored for mathematics enthusiasts. It provides the following core functionalities:

- Perform basic arithmetic calculations with ease.
- Explore a curated selection of inspiring and humorous math-related quotes.

---

## Getting Started 💻<a name="getting-started"></a>

### **Prerequisites 🧱**<a name="prerequisites"></a>

To successfully run and contribute to this project, make sure you have the following:

- **A Github account**: To fork and collaborate on the project.
- **Node JS**: Required for installing project dependencies and running the development server.
- **A web browser**: You'll need a web browser to view the project output. We recommend using [Microsoft Edge](https://www.microsoft.com/en-us/edge) for the best experience.
- **An Integrated Development Environment (IDE)**: We suggest using [Visual Studio Code](https://code.visualstudio.com/) as your code editor, but you can use any IDE of your choice.
- **A terminal**: You'll use the terminal to run various commands during development. If you're using Visual Studio Code, it comes with an integrated terminal.

Additionally, you might want to consider the following for an enhanced development experience:

- **Git**: Familiarize yourself with Git and Github if you're planning to collaborate or contribute to the project.
- **npm**: Learn how to manage project dependencies using npm (Node Package Manager).

With these prerequisites in place, you'll be well-equipped to explore, run, and contribute to Math Magicians.


### **Setup ⚙️**<a name="setup"></a>

To set up the Math Magicians project on your local machine, follow these steps:

1. **Clone this repository**:
    ```bash
      git clone https://github.com/lily4178993/maths-magicians.git
      cd maths-magicians
    ```
2. **Set up all the environment variable**.

### Environment Variables<a name="environment-variables"></a>

To run the Math Magicians application, you need to configure the following environment variables:

- `REACT_APP_QUOTES_URL`: The API URL for fetching quotes.
- `REACT_APP_QUOTES_KEY`: The API Key for accessing the quotes API. You can obtain this API key from the [API Provider](https://api-ninjas.com/api/quotes).
- `REACT_APP_QUOTES_CATEGORY`: The category of quotes you want to retrieve (e.g., 'inspirational', 'funny', 'motivational').


### Setting Up Environment Variables<a name="setting-up-environment-variables"></a>

Follow these steps to set up your environment variables:

1. Create a `.env` file in the project's root directory.
2. Inside the `.env` file, add the necessary environment variables with their corresponding values. For example:
    ```
      REACT_APP_QUOTES_URL=your-api-url-here
      REACT_APP_QUOTES_KEY=your-api-key-here
      REACT_APP_QUOTES_CATEGORY=your-quotes-category-here
    ```
    Replace `your-api-url-here`, `your-api-key-here`, and `your-quotes-category-here` with the actual values you obtained or want to use.
> ////////////////////
>
> **Note**:
> Keep these API keys and sensitive information confidential and do not commit the `.env` file to version control.
>
> ////////////////////

---
<!-- INSTALL -->
## **Install 🏗️**<a name="install"></a>

Once you have cloned the repository and configured the environment variables, you can run the following command to install the project's dependencies:

```bash
  npm install
```
---
<!-- USAGE -->
## **Usage 📂**<a name="usage"></a>

To use the Math Magicians application, follow these steps:

1. **Track linter errors**

    Track errors with the following command:
    - Track CSS linter errors, run:
    ```bash
    npx stylelint "**/*.{css,scss}" --fix
    ```
    - Track JavaScript linter errors, run:
    ```bash
    npx eslint "**/*.{js,jsx}" --fix
    ```

2. **Run the Development Server**:
    - Open your terminal/command prompt.
    - Navigate to the project's root directory.
    - Run the following command:
      ```bash
        npm start
      ```
    This will start the development server.

3. **Access the Application**:
    - Open your web browser.
    - Navigate to the following URL:
      ```bash
        http://localhost:3000
      ```
    You will now be able to interact with the Math Magicians application in your browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- AUTHOR -->
## **Author 👤**<a name="author"></a>

Nelly Telli

- **LinkedIn: [Nelly T.](https://www.linkedin.com/in/nelly-t-330414266/)**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- FUTURE FEATURES -->
## Future Features 🔭<a name="future-features"></a>

While Math Magicians is already magical, there's always room for more enchantment! Here are two exciting future features we're considering:

1. **Interactive Math Tutorials**: Introduce a new section that offers interactive math tutorials. Users can learn math concepts step-by-step through fun and engaging activities, making learning math a delightful experience.

2. **Math Challenges and Leaderboards**: Create a platform for math enthusiasts to challenge each other with math problems of varying difficulty levels. Users can solve problems, earn points, and compete on leaderboards to showcase their mathematical prowess.

These upcoming features will continue to add charm and wonder to the Math Magicians world, making it an even more captivating math playground.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- CONTRIBUTING -->
## **Contributing 🤝**<a name="contributing"></a>

Math Magicians welcomes contributions from the community. Whether you have suggestions, ideas, or bug reports, your input is valuable and can help make this project even better.
- To report bugs 🐛 or request features 📝, please open an [issue](https://github.com/lily4178993/maths-magicians/issues) on GitHub. Be sure to provide detailed information about the issue or the feature you'd like to see.
- If you'd like to contribute code to Math Magicians, you can fork this repository, create a new branch for your changes, and submit a pull request. Your contributions will be reviewed and merged if they align with the project's goals and standards.

Remember, even small contributions can make a big difference!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- SUPPORT -->
## **Show your support 🌟**<a name="support"></a>

Thank you for exploring Math Magicians! Your support means the world to us. If you find this project valuable and want to show your appreciation, here are some ways to do it:

- **Star the project ⭐️**:  If you like what you see, give Math Magicians a star on GitHub. It's a simple way to show your love for the project.
- **Fork the project 🍴 🎣**: Interested in making your own version or contributing in a big way? Fork the repository and let your creativity flow.
- **Share with others 🗺️**: Help us spread the magic! Share Math Magicians with your friends, colleagues, and fellow math enthusiasts. The more, the merrier!

Your support fuels our enthusiasm and keeps the magic alive in Math Magicians.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- ACKNOWLEDGEMENTS -->
## **Acknowledgments 🙏**<a name="acknowledgements"></a>

Math Magicians extends its heartfelt appreciation to the following individuals and organizations whose contributions and resources have enriched this project:
- **Micoverse**: We're grateful for the educational opportunities provided by [Microverse](https://github.com/microverseinc), which empowered us to build this project and develop our skills.
- **Icons8**: A special thank you to [Icons8](https://icons8.com) for generously providing the images and icons used throughout Math Magicians. Your visual assets added magic to our project.

These acknowledgments reflect the collaborative spirit and support that have fueled the creation of Math Magicians. Thank you for being a part of our journey!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- LICENCE -->
## <b>License 📝</b><a name="license"></a>

Math Magicians is open-source software licensed under the [MIT](./LICENSE).

The MIT License grants users the freedom to use, modify, and distribute this software while ensuring that the original authors are not liable for any issues arising from its use. For full details, please see the [LICENSE](./LICENSE) file.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
