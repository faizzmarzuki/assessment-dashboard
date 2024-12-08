# Admin Dashboard

This project is a responsive admin dashboard designed for a web application. It showcases summary statistics, a data table, and filter options.

## Features

### 1. Header

- A fixed header that remains at the top of the page for easy navigation.

### 2. Cards Section

- Displays summary statistics using cards, such as:
  - Total Users
  - Total Sales
  - Total Revenue
- The cards are arranged in a grid layout:
  - 3 cards per row on larger screens.
  - Stacked vertically on smaller screens for better accessibility.

### 3. Data Table Section

- A table displaying a list of users with the following columns:
  - **ID**
  - **Name**
  - **Email**
  - **Status** (active/inactive)
  
### 4. Lightbox for Instructions

- A button that opens a lightbox (modal) displaying detailed information.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and better development experience.
- **Vite**: For fast development and build processes.
- **CSS/SCSS**: For styling the components and ensuring responsiveness.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd juris-tech-admin-dashboard
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the dashboard.

## Usage

- The dashboard is fully responsive and can be accessed on various devices.
- Click on the lightbox button to view detailed instructions.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
