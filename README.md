# AI-Assisted Web Development Course

This course covers basic web development. Tasks might seem complicated, but with assistance from AI tools like ChatGPT or Copilot, you can complete them without needing to understand every detail of the solution. The course is recommended for children aged 10-15 years. You should allocate 2-3 hours for completion.

Below is a step-by-step guide for an AI-assisted coding course in web development.

## 1. Invite Participants

Participants will need:

- A simple computer.
- A text editor.
- Access to ChatGPT or a similar AI assistant.

It is recommended that participants install VS Code, Google Chrome, and a paid version of ChatGPT (the free version has a limited number of prompts, potentially hindering completion).

## 2. Preparation

This step can be done collectively before the course starts or participants can be instructed to do it beforehand.

Course files should be downloaded from https://github.com/iorg1/kodekurs/download/kodekurs.zip and extracted.

It is important not to open the contents of the zip file directly, as this may cause references to CSS and JavaScript files to malfunction.

## 3. Conducting the Course

The course is divided into the following chapters:

1. Introduction to HTML and CSS.
2. Introduction to AI and ChatGPT.
3. Task 1 - Being discovered on a deserted island.
4. Task 2 - Creating a simple game.

### Introduction to HTML and CSS

The purpose of this section is to become familiar with HTML and tags. By opening the file `html/index.html`, you will see a text area for entering HTML and another for CSS.

_Task:_ Enter `<h1>Hello World</h1>` and click "Show result."

Explain the concept of tags, their types, balanced structures (similar to parentheses in mathematics), and relationships such as parents, siblings, and children.

_Task:_ Change `h1` to `h2` and add HTML:

```
<p>My name is...</p>
<p>I like...</p>
<ul>
  <li>Candy</li>
  <li>Fish</li>
  <li>Broccoli</li>
</ul>
```

What happens if you replace `<ul>` with `<ol>`?

_Task:_ Add CSS:

```
h2 { color: red; }
```

Explain how selectors work and how colors can be defined. In VS Code, a color picker will appear, allowing experimentation.

_Task:_ Add CSS:

```
p { background-color: yellow; }
li { text-align: center; }
```

_Task:_ Modify HTML:

```
<p>My name is <span>[name]</span></p>
```

Add CSS:

```
span { background-color: blue; }
```

### Introduction to AI and ChatGPT

Open [ChatGPT](https://chatgpt.com/) and try typing something.

```
Can you give me the ten most important HTML tags with explanations of how they're used?
```

```
I have an h2 tag. Can you give me CSS to make the text change color and pulse in size?
```

Enter the result into the CSS field and observe the outcome.

Allow participants to explore various prompts while you answer questions or suggest exploration topics.

### Task 1 - How to Get Discovered if Stranded on a Deserted Island?

This task allows creative solutions. Solutions can actually be found by uploading the entire content of `Task1/index.html` to ChatGPT.

Part one can be solved by changing colors of `.sky`, `.celestial-body`, and possibly `.forest`, `.beach`, and `.ocean`.

Part two can be solved in several ways, such as:

- Writing "S.O.S." in the sand on the beach.
- Creating a fire with visible smoke.
- Adding a boat or raft to the ocean for escape.

Use ChatGPT to implement desired solutions or see what ChatGPT suggests.

### Task 2 - Creating a Simple Game

Task two starts with an area containing a round object. Clicking it will display an alert message.

Files `spill.css` and `spill.js` should be loaded.

By uploading these three files to ChatGPT, assistance can be received to:

- Make the ball move and bounce off the edges.
- Count each click on the ball.
- Count each miss.

Participants can decide what they want to explore further.
