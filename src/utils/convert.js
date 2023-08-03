// num을 입력 받아 3자리 마다 ,를 추가해 주는 함수 comma
export const comma = (num) => {
  if (num === undefined || num === null) return 0;
  if ( typeof num === 'number' && isNaN(num)) return 0;
  if ( typeof num === 'string') num = parseInt(num);
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}