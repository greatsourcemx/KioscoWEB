
export class Comedor {
    constructor(
        public Fecha: Date = new Date(),
        public Hora: string = '',
        public Tipo: string = '',
        public Consumos: number = 0,
        public Reloj: string = '',
        public Periodo: string = '',
        public Dia: string = ''
    ) { }
}
