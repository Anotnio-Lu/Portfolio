# React Portfolio

Welcome to my React portfolio project! As a web developer, I understand the importance of having a platform to showcase my work, collaborate with fellow developers, and attract potential employers or clients. In this challenge, I have created a portfolio using React to set myself apart by leveraging the latest technologies.


## User Story

- AS AN employer looking for candidates with experience building single-page applications
- I WANT to view a potential employee's deployed React portfolio of work samples
- SO THAT I can assess whether they're a good candidate for an open position

## Acceptance Criteria
- GIVEN a single-page application portfolio for a web developer
- WHEN I load the portfolio
- THEN I am presented with a page containing a header, a section for content, and a footer
- WHEN I view the header
- THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
- WHEN I view the navigation titles
- THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
- WHEN I click on a navigation title
- THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
- WHEN I load the portfolio the first time
- THEN the About Me title and section are selected by default
- WHEN I am presented with the About Me section
- THEN I see a recent photo or avatar of the developer and a short bio about them
- WHEN I am presented with the Portfolio section
- THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
- WHEN I am presented with the Contact section
- THEN I see a contact form with fields for a name, an email address, and a message
- WHEN I move my cursor out of one of the form fields without entering text
- THEN I receive a notification that this field is required
- WHEN I enter text into the email address field
- THEN I receive a notification if I have entered an invalid email address
- WHEN I am presented with the Resume section
- THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
- WHEN I view the footer
- THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

## Approach

To build this React portfolio, I utilized React to render the content and components. The application consists of multiple components, including a Header, Navigation, Project, and Footer. The Header component appears on multiple pages and contains the Navigation component, which conditionally renders the different sections of the portfolio.

In the Portfolio section, I utilized a single Project component multiple times to display titled images of the developer's applications. Each image includes links to both the deployed application and the corresponding GitHub repository.

The Contact section features a contact form with fields for name, email address, and message. Form validation ensures that required fields are filled and notifies the user when an invalid email address is entered.

The Resume section includes a link to a downloadable resume and a list of the developer's proficiencies.

Finally, the footer provides links to the developer's GitHub and LinkedIn profiles, as well as their profile on a third platform.


## Completed tasks

To complete this project, I have accomplished the following tasks:

- Utilized React to render the content and components of the portfolio.
- Created a Header component that appears on multiple pages and includes a Navigation component for section selection.
- Implemented a Project component that is reused for displaying the developer's applications in the Portfolio section.
- Developed a Footer component that appears on multiple pages and provides links to the developer's social profiles.
- Deployed the portfolio to GitHub Pages for easy access and evaluation.

## Conclusion
In conclusion, this React portfolio project showcases my ability to build a single-page application that utilizes React and the latest technologies. The portfolio meets the acceptance criteria, providing a clean and intuitive user experience. It allows employers and potential collaborators to view my work samples, learn more about me, and easily get in touch. To explore the portfolio, please visit the live URL and GitHub repository for the application.


## deployed Link

https://anotnio-lu.github.io/Portfolio/

## Authors

- [Anotnio Lu](https://github.com/Anotnio-Lu)


## License

This project is licensed under MIT License .
