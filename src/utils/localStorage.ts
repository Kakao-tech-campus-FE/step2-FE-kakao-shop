export function setItemWithExpireDate(key: string, value: string, expire: number) {
  const item = {
    value,
    expire: Date.now() + expire,
  };

  localStorage.setItem(key, JSON.stringify(item));
}

export function getItemWithExpireDate(key: string) {
  const itemString = localStorage.getItem(key);

  if (itemString === null) {
    localStorage.removeItem(key);

    return null;
  }

  const item = JSON.parse(itemString);

  if (Date.now() > item.expire) {
    localStorage.removeItem(key);

    return null;
  }

  return item.value;
}
