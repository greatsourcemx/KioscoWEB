
export class Usuario {
    constructor(
        public correo: string = '',
        public nombre: string = '',
        public password: string = '',
        public nuevoPassword: string = '',
        public codigo: number = 0,
        public token: string = '',
        public mes: number = 0,
        public dia: number = 0,
        public year: number = 0,
        public nss: string = '',
        public rfc: string = '',
        public sexo: string = '',
        public pin: string = ''
    ) { }
}
