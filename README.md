# Password Validator App

The Password Validator app is a simple React application that allows you to validate a password based on various requirements and provides real-time feedback to the user. It can be used as a component in your larger applications to ensure that user passwords meet specific criteria.

## Features

- Validates passwords against multiple requirements, such as:
  - Being required (cannot be empty)
  - Containing digits (0-9)
  - Having special characters (!@#$%^&*)
  - Containing at least one uppercase letter
  - Not having consecutive letters (e.g., "aa" or "Aa")

## Usage

### PasswordValidator Component

The PasswordValidator component can be used to integrate password validation into your application. It accepts the following props:

- `requirements` (optional): An array of requirements that the password should meet. You can use the `requirementKeys` object for predefined requirement keys (recommended for a better developer experience). Example:

  ```jsx
  <PasswordValidator
    requirements={[
      requirementKeys.required,
      requirementKeys.digits,
      requirementKeys.specialChars,
      requirementKeys.uppercaseLetter,
      requirementKeys.noConsecutiveLetters,
    ]}
    fn={(data) => {
      console.log('Validated password data', data);
    }}
  />
  
### `fn` (optional)

A callback function that receives the validated password data. You can specify a custom function to handle the data once it's validated.

### CustomCheck Component

The `CustomCheck` component is used internally by the `PasswordValidator` component to display validation feedback. It accepts the following props:

- `children`: React node (usually "X" or "✔") to display inside the checkmark box.
- `color`: The background color of the checkmark box, which can be used to represent success or failure.

### Implementation Details

#### Validation Rules

The `PasswordValidator` component defines validation rules for each requirement. These rules are defined in the `validationFunctions` object and include functions like `required`, `digits`, `specialChars`, `uppercaseLetter`, and `noConsecutiveLetters`. These functions check whether the password meets the corresponding requirement.

#### Dynamic Requirement Keys

To improve the developer experience, the app provides the `requirementKeys` object, which dynamically generates requirement keys based on the `requirementsMap`. This allows you to use predefined keys for requirements, making your code more readable and less error-prone.

Example usage of `requirementKeys`:

```jsx
<PasswordValidator
  requirements={[
    requirementKeys.required,
    requirementKeys.digits,
    // ...
  ]}
/>
```
### Real-time Feedback

The `PasswordValidator` component provides real-time feedback to the user as they type their password. It checks the password against the specified requirements and displays either a red "X" or a green checkmark based on whether the requirement is met.

### Folder Structure

The app follows a modular folder structure for better code organization:

- `components`: Contains the React components, including `PasswordValidator` and `CustomCheck`.
- `utils`: Contains utility functions and objects, including `requirementsMap` and `requirementKeys`.

### Dependencies

The app relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- Chakra UI: A simple, modular, and accessible component library for building user interfaces.
- React Hook Form: A library for managing form state and validation in React applications.
- Yup: A JavaScript schema builder for value parsing and validation.

### Conclusion

The Password Validator app simplifies the process of validating passwords against various requirements and provides real-time feedback to users. By using predefined requirement keys and a modular folder structure, it promotes code readability and maintainability. You can easily integrate this component into your applications to enhance password security.
