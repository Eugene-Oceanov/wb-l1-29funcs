// опять таки, благодаря чату, я выяснил, что нужен кастомный JSON.stringify. Надеюсь в чате написали верно
function customStringify(obj) {
  if (typeof obj === 'string') return `"${obj}"`;
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) return String(obj);
  if (Array.isArray(obj)) {
    const items = obj.map(item => customStringify(item)).join(',');
    return `[${items}]`;
  }
  if (typeof obj === 'object') {
    const items = Object.keys(obj).map(key => `"${key}":${myStringify(obj[key])}`).join(',');
    return `{${items}}`;
  }
  return undefined;
}