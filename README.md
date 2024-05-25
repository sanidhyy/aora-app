<a name="readme-top"></a>

# Aora - Full-Stack AI Video Sharing Platform using Expo & React Native

<p align="center">
    <img src="/.github/images/img_main.png" alt="Aora - Full-Stack AI Video Sharing Platform using Expo & React Native" height="700" title="Aora - Full-Stack AI Video Sharing Platform using Expo & React Native" />
</p>

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/aora-app?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/aora-app/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/aora-app/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/aora-app?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/aora-app/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/aora-app?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/aora-app/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/aora-app?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/aora-app/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/aora-app?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/aora-app/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of Aora.

```bash
aora-app/
  |- app/
    |-- (auth)/
    |-- (tabs)/
    |-- search/
    |-- _layout.jsx
    |-- index.jsx
  |- assets/
    |-- fonts/
    |-- icons/
    |-- images/
  |- components/
    |-- custom-button.jsx
    |-- empty-state.jsx
    |-- form-field.jsx
    |-- info-box.jsx
    |-- search-input.jsx
    |-- trending.jsx
    |-- video-card.jsx
  |- constants/
    |-- icons.js
    |-- images.js
    |-- index.js
    |-- links.js
  |- context/
    |-- global-provider.jsx
  |- .env.local
  |- .env.example
  |- .gitignore
  |- app.json
  |- eas.json
  |- babel.config.json
  |- package-lock.json
  |- package.json
  |- tailwind.config.js
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in root folder.
4. Contents of `.env.local`:

```bash
# .env.local

# appwrite project
EXPO_PUBLIC_APPWRITE_PLATFORM=com.example.aora
EXPO_PUBLIC_APPWRITE_PROJECT_ID=000000000000000000000000000

# appwrite database
EXPO_PUBLIC_APPWRITE_DATABASE_ID=000000000000000000000000000

# appwrite collection
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=000000000000000000000000000

# appwrite video
EXPO_PUBLIC_APPWRITE_VIDEO_ID=000000000000000000000000000

# appwrite storage
EXPO_PUBLIC_APPWRITE_STORAGE_ID=000000000000000000000000000
```

5. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

6. Install Expo Cli using `npm i -g expo-cli` or `yarn global add expo-cli` to initialize your app on Expo.

### 7. Set Up Appwrite

1. **Install Appwrite**:

   - If you haven't already, follow the [Appwrite installation guide](https://appwrite.io/docs/installation) to set up Appwrite on your server or use Appwrite Cloud.

2. **Create a New Project**:
   - Log in to your Appwrite console.
   - Click on the "Add Project" button.
   - Name your project (e.g., "Aora") and click "Create".

### 8. Obtain the Project ID

1. **Navigate to Your Project**:
   - Go to the project you just created.
2. **Copy the Project ID**:
   - In the project settings, you will find the "Project ID". Copy this ID.

### 9. Configure Appwrite Platform

1. **Add a New Platform**:
   - Within your project, navigate to the "Platforms" section.
   - Click on "Add Platform" and select the appropriate platform for your project (e.g., Web, iOS, Android).
   - Provide the necessary details such as domain or package name (e.g., `com.example.aora`).
   - Save the platform settings.
2. **Copy the Platform ID**:
   - After adding the platform, note the Platform ID (if provided) or use the domain/package name you added.

### 10. Set Up Appwrite Database

1. **Create a New Database**:
   - In your project dashboard, navigate to "Database".
   - Click on "Add Database", provide a name for your database, and save it.
2. **Copy the Database ID**:
   - After creating the database, copy the Database ID.

### 11. Set Up Appwrite Collection

1. **Create a New Collection**:
   - Within the Database section, click on the "Add Collection" button.
   - Provide a name for your collection and configure the necessary attributes and permissions.
   - Save the collection.
2. **Copy the Collection ID**:
   - After creating the collection, copy the Collection ID.

### 12. Obtain the Video ID

1. **Upload a Video File** (if applicable):
   - Navigate to the "Storage" section in your Appwrite console.
   - Click on "Add File" and upload your video file.
2. **Copy the Video File ID**:
   - After the upload is complete, copy the File ID of the video.

### 13. Set Up Appwrite Storage

1. **Configure Storage Bucket** (if applicable):
   - In the "Storage" section, you may need to create a new bucket or use the default bucket.
   - Ensure the bucket is configured to store your required files.
2. **Copy the Storage ID**:

   - Note the Storage Bucket ID or the specific ID used for storage configuration.

3. Now app is fully configured :+1: and you can start using this app using `expo start`.

### :books: Additional Resources

- Expo Documentation: https://docs.expo.dev/
- React Native Documentation: https://reactnative.dev/docs/
- Clerk Documentation: https://clerk.com/docs

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

<p align="center">
<img src="/.github/images/img1.png" alt="Functional Sign In and Sign Up" height="700" title="Functional Sign In and Sign Up" />
<img src="/.github/images/img2.png" alt="Modern UI/UX" height="700" title="Modern UI/UX" />
</p>

<p align="center">
<img src="/.github/images/img3.png" alt="Upload AI Videos" height="700" title="Upload AI Videos" />
<img src="/.github/images/img4.png" alt="View your Profile" height="700" title="View your Profile" />
</p>

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![JavaScript](https://skillicons.dev/icons?i=js "JavaScript")](https://developer.mozilla.org/en-US/docs/Web/JavaScript/ "JavaScript") [![CSS](https://skillicons.dev/icons?i=css "CSS")](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Babel](https://skillicons.dev/icons?i=babel "Babel")](https://babeljs.io/ "Babel")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and libraries that are used in Aora:

- [@types/react](https://www.npmjs.com/package/@types/react "~18.2.79")
- [Expo](https://docs.expo.dev/versions/latest/ "~51.0.8")
- [Expo AV](https://docs.expo.dev/versions/latest/sdk/av "Expo AV")
- [Expo Constants](https://docs.expo.dev/versions/latest/sdk/constants "Expo Constants")
- [Expo Document Picker](https://docs.expo.dev/versions/latest/sdk/document-picker "Expo Document Picker")
- [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/image-picker "Expo Image Picker")
- [Expo Linking](https://docs.expo.dev/versions/latest/sdk/linking "Expo Linking")
- [Expo Navigation Bar](https://docs.expo.dev/versions/latest/sdk/navigation-bar "Expo Navigation Bar")
- [Expo Router](https://docs.expo.dev/versions/latest/sdk/router "Expo Router")
- [Expo Status Bar](https://docs.expo.dev/versions/latest/sdk/status-bar "Expo Status Bar")
- [Expo Updates](https://docs.expo.dev/versions/latest/sdk/updates "Expo Updates")
- [NativeWind](https://www.nativewind.dev/ "NativeWind")
- [React](https://reactjs.org/ "18.2.0")
- [React Native](https://reactnative.dev/ "0.74.1")
- [React Native Animatable](https://github.com/oblador/react-native-animatable "React Native Animatable")
- [React Native Appwrite](https://docs.appwrite.io/docs/sdks/client/getting-started?platform=reactnative "React Native Appwrite")
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context "React Native Safe Area Context")
- [React Native Screens](https://github.com/software-mansion/react-native-screens "React Native Screens")
- [React Native URL Polyfill](https://github.com/charpeni/react-native-url-polyfill "React Native URL Polyfill")
- [TypeScript](https://www.typescriptlang.org/ "~5.3.3")
- [Babel Core](https://babeljs.io/docs/en/babel-core "Babel Core")
- [Tailwind CSS](https://tailwindcss.com/ "Tailwind CSS")

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me on GitHub")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Wow:&url=https://github.com/sanidhyy/aora-app "Tweet about this project")
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@OPGAMER. "Subscribe my YouTube Channel")

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/aora-app&Timeline" title="Github Star History">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/aora-app&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/aora-app&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/aora-app&type=Timeline" />
  </picture>
</a>

<br />
<p align="right">(<a href="#readme-top" title="Back to top">back to top</a>)</p>
