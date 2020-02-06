export class Ahorro {

    constructor(
        public fecha: Date = new Date(),
        public total: number = 0,
        public cargos: number = 0,
        public saldo: number = 0,
        public formula: string = ''
    ) {}

    
}
