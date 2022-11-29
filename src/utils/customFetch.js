let is_ok = true;

export const customFetch = (time, task) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task);
            } else {
                rejected("Error");
            }
        }, time);
    });
}