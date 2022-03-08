define(['dart_sdk'], (function load__web__main(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var main = Object.create(dart.library);
  var $text = dartx.text;
  var $onChange = dartx.onChange;
  var $onClick = dartx.onClick;
  var $toString = dartx.toString;
  var $add = dartx.add;
  var $children = dartx.children;
  var $clear = dartx.clear;
  var $id = dartx.id;
  var $forEach = dartx.forEach;
  var $parent = dartx.parent;
  var $currentTarget = dartx.currentTarget;
  var $_get = dartx._get;
  var $removeWhere = dartx.removeWhere;
  var $remove = dartx.remove;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    EventTovoid: () => (T.EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))(),
    MouseEventTovoid: () => (T.MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))(),
    TarefaTovoid: () => (T.TarefaTovoid = dart.constFn(dart.fnType(dart.void, [main.Tarefa])))(),
    TarefaTobool: () => (T.TarefaTobool = dart.constFn(dart.fnType(core.bool, [main.Tarefa])))(),
    JSArrayOfTarefa: () => (T.JSArrayOfTarefa = dart.constFn(_interceptors.JSArray$(main.Tarefa)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.addTarefa, T.EventTovoid());
    },
    get C1() {
      return C[1] = dart.fn(main.removerTodasTarefas, T.MouseEventTovoid());
    },
    get C2() {
      return C[2] = dart.fn(main.removerTarefa, T.MouseEventTovoid());
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["org-dartlang-app:///web/main.dart"];
  var id = dart.privateName(main, "Tarefa.id");
  var texto$ = dart.privateName(main, "Tarefa.texto");
  main.Tarefa = class Tarefa extends core.Object {
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    get texto() {
      return this[texto$];
    }
    set texto(value) {
      super.texto = value;
    }
    static ['_#new#tearOff'](texto) {
      return new main.Tarefa.new(texto);
    }
  };
  (main.Tarefa.new = function(texto) {
    this[id] = 0;
    this[texto$] = texto;
    this.id = this.id + 1;
  }).prototype = main.Tarefa.prototype;
  dart.addTypeTests(main.Tarefa);
  dart.addTypeCaches(main.Tarefa);
  dart.setLibraryUri(main.Tarefa, I[0]);
  dart.setFieldSignature(main.Tarefa, () => ({
    __proto__: dart.getFields(main.Tarefa.__proto__),
    id: dart.fieldType(core.int),
    texto: dart.finalFieldType(core.String)
  }));
  main.main = function main$() {
    let t0, t0$, t0$0;
    t0 = html.querySelector("#output-h1");
    t0 == null ? null : t0[$text] = "Lista de Tarefas";
    main.inserirTarefa = html.InputElement.as(html.querySelector("#tarefa"));
    main.uiLista = html.DivElement.as(html.querySelector("#tarefa-lista"));
    main.buttonLimpar = html.ButtonElement.as(html.querySelector("#limpar"));
    t0$ = main.inserirTarefa;
    t0$ == null ? null : t0$[$onChange].listen(C[0] || CT.C0);
    t0$0 = main.buttonLimpar;
    t0$0 == null ? null : t0$0[$onClick].listen(C[1] || CT.C1);
  };
  main.addTarefa = function addTarefa(event) {
    let t0, t0$;
    let tarefa = new main.Tarefa.new(dart.toString((t0 = main.inserirTarefa, t0 == null ? null : t0.value)));
    main.listTarefas[$add](tarefa);
    main.atualizarLista();
    t0$ = main.inserirTarefa;
    t0$ == null ? null : t0$.value = "";
  };
  main.atualizarLista = function atualizarLista() {
    let t0;
    t0 = main.uiLista;
    t0 == null ? null : t0[$children][$clear]();
    main.listTarefas[$forEach](dart.fn(tarefa => {
      let t0;
      let div = html.Element.div();
      let buttonRemover = html.ButtonElement.new();
      let span = html.Element.span();
      buttonRemover[$text] = "X";
      buttonRemover[$id] = tarefa.id[$toString]();
      buttonRemover[$onClick].listen(C[2] || CT.C2);
      span[$text] = tarefa.texto;
      div[$children][$add](buttonRemover);
      div[$children][$add](span);
      t0 = main.uiLista;
      t0 == null ? null : t0[$children][$add](div);
    }, T.TarefaTovoid()));
  };
  main.removerTarefa = function removerTarefa(event) {
    let t0;
    event.stopPropagation();
    let div = html.Element.as(event[$currentTarget])[$parent];
    let button = html.Element.as(event[$currentTarget]);
    let key = core.int.parse(button[$id][$_get](0));
    main.listTarefas[$removeWhere](dart.fn(tarefa => tarefa.id === key, T.TarefaTobool()));
    t0 = div;
    t0 == null ? null : t0[$remove]();
  };
  main.removerTodasTarefas = function removerTodasTarefas(event) {
    let t0;
    t0 = main.uiLista;
    t0 == null ? null : t0[$children][$clear]();
    main.listTarefas[$clear]();
  };
  dart.defineLazy(main, {
    /*main.inserirTarefa*/get inserirTarefa() {
      return null;
    },
    set inserirTarefa(_) {},
    /*main.uiLista*/get uiLista() {
      return null;
    },
    set uiLista(_) {},
    /*main.buttonLimpar*/get buttonLimpar() {
      return null;
    },
    set buttonLimpar(_) {},
    /*main.listTarefas*/get listTarefas() {
      return T.JSArrayOfTarefa().of([]);
    },
    set listTarefas(_) {}
  }, false);
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASM;;;;;;IACS;;;;;;;;;;8BAED;IAHR,WAAK;IAGG;AACN,IAAJ,UAAA,AAAE,UAAA;EACJ;;;;;;;;;;;AAIsD,SAAtD,mBAAc;iBAAd,OAA6B,YAAO;AAEoB,IAAxD,qBAAyC,qBAAzB,mBAAc;AACwB,IAAtD,eAAyC,mBAA/B,mBAAc;AACgC,IAAxD,oBAAwC,sBAAzB,mBAAc;AAEY,UAAzC;yBAAe,AAAS;AACyB,WAAjD;0BAAc,AAAQ;EACxB;sCAEqB;;AACZ,iBAAS,oBAA8B,qDAAtB,OAAe;AAChB,IAAvB,AAAY,uBAAI,MAAM;AAEN,IAAhB;AACyB,UAAzB;yBAAe,YAAQ;EACzB;;;AAG2B,SAAzB;wBAAS,AAAS;AAehB,IAdF,AAAY,2BAAQ,QAAC;;AACX,gBAAc;AACR,0BAAgB;AACtB,iBAAe;AAEC,MAAxB,AAAc,aAAD,UAAQ;AACkB,MAAvC,AAAc,aAAD,QAAM,AAAO,AAAG,MAAJ;AACkB,MAA3C,AAAc,AAAQ,aAAT;AAEW,MAAxB,AAAK,IAAD,UAAQ,AAAO,MAAD;AAEa,MAA/B,AAAI,AAAS,GAAV,kBAAc,aAAa;AACR,MAAtB,AAAI,AAAS,GAAV,kBAAc,IAAI;AACK,WAA1B;0BAAS,AAAS,oBAAI,GAAG;;EAE7B;8CAE8B;;AACL,IAAvB,AAAM,KAAD;AAEI,cAA2B,AAAY,gBAAhC,AAAM,KAAD;AACb,iBAA8B,gBAApB,AAAM,KAAD;AAEnB,cAAU,eAAM,AAAO,AAAE,MAAH,aAAI;AACuB,IAArD,AAAY,+BAAY,QAAC,UAAW,AAAO,AAAG,MAAJ,QAAO,GAAG;AAEvC,SAAb,GAAG;iBAAH,OAAK;EACP;0DAEoC;;AACT,SAAzB;wBAAS,AAAS;AACC,IAAnB,AAAY;EACd;;MApEc,kBAAa;;;;MACf,YAAO;;;;MACJ,iBAAY;;;;MAEd,gBAAW;YAAG","file":"main.sound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.sound.ddc.js.map
