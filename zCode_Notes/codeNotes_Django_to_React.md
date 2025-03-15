# How Django integrates to React

## django/urls.py

```python
...
urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]
```

- Empty paths are rendered using index.html.

## settings.py

```python
TEMPLATES = [
    {
        "DIRS": [os.path.join(BASE_DIR, "templates/frontend")],
    },
]
```

- This setting says add the beginning path so django knows where to find index.html.

## templates/frontend/index.html

```html
...
<!DOCTYPE html>
<html lang="en">
	<head>
		...
	</head>
	<body>
		<div class="root">*The browser renders what is in here*</div>
	</body>
</html>
```

- this is the entry point to the browser.
  - the browser renders what is inside the class="root".

## index.js

```js
...
const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
```

- We first find the root and assign it to a variable
  - then we render the React.js App inside

## app.js

```js
const App = () => {
  ...
	return (
		<main >
      ...
		</main>
	);
};
export default App;
```

- Lastly, we create components and feed them into the `<main>` tags
