import { CommonModule, IMAGE_CONFIG } from "@angular/common";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { provideRouter } from "@angular/router";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { importProvidersFrom, isDevMode } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app/app.component";

import {
  LocalStorageService,
  SessionStorageService,
} from "@mm/shared/services";

import { environment } from "@mm/environment";
import { appRoutes } from "./app/routes";
import { provideGroupsStore } from "./app/groups/store";
import { provideStore } from "@ngrx/store";
import { provideRolesStore } from "./app/roles/store";
import { provideAppStore } from "./app/shared/store/app-store.provider";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideAppStore(),
    provideGroupsStore(),
    provideRolesStore(),
    importProvidersFrom([
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,
    ]),
    { provide: LocalStorageService, useClass: LocalStorageService },
    {
      provide: SessionStorageService,
      useClass: SessionStorageService,
    },
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
      },
    },
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: false,
    }),
    provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
