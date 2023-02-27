[Cards For Humans](https://cardsforhumans.onrender.com/) is a spin on the website of the beloved game Cards against Humanity.

<br>

## Project Wiki

- [Database Schema](https://github.com/D0RK5TER/CardsForHumans/wiki/Schema)
- [Features List](https://github.com/D0RK5TER/CardsForHumans/wiki/Feature-List)
- [Redux Store Shape](https://github.com/D0RK5TER/Splashd/wiki/Redux-Store-Shape)
- [User Stories](https://github.com/D0RK5TER/CardsForHumans/wiki/User-Stories)

## Built Using

### Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Backend

![Python](https://img.shields.io/badge/python⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀-376c99?style=for-the-badge&logo=python&logoColor=f7d34b)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/sqlalchemy⠀⠀⠀⠀-424242?style=for-the-badge&logo=academia&logoColor=d71f00)

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

### Host

![Render](https://img.shields.io/badge/render-%4351e8.svg?style=for-the-badge&logo=sqlite&logoColor=white)

# Getting Started

1. Clone the repo:

```
https://github.com/D0RK5TER/CardsForHumans
```

2. Install packages:

```
pipenv install -r requirements.txt
cd react-app
npm install
cd ..
```

3. Create .env

```
touch .env
```

5. and add:

```
SECRET_KEY=<<Password of your choosing>>
DATABASE_URL=sqlite:///dev.db
```

4. Enter the shell, then Migrate and seed files:

```
pipenv shell
flask db init
flask db migrate
flask db upgrade
flask seed all
```

5. Run the server

```
flask run
cd react-app
npm start
```

6. Navigate to local site in browser

```
http://localhost:3000/
```
