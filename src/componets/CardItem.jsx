

export default function CardItem() {
const cards = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn to build modern and responsive websites.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    category: "Technology",
    buttonText: "Learn More"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Create beautiful and user-friendly interfaces.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
    category: "Design",
    buttonText: "Explore"
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Grow your business with digital marketing strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    category: "Marketing",
    buttonText: "Get Started"
  },
  {
    id: 4,
    title: "Mobile Development",
    description: "Build powerful Android and iOS applications.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?w=600",
    category: "Technology",
    buttonText: "View Details"
  },
  {
    id: 5,
    title: "Photography",
    description: "Capture beautiful moments with creative photography.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600",
    category: "Creative",
    buttonText: "Explore"
  },
  {
    id: 6,
    title: "Graphic Design",
    description: "Design stunning graphics and visual content.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",
    category: "Design",
    buttonText: "Learn More"
  },
  {
    id: 7,
    title: "Business Strategy",
    description: "Discover smart strategies to grow your business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    category: "Business",
    buttonText: "Read More"
  },
  {
    id: 8,
    title: "Travel & Adventure",
    description: "Explore amazing destinations around the world.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600",
    category: "Travel",
    buttonText: "Discover"
  },
  {
    id: 9,
    title: "Fitness Training",
    description: "Stay healthy and improve your fitness every day.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
    category: "Fitness",
    buttonText: "Join Now"
  },
  {
    id: 10,
    title: "Online Education",
    description: "Learn new skills with online courses and tutorials.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600",
    category: "Education",
    buttonText: "Start Learning"
  }
];
  return (
    
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto p-6">

  {cards.map((item) => (
    <div
      key={item.id}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
    >

      {/* Image */}
      <div className="overflow-hidden relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {item.title}
        </h3>

        <p className="text-gray-500 text-sm leading-6 mb-5">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-300">
            {item.buttonText}
          </button>

          <span className="text-purple-600 text-2xl group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>

      </div>
    </div>
  ))}

</div>

  )
}
