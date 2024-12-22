// components
import Slider from '@components/Slider/Slider';
import ButtonCircle from '@components/Button/ButtonCircle';

const CircleButtons: React.FC = () => (
  <Slider>
    <ButtonCircle icon='theater_comedy' text='Theater' url='list' />
    <ButtonCircle icon='stadium' text='Concert' url='list' />
    <ButtonCircle icon='child_care' text='Kids' url='list' />
    <ButtonCircle icon='sports_football' text='Sports' url='list' />
    <ButtonCircle icon='attractions' text='Attractions' url='list' />
    <ButtonCircle icon='piano' text='Musical' url='list' />
    <ButtonCircle icon='comedy_mask' text='Comedy' url='list' />
    <ButtonCircle icon='festival' text='Festival' url='list' />
  </Slider>
);

export default CircleButtons;
