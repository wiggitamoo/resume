import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class ExperienceService {

    experienceCollection: AngularFirestoreCollection<any>;
    experienceDocument: AngularFirestoreDocument<any>;

    constructor(private afs: AngularFirestore) {
        this.experienceCollection = this.afs.collection('experiences', (ref) => ref.orderBy('startDate', 'desc').limit(5));
    }

    getData(): Observable<any[]> {
        // ['added', 'modified', 'removed']
        return this.experienceCollection.snapshotChanges().pipe(
            map((actions) => {
                return actions.map((a) => {
                    const data = a.payload.doc.data();
                    return {id: a.payload.doc.id, ...data};
                });
            })
        );
    }
}
