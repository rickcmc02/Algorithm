function checkRootDepth(tree: TreeNode | null, depth: number): number {
  if (!tree) return depth - 1;
  const leftDepth = checkRootDepth(tree.left, depth + 1);
  const rightDepth = checkRootDepth(tree.right, depth + 1);

  if (leftDepth && rightDepth) {
    const diff = leftDepth - rightDepth;
    if (diff > 1 || diff < -1) return 0;
    else {
      if (leftDepth > rightDepth) return leftDepth;
      else return rightDepth;
    }
  } else return 0;
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root || root.val === null) return true;
  return !!checkRootDepth(root, 1);
}
