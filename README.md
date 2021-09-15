# Covid Status

> Covid Status App built with the ReactJs & Tailwind Css.
[Live link of Covid Status](https://kovidstatus.netlify.app/)

![screenshot](https://github.com/itsakhilrana/CovidStatus/blob/master/src/assets/covidStatus.PNG)

## About the Project

- Implemented the global state of Application using contextApi.
- Executed lifecycle operations using functional component approach in ReactJs.
- Used Axios for fetching Covid details from Rapid API.
- Build the filter function by which users can sort the list by different continents, new case & death/cases per 1m. 
- Storing the filter results in Local Storage for state management.

### Covid Status App top-level directory layout
```
├── public 
├── src
│   ├── api
│   ├── components
│   │   ├── CaseAcrossWorldComp
│   │   ├── FilterTabsComp
│   │   ├── NavbarComp
│   │   ├── TableComp
│   │   └── WorldStatsComp
│   ├── helpers
│   ├── screens
│   │   ├── HomeScreen
│   │   └── FourOFourScreen
│   └── App.js      
├── package-lock.json
├── package.json
└── README.md
```

### Install Dependencies

```
npm install

```

### Run

```
npm start

```
