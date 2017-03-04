/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../../src/app/shared/barchart/barchart.component');
var import1 = require('@angular/core/src/change_detection/change_detection_util');
var import2 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import5 = require('@angular/core/src/metadata/view');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/constants');
var import8 = require('@angular/core/src/linker/component_factory');
var import9 = require('./barchart.component.css.ngstyle');
var import10 = require('@angular/core/src/linker/query_list');
var import11 = require('@angular/core/src/linker/element_ref');
var Wrapper_BarchartComponent = (function () {
    function Wrapper_BarchartComponent() {
        this._changed = false;
        this._changes = {};
        this.context = new import0.BarchartComponent();
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_BarchartComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BarchartComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_BarchartComponent.prototype.check_data = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.data = currValue;
            this._changes['data'] = new import1.SimpleChange(this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_BarchartComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_BarchartComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BarchartComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_BarchartComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_BarchartComponent;
}());
exports.Wrapper_BarchartComponent = Wrapper_BarchartComponent;
var renderType_BarchartComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_BarchartComponent_Host0 = (function (_super) {
    __extends(View_BarchartComponent_Host0, _super);
    function View_BarchartComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_BarchartComponent_Host0, renderType_BarchartComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    View_BarchartComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'app-barchart', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_BarchartComponent0(this.viewUtils, this, 0, this._el_0);
        this._BarchartComponent_0_3 = new Wrapper_BarchartComponent();
        this.compView_0.create(this._BarchartComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._BarchartComponent_0_3.context);
    };
    View_BarchartComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.BarchartComponent) && (0 === requestNodeIndex))) {
            return this._BarchartComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_BarchartComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BarchartComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_BarchartComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_BarchartComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BarchartComponent_Host0;
}(import2.AppView));
exports.BarchartComponentNgFactory = new import8.ComponentFactory('app-barchart', View_BarchartComponent_Host0, import0.BarchartComponent);
var styles_BarchartComponent = [import9.styles];
var renderType_BarchartComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_BarchartComponent, {});
var View_BarchartComponent0 = (function (_super) {
    __extends(View_BarchartComponent0, _super);
    function View_BarchartComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_BarchartComponent0, renderType_BarchartComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    View_BarchartComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_chart_0 = new import10.QueryList();
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'd3-chart'), null);
        this._viewQuery_chart_0.reset([new import11.ElementRef(this._el_0)]);
        this.context.chartContainer = this._viewQuery_chart_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    return View_BarchartComponent0;
}(import2.AppView));
exports.View_BarchartComponent0 = View_BarchartComponent0;
//# sourceMappingURL=barchart.component.ngfactory.js.map