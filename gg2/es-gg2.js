$(() => {
    var pU = new Promise((resolve, reject) => {
        if (localStorage.getItem('utenti')) {
            resolve(JSON.parse(localStorage.getItem('utenti')));
        } else {
            $.ajax({
                url: `https://jsonplaceholder.typicode.com/users`,
                method: 'get'
            }).done((users) => {
                resolve(users);
            });
        }
    });
    Promise.all([pU]).then((result) => {
        localStorage.setItem('utenti', JSON.stringify(result[0]));

        var table = $('#users').DataTable({
            data: result[0],
            columns: [
                {
                    title: 'ID',
                    data: 'id',
                    render: (data, row) => {
                        return `<a href="es-gg2-parte2.html?userId=${data}">${data}</a>`;
                    }
                },
                {
                    title: 'Nome',
                    data: 'name',
                },
                {
                    title: 'E-mail',
                    data: 'email',
                },
                {
                    title: 'Città',
                    data: 'address.city',
                },
            ],
        });

        $('#users tbody').on('click', 'tr', function () {
            $(this).toggleClass('selected');
            var id = table.rows(table.rows('.selected')[0]).data()[0].id;
            // console.log(id);
            location.href = `es-gg2-parte2.html?userId=${id}`;
        });
    });
})