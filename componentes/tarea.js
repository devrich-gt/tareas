Vue.component("tarea", {
	/*html*/
	template: `
		<div v-for="(tarea, index) of tareas" class="card  mb-5 rounded">
			<div
				class="d-flex justify-content-between align-items-center"
				:class="['card-header', tarea.estado ? 'border-success' : 'border-primary']"
			>
				<h5 class="text-capitalize">
					<strong>{{index + 1}}.</strong> {{tarea.nombre}}
				</h5>
				<a
					class="collapsed d-block"
					data-toggle="collapse"
					:href="'#collapse-collapsed'+index"
					aria-expanded="true"
					:aria-controls="'collapse-collapsed'+index"
					:id="'heading-collapsed'+index"
				>
					<i class="fa fa-chevron-down pull-right"></i>
				</a>
			</div>
			<div
				:id="'collapse-collapsed'+index"
				class="collapse"
				:aria-labelledby="'heading-collapsed'+index"
			>
				<div class="card-body">
					<p class="card-text">
						{{tarea.descripcion}}
					</p>
				</div>
			</div>
			<div class="card-footer">
				<button
					v-if="!tarea.estado"
					class="btn btn-success btn-sm"
					@click="editarTarea(index)"
				>
					Tarea Completada
					<i class="fa fa-check" aria-hidden="true"></i>
				</button>
				<button
					class="btn btn-danger btn-sm"
					@click="eliminarTarea(index)"
				>
					Eliminar
					<i class="fa fa-trash-o" aria-hidden="true"></i>
				</button>
			</div>
		</div>
    `,
	props: {
		tareas: Array,
	},
	data() {
		return {
			nombre: "luis",
		};
	},
	mounted() {
		this.$emit("nombreHijo", this.nombre);
	},
});
