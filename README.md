# React Employee Directory

[![GitHub stars](https://img.shields.io/github/stars/jessicablank/employee-directory)](https://github.com/jessicablank/employee-directory/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/jessicablank/employee-directory)](https://github.com/jessicablank/employee-directory/network)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/jessicablank/employee-directory)](https://github.com/jessicablank/employee-directory/issues)

Deployed on [github pages](https://jessicablank.github.io/employee-directory/)

## Description:  
This is my first boot camp homework assignment bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
* When the user enters a state name in the search field, the employees are sorted by their state of residence. 

![demonstration gif](https://github.com/jessicablank/employee-directory/blob/master/assets/homepageGIF.gif)


This was my first React application so my brain wasn't thinking in terms of Components yet. It wasn't until I came back to add the Loading Indicator that componentization started to click. The sorting function could work for names, as well as ages, if the sort was broken out into it's own component. 

I decided to re-imagine this application as a "Secret Agent Directory." 


Original File Structure: 
```
├── App.css
├── App.jsx
├── components
|  ├── EmployeeTable.js <--All the sorting logic was here-->
|  ├── Header.js
|  └── TableRow.js
├── index.js
└── utils
   └── API.js

## Questions
You can reach the author, Jessica Blankemeier, via [github](http://github.com/jessicablank) and [email](mailto:jessicablankemeier@gmail.com)
![GitHub](https://img.shields.io/github/followers/jessicablank?label=follow&style=social)

## License
Copyright 2020 - present Jessica Blankemeier.
This project is licensed under the terms of the MIT license. 
More information is available at [opensource.org/licenses](https://opensource.org/licenses/MIT);



