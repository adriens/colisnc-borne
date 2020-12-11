import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService, StorageTranscoders } from 'ngx-webstorage-service';

@Injectable()
export class LocalStorageService {

  loadingStorage: StorageService<boolean>;
  scanStorage: StorageService<boolean>;
  qrCodeStorage: StorageService<string>;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
    this.loadingStorage = storage.withDefaultTranscoder(StorageTranscoders.BOOLEAN);
    this.scanStorage = storage.withDefaultTranscoder(StorageTranscoders.BOOLEAN);
    this.qrCodeStorage = storage.withDefaultTranscoder(StorageTranscoders.STRING);
  }

  public getStoreLoading(): boolean { return this.loadingStorage.get('loading') || false; }
  public setStoreLoading(bool: boolean) { return this.loadingStorage.set('loading', bool); }

  public getStoreScan(): boolean { return this.scanStorage.get('scan') || false; }
  public setStoreScan(bool: boolean) { return this.scanStorage.set('scan', bool); }

  public getStoreQrCode(): string { return this.qrCodeStorage.get('qrcode') || ''; }
  public setStoreQrCode(val: string) { return this.qrCodeStorage.set('qrcode', val); }

}
