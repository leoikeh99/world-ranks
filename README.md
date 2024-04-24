<p align="center">
  <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/96/external-markdown-a-lightweight-markup-language-with-plain-text-formatting-syntax-logo-filled-tal-revivo.png" width="100" />
</p>
<p align="center">
    <h1 align="center">WORLD-RANKS</h1>
</p>
<p align="center">
    <em>Discover comprehensive information about every country worldwide.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/leoikeh99/world-ranks?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/leoikeh99/world-ranks?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/leoikeh99/world-ranks?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/leoikeh99/world-ranks?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
    <img src="https://img.shields.io/badge/TailwindCSS-38B2AC.svg?style=flat&logo=TailwindCSS&logoColor=white" alt="Tailwincss">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running world-ranks](#-running-world-ranks)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

"World Explorer" is an interactive app powered by the REST Countries API, offering users a wealth of information about countries worldwide. With an intuitive interface and extensive database, users can delve into details about geography, demographics, currency, population, and more for any country of interest.

---

## 📦 Features

- By default, users can see a list of all countries sorted by population.

- Users can choose to sort by region or population or area (km²).

- Users can choose to filter by multiple regions, the regions can be Americas, Antarctic, Africa, Asia, Europe, or Oceania.

- Users can choose to filter countries that are members of the United Nations.

- Users can choose to filter countries that are independent.

- Users can filter/search for countries by their names, regions or subregions.

- Users can see the total number of countries.

- Users can select a country and see more details on a country page.

- On the country page, users can see info like population, area, capital,....

- On the country page, users can see the neighboring countries.

- On the country page, when users select a neighboring country, it should redirect to the according country page.

---

## 📂 Repository Structure

```sh
└── world-ranks/
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── assets
    │   │   ├── Done_round.svg
    │   │   ├── Expand_down.svg
    │   │   ├── Logo.svg
    │   │   ├── Search.svg
    │   │   ├── chevron-left.svg
    │   │   ├── chevron-right.svg
    │   │   ├── hero-image-wr.jpg
    │   │   ├── react.svg
    │   │   ├── retry.svg
    │   │   └── three-dots.svg
    │   ├── components
    │   │   ├── Header.tsx
    │   │   ├── country
    │   │   │   ├── MainInfo.tsx
    │   │   │   ├── NeighbouringCountries.tsx
    │   │   │   ├── OtherInfo.tsx
    │   │   │   ├── error
    │   │   │   │   ├── BorderCountriesError.tsx
    │   │   │   │   └── index.tsx
    │   │   │   └── loading
    │   │   │       ├── BorderCountriesLoader.tsx
    │   │   │       └── index.tsx
    │   │   ├── form
    │   │   │   ├── ChooseRegions.tsx
    │   │   │   ├── ChooseStatus.tsx
    │   │   │   ├── SearchInput.tsx
    │   │   │   └── SortCountriesSelect.tsx
    │   │   └── home
    │   │       ├── CountryFilters.tsx
    │   │       ├── Error.tsx
    │   │       ├── Pagination.tsx
    │   │       └── countries
    │   │           ├── CountryItem.tsx
    │   │           ├── Loading.tsx
    │   │           └── index.tsx
    │   ├── constants.ts
    │   ├── index.css
    │   ├── main.tsx
    │   ├── pages
    │   │   ├── Country.tsx
    │   │   ├── Home.tsx
    │   │   └── NotFound.tsx
    │   ├── styles
    │   │   ├── formStyles.css
    │   │   └── homeStyles.css
    │   ├── types.ts
    │   ├── utils.ts
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                          | Summary                                        |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [tsconfig.json](https://github.com/leoikeh99/world-ranks/blob/master/tsconfig.json)           | HTTP error 401 for prompt `tsconfig.json`      |
| [index.html](https://github.com/leoikeh99/world-ranks/blob/master/index.html)                 | HTTP error 401 for prompt `index.html`         |
| [postcss.config.js](https://github.com/leoikeh99/world-ranks/blob/master/postcss.config.js)   | HTTP error 401 for prompt `postcss.config.js`  |
| [vite.config.ts](https://github.com/leoikeh99/world-ranks/blob/master/vite.config.ts)         | HTTP error 401 for prompt `vite.config.ts`     |
| [package.json](https://github.com/leoikeh99/world-ranks/blob/master/package.json)             | HTTP error 401 for prompt `package.json`       |
| [tsconfig.node.json](https://github.com/leoikeh99/world-ranks/blob/master/tsconfig.node.json) | HTTP error 401 for prompt `tsconfig.node.json` |
| [tailwind.config.js](https://github.com/leoikeh99/world-ranks/blob/master/tailwind.config.js) | HTTP error 401 for prompt `tailwind.config.js` |
| [package-lock.json](https://github.com/leoikeh99/world-ranks/blob/master/package-lock.json)   | HTTP error 401 for prompt `package-lock.json`  |

</details>

<details closed><summary>src</summary>

| File                                                                                    | Summary                                       |
| --------------------------------------------------------------------------------------- | --------------------------------------------- |
| [utils.ts](https://github.com/leoikeh99/world-ranks/blob/master/src/utils.ts)           | HTTP error 401 for prompt `src/utils.ts`      |
| [types.ts](https://github.com/leoikeh99/world-ranks/blob/master/src/types.ts)           | HTTP error 401 for prompt `src/types.ts`      |
| [main.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/main.tsx)           | HTTP error 401 for prompt `src/main.tsx`      |
| [constants.ts](https://github.com/leoikeh99/world-ranks/blob/master/src/constants.ts)   | HTTP error 401 for prompt `src/constants.ts`  |
| [vite-env.d.ts](https://github.com/leoikeh99/world-ranks/blob/master/src/vite-env.d.ts) | HTTP error 401 for prompt `src/vite-env.d.ts` |
| [App.css](https://github.com/leoikeh99/world-ranks/blob/master/src/App.css)             | HTTP error 401 for prompt `src/App.css`       |
| [App.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/App.tsx)             | HTTP error 401 for prompt `src/App.tsx`       |
| [index.css](https://github.com/leoikeh99/world-ranks/blob/master/src/index.css)         | HTTP error 401 for prompt `src/index.css`     |

</details>

<details closed><summary>src.styles</summary>

| File                                                                                             | Summary                                               |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| [formStyles.css](https://github.com/leoikeh99/world-ranks/blob/master/src/styles/formStyles.css) | HTTP error 401 for prompt `src/styles/formStyles.css` |
| [homeStyles.css](https://github.com/leoikeh99/world-ranks/blob/master/src/styles/homeStyles.css) | HTTP error 401 for prompt `src/styles/homeStyles.css` |

</details>

<details closed><summary>src.pages</summary>

| File                                                                                        | Summary                                            |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [NotFound.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/pages/NotFound.tsx) | HTTP error 401 for prompt `src/pages/NotFound.tsx` |
| [Country.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/pages/Country.tsx)   | HTTP error 401 for prompt `src/pages/Country.tsx`  |
| [Home.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/pages/Home.tsx)         | HTTP error 401 for prompt `src/pages/Home.tsx`     |

</details>

<details closed><summary>src.components</summary>

| File                                                                                         | Summary                                               |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [Header.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/Header.tsx) | HTTP error 401 for prompt `src/components/Header.tsx` |

</details>

<details closed><summary>src.components.home</summary>

| File                                                                                                              | Summary                                                            |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [Error.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/home/Error.tsx)                   | HTTP error 401 for prompt `src/components/home/Error.tsx`          |
| [Pagination.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/home/Pagination.tsx)         | HTTP error 401 for prompt `src/components/home/Pagination.tsx`     |
| [CountryFilters.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/home/CountryFilters.tsx) | HTTP error 401 for prompt `src/components/home/CountryFilters.tsx` |

</details>

<details closed><summary>src.components.home.countries</summary>

| File                                                                                                                  | Summary                                                                   |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [index.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/home/countries/index.tsx)             | HTTP error 401 for prompt `src/components/home/countries/index.tsx`       |
| [CountryItem.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/home/countries/CountryItem.tsx) | HTTP error 401 for prompt `src/components/home/countries/CountryItem.tsx` |
| [Loading.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/home/countries/Loading.tsx)         | HTTP error 401 for prompt `src/components/home/countries/Loading.tsx`     |

</details>

<details closed><summary>src.components.country</summary>

| File                                                                                                                               | Summary                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [NeighbouringCountries.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/country/NeighbouringCountries.tsx) | HTTP error 401 for prompt `src/components/country/NeighbouringCountries.tsx` |
| [MainInfo.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/country/MainInfo.tsx)                           | HTTP error 401 for prompt `src/components/country/MainInfo.tsx`              |
| [OtherInfo.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/country/OtherInfo.tsx)                         | HTTP error 401 for prompt `src/components/country/OtherInfo.tsx`             |

</details>

<details closed><summary>src.components.country.error</summary>

| File                                                                                                                                   | Summary                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [BorderCountriesError.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/country/error/BorderCountriesError.tsx) | HTTP error 401 for prompt `src/components/country/error/BorderCountriesError.tsx` |
| [index.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/country/error/index.tsx)                               | HTTP error 401 for prompt `src/components/country/error/index.tsx`                |

</details>

<details closed><summary>src.components.country.loading</summary>

| File                                                                                                                                       | Summary                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| [index.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/country/loading/index.tsx)                                 | HTTP error 401 for prompt `src/components/country/loading/index.tsx`                 |
| [BorderCountriesLoader.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/country/loading/BorderCountriesLoader.tsx) | HTTP error 401 for prompt `src/components/country/loading/BorderCountriesLoader.tsx` |

</details>

<details closed><summary>src.components.form</summary>

| File                                                                                                                        | Summary                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [SortCountriesSelect.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/form/SortCountriesSelect.tsx) | HTTP error 401 for prompt `src/components/form/SortCountriesSelect.tsx` |
| [ChooseStatus.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/form/ChooseStatus.tsx)               | HTTP error 401 for prompt `src/components/form/ChooseStatus.tsx`        |
| [ChooseRegions.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/form/ChooseRegions.tsx)             | HTTP error 401 for prompt `src/components/form/ChooseRegions.tsx`       |
| [SearchInput.tsx](https://github.com/leoikeh99/world-ranks/blob/master/src/components/form/SearchInput.tsx)                 | HTTP error 401 for prompt `src/components/form/SearchInput.tsx`         |

</details>

---

## 🚀 Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the world-ranks repository:

```sh
git clone https://github.com/leoikeh99/world-ranks
```

2. Change to the project directory:

```sh
cd world-ranks
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running world-ranks

Use the following command to run world-ranks:

```sh
npm run build && node dist/main.js
```

### 🧪 Tests

To execute tests, run:

```sh
npm test
```

---

## 🛠 Project Roadmap

- [x] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/leoikeh99/world-ranks/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/leoikeh99/world-ranks/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/leoikeh99/world-ranks/issues)**: Submit bugs found or log feature requests for World-ranks.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/leoikeh99/world-ranks
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
