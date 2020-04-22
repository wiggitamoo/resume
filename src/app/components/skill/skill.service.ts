import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class SkillService {
    skillCollection: AngularFirestoreCollection<any>;
    skillDocument: AngularFirestoreDocument<any>;

    constructor(private afs: AngularFirestore) {
        this.skillCollection = this.afs.collection('skills', ref =>
            ref.orderBy('value', 'desc').limit(30)
        );
    }

    getData(): Observable<any[]> {
        // ['added', 'modified', 'removed']
        return this.skillCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    return { id: a.payload.doc.id, ...data };
                });
            })
        );
    }
}
