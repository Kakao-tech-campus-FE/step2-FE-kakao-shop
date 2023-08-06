import {create, act} from 'react-test-renderer';
import App from './App';

//Components testing, props 변경 테스트: Storybook
//Chrom에서 제공하는 개발자 도구(Puooeteer), 녹음기 등을 이용하여 테스트
// -> 시나리오 테스트, 통합 테스트
//-> 노드js파일로 나와서 리액스 프로젝트에서 함께 관리 x

let root;
act(()=> {
    root = create(<App size="2000px"/>)
});

root.toJSON(); //{ type: 'div', ...}

expect(root.toJSON()).toMatchSnapshot();//.toBe(기대값).toStrictEqual(기대값).

act(()=> {
    root.update(<App size="1000px"/>)
})