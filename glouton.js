function rendu_glouton(s, r, i) {
    const pieces=[100, 50, 20, 10, 5, 2, 1];
    if (s === 0) {
        return r;
    } else {
        while (pieces[i] > s) {
            i+=1;
        }
        r.push(pieces[i]);
        return rendu_glouton(s - pieces[i], r, i);
    }
}
