import { Prenomina } from './prenomina.model';

export class Nomina {
    constructor(
        public codigo: number = 0,
        public year: number = 0,
        public periodo: number = 0,
        public numero: number = 0,
        public nomina: number = 0,
        public detNomina: any = null,
        public prenomina: Prenomina[] = null,
        public TotalDeduccion: number = 0,
        public TotalDeposito: number = 0,
        public TotalPercepcion: number = 0
    ) { }
}
