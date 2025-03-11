class LRUCache {
  constructor(maxSize = 100) {
    this.maxSize = maxSize;
    this.cache = new Map();
    this.queue = [];
  }

  get(key) {
    if (!this.cache.has(key)) return null;
    
    // Move to most recently used
    this.queue = this.queue.filter(k => k !== key);
    this.queue.push(key);
    
    return this.cache.get(key);
  }

  set(key, value) {
    if (this.cache.size >= this.maxSize && !this.cache.has(key)) {
      // Remove least recently used item
      const lru = this.queue.shift();
      this.cache.delete(lru);
    }

    this.cache.set(key, value);
    this.queue = this.queue.filter(k => k !== key);
    this.queue.push(key);
  }

  has(key) {
    return this.cache.has(key);
  }

  delete(key) {
    this.cache.delete(key);
    this.queue = this.queue.filter(k => k !== key);
  }

  clear() {
    this.cache.clear();
    this.queue = [];
  }

  get size() {
    return this.cache.size;
  }
}

export default LRUCache;