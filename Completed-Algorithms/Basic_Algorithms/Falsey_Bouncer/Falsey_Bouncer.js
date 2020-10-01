function bouncer(arr) {
    const filtered = arr.filter(value => value ? value : '')
    return filtered
}

bouncer([7, "ate", "", false, 9]);
