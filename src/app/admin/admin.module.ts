// admin.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ADMIN_ROUTES } from './admin-routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ADMIN_ROUTES)],
})
export class AdminModule {}
console.log('AdminModule loaded');

