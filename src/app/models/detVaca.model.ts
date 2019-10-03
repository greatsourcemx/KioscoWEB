
export class DetalleVacaciones {
    constructor(
        public fecha: Date = new Date(),
        public tipo: string = '',
        public aniversario: string = '',
        public diaGozados: number = 0,
        public saldoGozados: number = 0,
        public observaciones: string = ''
    ) { }
}
