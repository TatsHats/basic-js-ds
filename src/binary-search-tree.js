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
    if (node === null) {
      return null; // если узла нет вернем null
    }
    
    if (node.data === data) {
      return node; // если узел найден вернем его
    }

    const direction = data < node.data ? 'left' : 'right';
    return this.search(node[direction], data); // если не нашли ищем рекурсивно дальше в нужном направлении
  }

  find(data) {
    return this.search(this.rootTree, data);
  }

  remove(data) {
    /*
    if (this.rootTree === null) {
      return null;
    }

    let currentNode = this.rootTree; // начинаем с корня поиск нужного для удаления эл.

    while (currentNode !== null) {
      // если текущ. узел больше - влево, меньше - вправо
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {

      }
    }

    return currentNode;
    */
  }

  min() {
    // как мин значение ищем самый левый узел
    let currentNode = this.rootTree;

    while (currentNode && currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode ? currentNode.data : null; // null вернем если дерево пустое
  }

  max() {
    // ищем по правым узлам до крайнего справа (макс. значение)
    let currentNode = this.rootTree;

    while (currentNode && currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode ? currentNode.data : null; // null вернем если дерево пустое
  }
}

module.exports = {
  BinarySearchTree
};