# 1. Context

In this introduction course we will use Javascript as programming language.
There might be other languages that are easier to start with but JS is the language
of the web, it also has a huge community behind it (quite important when starting as
well) and also is the main programming language I use for work and personal projects.

But first let's talk about what's programming.

> Programming is the implementation of logic to facilitate specified computing operations and functionality.

Quite formal, right?

Well, some people say that programming is like following a cooking recipe.
You have some ingredients, you follow certain steps, and you get an outcome.

> Programs are very similar to recipes. They both give instructions that, if followed,
> achieve something. There is a difference between them, though, and it has to do with 
> language. When chefs invent recipes they write them out in human languages like English.
> Programmers write programs in special languages. Why's that? It's all about being precise
> enough to be sure exactly the same thing happens every time. Recipes are often ambiguous
> which is why when I follow one it sometimes goes wrong. Programs tie down every last detail.

A program might be non-ambiguous for the machine, but that's not the case (most of the time)
for the person between the chair and the keyboard. 

For a program to go from the person head to work in the device some things have to happen.
The first of those is the person writing down in the instructions. For that we use programming
languages and some of them are more like a recipe, others are more like abstract maths, others
literally like a complete mess.

You can see a "complete" list of paradigms and languages [here](https://en.wikipedia.org/wiki/List_of_programming_languages_by_type).

In the case of JavaScript, do not confuse with Java, is a multi-paradigm programming language that includes event-driven, functional, object-oriented, procedural, and prototypal programming.

Example of imperative (procedural) programming:

```py
def fibonacci_of(n):
    previous, fib_number = 0, 1
    for _ in range(2, n + 1):
        previous, fib_number = fib_number, previous + fib_number

    return fib_number
```

Example of functional (declarative) programming:

```hs
fib 0 = 0
fib 1 = 1
fib n = fib (n-1) + fib (n-2)
```

There are some other differences which are less noticeable when writing a program.  

## Compiled vs scripting

A compiled language is one in which programs written in human readable language need to be
translated (compiled) into machine language readable language (binary). The output files 
are dependent of the machine for which it was compiled. Those are what we call executable 
(.exe in windows) or binary files.

A scripting language doesn't need to be compiled to be run (or executed). Instead a program
called virtual machine or engine is already installed in the target device. An example of 
engine is what Firefox (or any other browsers) to run javascript code on.
So you have a Javascript engine already installed in your computer or phone.

We say, then that scripting languages are machine independent or that they are portable. 
You can send a file to your friend, and they can run it easily. They are normally simpler as well.
But they are less performant than compiled languages and those can typically more optimized
for the machine they are running. 

Nowadays, tho, I would say this performance difference is negligible for most of the uses.

Famous scripting languages:
- Python
- Javascript
- Ruby
- PHP
- etc

Famous compiled languages
- C
- C++
- Java
- Rust
- etc


## Next step

After this little introduction let's get in to it.

[Next Chapter](../2.LetsCode)
