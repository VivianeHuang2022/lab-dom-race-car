class Game {
    // code to be added
    constructor(){
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('gameßscreen')
        this.gameEndScreen = document.getElementById('game-end')
        this.height = 600
        this.width = 500
        this.obstacle = []
        this.player = []
        this.score = 0
    }

    start(){
        this.startScreen.style.display = 'none'
        this.gameScreen.style.display = 'block'
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        this.player = new Player(this.gameScreen)
        this.gameLoop()
    }

    gameLoop(){

        this.player.move()
        requestAnimationFrame(gameLoop)
    }




}