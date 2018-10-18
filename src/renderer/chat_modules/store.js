class Store {
    constructor(storage) {
        this.storage = storage;
    }

    get(key) {
        let result = '';
        if (this.storage.hasOwnProperty(key)) {
            result = this.storage.getItem(key);
        }
        try {
            let temp = JSON.parse(result);
            return temp;
        } catch (e) {
            return null;
        }
    }

    set(key, value) {
        if (typeof value == 'object') {
            this.storage.setItem(key, JSON.stringify(value));
        } else {
            this.storage.setItem(key, value);
        }
    }

    update(key, obj) {
        if (Object.prototype.toString.call(obj) != '[Object Object]') {
            return;
        }
        let temp = this.get(key);
        obj.forEach(v => {
            temp[v] = obj[v];
        });
        this.set(key, temp);
    }

    delete(key) {
        delete this.storage[key];
    }

    clear() {
        this.storage.clear();
    }
}

export const sessionStore = new Store(sessionStorage);
export const localStore = new Store(localStorage);

export default {
    sessionStore,
    localStore
};