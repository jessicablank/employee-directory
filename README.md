# React Employee Directory

[![GitHub stars](https://img.shields.io/github/stars/jessicablank/employee-directory)](https://github.com/jessicablank/employee-directory/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/jessicablank/employee-directory)](https://github.com/jessicablank/employee-directory/network)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/jessicablank/employee-directory)](https://github.com/jessicablank/employee-directory/issues)

Deployed on [github pages](https://jessicablank.github.io/employee-directory/)

## Description:  
This is my first boot camp homework assignment bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Originally designed as an employee directory, now re-imagined as an international agent directory. 

:information_desk_person: Is it for someone seeking an agent for a mission or is it for agent's seeking other agents for companionship? I'll let you decide! 

## Table of Contents:
* [Installation](#installation-instructions)
* [Project Story](#project-story)
* [Tests](#tests)
* [Structure](/componentStructure.md)
* [Questions](#questions)
* [License](#license-info)

## Installation Instructions

`npm i` to load dependencies. 

## Project Story
The original homework assignment for this project produced a pretty basic application that met the requirements below for Minimum Viable Product (MVP):

* When the page loads, a list of random employees from [Random User Generator API](https://randomuser.me/) is displayed in a table. 
* When the user clicks on the icon next to email, the employees are sorted in ascending or descending order based on email address. 
* Provide a search box for users to dynamically search by one category. 

![demonstration gif](https://github.com/jessicablank/employee-directory/blob/master/assets/homepageGIF.gif)


 I came back to this assignment to test adding a loading Indicator using npm packages `react-promise-tracker` and `react-loader-spinner`. 

 When I reviewed my code, I realized I could create better componentization to add the sorting function to other fields. Reviewing the Random User Generator API gave me the idea to make this an agent directory. 

 This version also uses the [Country Flags API](https://www.countryflags.io/) to show the country flag for the agent's nation of origin. 

![demonstration gif](https://github.com/jessicablank/employee-directory/blob/master/assets/directoryGIF.gif)


**Original File Structure:**
```
├── App.css
├── App.jsx
├── components
|  ├── EmployeeTable.js <--All the sorting logic was here. Very Limiting -->
|  ├── Header.js
|  └── TableRow.js
├── index.js
└── utils
   └── API.js
```
**Refactored File Structure**

```
   ├── App.css
   ├── App.jsx
   ├── components
   |  ├── DataSort.js
   |  ├── EmployeeTable.js
   |  ├── HandleSearch.js
   |  ├── Header.js
   |  ├── LoadingIndicator.js
   |  ├── Modal.js
   |  └── TableRow.js
   ├── index.js
   ├── styles
   |  ├── Header.css
   |  └── SearchBox.css
   └── utils
      └── SortToggle.js
```
## Questions
You can reach the author, Jessica Blankemeier, via [github](http://github.com/jessicablank) and [email](mailto:jessicablankemeier@gmail.com)
![GitHub](https://img.shields.io/github/followers/jessicablank?label=follow&style=social)

## License
Copyright 2020 - present Jessica Blankemeier.
This project is licensed under the terms of the MIT license. 
More information is available at [opensource.org/licenses](https://opensource.org/licenses/MIT);



