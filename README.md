<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/kea-roy/CortexCards">
    <img src="https://github.com/kea-roy/CortexCards/blob/3c8631a4b655275833f298eccf6686d59ba66df0/public/cortexcardslogo.png" alt="Logo" width="80" height="80">
  </a>

<!-- PROJECT TITLE AND DESCRIPTION -->
<h3 align="center">Cortex Cards</h3>

  <p align="center">
  A flashcard app with all your flashcards saved to the cloud so you can access your flashcards anytime on any device.
    <br />
    ⁃ Save Your Flashcards ⁃
    <br />
    ⁃ Easily Create New Flashcards ⁃
    <br />
    ⁃ Remove Flashcards When You're Done ⁃
	<br />
    <br />
    <a href="https://github.com/kea-roy/CortexCards/tree/main/src">View Code</a>
    ·
    <a href="https://github.com/kea-roy/CortexCards/issues">Report Bug</a>
    ·
    <a href="https://github.com/kea-roy/CortexCards/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#demos">Demos</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![cortexcards-demo](https://github.com/kea-roy/CortexCards/assets/146872846/6450c1dd-e42a-4d56-ba0a-8f436150a655)


During my first three months as a Software Developer at DTI, I got the chance to learn many important concepts in the web development process, including actively developing new features for CUApts, a website built on Meta's React for front-end and Google Firebase's Firestore database for the back-end.

As a hands-on learner, I decided to apply my newly found knowledge from those three months to a new individual project. 

This flashcard app utilizes the same tech stack as CUApts to provide a seamless user experience and ensure your flashcards are always available by saving them to the cloud. The web application supports email and password login, providing convenient and safe registration.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Built With

<!--* [![Next][Next.js]][Next-url]-->
[![React][React.js]][React-url]
[![Firebase][Firebase.google.com]][Firebase-url]
<!--* [![Vue][Vue.js]][Vue-url]-->
<!--* [![Angular][Angular.io]][Angular-url]-->
<!--* [![Svelte][Svelte.dev]][Svelte-url]-->
<!--* [![Laravel][Laravel.com]][Laravel-url]-->
<!--* [![Bootstrap][Bootstrap.com]][Bootstrap-url]-->
<!--* [![JQuery][JQuery.com]][JQuery-url]-->
<!--* [![Python][Python]][Python-url]-->
<!--*[![Python][Python]][Python-url]-->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow the instructions below:

### Prerequisites

This project requires the following dependencies to run:
* **React**
Version 18.3.1 or above
	 ```sh
	npm i react
	```
* **Firebase**
Version 10.11.1 or above
  ```sh
  npm i firebase
  ```

### Environment Variables

To run this project, you will also need to add the following environment variables to your .env file

- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_STORAGE_BUCKET`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- `REACT_APP_FIREBASE_APP_ID`

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kea-roy/CortexCards.git
   ```
2. Ensure all prerequisites are installed correctly
3. Run ```npm start```

	Runs the app in the development mode.\
	Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
	The page will reload when you make changes.\
	You may also see any lint errors in the console.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Demos

See below for several screenshots of the application.

### Welcome Page
This page contains the all the information you need to know about Cortex Cards.

![welcomepage](https://github.com/kea-roy/CortexCards/assets/146872846/c5b82dbf-6554-45f9-82e6-2346132c0184)


### Dashboard
Once logged in, this page is where you can find, add, and delete your flashcards, all in one place.

![dashboard](https://github.com/kea-roy/CortexCards/assets/146872846/fdb776c4-086b-48fd-8305-11e9f84715df)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Features: Front-End Responsive Designs
	- [x] Logo Design
    - [x] Header Design
    - [x] Sign Up and Login Form Design and Styling
    - [x] Logout Button Styling
    - [x] Form Component Design
    - [x] Flashcard Design
    - [x] Flashcard Flip Animation
    - [x] Add and View Button Styling
    - [x] Previous and Next Button Stylings
    - [x] Footer Design
- [x] Features: Backend Database
	- [x] Set Up Firebase Firestore
	- [x] Register New Users from Sign Up Form
	- [x] Authenticate Users from Login Form
	- [x] Add New Users to Database
	- [x] Sync Flashcards with Database
	- [x] Add New Flashcard from Form Submission
	- [x] Remove Flashcard

See the [open issues](https://github.com/kea-roy/CortexCards/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Kea-Roy Ong - ko353@cornell.edu

Project Link: [https://github.com/kea-roy/CortexCards](https://github.com/kea-roy/CortexCards)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

I would like to acknowledge the following resources that were used in the process of completing this project

* [React Documentation](https://react.dev/reference/react)
* [Firebase Documentation](https://firebase.google.com/docs)
* [Trash Can Icon from css.gg](https://css.gg/app)
* [Stack Overflow
](https://stackoverflow.com)
* [othneildrew's README Template](https://github.com/othneildrew/Best-README-Template)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kea-roy/CortexCards.svg?style=for-the-badge
[contributors-url]: https://github.com/kea-roy/CortexCards/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kea-roy/CortexCards.svg?style=for-the-badge
[forks-url]: https://github.com/kea-roy/CortexCards/network/members
[stars-shield]: https://img.shields.io/github/stars/kea-roy/CortexCards.svg?style=for-the-badge
[stars-url]: https://github.com/kea-roy/CortexCards/stargazers
[issues-shield]: https://img.shields.io/github/issues/kea-roy/CortexCards.svg?style=for-the-badge
[issues-url]: https://github.com/kea-roy/CortexCards/issues
[license-shield]: https://img.shields.io/github/license/kea-roy/CortexCards.svg?style=for-the-badge
[license-url]: https://github.com/kea-roy/CortexCards/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kea-roy
[product-screenshot]: images/mainscreenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Python]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Firebase.google.com]: https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white`
[Firebase-url]: https://firebase.google.com/
