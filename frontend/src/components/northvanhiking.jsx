/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

const incentives = [
    {
      name: 'Events:',
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/4781/4781427.png'
    },
    {
      name: 'Community posts',
      imageSrc: 'https://cdn-icons-png.flaticon.com/128/10473/10473279.png',
    },
    {
      name: 'Members',
      imageSrc: 'https://cdn-icons-png.flaticon.com/128/1769/1769041.png',
    },
  ]
  
  export default function EventDetails() {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                  North Van Hiking
                </h2>
                <h3 className="text-lg font-semi-bold tracking-tight text-indigo-600">
                  26 members
                </h3>
                <p className="mt-4 text-gray-500">
                  Join us on monthly hikes to beautiful trails in North Van! We're a happy bunch just looking to enjoy nature and take in the views. Everyone of all skill levels welcomed :)
                </p>
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://lynncanyon.ca/assets/lynn-canyon-park-twin-falls-waterfall-1024x683.jpg"
                  alt=""
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  