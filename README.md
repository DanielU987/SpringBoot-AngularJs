# Pet CRUD App with Spring Boot and Angular

## Introduction
This is a simple CRUD (Create, Read, Update) application created using Spring Boot for the backend and Angular for the frontend. The app allows users to manage a collection of pets by performing operations such as creating, updating, and deleting pet records.

## Features
- Create: Users can add new pets to the collection by providing details such as name, species, and age.
- Read: Users can view the list of pets and their details.
- Update: Users can edit the details of existing pets.


## Prerequisites
To run this application, you need to have the following installed on your system:
- Java Development Kit (JDK) 8 or higher
- Node.js and npm (Node Package Manager)
- Angular CLI (Command Line Interface)
- MySQL database (or any other database supported by Spring Data JPA)

## Getting Started
Follow these steps to get started with the Pet CRUD app:

1. Clone the repository from GitHub:
```
git clone https://github.com/DanielU987/SpringBoot-AngularJs.git
```
4. Backend setup:
   - Open the project in your preferred Java IDE (e.g., IntelliJ, Eclipse).
   - Configure the database connection in `src/main/resources/application.properties`.
   - Build and run the Spring Boot application.

5. Frontend setup:
   - Open a command prompt or terminal and navigate to the `angularclient` directory of the project.
   - Run `npm install` to install the required dependencies.
   - Run `ng serve` to start the Angular development server.

6. Browser should be opened by default if not open your web browser and access the application at `http://localhost:4200`.

## Usage
- On the homepage, you will see a list of pets (if any exist).
- To add a new pet, click on the "Add Pet" button and fill in the required details in the form.
- To edit a pet's details, click on the "Update" button next to the desired pet and make the necessary changes.
- The list of pets will update automatically after each operation.

## Project Structure
The project follows a standard structure for a Spring Boot backend and Angular frontend:

- `demo/src/main/java`: Contains the Java source code for the Spring Boot application.
- `demo/src/main/resources`: Contains application-specific configurations, properties, and static resources.
- `angularclient/src/app`: Contains the Angular components, services, and other frontend-related files.
- `angularclient/src/assets`: Contains static assets such as images or stylesheets.

## Technologies Used
- Spring Boot: Java framework for building the backend RESTful API.
- Angular: JavaScript framework for building the frontend user interface.
- Spring Data JPA: Simplifies database access and provides an ORM (Object-Relational Mapping) framework.
- MySQL: Database system for storing and retrieving pet data.

## License
This project is licensed under the [MIT License](LICENSE).

## Contributing
Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

## Acknowledgments
This project was inspired by the need for a simple CRUD application and built using Spring Boot and Angular.

## Contact
Feel free to explore, modify, and have fun with this Pet CRUD app!
