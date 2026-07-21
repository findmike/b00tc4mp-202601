const promesa = new Promise((resolve, reject) => {

    resolve('Todo ha salido bien');

    // reject('Todo ha salido mal');

});

promesa

    .then((resultado) => {
        console.log(resultado);
    })

    .catch((error) => {
        console.error(error);
    });
