# The Game of Life
## Description
The Game of Life is a web-based implementation of John Horton Conway's famous cellular automaton. This project, built using HTML, and JavaScript, simulates the behavior of cellular structures through a set of simple rules. Unlike traditional games, it requires no player input after the initial setup. This version features the unique twist of starting with a random initial state of cells, offering a new experience each time the game is reset and started.

## Key Features
* Random Initialization: Each time the game starts, the cells are placed in random positions, creating a unique setup for every game session.
* Start/Reset Functionality: Easily start or reset the game with dedicated buttons. Starting the game initiates the simulation with a new random configuration, while resetting stops the simulation and clears the grid.
* Automated Simulation: Watch the cells evolve automatically based on the initial random setup without further player interaction.
* Grid Layout: The game is displayed on a grid, representing the world in which the cells evolve.
## How It Works
* The grid consists of cells that can be either alive or dead.
* The simulation progresses in steps or generations.
* The rules of the game determine the state of each cell in the next generation, based on its current state and the number of live neighbors:
    * A live cell with two or three live neighbors survives to the next generation.
    * A dead cell with exactly three live neighbors becomes a live cell.
    * All other live cells die in the next generation, and all other dead cells stay dead.
## Technology
* HTML: Structures the web application, defining the grid where the simulation runs.
* JavaScript: Implements the game's logic, including the random initialization of cells, the rules of cell survival, and the reset functionality.
