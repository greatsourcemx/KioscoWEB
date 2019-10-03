
export class Prestamos {
    constructor(
        public fecha: Date = new Date(),
        public tipo: string = '',
        public monto: number = 0,
        public abonado: number = 0,
        public saldo: number = 0,
        public observacion: string = '',
        public descuento: string = '',
        public total: number = 0
    ) { }
}
