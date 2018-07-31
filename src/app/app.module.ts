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
// AngularFire2 Modules
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireFunctionsModule} from 'angularfire2/functions';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ChartsModule} from 'ng2-charts';


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
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
