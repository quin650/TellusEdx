# [TellusEd](https://tellused.com/)

<br>

## 📚 Overview

[TellusEd](https://tellused.com/) - a note taking app + more! <br />

- You can also teach!<br />
- While learning and taking notes, improve how a section is taught!<br />
- Tell us/educate us by sharing your "improved" version of "that" learning section.<br />

## 💾 Install

<details>
  <summary>Click to expand</summary>

### Frontend

![ReactJS](https://img.shields.io/badge/react-%2320232a.svg?logo=react&style=flat&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&style=flat&logoColor=%23F7DF1E)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?logo=redux&style=flat&logoColor=white)

### Backend

[![Python](https://img.shields.io/badge/-Python-F9DC3E.svg?logo=python&style=flat)](https://www.python.org/)
[![Django](https://img.shields.io/badge/-Django-092E20.svg?logo=django&style=flat)](https://www.djangoproject.com/)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?logo=postgresql&style=flat&logoColor=white)

### Authentication

![JSON Web Tokens](https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=flat)

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

## </details>

## <br>

# 📝💻 Coding Style Guide

**Last Updated:** March 2025  
**Author:** Joaquin Garcia-Huerta

<details>
  <summary>Click to expand</summary>
  
## Summary of Key Naming Conventions

| Type             | Convention       | Example                           |
| ---------------- | ---------------- | --------------------------------- |
| Variables        | `camelCase`      | `userName`, `totalCount`          |
| Redux Variables  | `camelCase`\_rdx | `userName_rdx`, `totalCount_rdx`  |
| Constants        | `UPPER_CASE`     | `API_URL`, `MAX_LENGTH`           |
| Functions        | `camelCase`      | `fetchData()`, `handleSubmit()`   |
| Booleans         | `is/has` prefix  | `isValid`, `hasPermission`        |
| Classes          | `PascalCase`     | `UserProfile`, `ShoppingCart`     |
| React Components | `PascalCase`     | `<NavBar />`, `<Footer />`        |
| Props            | `camelCase`      | `<UserProfile userName="John" />` |
| Event Handlers   | `handleEvent`    | `handleClick()`, `handleSubmit()` |
| CSS Classes      | `kebab-case`     | `.nav-bar`, `.button-primary`     |

### Additional Naming Guidelines:

- Variables, functions, Components: `camelCase`
- Classes & components: `PascalCase`
- Constants: `UPPER_CASE`
- Private variables: `_underscorePrefix`
- Interfaces & Types: `PascalCase`
- Enums: `PascalCase`
- Folder Names: `camelCase`
  - Number the folders wherever possible
  - When folders have a theme, use: `_underscorePrefix` followed by `camelCase` i.e. django_UserAccounts

### Examples:

<details>
  <summary>Click to expand</summary>

- Generally: `_underscorePrefix` followed by `camelCase`
- Numbered if helpful

| Type      | Convention | Example                          |
| --------- | ---------- | -------------------------------- |
| Folder    | xyz        | 30_modal_resetThisTest           |
| File      | xyz        | modal_resetThisTest              |
| Component | xyz        | Modal_resetThisTest              |
| Reducer   | xyz        | modal_resetThisTest              |
| Action    | xyz        | modal_action_resetThisTest_close |
| Ref       | xyz        | modal_ref_resetThisTest          |

</details>

## ⚛️ React.js Coding Guide

<details>
  <summary>Click to expand</summary>

## **1. General JavaScript & TypeScript Rules**

### **1.1 Use `const` and `letf`, Never `var`**

```tsx
const name = "Joaquin"; // ✅ Good
let age = 37; // ✅ Good
var city = "San Jose"; // ❌ Bad
```

### **1.2 Use Arrow Functions for Anonymous Functions**

```tsx
const add = (a: number, b: number): number => a + b;
```

### **1.3 Always Use Template Literals Instead of String Concatenation**

```tsx
const greeting = `Hello, ${name}!`; // ✅ Good
const greeting2 = "Hello, " + name + "!"; // ❌ Bad
```

### **1.4 Use Destructuring for Objects and Arrays**

```tsx
const user = { name: "Joaquin", age: 37 };
const { name, age } = user; // ✅ Good
```

### **1.5 Use Optional Chaining and Nullish Coalescing**

```tsx
const userAge = user?.age ?? "Unknown"; // ✅ Prevents undefined errors
```

### **1.6 Avoid Using `any` Type**

```tsx
const fetchData = async (): Promise<any> => {
	// ❌ Avoid `any`
	return fetch("https://api.example.com/data").then((res) => res.json());
};
```

---

## **2. React & JSX Best Practices**

### **2.1 Functional Components Only (No Class Components)**

```tsx
const Button = ({ text }: { text: string }) => <button>{text}</button>;
```

### **2.2 Use PascalCase for Components and camelCase for Props**

```tsx
const UserProfile = ({ userName }: { userName: string }) => <h1>{userName}</h1>;
```

### **2.3 Self-Closing Tags When Possible**

```tsx
return <img src="profile.jpg" alt="Profile" />; // ✅ Good
```

### **2.4 Keep Components Small and Reusable**

```tsx
const Avatar = ({ url }: { url: string }) => <img src={url} alt="User Avatar" />;
const UserProfile = ({ user }: { user: { name: string; avatar: string } }) => (
	<div>
		<h1>{user.name}</h1>
		<Avatar url={user.avatar} />
	</div>
);
```

### **2.5 Use Fragments Instead of Extra `div` Elements**

```tsx
return (
	<>
		<h1>Title</h1>
		<p>Content here...</p>
	</>
);
```

---

## **3. Hooks & State Management**

### **3.1 Use `useState` with Initial Type**

```tsx
const [count, setCount] = useState<number>(0);
```

### **3.2 Use `useEffect` with a Dependency Array**

```tsx
useEffect(() => {
	console.log("Component Mounted");
}, []); // ✅ Runs only on mount
```

### **3.3 Use Custom Hooks for Reusability**

```tsx
const useWindowWidth = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return width;
};
```

### **3.4 Use `useCallback` for Performance Optimization**

```tsx
const handleClick = useCallback(() => console.log("Clicked!"), []);
```

---

## **4. Props & State Handling**

### **4.1 Define Props with TypeScript**

```tsx
type ButtonProps = {
	text: string;
	onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;
```

### **4.2 Use Default Props Instead of Undefined Values**

```tsx
const WelcomeMessage = ({ message = "Hello, User!" }: { message?: string }) => <p>{message}</p>;
```

---

## </details>

### **Final Notes**

- 🚀 Follow **DRY** (Don’t Repeat Yourself).
- ✅ Use TypeScript for type safety.
- 🔍 Write **clean, readable, and maintainable** code.
- ⚡ Optimize performance using **React.memo, useMemo, and useCallback**.
- 🔒 Use **strict types** instead of `any`.

---

</details>
