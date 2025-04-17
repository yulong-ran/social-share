# Social Share UI

A simple and customizable user interface component for sharing content on various social media platforms. This package provides components that allow users to easily integrate social sharing functionality into their applications.

## Features

- **ShareButton**: A button component that triggers the sharing action for a specific social media platform.
- **ShareModal**: A modal component that displays sharing options and allows users to select how they want to share content.
- **SocialIcons**: A component that renders a list of social media icons for easy access to sharing options.
- **Custom Hook**: A hook to manage sharing logic and track share success or failure.

## Installation

To install the package, use npm or yarn:

```bash
npm install social-share-ui
```

or

```bash
yarn add social-share-ui
```

## Usage

Here’s a basic example of how to use the components in your application:

```tsx
import React from 'react';
import { ShareButton, ShareModal, SocialIcons } from 'social-share-ui';

const App = () => {
  return (
    <div>
      <h1>Share This Content</h1>
      <ShareButton platform="facebook" onClick={() => console.log('Shared on Facebook!')} />
      <ShareModal />
      <SocialIcons />
    </div>
  );
};

export default App;
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.# social-share
