"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var Imc = function (peso, altura) {
    return peso / Math.pow(altura, 2);
};
var peso = Number(prompt('Digite seu peso: '));
var altura = Number(prompt('Digite sua altura: '));
var imc = Imc(peso, altura);
console.log("seu IMC \u00E9: ".concat(imc.toFixed(0)));
