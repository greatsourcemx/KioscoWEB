
export class Perfil {
    constructor(
        public codigo: number = 0,
        public nombre: string = '',
        public genero: string = '',
        public rfc: string = '',
        public nss: string = '',
        public curp: string = '',
        public entidadNac: string = '',
        public fechaNacimiento: Date = new Date(),
        public fechaAnt: Date = new Date(),
        public fechaIngreso: Date = new Date(),
        public puesto: string = '',
        public turno: string = '',
        public salario: number = 0
    ) { }
}
