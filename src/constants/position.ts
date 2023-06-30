interface IPositionObj {
  [position: string]: string;
}
const positionObj: IPositionObj = {
  'top-right': 'top:3%; right:0;',
  'top-center': 'top:0; right:50%;',
  'top-left': 'top:3%; left:0;',
  'bottom-right': 'bottom:3%; right:0',
  'bottom-center': 'bottom:0; right:50%',
  'bottom-left': 'bottom:3%; left:0',
};

export default positionObj;
