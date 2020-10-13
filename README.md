# How To Regex

Regex Web Talk.

## What is Regex/Regular Experssions

> ~~Something you learn in 40 minutes and forget in 20...~~

> are patterns used to match character combinations in strings

In simple words, regular expressions are expressions or wildcards that allow us to perform advanced searches inside a string.


## When can we use Regex?


### Fields validation

### Extracting specific portions from a given text

i.e. Creating Web Scraper, scripts to search code bases, reading a text file and substracting some important information.

### Searching/Replacing code|data|payloads

i.e. Scripts to refactor code bases, advanced searching in VS Code and other editors, bulk replacing elements from large JSON payloads or HTML code.

## How to create a Regex in JavaScript

### Literal notation

```js
/\w+/g
```

### Constructor's function

```js
new RegExp('\\w+','g')
```

## Using/evaluating a regular expression

- exec()	Executes a search for a match in a string. It returns an array of information or null on a mismatch.

- test()	Tests for a match in a string. It returns true or false.

- match()	Returns an array containing all of the matches, including capturing groups, or null if no match is found.

- search()	Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

- replace()
- replaceAll()
- split()]


## Special Characters in regular expressions


* Character classes

    - . - Matches any single character
    - \d - Digit [0-9]
    - \D - Not a digit
    - \w - Any alphanumeric
    - \W - Any character that's not a word
    - \s - White space
    - \n - Line break
    - \S - Negation for a white space
    - \0 - Null character (Do not follow with another digit)

* Assertions

    - ^ - Matches the beginning
    - $ - Matches the end
    - x(?=y) - Look ahead
    - x(?!y) - Negative look ahead
    - (?<=y)x - Look behind
    - (?<!y)x - Negative  look behind

* Groups & Ranges

    - X|Y - An OR operator
    - [abcdef] - Any of the listed characters
    - [a-f] - Same but indicated as a range
    - [^a-f] - Negation for a set
    - (x) - Capturing group (Has a performance penalty)
    - (?:x) - Non-capturing group

* Quantifiers

    - X<sup>*</sup> - O or more
    - X<sup>+</sup> - 1 or more
    - X? - 0 or 1 (Used also for lazy/non-greedy matching)
    - X{n} - N times
    - X{n,m} - From n to m times
    - X{n,} - At least n times


## Compatibility

Pretty much all the main browsers support regex with its main features, flags and characters, but there are still some advanced/newer features are required specific versions of the runtime environment to work, some of them are:

- Named capture groups / Unicode property escapes:
    - NodeJS >10
    - Chrome 64, Edge 79, Safari 11.1
    - No IE Support

- Look Behind Assertions: 
    - NodeJS >8.10.0
    - Chrome 62, Edge 79
    - No IE/Safari Support

- dotAll flag:
    - NodeJS >8.10.0
    - Chrome 64, Edge 79, Safari 12
    - No IE Support

### Workarounds 

Using any third-party library like XRegExp (Runtime) or Regenerate (Buildtime)


## Tips and Gotcha's

**[^]** - Set negation.

**[.]** - Dot inside a set literally means a dot.

**[-]** - Dash inside a set is a special character so it has to be escaped.

**()** - Capturing groups have a performance penalty, be careful when using them and take advantage of non-capturing groups.

**/REGEX/s** - ES2018 added the s "dotAll" flag, which allows the dot to also match line terminators.


## Extensions/Resources

Regexp Explain (VS Code Extension)

Regex Previewer (VS Code Extension)

Regex Crossword: [https://regexcrossword.com/]

Learn Regular Expressions in 20 minutes: [https://www.youtube.com/watch?v=rhzKDrUiJVk]


