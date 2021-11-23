# 2.1. Playing Around

For this part we will need to use a REPL. A REPL, or read–eval–print loop, is a 
tool that allows us to write code in a specific language and see the effects
immediately.

You can find REPL online for many languages. In the case of Javascript you have
at least one installed already, your browser. And if you followed the pre-requisites 
part on the repo's README.md you should also have the command line REPL available.

If you want to use your browser, just go to any page (or none) and open the browser
console (`CMD+option+J` in MacOS, `Ctrl+Shift+J` in Windows or Linux). If you are
using Safari on a MAC, you will need to enable it first. But you can also install 
[Firefox](https://www.mozilla.org/firefox/new/) and be happy.

If you want to be a real hacker (:facepalm:) and use your terminal, just open the
app and type `node` (assuming you installed `node` already).

## Basic maths

Let's start by playing around with some maths. You can use the usual maths symbols
`+` `-` `/`, and to multiply `*`.

Let's try some examples:

```js
2 + 2
2 - 2
2 / 2
2 * 2
```

Nothing too difficult, right?

There are still some more operations you can try. For `power` it's `**` and to
calculate the square root... this is a bit less obvious, although it's similar in many 
languages `Math.sqrt`

```js
2 ** 3 // power
Math.sqrt(4) // square root
2 % 3 // module
```

## Operations with different types

The previous operations where the basic maths operations. They work almost the same in
most languages (at least the basic `+ - * /` ). This operations also work with different
data types. For example

```js
"Hello " + "World"
"Hello " - "World"
```

If you try those two you will see, maybe, some surprising results. The first line `"Hello " + "World"`
concatenates the two strings. Obviously you cannot sum two strings. The second line tho
gives a NaN (Not a Number). This is the common way of saying "Hey this operation isn't 
returning a number and I expected that. What happens if you divide by 0.?
