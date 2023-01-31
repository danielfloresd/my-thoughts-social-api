[![DeepScan grade](https://deepscan.io/api/teams/19657/projects/23124/branches/691436/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=19657&pid=23124&bid=691436)[![CodeFactor](https://www.codefactor.io/repository/github/danielfloresd/employee-track-cms/badge)](https://www.codefactor.io/repository/github/danielflores/demployee-track-cms)

# My Thoughts Social API

## Description

<p>A RESTful API for managing user profiles and thoughts with friend and reaction functionality.</p>

## Table of contents

- [Description](#description)
- [Installation](#🛠️installation)
- [Usage](#💻usage)
- [API Routes](#🛣️api-routes)
- [Dependencies](#🧩dependencies)
- [License](#📛license)
- [Contributing](#🤝contributing)
- [Tests](#📃tests)
- [Questions](#❓questions)
- [Website](#🌐website)
- [Programming Languages](#👨‍💻programming-languages)
- [Credits](#👨creadits)

## 🛠️Installation

To install the application clone the repository https://github.com/danielfloresd/my-thoughts-social-api and run node package manager with the following command: ```npm i```.
After all dependencies are installed, mongodb needs to be installed. You can seed the mongodb using seed data by runing ```npm run seed```
## 💻Usage

After installing all dependencies run ```npm start``` to launch a webserver.

### 🛣️API-Routes

<p><strong>🎥Click on videos to view🎥</strong></p>

* <a href="https://drive.google.com/file/d/1CAFjtD_AvmpYs39EHR_dsypRxIs6fSz0/view">Find All Users & Thoughts</a>
* <a href="https://drive.google.com/file/d/1pA7amcCfpr7PExotyVhuyg007wb1iw5R/view">Find User & Thought by ID</a>
* <a href="https://drive.google.com/file/d/1t6ZrJNFVjroctPhrHmHm1dJuDsvBIHKP/view">Create, Update & Delete Users</a>
* <a href="https://drive.google.com/file/d/1HqZaY8Cx8R0e6rbmk-Hz4iY2wYwc9MNz/view">Create, Update & Delete Thought</a>
* <a href="https://drive.google.com/file/d/1h-pUptC6qYG2Jj1aFVnKByFwWTGiczyg/view">Add & Remove Friends & Reactions</a>


**`/api/users`**

- `GET` all users

- `GET` a single user by its `_id` and populated thought and friend data

- `POST` a new user:

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

- `PUT` to update a user by its `_id`

- `DELETE` to remove user by its `_id`

**NOTE**: User's associated thoughts will be deleted

---

**`/api/users/:userId/friends/:friendId`**

- `POST` to add a new friend to a user's friend list

- `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

- `GET` to get all thoughts

- `GET` to get a single thought by its `_id`

- `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

- `PUT` to update a thought by its `_id`

- `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

- `POST` to create a reaction stored in a single thought's `reactions` array field

- `DELETE` to pull and remove a reaction by the reaction's `reactionId` value


## 🧩Dependencies
*   "express": "^4.17.1"
*   "jest": "^29.4.1"
*   "moment": "^2.29.4"
*   "mongoose": "^6.0.13"
*   "request": "^2.88.2"

## 📛License

Project license: [MIT](https://choosealicense.com/licenses/mit).

<details><summary><b>View License</b></summary>MIT License

Copyright (c) 2022 Daniel Flores D

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</details></br>

## 🤝Contributing

If you would like to contribute, please follow the [GitHub contribution guidelines](https://github.com/github/docs/blob/main/CONTRIBUTING.md)

## 📃Tests

Testing implemented using jest. To run unit testing ```npm test```

## ❓Questions

For questions, please contact:

- [![GitHub github:](https://img.shields.io/badge/github:-danielfloresd-black.svg)](https://github.com/danielfloresd)
- [![email](https://img.shields.io/badge/email:-daniel.flor3s.d@gmail.com-blue.svg)](mailto:daniel.flor3s.d@gmail.com)


## 🌐Website

[API Test Website](https://my-thoughts-social-api.herokuapp.com/)

## 👨‍💻Programming Languages

This project was created with: JavaScript

## 👨Credits

Started code provided by the University of Arizona coding bootcamp
