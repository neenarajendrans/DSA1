function removeNthIndex(head, n) {
    const dummy = { next: head }; // Dummy node to handle edge cases
    let first = dummy;
    let second = dummy;

    // Move `first` pointer n+1 steps ahead to create a gap of n between `first` and `second`
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers until `first` reaches the end
    while (first) {
        first = first.next;
        second = second.next;
    }

    // Remove the n-th node from the end
    second.next = second.next.next;

    return dummy.next; // Return the modified list
};