import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonalAddComponent } from "./personal/personal-add/personal-add.component";
import { PersonalAdminComponent } from "./personal/personal-admin/personal-admin.component";
import { PersonalEditComponent } from "./personal/personal-edit/personal-edit.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { FormsModule } from "@angular/forms";
import { CargosAdminComponent } from "./cargos/cargos-admin/cargos-admin.component";
import { CargosAddComponent } from "./cargos/cargos-add/cargos-add.component";
import { CargosEditComponent } from "./cargos/cargos-edit/cargos-edit.component";
import { SaludAdminComponent } from "./salud/salud-admin/salud-admin.component";
import { SaludAddComponent } from "./salud/salud-add/salud-add.component";
import { SaludEditComponent } from "./salud/salud-edit/salud-edit.component";
import { PensionAdminComponent } from "./pension/pension-admin/pension-admin.component";
import { PensionAddComponent } from "./pension/pension-add/pension-add.component";
import { PensionEditComponent } from "./pension/pension-edit/pension-edit.component";

const rutas:Routes = [
    { path: '', component: DashboardComponent},
    { path: 'personal', component: PersonalAdminComponent},
    { path: 'personal/add', component: PersonalAddComponent},
    { path: 'personal/edit', component: PersonalEditComponent},

    { path: '', component: DashboardComponent},
    { path: 'cargos', component: CargosAdminComponent},
    { path: 'cargos/add', component: CargosAddComponent},
    { path: 'cargos/edit', component: CargosEditComponent},

    { path: '', component: DashboardComponent},
    { path: 'Salud', component: SaludAdminComponent},
    { path: 'Salud/add', component: SaludAddComponent},
    { path: 'Salud/edit', component: SaludEditComponent},
    
    { path: '', component: DashboardComponent},
    { path: 'pension', component: PensionAdminComponent},
    { path: 'pension/add', component: PensionAddComponent},
    { path: 'pension/edit', component: PensionEditComponent},

  ]
   
  
@NgModule({
    declarations: [
      DashboardComponent,
      PersonalAdminComponent,
      PersonalAddComponent,
      PersonalEditComponent,
      CargosAdminComponent,
      CargosAddComponent,
      CargosEditComponent,
      SaludAdminComponent,
      SaludAddComponent,
      SaludEditComponent,
      PensionAdminComponent,
      PensionAddComponent,
      PensionEditComponent,

    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(rutas),
    ],
    exports:[RouterModule]
})
export class AppViewModule { }
