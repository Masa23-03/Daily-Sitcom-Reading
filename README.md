# Daily Sitcom Reading

**Daily Sitcom Reading** is a JavaScript message generator that creates a random sitcom-style reading every time it runs.

Each message combines random ASCII art, a sitcom character, the show they are from, a personality trait, and a random action.

## Message Format

```text
[ASCII art]

Today you are [character name] from [show],
because you both [trait]
You should [action]
```

## Example Output

```text
✷ 　 　　 　 ·
 　 ˚ * .
 　 　　 *　　 * ⋆ 　 .
 · 　　 ⋆ 　　　 ˚ ˚ 　　 ✦

Today you are Michael Scott from The Office,
because you both act confident with absolutely no plan
You should make coffee before speaking to anyone
```


## Features

- Generates a new random message every time the program runs
- Uses sitcom characters from different TV shows
- Includes random ASCII art
- Combines multiple random pieces of data into one output
- Runs locally from the command line

## How It Works

The project stores the message data in separate collections:

- ASCII art
- Sitcom characters
- Personality traits
- Random actions

When the program runs, it randomly selects one item from each collection and combines them into one final message.

## Tech Stack

- JavaScript
- Node.js
- Git
- GitHub

## How to Run

Run the project from the command line:

```bash
node main.js
```
