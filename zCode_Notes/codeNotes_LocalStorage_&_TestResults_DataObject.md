## Local Storage Requires JSON Format

- Storing data:

  ```js
  localStorage.setItem("testResults", JSON.stringify(state.sideBar_R_QuestionTestResults_rdx));
  ```

  - Local Storage only stores strings, so we need `JSON.stringify()` when saving.

- Retrieving data:

  ```js
  localStorage.getItem("testResults") ? JSON.parse(localStorage.getItem("testResults")) : {};
  ```

  - When retrieving data, we must use `JSON.parse()` to convert it back into an object.

---

<br>

## Old Test Results Object

<details>
  <summary>Click to expand</summary>

### Initial State: Dictionary Object

```js
state.sideBar_R_QuestionTestResults_rdx = {};
```

---

### Create Test Object: Dictionary Object

```js
state.sideBar_R_QuestionTestResults_rdx[testNumber] = {};

ex - state.sideBar_R_QuestionTestResults_rdx[1] = {};
```

- Initializes an object:
  ```js
  {
    1: {}
  }
  ```

---

### Add a List Item:

```js
state.sideBar_R_QuestionTestResults_rdx[testNumber][questionNumber] = answerData;

    answerData = [
        QuestionNumber,
        id,
        correctOrIncorrect
    ];

ex - state.sideBar_R_QuestionTestResults_rdx[1][1] = [1, 3, true];
ex - state.sideBar_R_QuestionTestResults_rdx[1][2] = [2, 1, true];
```

- Resulting Object:
  ```js
  {
    1: {
      1: [1, 3, true],
      2: [2, 1, true]
    }
  }
  ```

## </details>

## New Test Results Object

<details>
  <summary>Click to expand</summary>

### Initial State: Dictionary Object

```js
state.sideBar_R_QuestionTestResults_rdx = {};
```

---

### Create Test Object: Dictionary Object

```js
state.sideBar_R_QuestionTestResults_rdx[testNumber] = {};

ex - state.sideBar_R_QuestionTestResults_rdx[1] = {};
```

- Initializes an object:
  ```js
  {
    1: {}
  }
  ```

---

### Add to Test Object:

```js
state.sideBar_R_QuestionTestResults_rdx[testNumber][questionNumber] = { attempts: [] };

ex - state.sideBar_R_QuestionTestResults_rdx[1][1] = { attempts: [] };
```

- Initializes an object:

  ```js

  1: {
    1:{
      attempts:[]
    },
  }

  ```

---

### Add a List Item:

```js
state.sideBar_R_QuestionTestResults_rdx[testNumber][questionNumber].attempts.unshift(answerData);               //unshift adds to beg. of list
    answerData = {
        attemptId: 1,
        selectedId: 3,
        isCorrect: false,
    };

ex - state.sideBar_R_QuestionTestResults_rdx[1][1][attempts] = {attemptId: 1, selectedId: 2, isCorrect: true};
ex - state.sideBar_R_QuestionTestResults_rdx[1][1][attempts] = {attemptId: 2, selectedId: 3, isCorrect: false}; //attempts gets shifted to beg. of list

ex - state.sideBar_R_QuestionTestResults_rdx[1][2][attempts] = {attemptId: 1, selectedId: 1, isCorrect: true};
```

- Resulting Object:
  ```js
  1: {
    1: {
      attempts: [
        { attemptId: 2, selectedId: 3, isCorrect: false }     //most recent attempt was shifted to beg. of list
        { attemptId: 1, selectedId: 2, isCorrect: true },     //first attempt
      ]
    },
    2: {
      attempts: [
        { attemptId: 1, selectedId: 1, isCorrect: true }
      ]
    }
  }
  ```
