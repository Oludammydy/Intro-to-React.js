// JSX Elements
// A basic unit of JSX is called a JSX element.

// Here’s an example of a JSX element:
<h1>Hello world</h1>
<p>Hello world</p>

// JSX Elements And Their Surroundings
const navBar = <nav>I am a nav bar</nav>;
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
// Create a JSX <article></article> element. Save it in a variable named myArticle.
const myArticle = <article>I am an Article</article>

// Attributes In JSX
my - attribute - name="my-attribute-value"
  < a href = 'http://www.example.com' > Welcome to the Web</a >;

const title = <h1 id='title'>Introduction to React.js: Part I</h1>;
const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px' />;

//  Declare a constant named p1. Set p1 equal to a JSX <p></p> element. Write the word foo in between the <p></p> tags.
const p1 = <p>foo</p>
// On the next line, declare a constant named p2. Set p2 equal to another JSX <p></p> element. Write the word bar in between the <p></p> tags.
const p1 = <p>bar</p>
// Give the first <p></p> an id attribute of 'large'. Give the second <p></p> an id attribute of 'small'.
const p1 = <p id='large'>foo</p>
const p2 = <p id='small'>bar</p>

// Nested JSX
// Declare a new variable named myDiv. Set myDiv equal to a JSX <div></div> element. Wrap the <div></div> in parentheses, and use indentation and line breaks like in the examples. In between the <div></div> tags, nest an <h1></h1> containing the text Hello world.
const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);

// JSX Outer Elements-There’s a rule: a JSX expression must have exactly one outermost element. e.g
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

// Your friend’s blog is down! He’s asked you to fix it. You immediately diagnose the problem: a JSX expression with multiple outer elements. Repair your friend’s broken code by wrapping their JSX in a <div></div>.
const blog = (
  <img src="pics/192940u73.jpg" />
  <h1>
    Welcome to Dan's Blog!
  </h1>
  <article>
    Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
  </article>
);

// Answer
const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dan's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
    </article>
  </div>
);

// Rendering JSX - To render a JSX expression means to make it appear onscreen. The following code will render a JSX expression:
import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
// Note: JavaScript is case-sensitive, so make sure to capitalize ReactDOM correctly!

// ReactDOM.render() I
// Below the import statements, call ReactDOM.render(). Pass in this expression as a first argument:
<h1>Render me!</h1>
// Pass in this expression as a second argument:
document.getElementById('app')

// Answer
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>,
  document.getElementById('app'));


// // ReactDOM.render() II
// In index.html, replace this:(
<main id="app"></main>
);
// with this span:
<span id="container"></span>

// Select app.js. You want <h1>Render me!</h1> to be appended to <span id="container"></span>. On line 5, make that happen by changing the string passed to document.getElementById().
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));


// Passing a Variable to ReactDOM.render()
// ReactDOM.render()‘s first argument should evaluate to a JSX expression, it doesn’t have to literally be a JSX expression. The first argument could also be a variable, so long as that variable evaluates to a JSX expression.


// Question:On line 5, declare a variable named myList. Set myList equal to a JSX <ul></ul> element. Wrap your <ul></ul> in parentheses. B. Add several <li></li> elements in between your <ul></ul> tags. Put some text in each <li></li>. Use line breaks and indentation similar to the above example.

// 2. At the bottom of the file, call ReactDOM.render().For ReactDOM.render()‘s first argument, pass in the variable myList. For ReactDOM.render()‘s second argument, select an HTML element with an id of app.

// Answer
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>Learn React</li>
    <li>Become a Developer</li>
    <li>One who can develop</li>
    <li>Webpages and applications</li>
    <li>for andriod and ios</li>
  </ul>
);

ReactDOM.render(
  myList,
  document.getElementById('app')
);


// The Virtual DOM 
// One special thing about ReactDOM.render() is that it only updates DOM elements that have changed. That means that if you render the exact same thing twice in a row, the second render will do nothing:
const hello = <h1>Hello world</h1>;
 
// This will add "Hello world" to the screen:
 
ReactDOM.render(hello, document.getElementById('app'));
 
// This won't do anything at all:
 
ReactDOM.render(hello, document.getElementById('app'));
// This is significant! Only updating the necessary DOM elements is a large part of what makes React so successful.React accomplishes this thanks to something called the virtual DOM.