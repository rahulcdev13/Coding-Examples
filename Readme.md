*React Interview Questions*

1. Context API with example 
  - Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components
  - For example, let’s say you have a shopping app with a component that shows a user’s shopping cart, and another component that shows the user’s order history.

  With Context API, you can create a “context” that holds the user’s shopping information, like their cart and order history. Then, you can use that context in both the shopping cart and the order history component, without having to pass the information down through props.
  export const MyContext = createContext("");
  Once you've created a context object, you need to wrap the components that need access to the shared data with a Provider component.
   <div>
      <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </div>

2. Redux and redux toolkit with eplain all flow
  - Redux :
    - Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces
    - Redux is a pattern and library for managing and updating application state, using events called "actions".
    - It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion
    
    how Redux works in a React application ?
    - When you click on button it dispatch an action which called the reducer function which modified the update the slice of the redux store  
    - Then subscribing to the store using useSelector and automatically update our cart. 

  - dispatch an action
  - store
  - reducer
  - useSelector
  - useDispatch

3. Hooks
  - useState
    - useState is React Hook that allows you to add state to a functional component
    - It returns an array with two values: the current state value and a function to update it
    - The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
  
  - useReducer :
    - The useReducer Hook is used to store and update states, just like the useState Hook
    - It accepts a reducer function as its first parameter and the initial state as the second
    - useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it
    - Example : 
    import React, { useReducer } from 'react';

    // Step 1: Define a reducer function
    const initialState = { count: 0 };

    function reducer(state, action) {
      switch (action.type) {
        case 'increment':
          return { count: state.count + 1 };
        case 'decrement':
          return { count: state.count - 1 };
        case 'reset':
          return { count: 0 };
        default:
          return state;
      }
    }

    // Step 2: Use useReducer to manage state
    function Counter() {
      const [state, dispatch] = useReducer(reducer, initialState);

      return (
        <div>
          <p>Count: {state.count}</p>
          <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
          <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
      );
    }

  - useEffect
    - The useEffect Hook allows you to perform side effects in your components
    - Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    - useEffect accepts two arguments. the first one is callback function and second one is empty array it is a optional.
    - [] - This helps to avoid unnecessary network requests and can improve performance.
      -  If you remove the array it will run on every render

  - useMemo Hook
    - The useMemo hook is used to memoize the result of a computation, ensuring that the computation is only executed when its dependencies change. It takes two arguments: a function that computes the value, and an array of dependencies. The hook returns the memoized value.
    - Example :
      import React, { useMemo } from 'react';
      
      function ExpensiveCalculationComponent({ a, b }) {
        const result = useMemo(() => {
          console.log('Calculating result...');
          return a + b;
        }, [a, b]);

        return <div>Result: {result}</div>;
      }

  - useCallback Hook
    - The useCallback hook is used to memoize functions, preventing them from being recreated on each render. It takes two arguments: the function you want to memoize and an array of dependencies. The hook returns the memoized function.
    - Example :
      import React, { useCallback, useState } from 'react';
      
      function ButtonComponent() {
        const [count, setCount] = useState(0);
        
        const handleClick = useCallback(() => {
          setCount(count + 1);
        }, [count]);

        return (
          <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
          </div>
        );
      }

  - useRef
    - The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
    - The useRef Hook allows you to persist values between renders
    - useRef is a React Hook that lets you reference a value that's not needed for rendering.
    - Example :
      import React, { useRef, useEffect } from 'react';
      function FocusInput() {
        const inputRef = useRef(null);

        useEffect(() => {
          // Focus the input element when the component mounts
          inputRef.current.focus();
        }, []);

        return (
          <div>
            <input type="text" ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
          </div>
        );
      }
      export default FocusInput;

  - useContext
    - it means context api

4. State and Props : in Notes 
5. What is stateLess and stateFull
  - Stateless Components (Functional Components):
    - Stateless components are also known as "functional components" or "dumb components."
    - They are defined as JavaScript functions that receive props as their argument and return JSX elements.
    - Stateless components do not have their own internal state.
    - Stateless components are simple, lightweight, and typically focus on rendering and displaying data. 
    - They do not handle complex logic or maintain their own state.
  - Stateful Components (Class Components):
    - Stateful components are also known as "class components" or "smart components."
    - They are defined as JavaScript classes that extend the React.Component class.
    - Stateful components can have their own internal state managed through the this.state object.
    - Stateful components can also render UI based on their state and props.

6. How to create build and how to host on server
  - npm run build
  - npm install -g serve
  - serve -s build

7. What is Webpack and parcel bundler ?

- Parcel/Webpack is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features. 
- It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start. 
- Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.

  - Webpack : 
    - is a static module bundler for JavaScript applications
    - Webpack in react is a JavaScript module bundler that is commonly used with React to bundle and manage dependencies
    - It takes all of the individual JavaScript files and other assets in a project, such as images and CSS, and combines them into a single bundle that can be loaded by the browser.

  - Parvel :
    - Parcel works great for building single or multi-page React applications
    -  It includes a first-class development experience with Fast Refresh, and supports JSX, TypeScript, Flow, and many styling methodologies out of the box.
    - Parcel optimizes your whole app for production automatically
    - This includes tree-shaking and minifying your JavaScript, CSS, and HTML, resizing and optimizing images, content hashing, automatic code splitting, and much more.

- Parcel Features:
  - HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
  - File watcher algorithm - made with C++
  - Minification
  - Cleaning our code
  - DEV and production Build
  - Super fast building algorithm
  - Image optimization
  - Caching while development
  - Compresses
  - Compatible with older version of browser
  - HTTPS in dev
  - Port Number
  - Consistent hashing algorithm
  - Zero Configuration
  - Automatic code splitting
  - npm install -D parcel

7. Whta is webSocket ?
  - WebSocket is a protocol for creating two-way communication between a client and a server. 
  - See how it eases the process of sending and receiving data in real-time React apps. 
  - Technology changed our lives for the better. 
  - We can say that one of the good reasons for that is because of real-time communication

8. Recoincilation 
 - Reconciliation is the process through which React updates the Browser DOM and makes React work faster. 
 - React use a diffing algorithm so that component updates are predictable and faster. 
 - React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. 
 - React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. 
 - Comparison is done by Diffing Algorithm. React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

9. *Life Cycle in react ?
  - There are three different phases of React component lifecycle:

  - Mounting: This phase occurs when the component is being created and inserted into the DOM. It involves the following methods:
    constructor()
    getDerivedStateFromProps()
    render()
    componentDidMount()

  - Updating: This phase occurs when the component is updated due to changes in props or state. It involves the following methods:
    getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()

  - Unmounting: This phase occurs when the component is being removed from the DOM. It involves the following method:
    componentWillUnmount()

10. Pass data parent to child and vice versa
  - In the parent component, create a callback function. ...
  - Pass the callback function to the child as a props from the parent component.
  - The child component calls the parent callback function using props and passes the data to the parent component.

11. What is JSX ?
  - JSX stands for JavaScript XML. 
  - JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements.
  - JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. 

12. Interceptor 
  - Interceptors allow you to modify the request or response before it is sent or received by the server
  - Interceptors are useful because they allow developers to add custom functionality to requests and responses without modifying the actual code that makes the request

13. Fetch and axios diff and adventages & disadventages.
  - Axios performs automatic transforms of JSON data.
  - Axios allows cancelling request and request timeout.
  - Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the . json() method on the response.
 
14. Higher order components with example
  - A higher-order component (HOC) is an advanced technique in React for reusing component logic.
  - A higher-order component is a function that takes a component and returns a new component.
  - Main purpose of HOC is reusing the componnet logic.

15. Controlled and unControlled component with example
  - Controlled Component :
    - Controlled component is a component that is controlled by React state
    - Controlled component react, state handles all the form data
    - Data flow from parent component to component.

  - Uncontrolled Component :
    - Uncontrolled component is a component that maintains its own internal state
    - Uncontrolled components, where form data is handled by the DOM itself.
    - Data flow within the component.

16. Pure Componnets with example
  - React pure components are the components that do not re-render when the value of props and state has been updated with the same values
  - Since these components do not cause re-rendering when the same values are passed thus they improve performance.

17. what is prettier and eslint
  - ESLint : performs automated scans of your JavaScript files for common syntax and style errors. 
  - Prettier : Scans your files for style issues and automatically reformats your code to ensure consistent rules are being followed for indentation, spacing, semicolons, single quotes vs double quotes, etc.

18. Jest testing with example
  - Jest is a JavaScript testing framework that allows developers to run tests on JavaScript and TypeScript code and can be easily integrated with React JS
  - Open the package. json, and you will find that when you use create-react-app for creating a react project, it has default support for jest and react testing library
  Example : 
    -  test("Should load button inside Contact component", () => {
      render(<Contact />);
      const button = screen.getByRole("button");
      const buttonName = screen.getByText("Submit");
      const input = screen.getByPlaceholderText("enter your message");
      const inputBoxes = screen.getAllByRole("textbox");
      
      const result = sum(3, 5);
      // This line known as Assertions
      expect(result).toBe(8);

      //Assertion
      expect(button).toBeInTheDocument();
      });
     
19. Why use jest testing ?
  - Jest provides a great iteration speed combined with powerful features like mocking modules and timers so you can have more control over how the code executes. 
  - React Testing Library is a set of helpers that let you test React components without relying on their implementation details.

20. Props drilling
  - Prop drilling occurs when a parent component passes data down to its children and then those children pass the same data down to their own children. This process can continue indefinitely.

21. Lazy Loading
  - Lazy loading is one of the most popular methods to optimize React applications
  - Lazy loading helps to load the web page quickly and presents the limited content to the user that is needed for the interaction
  - lazy loading can be more helpful in applications that have high-resolution images or data that alters the loading time of the application. 
  - Example : 
  const About = lazy(() => import("./commonFiles/About"));

=====================================================================================================================================

*JavaScript Interview questions Challenge*
1. ES6 Features
  - Variables (let, const, var)
  - Arrow Functions.
  - Template Literals
  - Array Methods like .map()
  - Destructuring.
  - Ternary Operator.
  - Spread and Rest Operator.
  - Classes.
  - Modules.
  - Promises

2. Arraw function and normal function
3. Local storage and session storage
  - sessionStorage is similar to localStorage ; 
  - The difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab

4. Explain var, let and const
  - Notes-Namaste-Javascript

5. Real DOM and Virtual DOM
6. How can you Destrucring object

7. What is map,filter and reducer with example ?
  - Notes-Namaste-Javascript
8. Housting with example
  - Notes-Namaste-Javascript

9. Constructor inheritance and this
10. Object oriented JS
11. Prototype
12. Data Types 
  - BB NN SS U
13. TypeOF
14. Singleton 

15. Create constructor and add some properties
  - Example :

16. Callback
  - Notes-Namaste-Javascript
17. Closure
  - Notes-Namaste-Javascript
18. Promisses
  - Notes-Namaste-Javascript
19. Asynchronous Async and await keyword
  - Notes-Namaste-Javascript
20. Function and variables
  - Notes-Namaste-Javascript
21. undefined and null 
  - Notes-Namaste-Javascript
22. undefined and not defined
  - Notes-Namaste-Javascript

23. Rest and spread operator with example
  - The spread and rest operators are powerful features in JavaScript for working with arrays and objects. 
  - They allow you to manipulate and destructure data in a concise and flexible way. 
  - Spread operator: 
    - You can use the spread operator to create a shallow copy of an array.
    - The spread operator can also be used to concatenate arrays.
    - You can spread the properties of an object into another object.
    - You can use the spread operator to create a shallow copy of an object.
    - The spread operator helps us expand an iterable such as an array where multiple arguments are needed, 
    - it also helps to expand the object expressions. 

  - Rest operator: 
    - The rest parameter is converse to the spread operator. 
    - The rest operator is used in function parameters to collect all remaining arguments into an array.
    Example :
      function sum(...numbers) {
      return numbers.reduce((total, num) => total + num, 0);
      }
      console.log(sum(1, 2, 3, 4)); // 10

   - In array destructuring, the rest operator can be used to capture remaining elements in an array.
   Example :
    const [first, second, ...rest] = [1, 2, 3, 4, 5];
    console.log(first); // 1
    console.log(second); // 2
    console.log(rest); // [3, 4, 5]  

24. Difference callback and promises ?
  - Notes-Namaste-Javascript

25. this keyword use and example with constructor 
  - when you create your constructor function, you can use the “this” keyword to reference the object that WILL be created when the constructor is instantiated. 
  - So, in Example # 1, the getMusic method returns “this. music”. Since the “music” property of Foo is: “jazz”, then the getMethod returns “jazz”.

26. apply call bind with example
  - call : binds the this value, invokes the function, and allows you to pass a list of arguments.
  - Example :
      function test(arg1, arg2){
      console.log(this.num, arg1, arg2); // 100, 10, 20
      }
      test.call({num: 100}, 10, 20);

  - apply : binds the this value, invokes the function, and allows you to pass arguments as an array. 
  - Example :
    function test(...arguments){
    console.log(this.num, arguments);//100, [1,2,3]
    }
    test.apply({num: 100}, [1,2,3]); 
  
  - bind : binds the this value, returns a new function, and allows you to pass in a list of arguments.
  - Example :
    function test(arg){
    console.log(this.number, arg);
    }
    let bindedFn = test.bind({number: 99}, "argument");
    bindedFn(); // 99, "argument"

27. setTimeout and setInterval
  - The setTimeout() method is used to call a function after a certain period of time. 
  - setInterval() Javascript method is used to call a function repeatedly at a specified interval of time
  - setTimeout() is cancelled by clearTimeout() method, and setInterval() is cancelled by clearInterval() method.

28. What is a higher order function example?
  - Note: The function that we pass as an argument to another function is called the callback function. 
  - Note: Functions such as filter(), map(), reduce(), some(), etc, all are examples of Higher-Order Functio

*HtmlCss Interview questions and Coding Challenge*

1. Semantic and non semantic element
2. Box model
3. Flex box
4. Positions
5. Display:none and display:hidden
6. !important
7. Media query
8. Display:inline and display:inline-block
9. Block element and inline Element
10. !DOCTYPE