import Link from 'next/link';

interface Props {
    id: string;
    name: string | null;
    age: number | null;
    image: string | null;
  }

export default function UserCard({ id, name, age, image}:Props) {
    return (
        <div className="bg-grey-100 p-0 w-36">
          <img
            src={image ?? '/mememan.webp'}
            alt={`${name}'s profile`}
            className="w-36 h-32 object-cover mb-1"
          />
          <div className="px-0 py-2">
            <h3 className='underline text-blue-500'>
              <Link href={`/users/${id}`}>{name}</Link>
            </h3>
          </div>
        </div>
      );
}