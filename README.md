# Angular6
5. Components _ Databinding Deep Dive
--------------------------------------------------------------------------------

5.1 : Module Introduction
--------------------------------------------------------------------------------


5.2 : Splitting Apps into Components
--------------------------------------------------------------------------------
* All logic written in 1 componenet so we haev to split it.
* Create new component.

F:\Workspace\TechM\Angular6\my-first-app>ng g c cockpit --skipTests

F:\Workspace\TechM\Angular6\my-first-app>ng g c server-elements --skipTests

5.3 : Property _ Event Binding Overview
--------------------------------------------------------------------------------
* Passing elements between component.

5.4. Binding to Custom Properties
--------------------------------------------------------------------------------
* Prevent app for crasing we are using commenting methods in cockpit.component.ts.
  Ctrl+K+C - comment multiple line
  Ctrl+K+U - uncomment multiple line
  Ctrl+Shift+T - search file inside whole project

* All property defiend inside component are accesible within componenet only not from outside.
* Input decorator in Angular - @Input()
* ref - https://blog.cloudboost.io/input-decorator-in-angular-66f4b55cd951
