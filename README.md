# [TellusEd](https://tellused.com/)

<br>

## 📚 Overview

[TellusEd](https://tellused.com/) - a note taking app + more! <br />

- You can also teach!<br />
- While learning and taking notes, improve how a section is taught!<br />
- Tell us/educate us by sharing your "improved" version of "that" learning section.<br />

## 📔 Project Wiki

- [Design UI Desktop](https://github.com/quin650/TellusEd/wiki/Design-UI--Desktop)
- [Design UI Mobile](https://github.com/quin650/TellusEd/wiki/Design-UI--Mobile)
- [Features List](https://github.com/quin650/TellusEd/wiki/Features-List)
- [User Stories](https://github.com/quin650/TellusEd/wiki/User-Stories)
- [Database Schema](https://github.com/quin650/TellusEd/wiki/Database-Schema)
- [Redux Store Shape](https://github.com/quin650/TellusEd/wiki/Redux-Toolkit-Store)

## 💾 Install

### Frontend

![ReactJS](https://img.shields.io/badge/react-%2320232a.svg?logo=react&style=flat&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&style=flat&logoColor=%23F7DF1E)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?logo=redux&style=flat&logoColor=white)

### Backend

[![Python](https://img.shields.io/badge/-Python-F9DC3E.svg?logo=python&style=flat)](https://www.python.org/)
[![Django](https://img.shields.io/badge/-Django-092E20.svg?logo=django&style=flat)](https://www.djangoproject.com/)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?logo=postgresql&style=flat&logoColor=white)

### Authentication
[![JSON Web Tokens](https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=flat)

### Host

![Render](https://img.shields.io/badge/render-%4351e8.svg?logo=sqlite&style=flat&logoColor=white)

## ⚒️ Getting Started

0. python version for this project:
   python 3.10.6

1. Clone the repo:

```
https://github.com/quin650/TellusEd.git
```

2. Create python Virtual Environment and activate:

```
cd backend
python -m venv .venv
source .venv/bin/activate
```

3. Install backend packages:

```
pip install -r requirements.txt
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

7. create database

```
open terminal & run commands:
   % psql postgres
   postgres=# CREATE DATABASE tellused OWNER postgres;

set password (required in django settings setup)
   postgres=#\password
   postgres=# enter password
   postgres=# enter password again

to quit, run:
   postgres=#\q
```

7. migrate seed files:

```
cd backend
python manage.py migrate
```

8. Run the frontend server

```
npm start
npm run build
npm run dev
```

9. Run the backend server

```
python manage.py runserver
```

10. Navigate to local site in browser

```
http://localhost:8000/
```
