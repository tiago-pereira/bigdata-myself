# BigData MYSELF!

## What's BigData Myself?
BigData Myself (BgM) helps you to save your small actions/tasks/things on disk easily by providing a simple node cli interface.



## How?
BgM creates a folder within the user home called `bgm` and stores all the given logs in a `.txt` for each day.

## Dependencies
[nodeJS](https://nodejs.org/en/)
[npm](https://www.npmjs.com/)

## Installation
`npm install -g bigdata-myself`

## Usage

BgM currently works with only two options:
```
-c, --category <category>  Category of the log
-m, --message <message>    Log message
```

```
$ bgm -c "Lunch" -m "I ate an apple"
```

which generates the following file
`$HOME/bgm/2017-03-08.txt`

with the text 
`10:03 - Lunch - I ate an apple'

