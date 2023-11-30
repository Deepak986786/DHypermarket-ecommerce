import { MatNativeDateModule } from '@angular/material/core';
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS} from "@angular/material-moment-adapter"





@NgModule({
    imports: [MatNativeDateModule],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatMenuModule,
        MatSelectModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [
        {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
      ]
})
export class MaterialComponentModule { }