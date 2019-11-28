import {
  Component,
  ViewEncapsulation,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { LoaderService } from "../../services/loader.service";
import { AppSettings } from "../../app.settings";
import { ISettings } from "../../app.settings.model";
import { trimSpacesValidate, emailValidator } from "../../validators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  encapsulation: ViewEncapsulation.None,
  providers: [AuthService]
})
export class LoginComponent implements OnInit, AfterViewInit {
  public form: FormGroup;
  public settings: ISettings;

  returnUrl: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    public appSettings: AppSettings,
    public loaderService: LoaderService,
    fb: FormBuilder
  ) {
    this.settings = this.appSettings.settings;
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    this.form = fb.group({
      email: ["", Validators.compose([trimSpacesValidate, emailValidator])],
      password: [
        "",
        Validators.compose([trimSpacesValidate, Validators.minLength(6)])
      ]
    });
    Object.keys(this.form.controls).map(key => {
      this[key] = this.form.controls[key];
    });
  }

  public onSubmit(values): void {
    if (this.form.valid) {
      this.authService.login(values).subscribe(response => {
        const user = {
          ...response,
          lastLogin: new Date().getTime()
        };
        console.log("loggedInUser", user);

        if (user && user.token) {
          localStorage.setItem("currentUser", JSON.stringify(user));

          this.router.navigateByUrl(this.returnUrl);
        }
      });
    }
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl(this.returnUrl);
    }
  }

  ngAfterViewInit() {
    // document.getElementById("preloader").classList.add("hide");
  }
}
