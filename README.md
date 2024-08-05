

# Real-time Multiplayer Chess Game

This is a real-time multiplayer chess game built using Node.js, Express, Socket.IO, and the chess.js library. Players can connect to the game, take turns making moves, and the game state is synchronized in real-time between all connected clients.

## Features

- **Real-time updates**: Moves made by one player are instantly reflected on the other player's screen.
- **Player roles**: Players are assigned as white or black based on the order they connect.
- **Spectator mode**: If two players are already connected, additional connections will join as spectators.
- **Drag and drop**: Pieces can be moved using drag and drop, ensuring an intuitive and interactive experience.
- **Automatic turn management**: The game automatically manages turns, ensuring that players can only move when it's their turn.
- **Invalid move handling**: Invalid moves are detected and prevented, maintaining the integrity of the game rules.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express**: Web framework for Node.js, used to set up the server and handle routing.
- **Socket.IO**: Library for enabling real-time, bidirectional communication between web clients and servers.
- **chess.js**: JavaScript library for chess game rules and mechanics.
- **EJS**: Embedded JavaScript templating for generating HTML markup with plain JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/real-time-multiplayer-chess-game.git
   cd real-time-multiplayer-chess-game
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

## How to Play

1. **Open the game in two separate browser windows or on two different devices.**
2. **The first player to connect will be assigned the white pieces.**
3. **The second player to connect will be assigned the black pieces.**
4. **Players take turns moving their pieces by dragging and dropping them on the board.**
5. **The game state is updated in real-time, so both players see each other's moves instantly.**

## File Structure

```
real-time-multiplayer-chess-game/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── chessgame.js
├── views/
│   └── index.ejs
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

- **public/css/styles.css**: Contains the CSS styles for the game.
- **public/js/chessgame.js**: Contains the client-side JavaScript code for managing the chess game.
- **views/index.ejs**: EJS template for the game interface.
- **app.js**: Main server-side application file.

