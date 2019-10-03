import { NgModule } from '@angular/core';

// Pipes
import { CapitalizadoPipe } from './capitalizado.pipe';
import { ImagenPipe } from './imagen.pipe';
import { FechaPipe } from './fecha.pipe';

@NgModule({
    imports: [],
    declarations: [
        CapitalizadoPipe,
        ImagenPipe,
        FechaPipe
    ],
    exports: [
        CapitalizadoPipe,
        ImagenPipe,
        FechaPipe
    ]
})

export class PipesModule { }
