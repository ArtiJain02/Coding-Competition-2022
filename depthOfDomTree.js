//"cerner_2tothe5th_2022"
// Program to find the depth of Dom tree

findDepth = (root) => {
    if (!root) return 0;

    let maxDepth = 0;

    const realDepth = (current, depth = 1) => {
        if (current.hasChildNodes()) {
            for (let child of current.children) {
                realDepth(child, depth + 1);
            }
        }
        maxDepth = Math.max(maxDepth, depth);
    };

    realDepth(root);
    return maxDepth;
}