const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    // создать узел (node), где данные это data.
    const newNode = new Node(data);
    
    // если дерево пустое, то сделать новый узел корнем
    if (this.rootTree === null) {
      this.rootTree = newNode;
    } else {
      // вставить узел рекурсивно (вспомог. функция addNode вставляет в нужное место, спускаясь по дереву, сравнивая элементы)
      this.addNode(this.rootTree, newNode);
    }
  }

  //вспом. функция рекурсивного поиска
  addNode(node, newNode) {
    const direction = newNode.data < node.data ? 'left' : 'right'; // перем. хранит направление

    if (node[direction] === null) {   // если знач. пусто вставл. в нужное направление
      node[direction] = newNode;
    } else {                          // иначе ищем дальше место для нового узла
      this.addNode(node[direction], newNode);
    }
  }

  has(data) {
    return this.search(this.rootTree, data) !== null;
  }

  // вспом. ф. найти значение
  search (node, data) {
    const direction = data < node.data ? 'left' : 'right';

    if (node === null) {
      return null; // если узла нет вернем null
    }
    
    if (node.data === data) {
      return node; // если узел найден вернем его
    }

    return this.search(node[direction], data); // если не нашли ищем рекурсивно дальше в нужном направлении
  }

  find(data) {
    return this.search(this.rootTree, data);
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};