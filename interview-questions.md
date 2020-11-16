# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer: super() is used to call upon the constructor() of the parent class. So inside a child class, it will have a super() to refer to all the properties of the parent class and you are able to generate more properties inside your child class.

  Researched answer: You would use the method super() to access and call functions from an object's parent. The method super() will make you child class inherit the methods from the parent class's constructor() method, therefor, the child has access to the parent's properties and methods.



2. What is a virtual DOM?

  Your answer: I think that a virtual DOM is possibly a representation of the actual DOM. So instead of actually manipulating a DOM directly, we manipulate the virtual DOM

  Researched answer: A virtual DOM object is a representation of a DOM object, just like a "lightweight" copy. A virtual DOM has the same properties as a real DOM but it lacks the real DOM's ability to change whats on the screen. Manipulating the virtual DOM is far faster because nothing is drawn onscreen. So the example given by codeacademy is like editing the blueprints of a house rather than moving actual rooms in an actual house. So React compares when an update happens: it takes the updated virtual DOMs with a copy of the virtual DOM before the update happened, and it responds back by changing only those objects with a different virtual DOM, this process is called "diffing" React:

1- The entire virtual DOM gets updated.
2- The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
3- The changed objects, and the changed objects only, get updated on the real DOM.
4- Changes on the real DOM cause the screen to change.


3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: I know that they cannot obviously contain state, and I think that a basic class component is called a functional component. So you need to just build a regular function for the (props) section?

  Researched answer: So a basic class component do not manage their own state and dont have lifecycle methods (updating methods). We would need these necessary elements in a stateless component because they print out what is given to them via props, or the always render the same thing. I learned that stateless components dont even need props, but should have them to have child components ready to display.
  a named function that returns as a Header, "Hello World"
const Stateless = () => {
  return(
    <div>
      <h1>Hello World</h1>
    </div>
    )
}


4. What is JSX?

  Your answer: It is the language that React uses to communicate. It's like a hybrid ; part javascript, part HTML, part React's own logic.

  Researched answer: JSX is short for JavaScript XML. JSX is an expression which uses HTML statements within Javascript, so JSX allows us to write HTML in React. JSX converts HTML tags into react elements.



5. What is state in React?

  Your answer: State is a manipulated and updated variable used inside components in React for the use of making new data almost immediately present to alter how that specific component will change.

  Researched answer: The state is an instance of a Component Class, so it is an object of a set of observable properties that control the behavior of the component. So, state of a component is an object that holds some information that may change over the lifetime of the component.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: The ability to be able to call upon variables dynamically before they are declared in how the program reads script [left-then-right, up-then-down]. So utilizing the ability within "aStringHere" to be able to look through the entire document

  Researched answer: In Javascript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code is executed. It gives an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of wether their scope is global or local. So variables defined with let and const are hoisted to the top of the code block but not initialized, meaning that the code block is aware of the variable, however, it cannot be used until it has been declared. So using a let or const variable in a block of code before it is declared will result in a ReferenceError.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases: Mounting, Updating, and Unmounting.
Mounting means putting elements into the DOM. React has four built-in methods that gets called, in this order, when mounting a component: constructor(), getDerivedStateFromProps(), render(), componentDidMount(). The render() method is required and will always be called, the others are optional and will be called if you define them.
Updating: The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component's state or props. React has five built-in methods that gets called, in this order, when a component is updated: getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate(). The render() method is required and will always be called, the others are optional and will be called if you define them.
Unmounting: The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it. React has only one built-in method that gets called when a component is unmounted: componentWillUnmount()

- React props: Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. Props are Read-Only! All React components must act like pure functions with respect to their props.

- event.preventDefault(): This tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once. Calling preventDefault() during any stage of event flow cancels the event, meaning that any default action normally taken by the implementation as a result of the event will not occur. You can use Event.cancelable to check if the event is cancelable. Calling preventDefault() for a non-cancelable event has no effect.

- DOM events: are actions that occur as a result of the user action or as result of state change of the elements of a DOM tree. Examples of HTML DOM events: When a user clicks the mouse, When a web page has loaded, When an image has been loaded, When the mouse moves over an element, When an input field is changed, When an HTML form is submitted, When a user presses a key
- MVC: Model-View-Controller is a software design pattern used commonly for developing UI that divides related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.
