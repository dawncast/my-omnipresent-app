import { ChatBubbleLeftRightIcon, UserPlusIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Rachel Lee',
    bio: 'Loves hiking',
    pronouns: 'she/her',
    role: '5 km away',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://149349728.v2.pressablecdn.com/wp-content/uploads/2021/07/holly-mandarich-UVyOfX3v0Ls-unsplash-scaled-e1627405085267.jpg',
  },
  {
    name: 'Tammy Lin',
    bio: 'Gym enthusiast and badminton player!',
    pronouns: 'she/her',
    role: '8 km away',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://media.licdn.com/dms/image/D5603AQGgd7hHbl0_NQ/profile-displayphoto-shrink_200_200/0/1699119102305?e=2147483647&v=beta&t=Al7DomQ74cZqZlNRoLFQLk7qmtyxIkyO2sUyQ52E1GE',
  },
  {
    name: 'Percy Jackson',
    bio: 'Swimmer and surfer :)',
    pronouns: 'he/him',
    role: '15 km away',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://media.cnn.com/api/v1/images/stellar/prod/130624174959-50-surf-spots-the-box.jpg?q=w_2365,h_1571,x_0,y_0,c_fill',
  },
  {
    name: 'Kat Garcia',
    bio: 'Novice rock climber',
    pronouns: 'she/her',
    role: '7 kim away',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Alex Deschamps',
    bio: 'Into skiing and snowboarding',
    pronouns: 'they/them',
    role: '9 km away',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://i1.wp.com/outdoorsandonthego.com/wp-content/uploads/2021/01/IMG_0918-scaled.jpeg?ssl=1',
  },
  {
    name: 'Sima Sajjatiani',
    bio: 'Adores walks in parks',
    pronouns: 'she/her',
    role: '12 km away',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Green_Park%2C_London_-_April_2007.jpg/640px-Green_Park%2C_London_-_April_2007.jpg',
  },
  {
    name: 'Minho Kim',
    bio: 'Big into trail running!',
    pronouns: 'he/him',
    role: '15 km away',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://i.pinimg.com/736x/c2/fc/33/c2fc33a8c93c216c5b016380b9c96617.jpg',
  },
  {
    name: 'Nairobi Abiodun',
    bio: 'Soccer lover',
    pronouns: 'she/her',
    role: '6 km away',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://pacificfcfanshop.ca/cdn/shop/files/MiniBall-_1.jpg?v=1689803859&width=1946',
  },
  {
    name: 'Chloe Smith',
    bio: 'Runner!',
    pronouns: 'she/they',
    role: '4 km away',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://www.skineasi.com/cdn/shop/articles/Shutterstock_520017307_1.jpg?v=1698399285',
  },

  // More people...
]

export default function Friends() {
  return (
    <><div className='text-lg font-bold flex-auto mx-2 my-2 mb-5'>PEOPLE NEARBY </div>
    <h2 className='mx-2 mb-5 text-gray-500 text-sm font-medium'>Unite through Arc'teryx: Where Connections Forge Friendships</h2>
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li key={person.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">{person.name}</h3>
                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">{person.pronouns}</p>
              <p className="mt-1 truncate text-sm text-gray-500">{person.bio}</p>
            </div>
            <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={person.imageUrl} alt="" />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Chat
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <UserPlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Add friend
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}
