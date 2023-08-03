export const comma = (num?: number) => {
  // 타입스크립트를 사용하더라도 실제 들어오는 값은 선언된 타입의 값이 들어온다는 보장이 없다. 따라서 타입가드로 에러를 대비해줘야한다.
  if (num === null || num === undefined) return 0;

  if (typeof num === 'number' && isNaN(num)) return 0;

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
