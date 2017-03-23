/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(["@angular/core", "./search", "@angular/common", "@angular/http"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function View_Search_1(l) {
        return import0.ɵvid(0, [
            (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
            (l()(), import0.ɵted(null, [
                '',
                ''
            ]))
        ], null, function (ck, v) {
            var currVal_0 = v.context.$implicit;
            ck(v, 1, 0, currVal_0);
        });
    }
    function View_Search_0(l) {
        return import0.ɵvid(0, [
            (l()(), import0.ɵted(null, ['\n    '])),
            (l()(), import0.ɵeld(0, null, null, 12, 'div', [], null, null, null, null, null)),
            (l()(), import0.ɵted(null, ['\n      '])),
            (l()(), import0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (l()(), import0.ɵted(null, ['Search'])),
            (l()(), import0.ɵted(null, ['\n      '])),
            (l()(), import0.ɵeld(0, [[
                    'foo',
                    1
                ]
            ], null, 0, 'input', [
                [
                    'placeholder',
                    'Search on Wikipedia'
                ],
                [
                    'type',
                    'text'
                ]
            ], null, null, null, null, null)),
            (l()(), import0.ɵted(null, ['\n      '])),
            (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                    null,
                    'click'
                ]
            ], function (v, en, $event) {
                var ad = true;
                var co = v.component;
                if (('click' === en)) {
                    var pd_0 = (co.search(import0.ɵnov(v, 6).value) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)),
            (l()(), import0.ɵted(null, ['Search'])),
            (l()(), import0.ɵted(null, ['\n      '])),
            (l()(), import0.ɵand(8388608, null, null, 1, null, View_Search_1)),
            import0.ɵdid(401408, null, 0, import2.NgForOf, [
                import0.ViewContainerRef,
                import0.TemplateRef,
                import0.IterableDiffers
            ], { ngForOf: [
                    0,
                    'ngForOf'
                ]
            }, null),
            (l()(), import0.ɵted(null, ['\n    '])),
            (l()(), import0.ɵted(null, ['\n  ']))
        ], function (ck, v) {
            var co = v.component;
            var currVal_0 = co.pages;
            ck(v, 12, 0, currVal_0);
        }, null);
    }
    exports_1("View_Search_0", View_Search_0);
    function View_Search_Host_0(l) {
        return import0.ɵvid(0, [
            (l()(), import0.ɵeld(0, null, null, 1, 'search', [], null, null, null, View_Search_0, RenderType_Search)),
            import0.ɵdid(24576, null, 0, import1.Search, [import3.Http], null, null)
        ], null, null);
    }
    var import0, import1, import2, import3, styles_Search, RenderType_Search, SearchNgFactory;
    return {
        setters: [
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
            },
            function (import2_1) {
                import2 = import2_1;
            },
            function (import3_1) {
                import3 = import3_1;
            }
        ],
        execute: function () {/**
             * @fileoverview This file is generated by the Angular template compiler.
             * Do not edit.
             * @suppress {suspiciousCode,uselessCode,missingProperties}
             */
            /* tslint:disable */
            styles_Search = [];
            exports_1("RenderType_Search", RenderType_Search = import0.ɵcrt({
                encapsulation: 2,
                styles: styles_Search,
                data: {}
            }));
            exports_1("SearchNgFactory", SearchNgFactory = import0.ɵccf('search', import1.Search, View_Search_Host_0, {}, {}, []));
            //# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21sYXZhbC9kZXYvZ2l0aHViL3BsYXlncm91bmQvb3B0aW1pemUtYW5ndWxhci1hcHAvYXBwL3NlYXJjaC9zZWFyY2gubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvbWxhdmFsL2Rldi9naXRodWIvcGxheWdyb3VuZC9vcHRpbWl6ZS1hbmd1bGFyLWFwcC9hcHAvc2VhcmNoL3NlYXJjaC50cyIsIm5nOi8vL1VzZXJzL21sYXZhbC9kZXYvZ2l0aHViL3BsYXlncm91bmQvb3B0aW1pemUtYW5ndWxhci1hcHAvYXBwL3NlYXJjaC9zZWFyY2gudHMuU2VhcmNoLmh0bWwiLCJuZzovLy9Vc2Vycy9tbGF2YWwvZGV2L2dpdGh1Yi9wbGF5Z3JvdW5kL29wdGltaXplLWFuZ3VsYXItYXBwL2FwcC9zZWFyY2gvc2VhcmNoLnRzLlNlYXJjaF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgIDxkaXY+XG4gICAgICA8aDI+U2VhcmNoPC9oMj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9uIFdpa2lwZWRpYVwiICNmb28+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJzZWFyY2goZm9vLnZhbHVlKVwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlc1wiPnt7cGFnZX19PC9kaXY+XG4gICAgPC9kaXY+XG4gICIsIjxzZWFyY2g+PC9zZWFyY2g+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDS007SUFBZ0M7TUFBQTtNQUFBO0lBQUE7SUFBQTs7O0lBQUE7SUFBQTs7Ozs7SUFMdEM7SUFDSTtJQUFLO0lBQ0g7SUFBSTtJQUFXO01BQ2Y7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBMEQ7TUFDMUQ7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBUTtRQUFBO1FBQUE7TUFBQTtNQUFSO0lBQUE7SUFBb0M7SUFBZTtJQUNuRDtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE4QztJQUMxQzs7OztJQURDO0lBQUwsVUFBSyxTQUFMOzs7OztJQ0xOO2dCQUFBOzs7OyJ9
        }
    };
});
//# sourceMappingURL=search.ngfactory.js.map