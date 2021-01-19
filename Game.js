class Game{
    constructor(){

    }
    read(){
        var gameState = database.ref('gameSate');
        gameState.on("value",function (data){
            state = data.val();;
        });
    }
    update(x){
        database.ref('/').update({ 'gameState' : x});
    }

    start(){
        
    }
}