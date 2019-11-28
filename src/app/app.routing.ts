import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { NotFoundComponent } from "./pages/errors/not-found/not-found.component";
import { AuthGuard } from "./auth.guard";

export const routes: Routes = [
  { path: "", redirectTo: "pages", pathMatch: "full" },
  { path: "pages", loadChildren: "./pages/pages.module#PagesModule" },
  { path: "login", loadChildren: "./pages/login/login.module#LoginModule" },
  // { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordModule' },
  // {
  //   path: 'change-password',
  //   loadChildren:
  //     './pages/change-password/change-password.module#ChangePasswordModule',
  //   canActivate: [AuthGuard]
  // },
  { path: "**", component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  useHash: true
});
