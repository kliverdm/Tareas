
export class TodoList {

    constructor( todo ) {
       
        this.cargarLocalStorange();
    }

    nuevoTodo( todo ) {
        this.todo.push(todo);
        this.guardarLocarStorange();
    }

    eliminarTodo( id ) {
        this.todo = this.todo.filter( todo => todo.id != id);
        this.guardarLocarStorange();
    }

    marcarCompletado( id ) {

        for( const todo of this.todo){

            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocarStorange();
                break;
            }
        }

    }

    elimarCompletado() {

        this.todo = this.todo.filter( todo => !todo.completado);
        this.guardarLocarStorange();

    }

    guardarLocarStorange() {

        localStorage.setItem('todo', JSON.stringify( this.todo ));

    }

    cargarLocalStorange() {
       
        this.todo = (localStorage.getItem('todo')) ? this.todo = JSON.parse(localStorage.getItem('todo')) : [];
    }
}