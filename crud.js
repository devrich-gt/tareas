const app = new Vue({
	el: "#app",
	data: {
		titulo: "Tareas con VUE js",
		tareas: [],
		tareasCompletadas: [],
		nuevaTarea: "",
		nuevaDescripcionTarea: "",
		mensaje: ""
	},
	methods: {
		agregar() {
			if (this.nuevaTarea !== "") {
				this.tareas.push({
					nombre: this.nuevaTarea,
					descripcion: this.nuevaDescripcionTarea,
					estado: false
				});
				this.nuevaTarea = "";
				this.nuevaDescripcionTarea = "";
				this.mensaje = "";
				localStorage.setItem("tareas-vue", JSON.stringify(this.tareas));
			} else {
				this.mensaje = "NO RELLENO LOS CAMPOS";
			}
		},
		editarTarea(index) {
			this.tareas[index].estado = true;
			this.tareasCompletadas.push(this.tareas[index]);
			localStorage.setItem("tareas-vue", JSON.stringify(this.tareas));
			localStorage.setItem(
				"tareas-completadas-vue",
				JSON.stringify(this.tareasCompletadas)
			);
		},
		eliminarTarea(index) {
			this.tareas.splice(index, 1);
			localStorage.setItem("tareas-vue", JSON.stringify(this.tareas));
		}
	},
	created: function() {
		let datosDB = JSON.parse(localStorage.getItem("tareas-vue"));
		console.log(datosDB);
		if (datosDB === null) {
			this.tareas = [];
		} else {
			this.tareas = datosDB;
		}
		let datosC_DB = JSON.parse(
			localStorage.getItem("tareas-completadas-vue")
		);
		console.log(datosC_DB);
		if (datosC_DB === null) {
			this.tareasCompletadas = [];
		} else {
			this.tareasCompletadas = datosC_DB;
		}
	}
});
