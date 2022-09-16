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






// Part 2 - Advanced JSX
// Declare a new variable named myDiv. Set myDiv equal to a JSX <div></div> element.In between the <div></div> tags, write the text I AM A BIG DIV. Give your <div></div> the following attribute:
className = "big"
// Answer
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv = (
  <div className="big">I AM A BIG DIV</div>
);
// Underneath your <div></div>, call ReactDOM.render. For ReactDOM.render()‘s first argument, pass in myDiv. For ReactDOM.render()‘s second argument, pass in document.getElementById('app').If your rendered <div></div> has a class of "big", then it should look big in the browser!
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv = (
  <div className="big">I AM A BIG DIV</div>
ReactDOM.render(myDiv);
ReactDOM.render(document.getElementById('app'));
);


// Self-Closing Tags
// In app.js, fix the broken JSX by adding slashes to all of the self-closing tags.
const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" >
      <article>
        I LIKE TO SIT
        <br>
          JENKINS IS MY NAME
          <br>
            THANKS HA LOT
          </article>
        </div>
        );

        {/* Answer */}
        const profile = (
        <div>
          <h1>I AM JENKINS</h1>
          <img src="images/jenkins.png" />
          <article>
            I LIKE TO SIT
            <br />
            JENKINS IS MY NAME
            <br />
            THANKS HA LOT
          </article>
        </div>
        );


        {/* JavaScript In Your JSX In Your JavaScript */}
        {/* Starting on line 5, carefully write the following code. What do you think will appear in the browser? */}
        import React from 'react';
        import ReactDOM from 'react-dom';

        // Write code here:
        ReactDOM.render(
        <h1>2 + 3</h1>,
        document.getElementById('app')
        );
        {/* Answer was 2 + 3 */}


        {/* Curly Braces in JSX */}
        {/* Add a pair of curly braces to the code from last exercise, so that your JSX expression looks like this: */}
        <h1>{2 + 3}</h1>
        {/* Everything inside of the curly braces will be treated as regular JavaScript. */}
        import React from 'react';
        import ReactDOM from 'react-dom';

        // Write code here:
        ReactDOM.render(
        <h1>{2 + 3}</h1>,
        document.getElementById('app')
        );
        {/* Answer = 5 */}

        {/* 20 Digits of Pi in JSX
You can now inject regular JavaScript into JSX expressions! This will be extremely useful.

In the code editor, you can see a JSX expression that displays the first twenty digits of pi.

Study the expression and notice the following:

The code is written in a JavaScript file. By default, it will all be treated as regular JavaScript.
Find <div> on line 5. From there up through </div>, the code will be treated as JSX.
Find Math. From there up through (20), the code will be treated as regular JavaScript again.
The curly braces themselves won’t be treated as JSX nor as JavaScript. They are markers that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string. */}
        {/* pi.js */}
        import React from 'react';
        import ReactDOM from 'react-dom';

        const pi = (
        <div>
          <h1>
            PI, YALL!
          </h1>
          <p>
            {Math.PI.toFixed(20)}
          </p>
        </div>
        );

        ReactDOM.render(
        pi,
        document.getElementById('app')
        );

        {/* A. Select app.js.

Declare a new variable named math. Set math equal to a JSX <h1></h1> element.

Put the following text inside of the <h1>:

2 + 3 = 2 + 3 */}
        import React from 'react';
        import ReactDOM from 'react-dom';

        // Write code here:
        var math = <h1>2 + 3 = 2 + 3</h1>;

        {/* b. At the bottom of the file, call ReactDOM.render().

For ReactDOM.render()‘s first argument, pass in math.

For ReactDOM.render()‘s second argument, pass in document.getElementById('app'). */}
        import React from 'react';
        import ReactDOM from 'react-dom';

        // Write code here:
        var math = <h1>2 + 3 = 2 + 3</h1>;
        ReactDOM.render(
        math,
        document.getElementById('app')
        )

        {/* c.As you probably expected, the equation was displayed as a string.

Insert a pair of curly braces into the <h1></h1>, so that the browser displays 2 + 3 = 5. */}
        import React from 'react';
        import ReactDOM from 'react-dom';

        // Write code here:
        var math = <h1>2 + 3 = {2 + 3}</h1>;
        ReactDOM.render(
        math,
        document.getElementById('app')
        )


        {/* Variables in JSX */}
        {/* Replace ReactDOM.render()‘s first argument with a JSX <h1></h1>.

Using curly braces, set the <h1></h1>‘s inner text equal to theBestString. */}
        import React from 'react';
        import ReactDOM from 'react-dom';

        const theBestString = 'tralalalala i am da best';

        ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));


        {/* Variable Attributes in JSX - When writing JSX, it’s common to use variables to set attributes.*/}
        // Use a variable to set the `height` and `width` attributes:

        const sideLength = "200px";

        const panda = (
        <img
          src="images/panda.jpg"
          alt="panda"
          height={sideLength}
          width={sideLength} />
        );

        const pics = {
          panda: "http://bit.ly/1Tqltv5",
        owl: "http://bit.ly/1XGtkM3",
        owlCat: "http://bit.ly/1Upbczi"
};

        const panda = (
        <img
          src={pics.panda}
          alt="Lazy Panda" />
        );

        const owl = (
        <img
          src={pics.owl}
          alt="Unimpressed Owl" />
        );

        const owlCat = (
        <img
          src={pics.owlCat}
          alt="Ghastly Abomination" />
        ); 