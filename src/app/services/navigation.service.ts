// navigation.service.ts
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  changeQueryParam(param: string, value: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { [param]: value === '' ? null : value },
      queryParamsHandling: 'merge', // Use 'merge' to keep existing query params, 'preserve' to keep them unchanged, or omit to replace them
    });
  }

  followQueryParam(param?: string) {
    return this.route.queryParamMap.pipe(
      map((queryParams) => {
        if (param) return queryParams.get(param) || '';
        else return '';
      })
    );
  }
}
