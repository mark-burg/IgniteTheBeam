# Ignite The Beam

> Sacramento Kings fan app. Welcome to basketball hell 🏀👑

A React Native app built with the Ignite boilerplate featuring a purple theme and bottom tab navigation for Sacramento Kings fans to stay connected with their team.

This project is built using [Ignite](https://github.com/infinitered/ignite), the battle-tested React Native boilerplate from [Infinite Red](https://infinite.red).

## 🎨 Features

- **Purple Theme**: Custom purple color scheme applied throughout the app with reusable color tokens
- **Bottom Tab Navigation**: Four main screens accessible via bottom navigation bar
  - **Home**: Main landing screen
  - **Good News**: Uplifting and inspiring content
  - **Beam**: Share positivity and brighten someone's day
  - **More**: Additional features and settings
- **Modern Architecture**: Built on Ignite's proven architecture with TypeScript, React Navigation, and Expo

## 🚀 Getting Started

```bash
npm install --legacy-peer-deps
npm run start
```

To make things work on your local simulator, or on your phone, you need first to [run `eas build`](https://github.com/infinitered/ignite/blob/master/docs/expo/EAS.md). We have many shortcuts on `package.json` to make it easier:

```bash
npm run build:ios:sim # build for ios simulator
npm run build:ios:device # build for ios device
npm run build:ios:prod # build for ios device
```

### `./assets`

This directory is designed to organize and store various assets, making it easy for you to manage and use them in your application. The assets are further categorized into subdirectories, including `icons` and `images`:

```tree
assets
├── icons
└── images
```

**icons**
This is where your icon assets will live. These icons can be used for buttons, navigation elements, or any other UI components. The recommended format for icons is PNG, but other formats can be used as well.

Ignite comes with a built-in `Icon` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/boilerplate/app/components/Icon.md).

**images**
This is where your images will live, such as background images, logos, or any other graphics. You can use various formats such as PNG, JPEG, or GIF for your images.

Another valuable built-in component within Ignite is the `AutoImage` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/Components-AutoImage.md).

How to use your `icon` or `image` assets:

```typescript
import { Image } from 'react-native';

const MyComponent = () => {
  return (
    <Image source={require('assets/images/my_image.png')} />
  );
};
```

## Running Maestro end-to-end tests

Follow our [Maestro Setup](https://ignitecookbook.com/docs/recipes/MaestroSetup) recipe.

## Next Steps

### Ignite Cookbook

[Ignite Cookbook](https://ignitecookbook.com/) is an easy way for developers to browse and share code snippets (or “recipes”) that actually work.

### Upgrade Ignite boilerplate

Read our [Upgrade Guide](https://ignitecookbook.com/docs/recipes/UpdatingIgnite) to learn how to upgrade your Ignite project.

## 📁 Project Structure

```
app/
├── screens/           # Screen components
│   ├── HomeScreen.tsx
│   ├── GoodNewsScreen.tsx
│   ├── BeamScreen.tsx
│   └── MoreScreen.tsx
├── navigators/        # Navigation configuration
│   ├── AppNavigator.tsx
│   ├── MainNavigator.tsx (Bottom tabs)
│   └── navigationTypes.ts
├── theme/            # Theme and styling
│   ├── colors.ts     # Purple theme colors
│   ├── colorsDark.ts # Dark mode purple colors
│   └── typography.ts
└── components/       # Reusable components
```

## 🎨 Theme Customization

The app uses a purple color scheme defined in `app/theme/colors.ts` and `app/theme/colorsDark.ts`. Key colors include:

- **Primary**: Purple shades (#9C27B0 to #F3E5F5)
- **Secondary**: Complementary purple tones
- **Accent**: Accent purple variations

All colors are accessible through the theme context and automatically adapt to light/dark mode.

## Community

⭐️ Help us out by [starring on GitHub](https://github.com/infinitered/ignite), filing bug reports in [issues](https://github.com/infinitered/ignite/issues) or [ask questions](https://github.com/infinitered/ignite/discussions).

💬 Join us on [Slack](https://join.slack.com/t/infiniteredcommunity/shared_invite/zt-1f137np4h-zPTq_CbaRFUOR_glUFs2UA) to discuss.

📰 Make our Editor-in-chief happy by [reading the React Native Newsletter](https://reactnativenewsletter.com/).
