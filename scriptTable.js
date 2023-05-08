 
        const dt = new DataTable('#tabla01', {
            showCheckboxes: true,
            showHeaderButtons: true, 
            showSearch: true,
            numberOfEntries: 5,
            headerButtons: [
                {
                    id: 'bNuevo',
                    text: 'Nuevo', 
                    click: function(){
                        console.log(dt.getSelected());
                    }
                
                },
                {
                    id: 'bEliminar',
                    text: 'Eliminar', 
                    click: function(){
                        console.log('funcion eliminar');
                    }
                
                }
            ]
        });
        dt.createFromTable();