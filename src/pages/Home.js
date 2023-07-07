// components
import Toast from '../components/Toast';
import Toggle from '../components/Toggle';
import Carousel from '../components/Carousel';
import Radio from '../components/Radio';
import Checkbox from '../components/Checkbox';

// images
import imgSeaShell from '../assets/images/seashell.png';
import imgOctopus from '../assets/images/octopus.png';
import first_slide from '../assets/images/first_slide.jpg';
import second_slide from '../assets/images/second_slide.jpg';
import third_slide from '../assets/images/third_slide.jpg';


export default function Home() {
    const opt1 = <img className="radio-option-img" src={imgSeaShell} alt="seashell"/>
  const opt2 = <img className="radio-option-img" src={imgOctopus} alt="octopus"/>
  const carousel_items = [
    first_slide,
    second_slide,
    third_slide
  ];

    return (
        <div className="home">
            <div className="home-body">
            <Carousel items={carousel_items}/>
            <table>
                <tr>
                <th>Toast</th>
                <td><Toast /></td>
                </tr>
                <tr>
                <th>Toggle</th>
                <td><Toggle /></td>
                </tr>
                <tr>
                <th>Radio</th>
                <td>
                    <form>
                    <Radio name="A" value="option1" labelChild={"option 1"}/><br />
                    <Radio name="A" value="option2" labelChild={"option 2"}/><br />
                    <Radio name="A" value="option3" labelChild={"option 3"}/>
                    </form>
                </td>
                <td>
                    <form>
                    <Radio name="B" value="option1" labelChild={opt1}/>
                    <Radio name="B" value="option2" labelChild={opt2}/>
                    </form>
                </td>
                
                </tr>
                <tr>
                <th>Checklist</th>
                <td>
                    <form>
                    <Checkbox name="C" labelChild={"select 1"}/><br />
                    <Checkbox name="D" labelChild={"select 2"}/><br />
                    <Checkbox name="E" labelChild={"select 3"}/>
                    </form>
                </td>
                </tr>

            </table>
            </div>
        </div>
    );
}