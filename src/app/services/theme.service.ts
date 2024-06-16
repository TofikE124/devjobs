// theme.service.ts

import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly KEY = 'theme';
  private currentTheme: string = 'light';
  private isDarkSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  dark$: Observable<boolean> = this.isDarkSubject.asObservable();

  constructor(private storageService: StorageService) {
    this.loadTheme();
    this.isDarkSubject.next(this.isDark());
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    this.saveTheme();
    this.isDarkSubject.next(this.isDark()); // Notify subscribers of isDark state change
  }

  getTheme(): 'light' | 'dark' {
    return this.currentTheme as 'light' | 'dark';
  }

  isDark(): boolean {
    return this.currentTheme === 'dark';
  }

  private applyTheme() {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }

  private loadTheme() {
    const savedTheme = this.storageService.getItem(this.KEY);
    if (savedTheme) {
      this.currentTheme = savedTheme;
    }
    this.applyTheme();
  }

  private saveTheme() {
    this.storageService.setItem(this.KEY, this.currentTheme);
  }
}
