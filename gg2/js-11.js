$(() => {
    var pU = new Promise((resolve, reject) => {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/users`,
            method: 'get'
        })
        .done((users) => {
            resolve(users);
        });
    });
    var pP = new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'get'
        })
        .done((posts) => {
            resolve(posts);
        });
    });
    Promise.all([pU, pP]).then((result) => {
        result[1].forEach((post) => {
            post.user = result[0].find((user) => user.id === post.userId);
        });

        $('#posts').DataTable({
            data: result[1],
            columns: [
                {
                    title: 'ID',
                    data: 'id',
                },
                {
                    title: 'Utente',
                    data: 'user.name',
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