const socket = io();
const chess = new Chess();
const boardElement = document.querySelector(".chessboard");
let playerRole = null;

const renderBoard = () => {
    boardElement.innerHTML = ""; // Clear the board before rendering

    const board = chess.board();
    const isBlack = playerRole === 'b';

    for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
        for (let colIndex = 0; colIndex < 8; colIndex++) {
            // Adjust row and col indices for black player
            const actualRowIndex = isBlack ? 7 - rowIndex : rowIndex;
            const actualColIndex = isBlack ? 7 - colIndex : colIndex;
            const square = board[actualRowIndex][actualColIndex];

            const squareElement = document.createElement("div");
            squareElement.classList.add(
                "square",
                (rowIndex + colIndex) % 2 === 0 ? "light" : "dark"
            );

            if (square) {
                const pieceElement = document.createElement("div");
                pieceElement.classList.add("piece", square.color === "w" ? "white" : "black");
                pieceElement.innerText = getPieceUnicode(square);

                if (square.color === playerRole) {
                    pieceElement.draggable = true;
                    pieceElement.addEventListener("dragstart", (e) => {
                        e.dataTransfer.setData("text/plain", JSON.stringify({ row: actualRowIndex, col: actualColIndex }));
                    });
                }

                squareElement.appendChild(pieceElement);
            }

            squareElement.addEventListener("dragover", (e) => e.preventDefault());

            squareElement.addEventListener("drop", (e) => {
                e.preventDefault();
                const source = JSON.parse(e.dataTransfer.getData("text/plain"));
                const target = { row: actualRowIndex, col: actualColIndex };
                handleMove(source, target);
            });

            boardElement.appendChild(squareElement);
        }
    }
};

const handleMove = (source, target) => {
    const move = {
        from: `${String.fromCharCode(97 + source.col)}${8 - source.row}`,
        to: `${String.fromCharCode(97 + target.col)}${8 - target.row}`,
        promotion: 'q'
    };

    if (chess.move(move)) {
        renderBoard();
        socket.emit('move', move);
    } else {
        console.log("Invalid move", move);
    }
};

const getPieceUnicode = (piece) => {
    const unicodePieces = {
        K: "♔", Q: "♕", R: "♖", B: "♗", N: "♘", P: "♙",
        k: "♚", q: "♛", r: "♜", b: "♝", n: "♞", p: "♟",
    };
    return piece.color === "w" ? unicodePieces[piece.type.toUpperCase()] : unicodePieces[piece.type.toLowerCase()];
};

socket.on('move', (move) => {
    chess.move(move);
    renderBoard();
});

socket.on('playerRole', (role) => {
    playerRole = role;
    renderBoard();
});

socket.on('boardState', (fen) => {
    chess.load(fen);
    renderBoard();
});

renderBoard();
