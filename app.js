const ask = () => {
    //leer pregunta
    const questionInput = document.getElementById("question");
    const answerInput = document.getElementById("answer");
    //recibir respuesta al preguntar a la bola mágica
    if(questionInput.value !==""){
    let answer = magicBall();
    //imprimir resultado
    answerInput.value = answer;
    }else{
        answerInput.value = "Pregunta algo!!";
    }
};

const magicBall = () =>{
    let randomNumber = Math.floor(Math.random()*8);
    let eightBall = '';

    switch (randomNumber){
    case 1 : eightBall = 'Es certero';
    break;
    case 2 : eightBall = 'Completamente cierto';
    break;
    case 3 : eightBall = 'Sin duda alguna';
    break;
    case 4 : eightBall = 'No tengo respuesta en estos momentos';
    break;
    case 5 : eightBall = 'Definitivamente no';
    break;
    case 6 : eightBall = 'Confía en el universo';
    break;
    case 7 : eightBall = 'Recuerda Dios le das sus peores batallas a sus mejores guerreros';
    break;
    case 8 : eightBall = 'Por qué lo dudas';
    break;
    }
    return eightBall;
};