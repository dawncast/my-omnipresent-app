import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const people = [
  {
    
    name: 'Bouldering Club',
    title: 'Location: Vancouver',
    role: '46 members',
    email: '',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://particle.scitech.org.au/wp-content/uploads/2019/11/bouldering_feature.jpg',
    
  },
  {
    name: 'Ski and Snowboard club',
    title: 'Location: Whistler',
    role: '87 members',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://www.switchbacktravel.com/sites/default/files/articles%20/Snowboarding%20in%20powder%20%28women%27s%20snowboard%20pants%20m%29.jpg',
  },
  {
    name: 'North Van Hiking',
    title: 'Location: North Vancouver',
    role: '36 members',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://bearfoottheory.com/wp-content/uploads/2020/09/Montana_Whitefish-Ski-Resort-22-Hiking-Gear-oboz.jpg',
  },
  {
    name: 'Women\'s Only Cycling Club',
    title: 'Location: Yaletown SeaWall',
    role: '26 members',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://teamatomica.com/app/uploads/2019/05/Womens-Cycling-Clinic.jpg',
  },
  {
    name: 'Happy Runners Club',
    title: 'Location: Downtown Vancouver',
    role: '136 members',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://runologie.run/wp-content/uploads/2022/06/DBA4DC4E-E37E-4BF4-81B7-8E683C798639.jpg',
  },
  {
    name: 'Skiing Squad',
    title: 'Location: Grouse Mountain',
    role: '112 members',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://www.grousemountain.com/media/W1siZiIsIjIwMjMvMTAvMjAvMTAvMDUvNDEvMjJjNDBlMzMtYjFjZS00YzllLWIyNmEtMjhiMDA4ZWE2ZDQ3L1NLSS1DQU1QLTMwMS5wbmciXSxbInAiLCJ0aHVtYiIsIjk2MHg0NzBcdTAwM2UiXV0?sha=f1bbc1335c7c9ac0',
  },

  // More people...
]

export default function Communities() {
  return (
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
              <p className="mt-1 truncate text-sm text-gray-500">{person.title}</p>
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

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
</svg>


                  Join
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={'/event-details'}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>

                  Details
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}


