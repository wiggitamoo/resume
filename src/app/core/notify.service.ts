import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

/// Notify users about errors and other helpful stuff
export interface Msg {
    content: string;
    style: string;
    duration: number;
}

@Injectable()
export class NotifyService {

    private _msgSource = new Subject<Msg | null>();

    msg = this._msgSource.asObservable();

    update(content: string, style: 'error' | 'info' | 'success', duration: number = 5000) {
        const msg: Msg = { content, style, duration };
        this._msgSource.next(msg);
        setTimeout (() => {
            this.clear();
        }, duration);
    }

    clear() {
        this._msgSource.next(null);
    }
}
