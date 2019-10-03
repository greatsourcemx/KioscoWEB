
export class Prenomina {
    constructor(
        public Fecha: Date = new Date(),
        public Dia: string = '',
        public Mes: number = 0,
        public Year: number = 0,
        public Entrada: string = '',
        public Salida: string = '',
        public Horas: number = 0,
        public HoraExtras: number = 0,
        public preJorDia: number = 0,
        public preJorSem: number = 0,
        public preEstDia: number = 0,
        public preElement: string = ''
    ) { }
}
