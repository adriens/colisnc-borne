import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService, StorageTranscoders } from 'ngx-webstorage-service';

@Injectable()
export class LocalStorageService {

  loadingStorage: StorageService<boolean>;
  showColisStorage: StorageService<boolean>;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
    this.loadingStorage = storage.withDefaultTranscoder(StorageTranscoders.BOOLEAN);
    this.showColisStorage = storage.withDefaultTranscoder(StorageTranscoders.BOOLEAN);
  }

  public getStoreLoading(): boolean { return this.loadingStorage.get('loading') || false; }
  public setStoreLoading(bool: boolean) { return this.loadingStorage.set('loading', bool); }

  public getStoreShowColis(): boolean { return this.showColisStorage.get('showcolis'); }
  public setStoreShowColis(bool: boolean) { return this.showColisStorage.set('showcolis', bool); }

}
