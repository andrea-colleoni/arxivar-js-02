$(() => {
    var p1 = new Promise((resolve, reject) => {
        $.ajax({
            url: 'js-09.html',
            method: 'get',
            // async: false,
        })
        .done((r1) => {
            console.log('r1 =>', r1);
            resolve(r1);
        });
    });
    var p2 = new Promise((resolve, reject) => {
        $.ajax({
            url: 'js-08.html',
            method: 'get',
        })
        .done((r2) => {
            console.log('r2 => ', r2);
            resolve(r2);
        });
    });

    Promise.all([p1, p2]).then((arrayOfResponses) => {
        console.log('promise all => ', arrayOfResponses);
    });

    console.log('finito script');

});