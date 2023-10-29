function stringify(obj) {
    if (typeof obj === 'string') {
      return `"${obj}"`;
    } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
      return obj.toString();
    } else if (Array.isArray(obj)) {
      const items = obj.map(item => item.toString()).join(',');
      return `[${items}]`;
    } else if (typeof obj === 'object') {
      const items = Object.keys(obj).map(key => `"${key}":${(obj[key]).toString()}`).join(',');
      return `{${items}}`;
    }
    return;
}