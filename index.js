class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data) {
    let cur = this.root;
    if (cur.data === data) return cur;

    for(let child of cur.children){
      let newTree = new Tree(child);
      let answer = newTree.findNode(data)
      if (answer) return answer;
    }
    return null;

  }
}

module.exports = { TreeNode, Tree };
