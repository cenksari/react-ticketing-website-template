import Link from 'next/link';

// components
import Badge from '@components/Badge/Badge';
import ButtonLink from '@components/Button/ButtonLink';

// interfaces
interface IProps {
  url: string;
  name: string;
  when: string;
  image: string;
  color: string;
}

const NewsCard: React.FC<IProps> = ({ url, name, when, image, color }) => (
  <div className='card'>
    <Link href={`/news/${url}`}>
      <div
        className='card-image'
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        <Badge color={color} text='NEW' />
      </div>
      <div className='card-info'>
        <p>
          <strong>{name}</strong>
        </p>
        <p className='small'>{when}</p>
      </div>
    </Link>
    <div className='card-buttons'>
      <ButtonLink
        color={`${color}-overlay`}
        text='Details'
        rightIcon='arrow_forward'
        url={`news/${url}`}
      />
    </div>
  </div>
);

export default NewsCard;
