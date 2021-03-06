# BigData MYSELF!
BigData Myself (BgM) helps you to save your small actions/tasks/things on disk easily by providing a simple node cli interface.


## How?
BgM creates a folder within the user home called `bgm` and stores all the given logs in a `.txt` for each day.

## Dependencies
[nodeJS](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)

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

which generates the file `$HOME/bgm/2017-03-08.txt`

with the text `10:03 - Lunch - I ate an apple`

subsequent executions will append to the same file.

```
$ bgm -c "Games" -m "I played 15 min of wow"
```

```
10:03 - Lunch - I ate an apple
10:30 - Games - I played 15 min of wow
```
