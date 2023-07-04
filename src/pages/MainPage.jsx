import Checklist from '../components/check/Checklist';
import Radio from '../components/radio/Radio';
import Toggle from '../components/toggle/Toggle';

const listData = {
    title: '음료',
    labels: ['커피', '우유', '물', '주스', '콜라'],
};

// radio button, checklist, toggle
const MainPage = () => {
    return (
        <>
            <Toggle />
            <Checklist data={listData} />
            <Radio data={listData} />
        </>
    );
};

export default MainPage;
