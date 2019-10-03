
export class Principal {
    constructor(
        public peNumero: number = 0,
        public fecIngreso: Date = new Date(),
        public fecInicio: Date = new Date(),
        public fecFinal: Date = new Date(),
        public nombre: string = '',
        public neto: number = 0,
        public vales: number = 0,
        public ahorro: number = 0,
        public prestamo: number = 0
    ) { }
}
