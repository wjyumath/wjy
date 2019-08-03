var storage = { //设置一个storage对象，用来实现localStorage本地存储
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    del(key) {
        localStorage.removeItem(key);
    }
}
export default storage;