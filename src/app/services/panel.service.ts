import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanelService {
  private panelStates: { [key: string]: BehaviorSubject<boolean> } = {};

  constructor() {}

  public registerPanel(panelName: string): void {
    if (!this.panelStates[panelName]) {
      this.panelStates[panelName] = new BehaviorSubject<boolean>(true);
    }
  }

  public openPanel(panelName: string): void {
    if (this.panelStates[panelName]) {
      this.panelStates[panelName].next(true);
    }
  }

  public closePanel(panelName: string): void {
    if (this.panelStates[panelName]) {
      this.panelStates[panelName].next(false);
    }
  }

  public togglePanel(panelName: string): void {
    if (this.panelStates[panelName]) {
      const isOpen = this.panelStates[panelName].getValue();
      this.panelStates[panelName].next(!isOpen);
    }
  }

  public getPanelState(panelName: string): Observable<boolean> | null {
    if (this.panelStates[panelName]) {
      return this.panelStates[panelName].asObservable();
    }
    return null; // Handle error or default case
  }
}
