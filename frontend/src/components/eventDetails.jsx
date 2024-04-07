
const incentives = [
    {
      name: 'Date and Time:',
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/4781/4781427.png',
      description: "- June 6th, 2024",
      time: "- 19:00"
    },
    {
      name: 'Cost:',
      imageSrc: 'https://static.thenounproject.com/png/930448-200.png',
      description: "- Admission ($20), Shoe rentals ($5)",
      time: "- Chalk (optional - $3)"

    },
    {
      name: 'What to Bring:',
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/4804/4804045.png',
      description:"- Water bottle",
      time: "- Chalk (optional), Climbing shoes (optional)"

    },
  ]
  
  export default function EventDetails() {
    return (
      <>

      <div className="text-2xl font-bold text-gray-900">UPCOMING EVENTS</div>

      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                  Bouldering Meetup
                </h2>
                <p className="mt-4 text-gray-500">
                  Come join us this Friday for a bouldering meet up at The Hive! This event is open to all levels - beginners, intermediate, or advanced. Come solo or bring a friend and make new connections within our Vancouver community.
                </p>
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://particle.scitech.org.au/wp-content/uploads/2019/11/bouldering_feature.jpg"
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
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                    <p className="mt-2 text-sm text-gray-500">{incentive.time}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  