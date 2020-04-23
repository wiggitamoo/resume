import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
// Firestarter App Modules
import {CoreModule} from './core/core.module';
import {UploadsModule} from './uploads/uploads.module';
import {UiModule} from './ui/ui.module';
import {NotesModule} from './notes/notes.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ChartsModule} from 'ng2-charts';
// AngularFire2 Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        UiModule,
        NotesModule,
        UploadsModule,
        ChartsModule,
        AngularFireModule.initializeApp(environment.firebase, 'andre-profile'),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        AngularFireFunctionsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        BrowserAnimationsModule
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
