$(() => {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'get'
    })
    .done((contenuto) => {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/comments',
            method: 'get'
        })
        .done((contenuto) => {
            console.log('tutto bene', contenuto);
        })
        .fail((err) => {
            console.log('oopss', err);
        })
        .always(() => {
            console.log('finito ajax');
        });
    })
    .fail((err) => {
        console.log('oopss', err);
    })
    .always(() => {
        console.log('finito ajax');
    });

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'get'
    })
    .done((contenuto) => {
        console.log('tutto bene', contenuto);
    })
    .fail((err) => {
        console.log('oopss', err);
    })
    .always(() => {
        console.log('finito ajax');
    });

    /* ... */

    console.log('finito script');
});