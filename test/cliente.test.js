const Cliente = require("../models/cliente")

test('Dado que eu utilize a função para validar cpf com um número, deveria retornar validar o cpf', () => {
  let cliente = new Cliente("Eduardo", 1)
  expect(cliente.validarCPF()).toBe(false);
});

test('Dado que eu digitei um cpf inválido 11111111111, deveria retornar falso', () => {
  let cliente = new Cliente("Eduardo", 11111111111)
  expect(cliente.validarCPF()).toBe(false);
});

test('Dado que eu digitei um cpf inválido 111111111111, deveria retornar falso', () => {
  let cliente = new Cliente("Eduardo", 11111111111)
  expect(cliente.validarCPF()).toBe(false);
});

test('Dado que eu utilize a função para validar cpf com o valor nulo, deveria retornar falso', () => {
  let cliente = new Cliente("Eduardo", null)
  expect(cliente.validarCPF()).toBe(false);
});

test('Dado que eu utilize a função para validar cpf sem passar o cpf, deveria retornar falso', () => {
  let cliente = new Cliente("Eduardo", 1)
  expect(cliente.validarCPF()).toBe(false);
});

test('Dado que eu passe um cpf válido sem pontos e traços então deveria retornar verdadeiro', () => {
  let cliente = new Cliente("Eduardo", 85809522041)
  expect(cliente.validarCPF()).toBe(true);
});

test('Dado que eu passe um cpf válido então deveria retornar verdadeiro', () => {
  let cliente = new Cliente("Eduardo", "858.095.220-41")
  expect(cliente.validarCPF()).toBe(true);
});

test('Dado que eu passe um cpf inválido então deveria retornar falso', () => {
  let cliente = new Cliente("Eduardo", "858.095.220-56")
  expect(cliente.validarCPF()).toBe(false);
});