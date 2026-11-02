/** Routes of the Shipments module. Pages are lazy-loaded. Same URLs as the prototype (#/shipments, #/shipment/:id …). */
import { Routes } from '@angular/router';
import { leaveCreateGuard } from './features/create-shipment/leave-create.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'shipments' },
  {
    path: 'shipments',
    title: 'CLM · Shipments',
    loadComponent: () => import('./features/hub/hub.page').then((m) => m.HubPage),
  },
  {
    path: 'group/:by/:key',
    title: 'CLM · Working package',
    loadComponent: () => import('./features/group/group.page').then((m) => m.GroupPage),
  },
  { path: 'shipment/:id', pathMatch: 'full', redirectTo: 'shipment/:id/overview' },
  {
    path: 'shipment/:id/:tab',
    title: 'CLM · Shipment',
    loadComponent: () =>
      import('./features/shipment-details/shipment-details.page').then(
        (m) => m.ShipmentDetailsPage,
      ),
  },
  {
    path: 'create',
    title: 'CLM · Create shipment',
    canDeactivate: [leaveCreateGuard],
    loadComponent: () =>
      import('./features/create-shipment/create-shipment.page').then((m) => m.CreateShipmentPage),
  },
  {
    path: 'upload',
    title: 'CLM · Upload',
    loadComponent: () => import('./features/upload/upload.page').then((m) => m.UploadPage),
  },
  {
    path: 'na/:area',
    title: 'CLM',
    loadComponent: () =>
      import('./features/not-available/not-available.page').then((m) => m.NotAvailablePage),
  },
  { path: '**', redirectTo: 'shipments' },
];
