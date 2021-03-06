import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class EducationService {

    educationCollection: AngularFirestoreCollection<any>;
    educationDocument: AngularFirestoreDocument<any>;

    constructor(private afs: AngularFirestore) {
        this.educationCollection = this.afs.collection('educations', (ref) => ref.orderBy('startDate', 'desc').limit(5));
    }

    getData(): Observable<any[]> {
        // ['added', 'modified', 'removed']
        return this.educationCollection.snapshotChanges().pipe(
            map((actions) => {
                return actions.map((a) => {
                    const data = a.payload.doc.data();
                    return {id: a.payload.doc.id, ...data};
                });
            })
        );
    }
}
