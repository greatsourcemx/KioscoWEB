
export class Periodos {
    constructor(
        public year: number = 0,
        public numero: number = 0,
        public mes: number = 0,
        public semana: number = 0,
        public descripcion: string = '',
        public fecInicio: Date = new Date(),
        public fecFinal: Date = new Date(),
        public timbrado: string = ''
    ) { }
}
