[TellusEd](https://tellused.com/) is an educational platform the thrives on open education resources and your Telling Us, Teaching Us.

<br>

## Project Wiki

- [Design UI Desktop](https://github.com/quin650/TellusEd/wiki/Design-UI--Desktop)
- [Design UI Mobile](https://github.com/quin650/TellusEd/wiki/Design-UI--Mobile)
- [Features List](https://github.com/quin650/TellusEd/wiki/Features-List)
- [User Stories](https://github.com/quin650/TellusEd/wiki/User-Stories)
- [Database Schema](https://github.com/quin650/TellusEd/wiki/Database-Schema)
- [Redux Store Shape](https://github.com/quin650/TellusEd/wiki/Redux-Toolkit-Store)

## Built Using

### Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

### Backend

![Python](https://img.shields.io/badge/python⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀-376c99?style=for-the-badge&logo=python&logoColor=f7d34b)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

### Host

![Render](https://img.shields.io/badge/render-%4351e8.svg?style=for-the-badge&logo=sqlite&logoColor=white)

# Getting Started

1. Clone the repo:

```
https://github.com/quin650/TellusEd.git
```

2. Create python Virtual Environment:

```
cd backend
python -m venv .venv
```

3. Install backend packages:

```
pip install --requirements.txt

```

4. Install frontend packages:

```
cd frontend
npm install
```

5. Create .env

```
cd ..
touch .env
```

6. and add:

```
SECRET_KEY=<<Password of your choosing>>
DATABASE_URL=sqlite:///dev.db
```

7. Enter the shell, then Migrate and seed files:

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
