import { useEffect, useState } from "react";

export default function Employee() {

        const items = [
        {
            id: "item_001",
            name: "Anika Tabassum",
            title: "Senior Frontend Developer",
            description: "Specializes in building responsive web applications using React, Tailwind CSS, and modern JavaScript frameworks.",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
        },
        {
            id: "item_002",
            name: "Tanvir Ahmed",
            title: "Full-Stack Engineer",
            description: "Experienced in designing scalable cloud architectures, RESTful APIs, and managing Node.js and database systems.",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
        },
        {
            id: "item_003",
            name: "Dr. Farhana Rahman",
            title: "Clinical Researcher",
            description: "Focuses on public health awareness, preventive medicine, and advocating for sustainable lifestyle and mental wellness habits.",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"
        },
        {
            id: "item_004",
            name: "Sabbir Hossain",
            title: "Professional Photographer",
            description: "Passionate about street photography, capturing architectural history, and documenting cultural heritage through visual storytelling.",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300"
        },
        {
            id: "item_005",
            name: "Rafiqul Islam",
            title: "Startup Founder",
            description: "Technology entrepreneur leading product development teams and building innovative digital solutions for emerging markets.",
            img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300"
        },
        {
            id: "item_006",
            name: "Tanjim Sakib",
            title: "UI/UX Designer",
            description: "Creates intuitive user interfaces, wireframes, and high-fidelity design prototypes focused on enhancing user experience.",
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300"
        },
        {
            id: "item_007",
            name: "Mehnaz Chowdhury",
            title: "Digital Marketing Specialist",
            description: "Manages social media campaigns, SEO optimization, and brand growth strategies across multiple digital platforms.",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300"
        },
        {
            id: "item_008",
            name: "Imran Khan",
            title: "DevOps Engineer",
            description: "Automates CI/CD pipelines, manages cloud infrastructure on AWS, and ensures high availability of services.",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300"
        },
        {
            id: "item_009",
            name: "Sadia Sultana",
            title: "Content Writer",
            description: "Crafts engaging blog posts, technical documentation, and compelling copy for modern brand storytelling.",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300"
        },
        {
            id: "item_010",
            name: "Fahim Faisal",
            title: "Cybersecurity Analyst",
            description: "Monitors network traffic, evaluates vulnerabilities, and implements security protocols to protect sensitive data.",
            img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300"
        },
        {
            id: "item_011",
            name: "Nabila Hossain",
            title: "Product Manager",
            description: "Defines product roadmaps, coordinates cross-functional teams, and translates user needs into actionable features.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300"
        },
        {
            id: "item_012",
            name: "Zubair Ahmed",
            title: "Mobile App Developer",
            description: "Builds cross-platform mobile applications using Flutter and React Native with smooth performance and clean architecture.",
            img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300"
        },
        {
            id: "item_013",
            name: "Tasnia Islam",
            title: "Data Analyst",
            description: "Analyzes complex datasets, builds visualization dashboards, and uncovers actionable business insights.",
            img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300"
        },
        {
            id: "item_014",
            name: "Rakibul Hasan",
            title: "Backend Engineer",
            description: "Develops robust server-side applications, designs databases, and builds secure REST and GraphQL APIs.",
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300"
        },
        {
            id: "item_015",
            name: "Lamia Rahman",
            title: "HR Professional",
            description: "Handles talent acquisition, employee engagement programs, and organizational culture development initiatives.",
            img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300"
        }
    ];

    const [selectedName, setSelectedName] = useState();

    console.log(selectedName)
    useEffect(()=>{
        if(selectedName){
            document.title= selectedName;
        }
        else{
            document.title
        }

    }, [selectedName])

  return (
    <div className="flex flex-col gap-3 p-3 justify-center items-center bg-pink-200 min-h-screen">
            {items.length === 0 ?
                <div className="flex flex-col items-center justify-center p-8 text-center bg-white border border-dashed border-slate-300 rounded-2xl shadow-sm my-6">
                    {/* Optional Icon */}
                    <div className="w-12 h-12 mb-4 text-indigo-500 bg-indigo-50 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                        </svg>
                    </div>

                    {/* Main Text */}
                    <h3 className="text-base font-semibold text-slate-800">No items here</h3>
                    <p className="mt-1 text-sm text-slate-500">Please add your items to get started.</p>
                </div>

                : <>
                    {items.map((item) => (
                        <div
                            onClick={()=> setSelectedName(item.name)}
                            key={item.id}
                            className="bg-white w-full max-w-md p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-2"
                        >
                            <div className="flex justify-center mb-2">
                                {/* FIX: Use src={item.img} and self-close the img tag */}
                                <img 
                                    src={item.img} 
                                    alt={item.name} 
                                    className="w-24 h-24 rounded-full object-cover border-2 border-indigo-100 shadow-sm"
                                />
                            </div>
                            
                            {/* Name */}
                            <h2 className="text-xl font-bold text-slate-900 tracking-tight text-center">
                                {item.name}
                            </h2>

                            {/* Title / Role */}
                            <span className="mx-auto inline-block text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit">
                                {item.title}
                            </span>

                            {/* Description */}
                            <p className="text-sm text-slate-600 leading-relaxed mt-1 text-center">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </>
            }
        </div>
  )
}
