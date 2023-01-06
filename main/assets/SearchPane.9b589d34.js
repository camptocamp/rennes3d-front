import { d as defineComponent, u as useCssVars, r as ref, a9 as toRefs, aa as useRouter, o as openBlock, e as createElementBlock, f as createVNode, w as withCtx, a as unref, I as Icon, n as normalizeClass, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, q as createBlock, h as createCommentVNode, V as markRaw, aW as useFocus, k as watch, aX as refDebounced, c as computed, y as withDirectives, ac as vModelText, m as withKeys, a1 as withModifiers, _ as __vitePreload, aY as flexsearch_bundle } from "./vendor.fa8a4419.js";
import { u as useStoryStore } from "./story.d57240f0.js";
import { B as BaseEmpty } from "./BaseEmpty.aa6164b0.js";
import { o as onKeyboardShortcut } from "./bundle-main.2b15c7d5.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.651154f7.js";
import "./GenericMountStory.9600b150.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[\xE0\xE1\xE2\xE3\xE4\xE5]"), regex_e = regex("[\xE8\xE9\xEA\xEB]"), regex_i = regex("[\xEC\xED\xEE\xEF]"), regex_o = regex("[\xF2\xF3\xF4\xF5\xF6\u0151]"), regex_u = regex("[\xF9\xFA\xFB\xFC\u0171]"), regex_y = regex("[\xFD\u0177\xFF]"), regex_n = regex("\xF1"), regex_c = regex("[\xE7c]"), regex_s = regex("\xDF"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", \u00DF: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
var charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
var language = { filter, stemmer, matcher };
const _hoisted_1$1 = ["data-selected"];
const _hoisted_2$1 = { class: "htw-flex-1" };
const _hoisted_3 = { class: "htw-flex" };
const _hoisted_4 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_5 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "7333f29c": __props.result.iconColor
    }));
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      router.push(props.result.route);
      emit("close");
    });
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        createVNode(BaseListItemLink, {
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, {
          default: withCtx(() => {
            var _a, _b;
            return [
              createVNode(unref(Icon), {
                icon: (_a = __props.result.icon) != null ? _a : defaultIcons[__props.result.kind],
                class: normalizeClass(["htw-w-4 htw-h-4", [
                  !unref(selected) ? [
                    __props.result.iconColor ? "bind-icon-color" : {
                      "htw-text-primary-500": __props.result.kind === "story",
                      "htw-text-gray-500": __props.result.kind === "variant"
                    }
                  ] : []
                ]])
              }, null, 8, ["icon", "class"]),
              createBaseVNode("div", _hoisted_2$1, [
                createBaseVNode("div", _hoisted_3, [
                  createTextVNode(toDisplayString(__props.result.title) + " ", 1),
                  createBaseVNode("span", _hoisted_4, toDisplayString(kindLabels[__props.result.kind]), 1)
                ]),
                ((_b = __props.result.path) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "htw-flex htw-items-center htw-gap-0.5"
                    }, [
                      index > 0 ? (openBlock(), createBlock(unref(Icon), {
                        key: 0,
                        icon: "carbon:chevron-right",
                        class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", null, toDisplayString(p), 1)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ];
          }),
          _: 1
        }, 8, ["to", "is-active"])
      ], 8, _hoisted_1$1);
    };
  }
});
var SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3fb261e4"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"m":[0,1],"me":[0,1],"met":[0,1],"metf":[0,1],"metfo":[0,1],"metfor":[0,1],"metfork":[0,1],"t":[2,3,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66],"tr":[2,3],"tra":[2,3],"traf":[2,3],"trafe":[2,3],"trafel":[2,3],"l":[4,5,25,26,27,45,46,47,48,49],"le":[4,5,25,26,27,45,46,47,48,49],"lem":[4,5,25,26,27,45,46,47,48,49],"leme":[4,5,45,46,47,48,49],"o":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"lemk":[25,26,27],"of":[33,34],"ofe":[33,34],"ofer":[33,34],"oferf":[33,34],"oferfl":[33,34],"oferflo":[33,34],"oferflof":[33,34],"ta":[50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66],"tal":[50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66],"talf":[50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66],"talfe":[50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66],"talfem":[50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66],"talfemt":[50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66]},{"f":[0,1,4,5,35,36,56,57,58,64,66],"fe":[0,1,4,5,64],"fek":[0,1,4,5],"feko":[0,1,4,5],"fekor":[0,1,4,5],"fekore":[0,1,4,5],"fekores":[0,1],"te":[2,3,37,38,39,52],"tem":[2,3,37,38,39],"teme":[2,3,37,38,39],"p":[6,7,8,9,10,11,12,13,14,15,16,17,18,51,53,54,62,63],"po":[6,7,8,9,10,11,12,13,14,15,16,17,18,53,62,63],"pot":[6,7,8,9,10,11,12,13,14,15,16,17,18],"poto":[6,7,8,9,10,11,12,13,14,15,16,17,18],"potom":[6,7,8,9,10,11,12,13,14,15,16,17,18],"e":[19,20,21,22,45,46,47,48,49,65],"ek":[19,20,21,22,45,46,47,48,49,65],"eko":[19,20,21,22,45,46,47,48,49],"ekom":[19,20,21,22,45,46,47,48,49],"l":[23,24,59,60],"le":[23,24,59,60],"lem":[23,24,60],"leme":[23,24,60],"m":[25,26,27,28,29,30,31,32,55],"me":[25,26,27,28,29,30,31,32],"met":[25,26,27,28,29,30,31,32],"mete":[25,26,27],"metes":[25,26,27],"metf":[28,29,30,31,32],"metfo":[28,29,30,31,32],"metfor":[28,29,30,31,32],"metfork":[28,29,30,31,32],"k":[33,34],"ko":[33,34],"kom":[33,34],"komt":[33,34],"komta":[33,34],"komtam":[33,34],"komtame":[33,34],"komtamer":[33,34],"fo":[35,36,56,57,58,66],"fot":[35,36],"foto":[35,36],"t":[37,38,39,40,41,42,43,44],"temel":[37,38,39],"temele":[37,38,39],"temelem":[37,38,39],"temeleme":[37,38,39],"tr":[40,41,42,43,44,61],"tra":[40,41,42,43,44],"tram":[40,41],"tramp":[40,41],"trampo":[40,41],"trampos":[40,41],"traf":[42,43,44],"trafe":[42,43,44],"trafel":[42,43,44],"pa":[51,54],"pak":[51],"pakr":[51],"pakro":[51],"pakrom":[51],"pakromt":[51],"tes":[52],"test":[52],"por":[53,62,63],"port":[53,62,63],"porte":[53,62,63],"porter":[53,62,63],"pat":[54],"pate":[54],"patem":[54],"patemk":[54],"ma":[55],"mar":[55],"mark":[55],"marke":[55],"markem":[55],"fom":[56,57,58],"fomt":[56,57,58],"let":[59],"lete":[59],"leter":[59],"tro":[61],"trop":[61],"fet":[64],"ekt":[65],"fol":[66]},{"t":[1,5,23,24,26,34],"te":[1,5,23,24,26,34,40,41,42,43,44],"tef":[1,3,5,26],"tefa":[1,3,5,26],"tefao":[1,3,5,26],"tefaol":[1,3,5,26],"tefaolt":[1,3,5,26],"f":[7,8,9,16,28,29,30,31,32,39,63],"fl":[7,8,9,16],"flo":[7,8,9,16],"floa":[7,8,9,16],"float":[7,8,9,16],"floate":[7,8,9,16],"floatem":[7,8,9,16],"floatemk":[7,8,9,16],"pr":[10,11,12,17],"pre":[10,11,12,17],"prem":[10,11,12,17],"prema":[10,11,12,17],"premar":[10,11,12,17],"premare":[10,11,12,17],"s":[13,14,15,18,46,56,59,61],"se":[13,14,15,18,56],"sek":[13,14,15,18],"seko":[13,14,15,18],"sekom":[13,14,15,18],"sekomt":[13,14,15,18],"sekomta":[13,14,15,18],"sekomtar":[13,14,15,18],"sekomtare":[13,14,15,18],"p":[19,20,21,22],"po":[19,20,21,22],"pot":[19,20,21,22],"poto":[19,20,21,22],"potom":[19,20,21,22],"tes":[23,24,34],"tesk":[23,24],"teskr":[23,24],"teskre":[23,24],"teskrep":[23,24],"teskrept":[23,24],"teskrepte":[23,24],"teskrepteo":[23,24],"teskrepteom":[23,24],"r":[27,62],"re":[27],"ret":[27],"fe":[28,29,30,31,32,39,57,63],"fek":[28,29,30,31,32,57],"feko":[28,29,30,31,32],"fekor":[28,29,30,31,32],"fekore":[28,29,30,31,32],"test":[34],"k":[35,36,38,51,52,53,66],"ka":[35,36],"kal":[35,36],"kale":[35,36],"kaler":[35,36],"kalere":[35,36],"ko":[38,51,52,53,66],"kor":[38],"kore":[38],"korem":[38],"koremt":[38],"fet":[39,63],"tet":[40,41],"tetl":[40,41],"tetle":[40,41],"tem":[42,43,44],"teme":[42,43,44],"sm":[46],"sma":[46],"smal":[46],"m":[47],"me":[47],"met":[47],"mete":[47],"meteo":[47],"meteom":[47],"la":[48],"lar":[48],"lark":[48],"larke":[48],"es":[49],"est":[49],"estr":[49],"estra":[49],"kol":[51,52,53],"kolo":[51,52,53],"kolor":[51,52,53],"ses":[56],"sese":[56],"fekt":[57],"fa":[58],"fam":[58],"fame":[58],"famel":[58],"famele":[58],"sp":[59],"spa":[59],"spak":[59],"spake":[59],"spakem":[59],"spakemk":[59],"e":[60],"ek":[60],"ekt":[60],"sa":[61],"sat":[61],"sato":[61],"satof":[61],"ra":[62],"rat":[62],"rate":[62],"rateo":[62],"rateos":[62],"kom":[66],"komf":[66],"komfe":[66],"komfek":[66]},{"6":[27],"60":[27],"e":[7,8,10,11,13,14],"ek":[7,8,10,11,13,14],"eko":[7,8,10,11,13,14],"ekom":[7,8,10,11,13,14],"t":[9,12,15,20,36],"te":[9,12,15,20,36],"tes":[9,12,15,20],"test":[9,12,15,20],"s":[16,17],"sm":[16,17,18],"sma":[16,17,18],"smal":[16,17,18],"tef":[24,36,39,41],"tefa":[24,36,41],"tefao":[24,36,41],"tefaol":[24,36,41],"tefaolt":[24,36,41],"k":[26,43,44],"ko":[26,43,44],"kol":[26,43,44],"kolo":[26,43,44],"kolor":[26,43,44],"mo":[30],"l":[31,32],"le":[31,32],"lem":[31,32],"leme":[31,32],"tefr":[39],"tefre":[39],"tefrem":[39],"tefremt":[39],"kolore":[43,44],"koloret":[43,44],"la":[49],"lar":[49],"lark":[49],"larke":[49]},{"t":[7,8,10,11,13,14],"te":[7,8,10,11,13,14],"tes":[7,8,10,11,13,14],"test":[7,8,10,11,13,14],"a":[22],"am":[22],"amt":[22],"om":[30],"ome":[30],"omet":[30],"e":[39],"et":[39],"ete":[39],"etem":[39],"etems":[39],"f":[44],"fa":[44],"fal":[44],"fals":[44],"false":[44]},{"m":[7,10,13],"mo":[7,10,13,29,31],"mot":[7,10,13],"mote":[7,10,13],"motef":[7,10,13],"t":[22],"te":[22],"tes":[22],"test":[22],"p":[32],"pl":[32],"pla":[32],"plam":[32]},{"e":[29,31],"em":[29],"emf":[29],"emfo":[29],"ek":[31],"eko":[31],"ekom":[31]},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-components-home-networkfigures-story-vue", "kind": "story" }, "1": { "id": "src-components-home-networkfigures-story-vue:_default", "kind": "variant" }, "2": { "id": "src-components-home-traveltimes-story-vue", "kind": "story" }, "3": { "id": "src-components-home-traveltimes-story-vue:_default", "kind": "variant" }, "4": { "id": "src-components-line-linefigures-story-vue", "kind": "story" }, "5": { "id": "src-components-line-linefigures-story-vue:src-components-line-linefigures-story-vue-0", "kind": "variant" }, "6": { "id": "src-components-ui-uibutton-story-vue", "kind": "story" }, "7": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-0", "kind": "variant" }, "8": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-1", "kind": "variant" }, "9": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-2", "kind": "variant" }, "10": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-3", "kind": "variant" }, "11": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-4", "kind": "variant" }, "12": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-5", "kind": "variant" }, "13": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-6", "kind": "variant" }, "14": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-7", "kind": "variant" }, "15": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-8", "kind": "variant" }, "16": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-9", "kind": "variant" }, "17": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-10", "kind": "variant" }, "18": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-11", "kind": "variant" }, "19": { "id": "src-components-ui-uiiconbutton-story-vue", "kind": "story" }, "20": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-0", "kind": "variant" }, "21": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-1", "kind": "variant" }, "22": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-2", "kind": "variant" }, "23": { "id": "src-components-ui-uilinedescription-story-vue", "kind": "story" }, "24": { "id": "src-components-ui-uilinedescription-story-vue:_default", "kind": "variant" }, "25": { "id": "src-components-ui-uilinkmetis-story-vue", "kind": "story" }, "26": { "id": "src-components-ui-uilinkmetis-story-vue:src-components-ui-uilinkmetis-story-vue-0", "kind": "variant" }, "27": { "id": "src-components-ui-uilinkmetis-story-vue:src-components-ui-uilinkmetis-story-vue-1", "kind": "variant" }, "28": { "id": "src-components-ui-uinetworkfigure-story-vue", "kind": "story" }, "29": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-0", "kind": "variant" }, "30": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-1", "kind": "variant" }, "31": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-2", "kind": "variant" }, "32": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-3", "kind": "variant" }, "33": { "id": "src-components-ui-uioverflowcontainer-story-vue", "kind": "story" }, "34": { "id": "src-components-ui-uioverflowcontainer-story-vue:src-components-ui-uioverflowcontainer-story-vue-0", "kind": "variant" }, "35": { "id": "src-components-ui-uiphotogalery-story-vue", "kind": "story" }, "36": { "id": "src-components-ui-uiphotogalery-story-vue:_default", "kind": "variant" }, "37": { "id": "src-components-ui-uitimeline-story-vue", "kind": "story" }, "38": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-0", "kind": "variant" }, "39": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-1", "kind": "variant" }, "40": { "id": "src-components-ui-uitrambustitle-story-vue", "kind": "story" }, "41": { "id": "src-components-ui-uitrambustitle-story-vue:_default", "kind": "variant" }, "42": { "id": "src-components-ui-uitraveltime-story-vue", "kind": "story" }, "43": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-0", "kind": "variant" }, "44": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-1", "kind": "variant" }, "45": { "id": "src-components-ui-icons-iconline-story-vue", "kind": "story" }, "46": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-0", "kind": "variant" }, "47": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-1", "kind": "variant" }, "48": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-2", "kind": "variant" }, "49": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-3", "kind": "variant" }, "50": { "id": "tailwind", "kind": "story" }, "51": { "id": "tailwind:background-color", "kind": "variant" }, "52": { "id": "tailwind:text-color", "kind": "variant" }, "53": { "id": "tailwind:border-color", "kind": "variant" }, "54": { "id": "tailwind:padding", "kind": "variant" }, "55": { "id": "tailwind:margin", "kind": "variant" }, "56": { "id": "tailwind:font-size", "kind": "variant" }, "57": { "id": "tailwind:font-weight", "kind": "variant" }, "58": { "id": "tailwind:font-family", "kind": "variant" }, "59": { "id": "tailwind:letter-spacing", "kind": "variant" }, "60": { "id": "tailwind:line-height", "kind": "variant" }, "61": { "id": "tailwind:drop-shadow", "kind": "variant" }, "62": { "id": "tailwind:border-radius", "kind": "variant" }, "63": { "id": "tailwind:border-width", "kind": "variant" }, "64": { "id": "tailwind:width", "kind": "variant" }, "65": { "id": "tailwind:height", "kind": "variant" }, "66": { "id": "tailwind:full-config", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" No results ");
const _hoisted_2 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.5c77c9da.js"), true ? ["assets/search-docs-data.5c77c9da.js","assets/vendor.fa8a4419.js"] : void 0);
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundle.exports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor,
        type
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      var _a;
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...(_a = story.file.path) != null ? _a : [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor,
        type
      };
    }
    const results = computed(() => {
      const list = [...titleResults.value];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const selectedIndex = ref(0);
    watch(results, () => {
      selectedIndex.value = 0;
    });
    function selectNext() {
      selectedIndex.value++;
      if (selectedIndex.value > results.value.length - 1) {
        selectedIndex.value = 0;
      }
    }
    function selectPrevious() {
      selectedIndex.value--;
      if (selectedIndex.value < 0) {
        selectedIndex.value = results.value.length - 1;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => selectNext(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => selectPrevious(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === selectedIndex.value,
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
