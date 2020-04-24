$(() => {
    var userId = +location.search.substring(location.search.indexOf('userId=') + 7);
    var pP = new Promise((resolve, reject) => {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
            method: 'get'
        })
        .done((posts) => {
            resolve(posts);
        });
    });
    Promise.all([pP]).then((result) => {
        $('#posts').DataTable({
            data: result[0],
            columns: [
                {
                    title: 'ID',
                    data: 'id',
                },
                {
                    title: 'Utente',
                    data: 'userId',
                },
                {
                    title: 'Titolo',
                    data: 'title',
                },
                {
                    title: 'Contenuto',
                    data: 'body',
                },
            ],
        });        
    });
})