import { DetalleVacaciones } from './detVaca.model';

export class Vacaciones {
    constructor(
        public fecIngreso: Date = null,
        public fecAnt: Date = null,
        public derGozo: number = 0,
        public gozados: number = 0,
        public saldoGozo: number = 0,
        public derPago: number = 0,
        public pagados: number = 0,
        public saldoPagados: number = 0,
        public derPrima: number = 0,
        public saldoPrima: number = 0,
        public detalle: DetalleVacaciones[] = []
    ) { }
}
