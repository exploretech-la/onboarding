# Website Onboarding

For now it’s just notes for Jared, Kunal and Emily :-)

Table of Contents

- [HTML](#html)
- [CSS](#css)
  - [Classes](#classes)
- [Javascript](#javascript)
- [React](#react)

---

When looking at a website we can ask three questions: how do things appear on the screen, how can we style them, and how can we interact with it? **Web development** consists of three languages that answer these questions precisely: **HTML** allows us to decide what goes on the page, **CSS** allows us to decide how it looks, and **Javascript** allows us to add functionality to them. These are the building blocks of any website and anything you learn stems about web development relates back in some way to one of these three. For example, the exploretech website is built using a Javascript framework called **React** which essentially allows us to more easily manipulate HTML elements using Javascript. Let’s take a deeper look into what each of these do…

# HTML

HTML is the skeleton of any website. It stands for **H**yper **T**ext **M**arkup **L**anguage, which means “text with hyper links” and “a language that marks the format of a page”. It consists of a series of elements or **tags** which we can code in which tells the browser how to display our content.

In code, a tag is indicated by the '_element name_' wrapped by less than and greater than signs. For example, a division tag, or '_div_', might look like this in code: `<div></div>`. Now let's make a simple webpage. Create a file called `index.html` and copy this:

```
<!DOCTYPE html>
<html>
<head>
    <title>Web Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>
```

Congrats! You just built your first website! Double click the file to open it (or if you're using VSCode then right click and select 'Open With Live Server').

Here we used a basic header tag and a paragraph text tag. There are countless other tags in HTML and its not worth memorizing all of them. Instead, I would use Google or refer to this [master list](https://www.w3schools.com/TAGS/default.ASP) if you needed to use something.

Also, if you wanna learn more about what the heck is actually going on, feel free to refer to our very own web development workshop slides, sponsored by exploretech.la [here](https://docs.google.com/presentation/d/1QB4seIW1s97Aqrf-Wn8n9UQq6YNM3opvqzt3ZUZtGOM/edit#slide=id.g647368f17e_0_7) >:)

One of the most important properties of HTML tags is nesting elements inside each other. This is kinda difficult to explain over text, so defer to whoever the Webmaster is at the time to learn more, its kinda important >>:))

# CSS

CSS is the clothes of any website. It stands for **C**ascading **S**tyle **S**heets which means "styles that cascades/pours down to others". It allows us to transform basic looking text into beautiful websites just like [exploretech.la](https://www.exploretech.la/). A CSS file is simply a collection of dictionaries with different _key_/_value_ pairs. For example, if we wanted to give our `<h1>` tag red font, then in the same directory we can create a separate `styles.css` file we would write we would reference the `color` key:

```
h1 {
    color: red;
}
```

Now EVERY `<h1>` will have red font. We can also add on multiple styling in one file. So if we also wanted to make the `<body>` of our page a nice blue and every `<p>` tag purple, then we would write:

```
h1 {
    color: red;
}

body {
    background-color: powderblue;
}

p {
    color: purple;
}
```

The final step is to connect our `index.html` and `styles.css` together. Inside the `<head>` of our HTML file we'll insert a `<link>` tag like so:

```
<!DOCTYPE html>
<html>
<head>
    <title>Web Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>
```

Congrats again! Now your website has a little bit more style!

Once again, there are many different CSS attributes we can utilize to make our websites pretty, so I would recommend using Google to look them up.

## Classes

What if we wanted to style BOTH `<h1>` tags and `<p>` tags? There are multiple ways we can do this, but the easiest way is usng **classes**. Classes is an **attribute** we can pass in to an HTML tag so that we can group them together. In our situation, let's group our elements and name it "_bigFont_". In `index.html` we would add a class attribute to both tags:

```
<!DOCTYPE html>
<html>
<head>
    <title>Web Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 class="bigFont">My First Heading</h1>
    <p class="bigFont">My first paragraph.</p>
</body>
</html>
```

**Side note:** we already used attributes with the `<link>` tag in the head!

Now, in our `styles.css` file we can add one more dictionary:

```
h1 {
    color: red;
}

body {
    background-color: powderblue;
}

p {
    color: purple;
}

.bigFont {
    font-size: 300%;
}
```

Notice that in order to reference a class group inside a CSS file, we must add a period before the word "_bigFont_".

There is much more we can do with classes, but this is its most basic functionality you should know.

# Javascript

I'm gonna assume that if you've made it this far then you've taken at least either PIC 10A or CS 31. So when I say Javascript is just an easier version of C++ then I hope there's a sigh of relief. Feel free to refer to [this cheatsheet](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet) to learn the syntax and ask the current webmaster for any questions. Now how does this relate to web development?

Javascript are all the pockets and zippers of our outfit. It gives functionality to any website. Have you every clicked a button? Congrats, you ran someone elses Javascript code. Now let's hook our basic webpage example. Let's create one more file in our directory called `script.js` with one line of code:

```
console.log("Hello world!");
```

In `index.html` let's add one more tag to our head:

```
<!DOCTYPE html>
<html>
<head>
    <title>Web Page Title</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js">
</head>
<body>
    <h1 class="bigFont">My First Heading</h1>
    <p class="bigFont">My first paragraph.</p>
</body>
</html>
```

Navigate to your website in the browser and then inspect it (right click -> inspect). Navigate to the console and you should see a fancy "Hello world!" message! You might have to refresh the page.

Congrats! You wrote your first line of working Javascript! But we can do better. Let's add a button to our `index.html` file.

```
<!DOCTYPE html>
<html>
<head>
    <title>Web Page Title</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" async></script>
</head>
<body>
    <h1 class="bigFont">My First Heading</h1>
    <p class="bigFont">My first paragraph.</p>
    <button id="demo">Click me!</button>
</body>
</html>
```

And to our `script.js`:

```
document.getElementById("demo").addEventListener("click", foo);

const foo = () => {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
```

Refresh your webpage and try out your new website! Now here's a snazzy brain teaser: do you think you can make so if you click the button it can go back to the previous text? Sus.

Anyways... just like CSS, there are multiple ways we could have added this click action. But once again, now we can defer to Google. As we can continue, we will learn about different ways on how to manipulate the **DOM (Document Object Model)** objects within our webpage. Feel free to keep messing around, but once you feel comfortable with vanilla Javascript, let's jump to the big guns.

# React

Ohhhhh boi we're here... If Javascript is our pockets and zippers, then React is like a sexy chain necklace that helps tie the entire outfit together. ;)

Need to write this up...
