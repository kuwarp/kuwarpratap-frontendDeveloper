# Food Items Landing Page

## Project Overview

This project is a landing page designed to display food items using the [ThemealDB API](https://www.themealdb.com/api.php). The landing page will include sections for filters, food items, a header with a logo and search bar, and a footer. The design and theme of the page should mimic that of [Swiggy](https://www.swiggy.com/), and the application must be fully responsive and compatible with various screen sizes.

## Key Components

### Header Section

- **Logo**: Positioned at the top left of the header.
- **Search Bar**: Positioned at the top right of the header. Note that the search bar is for design purposes only and does not need to be functional.

### Filters Section

- **Filter By Area**: 
  - Implement a dropdown triggered by the "Filter" tag.
  - Populate the dropdown with a list of areas from the API, using HTML radio buttons.
  - Users can select an area and click "Apply" to update the Food Items Section with matching items.
- **Sort By**: 
  - Implement sorting functionality to allow users to sort food items alphabetically.

### Food Items Section (Data Grid)

- **Display**: By default, show all Indian food items.
- **Card Design**:
  - Each food item card should include an image, name, and ratings (ratings can be generated randomly).
  - Clicking on a food item should open a Modal with additional details about the selected item.
- **Modal Design**: 
  - Design the Modal to be consistent with the overall aesthetics, including colors and theme.
- **Pagination**: Include pagination in the Food Items Section to handle large numbers of food items.

### Footer Section

- **Purpose**: Balances the bottom of the webpage and provides any additional information or links as needed.

## API Reference

- [ThemealDB API Documentation](https://www.themealdb.com/api.php)

## Tools & Technology

- **Must Have**: React
- **Good to Have**: Tailwind CSS, State Context API, Redux, Jest
- **Must Avoid**: jQuery
- **Library Use**: Try to use as few libraries as possible.

## Design and Theme

- Mimic the design, colors, and theme of [Swiggy](https://www.swiggy.com/) for a cohesive look and feel.
- Ensure the application is fully responsive and looks great across various screen sizes.

## Getting Started

1. **Clone the repository**: `git clone kuwarpratap-frontendDeveloper`
2. **Navigate to the project directory**: `cd kuwarpratap-frontendDeveloper`
3. **Install dependencies**: `npm install`
4. **Run the development server**: `npm start`

## Contribution

Feel free to open issues or submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

