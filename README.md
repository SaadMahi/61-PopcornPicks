# <div align='center'> [🍿🌟 PopcornPicks 🌟🎥](https://popcornpicks.vercel.app/) </div>

![movie-application](https://github.com/SaadMahi/61-PopcornPicks/assets/117567622/d70b3cdc-0d60-42e5-a9de-3c445920511f)


## Project Overview
The Movie Hub project is a dynamic and user-friendly React-based web application designed to provide an immersive movie-related experience. It offers a range of features, including movie search, watchlist management, responsive design, and effective error handling. Let's dive into the key aspects of this project:

## Components
The project comprises a collection of React components, organized to create a cohesive user interface:
- **Nav**: A navigation component for the header.
- **Main**: The main content section of the application.
- **Child Components**: Within the `Nav`, you'll find child components such as `Logo`, `SearchInput`, `NumResult`, as well as other essential UI elements like `Loader` and `ErrorMessage`.

In the `Main` section, components like `Box`, `WatchedSummary`, `WatchedMoviesList`, `MovieListStructure`, and `SelectedMovie` handle various aspects of the movie management and display functionality.

## Data
The project includes sample movie data for demonstration purposes. Each movie includes details such as the IMDb ID, title, release year, and a poster image. Additionally, there's data for watched movies with runtime, IMDb ratings, and user ratings.

## Core Functionality
Here's a breakdown of the core functionality of the Movie Hub project:

- **Custom Hook for State Management**: The project utilizes a custom hook, `useLocaleStorageState`, for managing the state of watched movies. This ensures that watched movies persist across sessions.

- **Dynamic Loading and Error Handling**: The application offers a seamless user experience by employing dynamic loading indicators during data retrieval, ensuring smooth interaction even on slower internet connections. It also effectively handles errors and displays user-friendly error messages when issues arise.

- **Movie Search and Display**: Users can search for movies using the OMDB API. The application displays search results in a left panel, allowing users to click on movies for more details.

- **Watchlist Management**: A central feature of the project is watchlist management. Users can add movies to their watchlist, providing a convenient way to keep track of films they intend to watch.

- **Responsive Design**: The application is designed to provide an optimal user experience across various devices and screen sizes. Whether accessed on a desktop or a mobile device, the user interface adapts for easy navigation and interaction.

## API Key
The OMDB API requires an API key for accessing movie data. The project uses a predefined API key (which should ideally be kept secure and not hardcoded).

## Technologies Used
The Movie Hub project relies on several key technologies for its development and functionality:
- React: The project is built using the React framework, leveraging the power of components and hooks for a seamless user experience.

## Tags
For better categorization and discoverability, the project is associated with the following tags:
- #MovieApp: Emphasizing its movie-centric features.
- #ReactCinema: Highlighting its use of the React library for web development.
- #FilmSearch: Focusing on its movie search capabilities.
- #WatchlistManager: Underlining its watchlist management functionality.
- #ReactHooks: Signifying its use of React hooks for state management.

This detailed overview provides insight into the popcornPicks project's components, features, data, and technologies, making it an engaging and comprehensive web application for movie enthusiasts.


