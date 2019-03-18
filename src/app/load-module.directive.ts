import { LazyModules, LAZY_MODULES_MAP } from './lazy-module.provider';
import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  NgModuleRef,
  ViewContainerRef,
  Injector,
  NgModuleFactoryLoader,
  Inject,
  NgModuleFactory,
  Type} from '@angular/core';

type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[loadModule]'
})
export class LoadModuleDirective implements OnInit, OnDestroy {
  @Input('loadModule') moduleName: keyof LazyModules;
  private moduleRef: NgModuleRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULES_MAP) private modulesMap) { }

  ngOnInit() {
    this.loader.load(this.modulesMap[this.moduleName])
    .then((moduleFactory: NgModuleFactory<any>) => {
      this.moduleRef = moduleFactory.create(this.injector);

      const rootComponent = (moduleFactory.moduleType as ModuleWithRoot)
        .rootComponent;

      const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(
        rootComponent
      );

      this.vcr.createComponent(factory);
    });
  }

  ngOnDestroy() {
    this.moduleRef && this.moduleRef.destroy();
  }

}
