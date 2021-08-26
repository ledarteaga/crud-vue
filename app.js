const app = new Vue ({
    el: '#app',

    data: {

    actividades: [ ],

    nuevaActividad: '',
    
    },

    methods: {
        
        agregar: function () {
            this.actividades.push({nombre: this.nuevaActividad, estado: false});
            this.nuevaActividad = '';
            localStorage.setItem('actividades-vue', JSON.stringify(this.actividades))
        },

        cambiarEstado: function (actividad) {
            if (actividad.estado == false) {
                actividad.estado = true
            }
        },

        eliminar: function (index) {
            this.actividades.splice(index, 1);
            localStorage.setItem('actividades-vue', JSON.stringify(this.actividades))

        }
    },

    created: function () {

        let actividadesDB = JSON.parse(localStorage.getItem('actividades-vue'));
        if (actividadesDB == null) {
            this.actividades = []
        } else {
            this.actividades = actividadesDB
        }

    }
})