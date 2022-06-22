(() => {

    interface Client {
        name: string;
        age: number;
        address?: Address; //si yo defino el objeto como opcional pero pongo al menos una propiedad, entonces debo poner todas
        getFullAddress ( ): string;
        //una clase implementaría este método, pero una interfaz no, no tiene la lógica para resolverlo
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Albano',
        age: 31,
        address: {
            id: 1,
            zip: '5016',
            city: 'Córdoba'
        },
        getFullAddress() {
            return this.client.address.city
        }
    }

})();