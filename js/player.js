class Player{

    constructor(gameScreen){
        this.gameScreen = gameScreen
        this.left = 250
        this.top = 800
        this.height = 80
        this.width = 30
        this.element = document.create('img')  
        this.element.style.position = 'absolute'

        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`

        this.gameScreen.appendChild('this.element')

    }

    move(){

        this.left +=1
        this.top -=1
        requestAnimationFrame(this.move)
    }
}