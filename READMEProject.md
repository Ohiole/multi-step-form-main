# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot
![Screenshot (180)](https://github.com/Ohiole/multi-step-form-main/assets/67792211/557db1c5-c2cf-4ebf-9045-0e71d4b3b227)


### Links

- Solution URL:(https://github.com/Ohiole/multi-step-form-main/tree/main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- SASS

### What I learned

I learned about the power of the useState hook in this project. And i learnt how to toggle some variables using the not operator.
I also learnt how to create a toggle button.

```jsx
 <div className="toggleBtn">
              <p className={toggleBtn ? '' :"active"}>Monthly</p>
              <div className="switch">
                <input type="checkbox" className="toggleBtnCheck" onClick={changeToyear}/>
                <span className="slider"></span>
              </div>
              <p className={toggleBtn ? 'active' :""}>Yearly</p>
            </div>
```
```css
.switch {
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: hsl(213, 96%, 18%);
  position: relative;
  border-radius: 25px;
  cursor: pointer;
}
.switch input {
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
}
.slider {
  display: block;
  cursor: pointer;
}
.slider:before {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: hsl(0, 0%, 100%);
  position: absolute;
  top: 2px;
  left: 3px;
  transition: all 0.25s ease-in-out;
}
.switch input:checked + .slider:before {
  transform: translateX(18px);
}
```
```js
 const changeToyear = () => {
    setToggleBtn(!toggleBtn);
  }
```

### Continued development

I want to perfect my use of the useContext hook, as i was not able to use it in this project to pass props.

### Useful resources

- [YouTube - Brian Design](https://www.youtube.com/watch?v=I2UBjN5ER4s&t=3s) - This video helped me with the toggling of my boolean value from false to true.

## Author
- Frontend Mentor - [@Ohiole](https://www.frontendmentor.io/profile/Ohiole)
- Twitter - [@__ojoo](https://www.twitter.com/__ojoo)

## Acknowledgments

Acknowledgements to Brian Design on youtube for his Make a website tutorial on React

