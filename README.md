
# OnlineSales.ai Assessment

## Overview

Dynamic Form Builder is a React-based application that allows users to create customizable forms dynamically. The application supports various input types such as text fields, dropdowns, checkboxes, radio buttons, file uploads, and more. Users can preview the form, copy the form configuration as JSON, and import/export form configurations.

## Features

- **Dynamic Field Addition**: Add different types of form fields dynamically.
- **Validation**: Built-in validation using Yup and react-hook-form.
- **JSON Export/Import**: Export the form structure as JSON or import an existing form configuration.
- **Form Preview**: Preview the dynamically created form before finalizing it.
- **Responsive UI**: User-friendly and responsive design.

## Technologies Used

- **React**: For building the user interface.
- **react-hook-form**: For managing form state and validation.
- **Yup**: For schema-based form validation.
- **React Router**: For navigating between the form builder and preview pages.
- **Tailwind CSS**: For styling the components.
- **react-hot-toast**: For displaying notifications.
- **React icons**: For icons used in the UI.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kanhaiya8608/sales_assess.git
   cd sales_assess
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application should now be running on `http://localhost:5173`.

### Project Structure

- **src/components**: Contains all React components, including the form builder and form input fields.
- **src/utils**: Contains utility functions and validation schemas.
- **src/styles**: Contains styling-related files.
- **public**: Public assets for the project.

### Available Scripts

- `npm run dev`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from your project.

### Validation Schema

The validation schema is defined using Yup in the `src/utils/validationSchema.js` file. It handles validation for various field types such as `text`, `file`, `dropdown`, `checkbox`, `radio`, etc. The validation is integrated into the form using react-hook-form and yupResolver.

### Adding Form Fields

Fields can be added dynamically using the "Add Field" dropdown menu in the UI. Supported fields include:

- Text Field
- Number Field
- Dropdown Field
- Checkbox Field
- Radio Button Field
- Textarea Field
- Date Field
- File Field



### Preview and JSON Handling

- **Preview Form**: Navigate to the preview page to see the form in action.
- **Copy JSON**: Copy the form configuration to the clipboard.
- **Import JSON**: Import a previously saved form configuration.

### Sample JSON for Testing

To test the application, you can use the following sample JSON:

```json
{
  "title": "Customer Feedback Form",
  "description": "Please provide your feedback on our service.",
  "fields": [
    {
      "type": "text",
      "label": "Full Name",
      "id": 1
    },
    {
      "type": "dropdown",
      "label": "How did you hear about us?",
      "options": ["Social Media", "Friend", "Search Engine", "Advertisement"],
      "id": 3
    },
    {
      "type": "radio",
      "label": "Rating",
      "options": ["Excellent", "Good", "Average", "Poor"],
      "id": 4
    },
    {
      "type": "textarea",
      "label": "Additional Comments",
      "id": 5
    },
    {
      "type": "date",
      "label": "Date of Feedback",
      "id": 6
    },
    {
      "type": "text",
      "label": "Email ID",
      "id": 1724115672065,
      "options": []
    }
  ]
}
```

You can use the "Import JSON" feature in the application to load this sample form structure and test the form builder functionality.


## Contributing

Contributions are welcome! If you have suggestions, improvements, or issues, feel free to open an issue or submit a pull request.

### How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [react-hook-form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-hot-toast](https://react-hot-toast.com/)
- [ReactIcons](https://react-icons.github.io/react-icons/)

---

This `README.md` should provide clear guidance on the project setup, usage, and contribution process. You can modify specific sections such as the repository link, acknowledgments, or project structure to match your actual project.





